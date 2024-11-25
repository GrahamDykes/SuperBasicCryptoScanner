// ///dis MF working 11/4/24
// //try to splice with gpt stuff

// //Mongoose better for schemas, MongoDB driver better for low-level optimization


//           // const express = require("express");
//           // const mongoose = require("mongoose");
//           // const app = express();

//           // const cors = require("cors");

//           // require("dotenv").config({ path: "./config.env" });
//           // const port = process.env.PORT || 5000;

//           // app.use(cors());
//           // app.use(express.json());

//           // // middleware reporting reqs and stuff
//           // app.use((req, res, next) => {
//           //   console.log(req.path, req.method);
//           //   next();
//           // });


//           // app.use(require("./routes/records"));

//           // mongoose
//           //   .connect(process.env.ATLAS_URI)
//           //   .then(() => {
//           //     console.log("\n");
//           //     console.log("\n");
//           //     console.log("--Database Connected--");
//           //     app.listen(process.env.PORT, () => {
//           //       console.log(`App is listening to the ruckus on port ${process.env.PORT}`);
//           //     });
//           //   })
//           //   .catch((error) => {
//           //     console.log("MongoDB error:\n", error);
//           //   });
          

//           const express = require("express");
// const { MongoClient } = require("mongodb");
// const fetch = require("node-fetch");
// const app = express();
// const cors = require("cors");
// require("dotenv").config({ path: "./config.env" });
// const port = process.env.port || 5000;

// app.use(cors());
// app.use(express.json());

// // middleware reporting reqs and stuff
// app.use((req, res, next) => {
//     console.log(req.path, req.method);
//     next();
//   });

// // MongoDB connection
// const mongoUri = "mongodb://localhost:27017";
// const client = new MongoClient(mongoUri);
// let db;

// //ROUTES
// app.use(require("./routes/records"));


// (async () => {
//     try {
//         await client.connect();
//         console.log("Connected to MongoDB");
//         db = client.db("crypto_prices");
//     } catch (error) {
//         console.error("Failed to connect to MongoDB", error);
//         process.exit(1);
//     }
// })();

// // Fetch crypto data and save to MongoDB
// app.get("/save-prices", async (req, res) => {
//     try {
//         const url = "https://api.crypto.com/v2/public/get-ticker";
//         const response = await fetch(url);
//         const result = await response.json();

//         if (result.code !== 0) {
//             return res.status(500).json({ error: "Failed to fetch crypto prices" });
//         }

//         const tickers = result.result.data.map(ticker => ({
//             symbol: ticker.i,
//             price: parseFloat(ticker.a),
//             timestamp: new Date(),
//         }));

//         // Save to MongoDB
//         const collection = db.collection("prices");
//         await collection.insertMany(tickers);

//         res.status(200).json({ message: "Data saved successfully", tickers });
//     } catch (error) {
//         console.error("Error saving prices:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// });

// // Compare prices (fetch latest from MongoDB)
// app.get("/compare-prices", async (req, res) => {
//     try {
//         const collection = db.collection("prices");
//         const latestPrices = await collection.find().sort({ timestamp: -1 }).limit(10).toArray();

//         res.status(200).json(latestPrices);
//     } catch (error) {
//         console.error("Error fetching prices:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// });

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });
