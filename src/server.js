const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
// const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
const Model = require("./model");

const app = express();
app.use(express.json());

// const PORT = 5000;

const cors = require("cors");
app.use(cors());

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.post("/api/scores", async (req, res) => {
  const newPlayer = new Model({
    name: req.body.name,
    score: req.body.score,
  });

  try {
    const dataToSave = await newPlayer.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
});

app.get("/api/scores", async (req, res) => {
  try {
    const data = await Model.find().sort({ score: -1 }).limit(0);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
