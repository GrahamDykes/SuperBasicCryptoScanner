var colors = require('colors');

// THIS SHIT IS NOT OCCURING ANYMORE??




const { MongoClient } = require("mongodb");
// const Db = process.env.ATLAS_URI;
const Db = process.env.LOCAL_MONGO;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
var _db;
 
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db)
      {
        console.log("ARE YOU SEEING THIS?!??!?!?!\n/************************************")
        _db = db.db("employees");
        console.log("Successfully connected to MongoDB.".bold.green); 
      }
      return callback(err);
         });
  },
 
  getDb: function () {
    return _db;
  },
};

