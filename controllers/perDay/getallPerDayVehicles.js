const PerDayVehicle = require("../../models/perDayVehicle/perDayVehicle");

module.exports = async (req, res) => {
  try {
    const allPerDayVehicles = await PerDayVehicle.find();

    res.status(200).json(allPerDayVehicles);
  } catch (error) {
    console.error("Error retrieving PerDayVehicles:", error);
    res.status(500).json({ error: "Failed to retrieve PerDayVehicles" });
  }
};
