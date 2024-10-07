const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  personInCharge: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('Company', companySchema);