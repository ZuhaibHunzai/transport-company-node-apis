const PerDayVehicle = require("../models/perDayVehicle");
const mongoose = require("mongoose");

// Controller function to handle retrieving a PerDayVehicle by ID
exports.getPerDayVehicleById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!perDayVehicle) {
      return res.status(404).json({ error: "PerDayVehicle not found" });
    }

    const perDayVehicle = await PerDayVehicle.findById(id);

    res.status(200).json(perDayVehicle);
  } catch (error) {
    console.error("Error retrieving PerDayVehicle:", error);
    res.status(500).json({ error: "Failed to retrieve PerDayVehicle" });
  }
};
