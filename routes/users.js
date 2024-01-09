const mongoose = require('mongoose')
const plm = require('passport-local-mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/MasteryMosaicDB')

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  mobileNumber: String,
  dateOfBirth: Date,
});

userSchema.plugin(plm);

module.exports = mongoose.model('users', userSchema);
