const User = require("../models/user.models")
const mailSender = require("../utils/mailSender")
const bcrypt = require("bcrypt")
const crypto = require("crypto")
const dotenv = require("dotenv")

dotenv.config();

exports.resetPasswordToken = async (req, res) => {
  try {
    const {email} = req.body;
    const user = await User.findOne({email});
    if (!user) {
      return res.status(400).json({message: "User does not exist"});
    }

    const resetToken = crypto.randomUUID();
    await User.findOneAndUpdate({email}, {
      resetToken,
      resetTokenExpiry: Date.now() + 600000
    }, {new: true});

    const url = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

    await mailSender(email, "Password Reset", `Click on the link to reset your password: ${url}`);

    return res.status(200).json({message: "Password reset link sent to your email", token});
  } catch (error) {
    console.log(error);
    return res.status(400).json({message: "Error sending reset link"});
  }
}

exprots.resetPassword = async (req, res) => {
  const {password, resetToken} = req.body;

  try {
    const user = await User.findOne({resetToken})
    if (!user) {
      return res.status(400).json({message: "Invalid url"});
    }

    if (user.resetTokenExpiry < Date.now()) {
      return res.status(400).json({message: "Url expired"});
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    user.resetToken = "";
    user.resetTokenExpiry = null;
    await user.save();
    return res.status(200).json({message: "Password reset successful"});
  } catch (error) {
    console.log(error);
    return res.status(400).json({message: "Error resetting password"});
    
  }
}