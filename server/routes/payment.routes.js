const express = require('express');
const { capturePayment, verifyPayment } = require('../controllers/payments');
const { verifyjwt } = require('../middleware/auth');
const router = express.Router();

router.post("/capturePayment", verifyjwt, capturePayment)
router.post("/verify", verifyjwt, verifyPayment)

module.exports = router;