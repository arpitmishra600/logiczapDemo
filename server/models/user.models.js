const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id : {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    country: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true,
    },
    pincode: {
        type: Number,
        required: true,
    },
    profileImage: {
        type: String,
    },
    coverImage: {
        type: String,
    },
    balance: {
        type: Number,
        default: 0
    },
    profile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserProfile',
    },
    sessionHistory: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Session'
        }
    ], 
    resetToken: {
        type: String,
    },
    resetTokenExpiry: {
        type: Date,
    },
    socketId: {
        type: String
    }, 
    lastSeen: {
        type: Date,
        default: null
    }
}, {timestamps: true}); 



module.exports = mongoose.model('User', userSchema);
