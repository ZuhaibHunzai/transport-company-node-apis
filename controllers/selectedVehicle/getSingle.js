const SelectedVehicle = require("../../models/selectedVehicle/selectedVehicle");

module.exports = async (req, res, next) => {
  const { vehicleId } = req.params;

  try {
    if (!vehicleId) {
      return res.status(400).json({ message: "Vehicle ID is required" });
    }

    const selectedVehicle = await SelectedVehicle.findById(vehicleId);

    if (!selectedVehicle) {
      return res.status(404).json({ message: "Selected vehicle not found" });
    }

    return res.status(200).json(selectedVehicle);
  } catch (error) {
    console.error("Error fetching selected vehicle:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
