const express = require("express");
const mongoose = require("mongoose");
const app = express();

const cors = require("cors");

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.use(require("./routes/record"));

// Get MongoDB driver connection
// const dbo = require("./db/conn");
 
// app.listen(port, () => {
//   // Perform a database connection when server starts
//   dbo.connectToServer(function (err) {
//     if (err) console.error(err);
 
//   });
//   console.log(`Server is running on port: ${port}`);
// });

mongoose
  .connect(process.env.ATLAS_URI)
  .then(() => {
    console.log("\n");
    console.log("\n");
    console.log("--Database Connected--");
    app.listen(process.env.PORT, () => {
      console.log(`App is listening to the ruckus on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB error:\n", error);
  });
