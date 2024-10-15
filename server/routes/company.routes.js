const express = require('express');
const router =express.Router()
const {companySignupHandler, companyLoginHandler, searchCompany} = require('../controllers/company.controllers');
const { verifyjwt } = require('../middleware/auth');

router.post("/signup", companySignupHandler);
router.post("/login", companyLoginHandler);
router.get("/searchCompany", verifyjwt, searchCompany);

module.exports = router;