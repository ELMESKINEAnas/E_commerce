const mongoose = require('mongoose');
const sellerSchema = new mongoose.Schema({
    document: {
      data: Buffer,
      contentType: String
      },
    status: {
      type: String,
      trim: true,
      enum: {
        values: ['Starter','Pro', 'Expert'],
        message: 'is not supported'
      },
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      }
}, {
  timestamps: true
},{collection:"sellers"})
module.exports = mongoose.model('Seller',sellerSchema);