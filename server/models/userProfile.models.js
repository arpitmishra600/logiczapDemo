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

const skillsSchema = new Schema({
  skillName: {
    type: String,
    index: true
  },
  proficiency: {
    type: String,
    enum: ['basic', 'intermediate', 'advanced'],
    default: 'basic'
  }
})

const projectsSchema = new Schema({
  name: { type: String },
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
    min: { type: Number, default: 0 },
    max: { type: Number, default: 0 }
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
  },
  additionalLinks: {
    github: { 
      type: String,
      default: "github.com",
     },
    linkedin: { 
      type: String,
      default: "linkedin.com",
     },
    portfolio: { 
      type: String,
      default: "portfolio.com",
     },
     mail: {
        type: String,
        default: "mail@test.com",
     }
  }
}, { timestamps: true });

userProfileSchema.index({ locations: 1 });
userProfileSchema.index({ domain: 1 });
userProfileSchema.index({ "skills.skillName": 1 });

module.exports = mongoose.model('UserProfile', userProfileSchema);