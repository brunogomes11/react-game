const mongoose = require("mongoose");

const scoresTable = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  score: {
    required: true,
    type: Number,
  },
});

module.exports = mongoose.model("scoresCollection", scoresTable);
