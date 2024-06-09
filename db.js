const mongoose = require("mongoose");
require("dotenv").config();


// const mongoUrl = "mongodb://localhost:27017/Restaurant";
const mongoUrl = process.env.DB_OnlineURl;
mongoose.connect(mongoUrl);

const db = mongoose.connection;
db.on("connected", () => {
  console.log("Database is connected to the server.");
});
db.on("disconnected", () => {
  console.log("Database is disconnected to the server.");
});
db.on("error", (err) => {
  console.log("error to the database server.", err);
});

module.exports = db;
