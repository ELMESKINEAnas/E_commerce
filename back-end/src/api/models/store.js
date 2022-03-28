const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        maxLength: 12,
        trim: true
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seller',
      }
}, {timestamps: true});

module.exports = mongoose.model('Store', storeSchema);