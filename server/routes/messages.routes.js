const express = require('express');
const { getMessages } = require('../controllers/messages.controlles');
const router =express.Router();

router.get("/:userId1/:userId2", getMessages);

module.exports = router;