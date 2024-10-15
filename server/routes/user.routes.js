const express = require('express');
const router =express.Router()
const {signupHandler, loginHandler, logoutHandler, sendOtpHandler, resetPlanHandler, getFullUser, searchUser, searchUserBySkills} = require("../controllers/user.controllers");
const {verifyjwt} = require("../middleware/auth");
const { resetPasswordToken, resetPassword } = require('../controllers/resetPassword.controllers');

router.post("/signup", signupHandler);
router.post("/login", loginHandler);
router.post("/logout", verifyjwt, logoutHandler);
router.post("/sendOtp", sendOtpHandler);
router.post("/resetPlan", verifyjwt, resetPlanHandler);
router.get("/getFullUser", verifyjwt, getFullUser)
router.post("/resetPasswordToken", resetPasswordToken);
router.post("/resetPassword", resetPassword);
router.get("/searchUser", verifyjwt, searchUser);
router.post("/searchBySkills", verifyjwt, searchUserBySkills);
  
module.exports = router;