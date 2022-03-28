const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
      },
  quantity: {
    type: String,
    trim: true,
    required: true,
  },
}, {
  timestamps: true
}, {
  collection: "orders"
})
module.exports = mongoose.model('Orders', orderSchema);