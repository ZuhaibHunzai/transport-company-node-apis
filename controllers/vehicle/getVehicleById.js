const Vehicle = require("../../models/vehicle/vehicle");

module.exports = async (req, res, next) => {
  const { id } = req.params;

  try {
    const vehicle = await Vehicle.findById(id);

    if (!vehicle) {
      return res.status(404).json({ message: "Vehicle not found" });
    }

    return res.status(200).json(vehicle);
  } catch (error) {
    console.error("Error retrieving vehicle:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
