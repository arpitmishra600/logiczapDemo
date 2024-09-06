const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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
}, {timestamps: true});



module.exports = mongoose.model('User', userSchema);
