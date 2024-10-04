const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
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

const Company = mongoose.model('Company', companySchema);