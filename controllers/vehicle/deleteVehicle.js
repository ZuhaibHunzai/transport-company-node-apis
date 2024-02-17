const Vehicle = require("../../models/vehicle/vehicle");

module.exports = async (req, res, next) => {
  const vehicleId = req.params.id;

  try {
    const vehicle = await Vehicle.findById(vehicleId);
    if (!vehicle) {
      return res.status(404).json({ message: "Vehicle not found" });
    }

    if (user.role !== "admin") {
      return res.status(403).json({
        message: "Unauthorized! Only admins are allowed to delete vehicles",
      });
    }

    await Vehicle.findByIdAndDelete(vehicleId);
    return res.status(200).json({ message: "Vehicle deleted successfully" });
  } catch (error) {
    console.error("Error deleting vehicle:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
