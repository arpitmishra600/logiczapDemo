const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const educationSchema = new Schema({
  institution: { type: String },
  qualification: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  stream :{ type: String },
});

const workExperienceSchema = new Schema({
  company: { type: String },
  role: { type: String },
  startDate: { type: Date },
  endDate: { type: Date }, 
  description: { type: String }
});

const skillsSchema = new Schema({
  name: { type: String },
  proficiency: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'] }
});

const projectsSchema = new Schema({
  Projectname: { type: String },
  description: { type: String },
  image: { type: String },
})

const userProfileSchema = new Schema({
  education: [educationSchema],
  workExperience: [workExperienceSchema],
  skills: [skillsSchema],
  projects: [projectsSchema],
  locations: [String],
  expectedSalary: { 
    type: Number,
    default: 0 
  },
  experience: { 
    type: Number,
    default: 0 
  },
  domain: { 
    type: String,
    default: '',
    index: true
  },
  languages: {
    type: [String],
    index: true
  },
  about: {
    type: String,
    default: ''
  }
}, { timestamps: true });

userProfileSchema.index({ locations: 1 });
userProfileSchema.index({ domain: 1 });
userProfileSchema.index({ 'skills.name': 1 });

module.exports = mongoose.model('UserProfile', userProfileSchema);