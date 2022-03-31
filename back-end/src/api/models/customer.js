const mongoose = require('mongoose');
import User from '../models/user';
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
  isVerified : {
    type: String,
    trim: true,
    required: true,
    default: false,    
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
costumerSchema.pre('remove',async function(next){
  const customer = this
  await User.deleteOne({_id:customer.user})
  next()
})
module.exports = mongoose.model('Costumer', costumerSchema);