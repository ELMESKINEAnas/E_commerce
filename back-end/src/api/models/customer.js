const mongoose = require('mongoose');
const costumerSchema = new mongoose.Schema({
  Address: {
    type: String,
    trim: true,
    required: true,
  },
  city: {
    type: String,
    trim: true,
    required: true,
  },
  zipCode: {
    type: String,
    trim: true,
    required: true,
  },
  phone: {
    type: String,
    trim: true,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }
}, {
  timestamps: true
}, {
  collection: "customers"
})
module.exports = mongoose.model('Costumer', costumerSchema);