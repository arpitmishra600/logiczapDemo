const mongoose = require('mongoose');

const recruiterSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  workEmail: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
}, {timestamps: true});

module.exports = mongoose.model('Recruiter', recruiterSchema);