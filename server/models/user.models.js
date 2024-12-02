const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id : {
        type: String,
        required: true,
    },
    name: {
        type: String,
        default: ""
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
    },
    phoneNumber: {
        type: Number,
    },
    country: {
        type: String,
    },
    state: {
        type: String,
    },
    city: {
        type: String,
    },
    pincode: {
        type: Number,
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
    },
    isFormFilled: {
        type: Boolean,
        default: false
    },
    googleId: {
        type: String,
        unique: true,
        sparse: true
    }
}, {timestamps: true}); 



module.exports = mongoose.model('User', userSchema);
