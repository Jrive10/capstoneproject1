const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  budget: Number,
  timeline: String,
  tasks: [String],
});

module.exports = mongoose.model('Project', projectSchema);
