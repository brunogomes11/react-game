const express = require("express");
const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

const app = express();
const PORT = 5000;

const cors = require("cors");
app.use(cors());

// console.log(process.env.MONGO_URI);

const mongoClient = new MongoClient(
    "mongodb+srv://admin:7I0GoNEYJg8oxoqD@scoreboard.obc8c0j.mongodb.net/?retryWrites=true&w=majority"
    // process.env.MONGO_URI,
);

app.get("/api/scores", async (req, res) => {
    try {
        await mongoClient.connect();
        const data = await mongoClient
            .db("Scoreboard")
            .collection("Scoreboard")
            .find({})
            // descending score order
            .sort({ score: -1 })
            // limit 10
            .limit(10)
            .toArray();
        console.log(data);
        res.json(data);
    } catch (err) {
        res.status(500).send("Server Error");
    } finally {
        await mongoClient.close();
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
