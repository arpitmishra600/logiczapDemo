const express = require('express');
const { addEducation, addWorkExperience, addPositionOfResponsibility, addSkill, updateEducation, updateWorkExperience, updatePositionOfResponsibility, updateSkill, deleteEducation, deleteWorkExperience, deletePositionOfResponsibility, deleteSkill, updateProfile, updateName } = require('../controllers/userProfile.controllers');
const { verifyjwt } = require('../middleware/auth');
const {upload} = require("../middleware/multer");

const router = express.Router();

// update profile
router.post("/updateProfile", verifyjwt, upload.array("files"), updateProfile);

// creating profile
router.post("/addEducation", verifyjwt, addEducation);
router.post("/addExperience", verifyjwt, addWorkExperience);
router.post("/addResponsibility", verifyjwt, addPositionOfResponsibility);
router.post("/addSkills", verifyjwt, addSkill);

// updating profile
router.post("/updateEducation", verifyjwt, updateEducation);
router.post("/updateExperience", verifyjwt, updateWorkExperience);
router.post("/updateResponsibility", verifyjwt, updatePositionOfResponsibility);
router.post("/updateSkills", verifyjwt, updateSkill);
router.post("/updateName", verifyjwt, updateName);

// delete profile
router.post("/deleteEducation", verifyjwt, deleteEducation);
router.post("/deleteExperience", verifyjwt, deleteWorkExperience);
router.post("/deleteEducation", verifyjwt, deletePositionOfResponsibility);
router.post("/deleteEducation", verifyjwt, deleteSkill);


module.exports = router;