const express = require('express');
const router =express.Router()
const {companySignupHandler, companyLoginHandler} = require('../controllers/company.controllers')

router.post("/signup", companySignupHandler);
router.post("/login", companyLoginHandler);

module.exports = router;