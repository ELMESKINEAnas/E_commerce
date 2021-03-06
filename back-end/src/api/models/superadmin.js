const mongoose = require('mongoose');
const crypto = require('crypto')
import { v4 as uuidv4 } from 'uuid';
const superadmiSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  hashed_password: {
    type: String,
    required: true,
  },
  salt: {
    type: String
  },
  role: {
    type: String,
    default: 'SUPERADMIN',
  },
}, {
  timestamps: true
});


//Create virtual champs 'password'
superadmiSchema.virtual('password')
  .set(function (password) {


    this._password = password;
    this.salt = uuidv4();
    this.hashed_password = this.cryptPass(password)
    
  })
  .get(function () {
    return this._password
  })



//Create method for crypt password
superadmiSchema.methods = {


  authenticate: function(pass){
    return this.cryptPass(pass) === this.hashed_password;
  },


  cryptPass: function (password) {
    if (!password) return '';
    try {
      return crypto.createHmac('sha1', this.salt)
        .update(password)
        .digest('hex');
    } catch (err) {
      return ''
    }
  }
  
}
module.exports = mongoose.model('SuperAdmin',superadmiSchema);