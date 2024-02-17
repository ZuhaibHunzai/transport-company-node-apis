const Vehicle = require("../../models/vehicle/vehicle");

module.exports = async (req, res, next) => {
  const vehicleId = req.params.id;
  const { vehicleName, allowedDestinations, allowedPickupPoints, prices } =
    req.body;

  try {
    const existingVehicle = await Vehicle.findById(vehicleId);
    if (!existingVehicle) {
      return res.status(404).json({ message: "Vehicle not found" });
    }

    // Check user role
    if (user.role !== "admin") {
      return res.status(403).json({
        message: "Unauthorized! Only admins are allowed to update vehicles",
      });
    }

    // Update vehicle fields
    existingVehicle.vehicleName = vehicleName;
    existingVehicle.allowedDestinations = allowedDestinations;
    existingVehicle.allowedPickupPoints = allowedPickupPoints;
    existingVehicle.prices = prices;

    // Save updated vehicle
    await existingVehicle.save();

    return res.status(200).json(existingVehicle);
  } catch (error) {
    console.error("Error updating vehicle:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
