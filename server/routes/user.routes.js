const express = require('express');
const router =express.Router()
const {signupHandler, loginHandler, logoutHandler, sendOtpHandler, resetPlanHandler} = require("../controllers/user.controllers");
const {verifyjwt} = require("../middleware/auth");

router.post("/signup", signupHandler);
router.post("/login", loginHandler);
router.post("/logout", verifyjwt, logoutHandler);
router.post("/sendOtp", sendOtpHandler);
router.post("/resetPlan", verifyjwt, resetPlanHandler);

module.exports = router;