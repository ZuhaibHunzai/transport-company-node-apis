const PerDayVehicle = require("../../models/perDayVehicle/perDayVehicle");

module.exports = async (req, res, next) => {
  const { vehicleId } = req.params;

  try {
    if (!vehicleId) {
      return res.status(400).json({ message: "Vehicle ID is required" });
    }

    const perDayVehicle = await PerDayVehicle.findById(vehicleId);

    if (!perDayVehicle) {
      return res.status(404).json({ message: "Per-day vehicle not found" });
    }

    await PerDayVehicle.findByIdAndDelete(vehicleId);

    return res
      .status(200)
      .json({ message: "Per-day vehicle deleted successfully" });
  } catch (error) {
    console.error("Error deleting per-day vehicle:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
