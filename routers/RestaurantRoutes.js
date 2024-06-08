const express = require("express");
const route = express();

const Restaurant = require("./../model/RestaurantSchema");

route.post("/", async (req, res) => {
  try {
    const data = req.body;
    const NewRestaurant = Restaurant(data);
    const response = await NewRestaurant.save();
    console.log("Data Is saved.");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

route.get("/", async (req, res) => {
  try {
    const data = await Restaurant.find();
    console.log("Data is fatched successfully from database.");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Parametrised API
route.get("/:WorkType", async (req, res) => {
  try {
    const WorkType = req.params.WorkType;
    if (WorkType == "manager" || WorkType == "chef" || WorkType == "waiter") {
      const ParamsWork = await Restaurant.find({ work: WorkType });
      console.log("response fatch");
      res.status(200).json(ParamsWork);
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "Invalid workType" });
  }
});

// Update Endpoints
route.put("/:id", async (req, res) => {
  try {
    const ID = req.params.id;
    const updateData = req.body;
    const UpdatedData = await Restaurant.findByIdAndUpdate(ID, updateData, {
      new: true,
      runValidators: true,
    });
    console.log("Data is Updated");
    res.status(200).json(UpdatedData);

    // if (!updateData) {
    //   res.status(404).json({ error: "Person not found." });
    // }
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "Invalid workType" });
  }
});

// Delete Endpoints
route.delete("/:id", async (req, res) => {
  try {
    const ID = req.params.id;
    const DeleteData = await Restaurant.findByIdAndDelete(ID);
    console.log("Data is Deleted");
    res.status(200).json({ message: "Person is deleted" });

    // if (!ID) {
    //   res.status(404).json({ error: "Person not found." });
    // }
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "Invalid workType" });
  }
});

module.exports = route;
