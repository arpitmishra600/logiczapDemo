const express = require('express');
const router = express.Router();
const { verifyjwt } = require('../middleware/auth');
const { generateResume } = require('../controllers/resume');

router.get('/resume/download', verifyjwt, generateResume);

module.exports = router;