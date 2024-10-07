const mongoose = require('mongoose');
const mailSender = require('../utils/mailSender');

const otpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    otp: {
        type: String,
        required: true,
        trim: true
    }, 
    createdAt: {
        type: Date,
        default: Date.now,
        index: { expires: '5m' }
    } 
});

otpSchema.index({createdAt: 1}, {expireAfterSeconds: 300});

async function sendVerificationEmail(email, otp) {
    try {
        await mailSender(email, "OTP Verification", `Your OTP is ${otp} and is valid for 5 minutes.`);
         
    } catch (error) {
        console.log(error);     
    }
}

otpSchema.pre('save', async function(next) {
    await sendVerificationEmail(this.email, this.otp);
    next()
})

module.exports = mongoose.model('Otp', otpSchema);
