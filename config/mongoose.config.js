const mongoose = require("mongoose");

const uri = process.env.DB_URI;

mongoose
  .connect(uri)
  .then(() => console.log("mongoose connection successful"))
  .catch((err) => console.log("mongoose connection failed", err));

const db = mongoose.connection;

module.exports = db;
