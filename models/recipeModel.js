const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('recipeDB', recipeSchema);
