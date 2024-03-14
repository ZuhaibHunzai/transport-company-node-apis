const SelectedVehicle = require("../../models/selectedVehicle/selectedVehicle");

module.exports = async (req, res, next) => {
  try {
    const selectedVehicles = await SelectedVehicle.find();

    if (selectedVehicles.length === 0) {
      return res.status(404).json({ message: "No selected vehicles found" });
    }

    return res.status(200).json(selectedVehicles);
  } catch (error) {
    console.error("Error fetching selected vehicles:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
