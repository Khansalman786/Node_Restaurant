const express = require("express");
const app = express();

const db = require("./db");


const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to our hotel.How we can help you.");
});

const RestaurantRoute = require("./routers/RestaurantRoutes");
app.use("/Restaurant", RestaurantRoute);


app.listen(3000, () => {
  console.log("Server is live listening on port number 3000.");
});
