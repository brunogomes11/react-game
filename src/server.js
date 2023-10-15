const express = require("express");
const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

const app = express();
const PORT = 5000;

const mongoClient = new MongoClient(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.get("/api/scores", async (req, res) => {
    try {
        await mongoClient.connect();
        const data = await mongoClient
            .db("yourDatabaseName")
            .collection("Scoreboard")
            .find({})
            .toArray();

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
