const PerDayVehicle = require("../../models/perDayVehicle/perDayVehicle");

module.exports = async (req, res) => {
  const { id } = req.params;

  try {
    const perDayehicle = await PerDayVehicle.findByIdAndDelete(id);

    if (!perDayehicle) {
      return res.status(404).json({ message: "Vehicle not found" });
    }

    return res.status(200).json({ message: "Vehicle deleted successfully" });
  } catch (error) {
    console.error("Error deleting PerDayVehicle:", error);
    res.status(500).json({ error: "Failed to delete PerDayVehicle" });
  }
};
