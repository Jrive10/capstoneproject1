const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
});

module.exports = mongoose.model('Material', materialSchema);
