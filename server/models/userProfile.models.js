const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const educationSchema = new Schema({
  institution: { type: String },
  qualification: { type: String },
  startDate: { type: Date },
  endDate: { type: Date }
});

const workExperienceSchema = new Schema({
  company: { type: String },
  role: { type: String },
  startDate: { type: Date },
  endDate: { type: Date }, 
  description: { type: String }
});

const positionOfResponsibilitySchema = new Schema({
  title: { type: String },
  organization: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  description: { type: String }
});

const skillsSchema = new Schema({
  name: { type: String },
  proficiency: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'] }
});

const userProfileSchema = new Schema({
  education: [educationSchema],
  workExperience: [workExperienceSchema],
  positionsOfResponsibility: [positionOfResponsibilitySchema],
  skills: [skillsSchema]
}, { timestamps: true });

module.exports = mongoose.model('UserProfile', userProfileSchema);