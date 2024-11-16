const { Server } = require("socket.io");
const User = require("../models/user.models");
const Message = require("../models/message.models");

const io = new Server({
    cors: {
        origin: process.env.FRONTEND_URL,
        methods: ["GET", "POST"],
        credentials: true
    }
});

// Store online users with their socket IDs
const onlineUsers = new Map();

// Handle connection events
io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    // Handle user connection
    socket.on('user_connected', async (userId) => {
        try {
            // Validate userId
            if (!userId) {
                socket.emit('error', { message: 'User ID is required' });
                return;
            }

            // Check if user exists in database
            const user = await User.findById(userId);
            if (!user) {
                socket.emit('error', { message: 'User not found' });
                return;
            }

            // Store user's socket connection
            onlineUsers.set(userId, socket.id);
            
            // Emit updated online users list
            const onlineUsersList = Array.from(onlineUsers.keys());
            io.emit('users_status', onlineUsersList);

            // Send pending offline messages
            const pendingMessages = await Message.find({
                receiver: userId,
                status: 'pending'
            }).sort({ createdAt: 1 });

            if (pendingMessages.length > 0) {
                socket.emit('pending_messages', pendingMessages);
                // Update messages status to delivered
                await Message.updateMany(
                    { _id: { $in: pendingMessages.map(msg => msg._id) } },
                    { status: 'delivered' }
                );
            }
        } catch (error) {
            console.error('Error in user_connected:', error);
            socket.emit('error', { message: 'Internal server error' });
        }
    });

    // Handle private messages
    socket.on('private_message', async ({ sender, receiver, content }) => {
        try {
          
            // Validate input
            if (!sender || !receiver || !content) {
                socket.emit('error', { message: 'Invalid message data' });
                return;
            }

            // Create and save message
            const message = await Message.create({
                sender,
                receiver,
                content,
                status: 'pending',
                createdAt: new Date()
            });
            

            // Get receiver's socket ID
            const receiverSocketId = onlineUsers.get(receiver);

            if (receiverSocketId) {
                // Send to receiver and update status
                io.to(receiverSocketId).emit('new_message', message);
                message.status = 'delivered';
                await message.save();
                
                // Emit delivery status to sender
                socket.emit('message_status', {
                    messageId: message._id,
                    status: 'delivered'
                });
            } else {
                // Receiver is offline
                socket.emit('message_status', {
                    messageId: message._id,
                    status: 'pending'
                });
            }
        } catch (error) {
            console.error('Error in private_message:', error);
            socket.emit('error', { message: 'Failed to send message' });
        }
    });

    // Handle message read status
    socket.on('message_read', async ({ messageId }) => {
        try {
            const message = await Message.findById(messageId);
            if (message) {
                message.status = 'read';
                await message.save();
                
                // Notify sender that message was read
                const senderSocketId = onlineUsers.get(message.sender);
                if (senderSocketId) {
                    io.to(senderSocketId).emit('message_status', {
                        messageId: message._id,
                        status: 'read'
                    });
                }
            }
        } catch (error) {
            console.error('Error in message_read:', error);
            socket.emit('error', { message: 'Failed to update read status' });
        }
    });

    // Handle disconnection
    socket.on('disconnect', async () => {
        try {
            // Find and remove disconnected user
            let disconnectedUserId;
            for (const [userId, socketId] of onlineUsers.entries()) {
                if (socketId === socket.id) {
                    disconnectedUserId = userId;
                    break;
                }
            }

            if (disconnectedUserId) {
                await User.findByIdAndUpdate(disconnectedUserId, {lastSeen: new Date()}, {new: true});
                onlineUsers.delete(disconnectedUserId);
                io.emit('users_status', Array.from(onlineUsers.keys()));
            }
        } catch (error) {
            console.error('Error in disconnect:', error);
        }
    });
});

module.exports = io;