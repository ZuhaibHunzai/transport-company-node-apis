const PerDayVehicle = require("../models/perDayVehicle");

exports.deletePerDayVehicleById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid vehicle ID" });
    }

    if (!deletedPerDayVehicle) {
      return res.status(404).json({ error: "PerDayVehicle not found" });
    }

    const deletedPerDayVehicle = await PerDayVehicle.findByIdAndDelete(id);

    res.status(200).json({
      message: "PerDayVehicle deleted successfully",
      deletedPerDayVehicle,
    });
  } catch (error) {
    console.error("Error deleting PerDayVehicle:", error);
    res.status(500).json({ error: "Failed to delete PerDayVehicle" });
  }
};
