const express = require('express');
const { verifyGoogleToken } = require("../controllers/google.controller");

const router = express.Router();

router.post('/verify', verifyGoogleToken);


module.exports = router;