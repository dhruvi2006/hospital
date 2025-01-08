const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

module.exports = mongoose.model('Hospital', hospitalSchema);
