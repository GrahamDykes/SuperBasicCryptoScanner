const express = require("express");
const { MongoClient } = require("mongodb");
// const fetch = require("node-fetch");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.port || 5000;
var colors = require('colors');

app.use(cors());
app.use(express.json());

// middleware reporting reqs and stuff
app.use((req, res, next) => {
    console.log(`${req.path}, ${req.method}`.inverse);
    next();
  });

// MongoDB connection
const mongoUri = "mongodb://localhost:27017";
const client = new MongoClient(mongoUri);
let db;

//ROUTES
app.use(require("./routes/records"));


(async () => {
    try {
        await client.connect();
        console.log("Connected to MongoDB\nLine 30ish on gptServer.js".bold.yellow);
        db = client.db("CryptoCrusader");
        console.log(`\n\n${db}`.bold.brightCyan)
    } catch (error) {
        console.error("Failed to connect to MongoDB".red, error);
        process.exit(1);
    }
})();

// Fetch crypto data and save to MongoDB
app.get("/save-prices", async (req, res) => {
    try {
        const url = "https://api.crypto.com/v2/public/get-ticker";
        const response = await fetch(url);
        const result = await response.json();

        if (result.code !== 0) {
            return res.status(500).json({ error: "Failed to fetch crypto prices" });
        }

        const tickers = result.result.data.map(ticker => ({
            symbol: ticker.i,
            price: parseFloat(ticker.a),
            timestamp: new Date(),
        }));

        // Save to MongoDB
        const collection = db.collection("crypto_dot_com");
        await collection.insertMany(tickers);

        res.status(200).json({ message: "Data saved successfully", tickers });
    } catch (error) {
        console.error("Error saving prices:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Compare prices (fetch latest from MongoDB)
app.get("/compare-prices", async (req, res) => {
    try {
        const collection = db.collection("crypto_dot_com");
        const latestPrices = await collection.find().sort({ timestamp: -1 }).limit(10).toArray();

        res.status(200).json(latestPrices);
    } catch (error) {
        console.error("Error fetching prices:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(port, () => {
    console.log(`\n**********\nServer is running on http://localhost:${port}\n**********\n`.underline.blue);
});
