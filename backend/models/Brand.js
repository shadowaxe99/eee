const mongoose = require('mongoose');

const BrandSchema = new mongoose.Schema({
  brandName: {
    type: String,
    required: true,
    unique: true
  },
  contactDetails: {
    type: String,
    required: true
  },
  preferences: {
    type: Array,
    required: true
  }
});

module.exports = mongoose.model('Brand', BrandSchema);