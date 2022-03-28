const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        maxLength: 32,
        trim: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Brand', brandSchema);