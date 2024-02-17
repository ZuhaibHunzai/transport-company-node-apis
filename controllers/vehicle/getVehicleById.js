const Vehicle = require("../../models/vehicle/vehicle");

module.exports = async (req, res, next) => {
  const vehicleId = req.params.id;

  try {
    const vehicle = await Vehicle.findById(vehicleId);
    if (!vehicle) {
      return res.status(404).json({ message: "Vehicle not found" });
    }
    return res.status(200).json(vehicle);
  } catch (error) {
    console.error("Error fetching vehicle:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
