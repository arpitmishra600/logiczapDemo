const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const educationSchema = new Schema({
  instituteName: { type: String },
  fieldOfStudy: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  branch:{ type: String },
});

const workExperienceSchema = new Schema({
  companyName: { type: String },
  position: { type: String },
  startDate: { type: Date },
  endDate: { type: Date }, 
  currentlyWorking: { 
    type: Boolean, 
    default: false 
  },
});

const projectsSchema = new Schema({
  name: { type: String },
  description: { type: String },
  image: { type: String },
})

const userProfileSchema = new Schema({
  education: [educationSchema],
  workExperience: [workExperienceSchema],
  skills: {
    type: [String]
  },
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
    type: [String],
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
userProfileSchema.index({ skills: 1 });

module.exports = mongoose.model('UserProfile', userProfileSchema);