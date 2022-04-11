const mongoose = require('mongoose');
const User = require('./user')
const sellerSchema = new mongoose.Schema({
  document: {
    // data: Buffer,
    // contentType: String
    type: String,
    required: true,
    
  },
  nameStore: {
    // data: Buffer,
    // contentType: String
    type: String,
    required: true,

  },
  status: {
    type: String,
    trim: true,
    enum: {
      values: ['Starter', 'Pro', 'Expert'],
      message: 'is not supported'
    },
    default: "Starter",
  },
  isVerified : {
    type: String,
    default: false,    
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }
}, {
  timestamps: true
}, {
  collection: "sellers"
});
sellerSchema.pre('remove',async function(next){
  const seller = this
  await User.deleteOne({_id:seller.user})
  next()
})
module.exports = mongoose.model('Seller', sellerSchema);