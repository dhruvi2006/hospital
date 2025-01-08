const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: String,
  bedsAvailable: Number,
});

module.exports = mongoose.model('Department', departmentSchema);
