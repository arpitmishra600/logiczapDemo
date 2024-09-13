const jwt = require("jsonwebtoken");
const User = require("../models/user.models");

exports.verifyjwt = async (req, res, next) => {
  const token = req.cookies.token || (req.header("Authorization") && req.header("Authorization").replace("Bearer ", ""));
  
    if (!token) {
        return res.status(401).json({message: "Unauthorized"});
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
        next();
    } catch (error) {
        return res.status(401).json({message: "Unauthorized"});
    }
}