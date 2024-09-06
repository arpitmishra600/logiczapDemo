const express = require('express');
const router =express.Router()
const {signupHandler, loginHandler, logoutHandler} = require("../controllers/user.controllers");
const {verifyjwt} = require("../middleware/auth");

router.post("/signup", signupHandler);
router.post("/login", loginHandler);
router.post("/logout", verifyjwt, logoutHandler);

module.exports = router;