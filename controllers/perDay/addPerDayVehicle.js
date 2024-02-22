const PerDayVehicle = require("../../models/perDayVehicle/perDayVehicle");

module.exports = async (req, res, next) => {
  const {
    vehicleName,
    vehicleModel,
    perDayPrice,
    numberOfPassengers,
    luggagePerPassenger,
  } = req.body;

  if (
    !vehicleName ||
    !vehicleModel ||
    !perDayPrice ||
    !numberOfPassengers ||
    !luggagePerPassenger
  ) {
    return res.status(400).json({ message: "Invalid payload format" });
  }

  try {
    const perDayVehicle = new PerDayVehicle({
      vehicleName: vehicleName,
      vehicleModel: vehicleModel,
      perDayPrice: perDayPrice,
      numberOfPassengers: numberOfPassengers,
      luggagePerPassenger: luggagePerPassenger,
    });

    await perDayVehicle.save();
    return res.status(201).json(perDayVehicle);
  } catch (error) {
    console.error("Error adding perDayVehicle:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
