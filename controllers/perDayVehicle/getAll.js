const PerDayVehicle = require("../../models/perDayVehicle/perDayVehicle");

module.exports = async (req, res, next) => {
  try {
    const perDayVehicles = await PerDayVehicle.find();

    if (perDayVehicles.length === 0) {
      return res.status(404).json({ message: "No per-day vehicles found" });
    }

    return res.status(200).json(perDayVehicles);
  } catch (error) {
    console.error("Error fetching per-day vehicles:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
