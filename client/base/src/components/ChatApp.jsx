import { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import { format } from 'date-fns';
import axios from 'axios';

const ChatApp = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [lastSeen, setLastSeen] = useState(null);
  const messagesEndRef = useRef(null);

  // Fetch all users on component mount
  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_ENDPOINT}/api/v1/user/getFullUser`, {withCredentials: true});
        
        setCurrentUser(response.data.user);
        
      } catch (error) {
        console.error('Failed to fetch current user:', error);
      }
    }
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_ENDPOINT}/api/v1/user/getAllUsers`, {withCredentials: true});
        
        setAllUsers(response.data.users);
        
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };

    getCurrentUser();
    fetchUsers();
  }, []);

  // Initialize socket connection
  useEffect(() => {
    const newSocket = io('http://localhost:5050', {
      withCredentials: true
    });

    newSocket.on('connect', () => {
      newSocket.emit('user_connected', currentUser._id);
    });

    newSocket.on('users_status', (users) => {
      setOnlineUsers(users);
    });

    newSocket.emit("user_connected", currentUser._id);

    newSocket.on('new_message', (message) => {
      setMessages(prev => [...prev, message]);
      if (selectedUser && selectedUser._id === message.sender) {
        newSocket.emit('message_read', { messageId: message._id });
      }
      
    });

    newSocket.on('pending_messages', (pendingMessages) => {
      setMessages(prev => [...prev, ...pendingMessages]);
    });

    newSocket.on("messgae_status", ({ messageId, status }) => {
      setMessages(prev => prev.map(msg => 
        msg._id === messageId ? { ...msg, status } : msg
      ))
    });

    setSocket(newSocket);

    return () => newSocket.close();
  }, [currentUser._id]);

  // Auto scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (socket && selectedUser) {
      const unreadMessages = messages.filter(
        (msg) => msg.sender === selectedUser._id && msg.status !== 'read'
      );
  
      unreadMessages.forEach((msg) => {
        socket.emit('message_read', { messageId: msg._id });
      });
      
    }
  }, [socket, selectedUser, messages]);

  useEffect(() => {
    if (socket) {
      socket.on('message_status', ({ messageId, status }) => {
        setMessages((prevMessages) =>
          prevMessages.map((msg) =>
            msg._id === messageId ? { ...msg, status } : msg
          )
        );
      });
    }
  
    return () => {
      socket?.off('message_status');
    };
  }, [socket]);

  useEffect(() => {
    if (socket) {
      socket.on('message_status', ({ messageId, status }) => {
        setMessages((prevMessages) =>
          prevMessages.map((msg) =>
            msg._id === messageId ? { ...msg, status } : msg
          )
        );
      });
    }
  
    // Clean up the socket listener on unmount
    return () => {
      socket?.off('message_status');
    };
  }, [socket]);

   // Fetch last seen data for the selected user
   useEffect(() => {
    if (selectedUser) {
      
      const fetchLastSeen = async () => {
        try {
          const response = await axios.post(`${import.meta.env.VITE_SERVER_ENDPOINT}/api/v1/user/lastSeen`,{userId: selectedUser._id},  { withCredentials: true });
          console.log(response.data.lastSeen);
          
          setLastSeen(response.data.lastSeen);
        } catch (error) {
          console.error("Error fetching last seen:", error);
        }
      };

      fetchLastSeen();
    }
  }, [selectedUser]);


  // Filter users based on search query
  const filteredUsers = allUsers.filter(user => 
    user.username.toLowerCase().includes(searchQuery.toLowerCase()) &&
    user._id !== currentUser._id
  );

  const sendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedUser) return;

    const messageData = {
      sender: currentUser._id,
      receiver: selectedUser._id,
      content: newMessage
    };

    socket.emit('private_message', messageData);
    setMessages(prev => [...prev, { ...messageData, status: 'pending', createdAt: new Date() }]);
    setNewMessage('');
  };

  const getMessageHistory = async (userId) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_ENDPOINT}/api/v1/messages/${currentUser._id}/${userId}`, {withCredentials: true});
      
      setMessages(response.data);

      // Mark messages as read
      const unreadMessages = response.data.filter(msg => msg.sender === userId && msg.status !== 'read');
      unreadMessages.forEach((msg) => {
        socket.emit('message_read', { messageId: msg._id });
      });
    } catch (error) {
      console.log("Failed to fetch message history:", error);   
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Users Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        {/* Current User Profile */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-10 h-10 rounded-full"
            />
            <span className="font-semibold text-gray-800">{currentUser.name}</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="p-4 border-b border-gray-200">
          <input
            type="text"
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Users List */}
        <div className="flex-1 overflow-y-auto">
          {filteredUsers.map(user => (
            <div
              key={user._id}
              onClick={() => {
                setSelectedUser(user)
                getMessageHistory(user._id);
              }}
              className={`flex items-center p-4 cursor-pointer hover:bg-gray-50 border-b border-gray-100 ${
                selectedUser?.id === user.id ? 'bg-gray-50' : ''
              }`}
            >
              <div className="relative">
                <img
                  src={user.avatar || '/api/placeholder/40/40'}
                  alt={user.name}
                  className="w-10 h-10 rounded-full"
                />
                {onlineUsers.includes(user._id) && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <div className="ml-3 flex-1">
                <p className="font-medium text-gray-800">{user.name}</p>
                <p className="text-sm text-gray-500">
                  {onlineUsers.includes(user._id) ? 'Online' : 'Offline'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedUser ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 bg-white">
              <div className="flex items-center space-x-3">
                <img
                  src={selectedUser.avatar || '/api/placeholder/40/40'}
                  alt={selectedUser.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <span className="font-semibold text-gray-800">{selectedUser.name}</span>
                  <p className="text-sm text-gray-500">
                    {onlineUsers.includes(selectedUser._id) ? 'Online' : `Offline (Last seen: ${lastSeen ? format(new Date(lastSeen), 'HH:mm') : 'N/A'})`}
                  </p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages
                .filter(msg => 
                  (msg.sender === currentUser._id && msg.receiver === selectedUser._id) ||
                  (msg.sender === selectedUser._id && msg.receiver === currentUser._id)
                )
                .map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.sender === currentUser._id ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[70%] p-3 rounded-lg ${
                        message.sender === currentUser._id
                          ? 'bg-blue-500 text-white'
                          : 'bg-white text-gray-800 border border-gray-200'
                      }`}
                    >
                      <p className="break-words">{message.content}</p>
                      <div className="flex items-center justify-end mt-1 space-x-2">
                        <span className="text-xs opacity-75">
                          {format(new Date(message.createdAt), 'HH:mm')}
                        </span>
                        {message.sender === currentUser._id && (
                          <span className="text-xs ">
                            
                            {message.status === 'pending' ? '✓' : message.status === 'delivered' ? '✓✓' : '✓✓✓'}
                            
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <form onSubmit={sendMessage} className="p-4 bg-white border-t border-gray-200">
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  disabled={!newMessage.trim()}
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Send
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-gray-50">
            <p className="text-gray-500 text-lg">Select a user to start chatting</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatApp;