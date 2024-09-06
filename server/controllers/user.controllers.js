const User = require("../models/user.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const options = {
  expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
  httpOnly: true, 
  secure: false
}

exports.signupHandler = async (req, res) => {
    const {name, email, password, country, state, city, pincode, phoneNumber} = req.body;

    try {
        if (!name || !email || !password || !country || !state || !city || !pincode || !phoneNumber) {
            return res.status(400).json({message: "Please fill all the fields"});
        }
        
        const existingUser = await User.findOne({
          $or: [{email: email}, {phoneNumber: phoneNumber}]
        })

        if (existingUser) {
            return res.status(400).json({message: "User already exists"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
          name,
          email,
          password: hashedPassword,
          country,
          state,
          city,
          pincode,
          phoneNumber
      });

      const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);

    return res.status(201).cookie("token", token, options).json({message: "User created", user: user, token: token});
    } catch (error) {
        return res.status(400).send(error);
    }
}

exports.loginHandler = async (req, res) => {
    const {email, password} = req.body;

    try {
        if (!email || !password) {
            return res.status(400).json({message: "Please fill all the fields"});
        }

        const user = await User.findOne({email: email});

        if (!user) {
            return res.status(400).json({message: "User does not exist"});
        }

        
        if (!await bcrypt.compare(password, user.password)) {
            return res.status(400).json({message: "Invalid credentials"});
        }

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);

        return res.status(200).cookie("token", token, options)
        .json({message: "User logged in", user, token: token});
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.logoutHandler = async (req, res) => {
    try {
        res.clearCookie("token");
        return res.status(200).json({message: "User logged out"});
    } catch (error) {
        res.status(400).send
    }
}