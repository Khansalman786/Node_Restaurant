const mongoose = require("mongoose");
const RestaurantSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
  },
  work: {
    type: String,
    require: true,
    enum: ["chef", "manager", "waiter"],
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  address: {
    type: String,
    require: true,
  },
  salary: {
    type: Number,
    require: true,
  },
});

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);

module.exports = Restaurant;
