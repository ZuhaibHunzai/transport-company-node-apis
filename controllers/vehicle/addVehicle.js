const Vehicle = require("../../models/vehicle/vehicle");

module.exports = async (req, res, next) => {
  const { vehicleName, vehicleModel, pickup, destination, price, perDayPrice } =
    req.body;

  if ((!vehicleName, !pickup, !destination, !price, !perDayPrice)) {
    return res.status(400).json({ message: "Invalid payload format" });
  }

  try {
    const vehicle = new Vehicle({
      vehicleName: vehicleName,
      vehicleModel: vehicleModel,
      pickup: pickup,
      destination: destination,
      price: price,
      perDayPrice: perDayPrice,
    });

    await vehicle.save();
    return res.status(201).json(vehicle);
  } catch (error) {
    console.error("Error adding vehicle:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
