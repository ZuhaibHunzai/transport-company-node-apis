const Vehicle = require("../../models/vehicle/vehicle");

module.exports = async (req, res, next) => {
  const { vehicleName, allowedDestinations, allowedPickupPoints, prices } =
    req.body;

  if (
    !vehicleName ||
    !Array.isArray(allowedPickupPoints) ||
    !Array.isArray(allowedDestinations) ||
    typeof prices !== "object" ||
    prices === null
  ) {
    return res.status(400).json({ message: "Invalid payload format" });
  }

  //   if (req.user.role !== "admin") {
  //     return res.status(403).json({
  //       message: "Unauthorized! Only admins are allowed to add vehicle data",
  //     });
  //   }

  try {
    const vehicle = new Vehicle({
      vehicleName: vehicleName,
      allowedPickupPoints: allowedPickupPoints,
      allowedDestinations: allowedDestinations,
      prices: prices,
    });

    await vehicle.save();
    return res.status(201).json(vehicle);
  } catch (error) {
    console.error("Error adding vehicle:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
