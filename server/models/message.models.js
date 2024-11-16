const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const messageSchema = new mongoose.Schema({
    sender: {
        type: String,
        required: [true, 'Sender is required'],
        index: true
    },
    receiver: {
        type: String,
        required: [true, 'Receiver is required'],
        index: true
    },
    content: {
        type: String,
        required: [true, 'Message content is required'],
        trim: true,
        maxLength: [5000, 'Message cannot exceed 5000 characters']
    },
    status: {
        type: String,
        enum: ['pending', 'delivered', 'read'],
        default: 'pending',
        index: true
    },
    messageType: {
        type: String,
        enum: ['text', 'image', 'file'],
        default: 'text'
    },
    fileUrl: {
        type: String,
        trim: true,
        default: null
    },
    fileName: {
        type: String,
        trim: true,
        default: null
    },
    fileSize: {
        type: Number,
        default: null
    },
    deleted: {
        type: Boolean,
        default: false,
        index: true
    },
    deletedFor: [{
        user: {
            type: String,
        },
        deletedAt: {
            type: Date,
            default: Date.now
        }
    }]
}, {
    timestamps: true, // Automatically add createdAt and updatedAt fields
    
    // Define a toJSON transform to clean up the object when sending to client
    toJSON: {
        transform: function(doc, ret) {
            delete ret.__v;
            return ret;
        }
    }
});

messageSchema.index({ sender: 1, receiver: 1, createdAt: -1 });
messageSchema.index({ receiver: 1, sender: 1, createdAt: -1 });

// Method to mark message as delivered
messageSchema.methods.markDelivered = async function() {
    if (this.status === 'pending') {
        this.status = 'delivered';
        return await this.save();
    }
    return this;
};

// Method to mark message as read
messageSchema.methods.markRead = async function() {
    if (this.status !== 'read') {
        this.status = 'read';
        return await this.save();
    }
    return this;
};

// Static method to get chat history between two users
messageSchema.statics.getChatHistory = async function(userId1, userId2, limit = 50, page = 1) {
    return await this.find({
        $or: [
            { sender: userId1, receiver: userId2 },
            { sender: userId2, receiver: userId1 }
        ],
        deleted: false
    })
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(limit)
    .populate('sender', 'name avatar')
    .populate('receiver', 'name avatar');
};

// Static method to get unread message count
messageSchema.statics.getUnreadCount = async function(userId) {
    return await this.countDocuments({
        receiver: userId,
        status: { $ne: 'read' },
        deleted: false
    });
};

// Pre-save middleware to validate file-related fields
messageSchema.pre('save', function(next) {
    if (this.messageType !== 'text') {
        if (!this.fileUrl) {
            next(new Error('File URL is required for non-text messages'));
            return;
        }
    }
    next();
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;




