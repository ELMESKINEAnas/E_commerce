const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const shippingCompanySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        maxLength: 150,
        trim: true
    },
    time: {
        type: String,
        require: true,
        maxLength: 2000
    }
}, {timestamps: true});

module.exports = mongoose.model('ShippingCompany', shippingCompanySchema);