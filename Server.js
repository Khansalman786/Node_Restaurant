const express = require("express");
const app = express();

const db = require("./db");
require("dotenv").config();
const PORT = process.env.PORT || 3000;

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to our hotel.How we can help you.");
});

const RestaurantRoute = require("./routers/RestaurantRoutes");
app.use("/Restaurant", RestaurantRoute);

app.listen(PORT, () => {
  console.log("Server is live listening on port number 3000.");
});
