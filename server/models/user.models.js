const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id : {
        type: String,
        required: true,
    },
    name: {
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
    plan: {
        type: String,
        enum: ["Free", "Basic", "Advanced", "Pro"],
        default: "Free"
    }, 
    profile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserProfile',
    }, 
    resetToken: {
        type: String,
    },
    resetTokenExpiry: {
        type: Date,
    }
}, {timestamps: true}); 



module.exports = mongoose.model('User', userSchema);
