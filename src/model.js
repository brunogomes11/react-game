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

// [
//   { "name": "JDS", "score": 52 },
//   { "name": "LAW", "score": 75 },
//   { "name": "KMH", "score": 89 },
//   { "name": "EGR", "score": 61 },
//   { "name": "PQO", "score": 45 },
//   { "name": "MNB", "score": 72 },
//   { "name": "THY", "score": 38 },
//   { "name": "UIO", "score": 93 },
//   { "name": "FVC", "score": 27 },
//   { "name": "RXP", "score": 80 }
// ]
