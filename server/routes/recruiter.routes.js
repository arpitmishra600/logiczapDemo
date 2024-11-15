const express = require('express');
const router =express.Router();
const {recruiterSignupHandler, recruiterLoginHandler, searchRecruiter} = require('../controllers/recruiter.controllers');
const { verifyjwt } = require('../middleware/auth');

router.post("/signup", recruiterSignupHandler);
router.post("/login", recruiterLoginHandler);
router.get("/searchRecruiter", verifyjwt, searchRecruiter);

module.exports = router;