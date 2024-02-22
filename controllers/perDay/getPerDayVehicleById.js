const PerDayVehicle = require("../../models/perDayVehicle/perDayVehicle");

module.exports = async (req, res) => {
  const { id } = req.params;

  try {
    const perDayVehicleById = await PerDayVehicle.findById(id);

    if (!perDayVehicleById) {
      return res.status(404).json({ message: "Vehicle not found" });
    }

    return res.status(200).json(perDayVehicleById);
  } catch (error) {
    console.error("Error retrieving PerDayVehicle:", error);
    res.status(500).json({ error: "Failed to retrieve PerDayVehicle" });
  }
};
