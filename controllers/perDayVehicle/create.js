const PerDayVehicle = require("../../models/perDayVehicle/perDayVehicle");

module.exports = async (req, res, next) => {
  const {
    vehicleName,
    vehicleModel,
    vehicleVarient,
    perDayPrice,
    numberOfPassengers,
    luggagePerPassenger,
  } = req.body;
  try {
    if (
      !vehicleName ||
      !vehicleModel ||
      !vehicleVarient ||
      !perDayPrice ||
      !numberOfPassengers ||
      !luggagePerPassenger
    ) {
      return res.status(403).json({ message: "incomplete payload" });
    }

    const newPerDayVehicle = new PerDayVehicle({
      vehicleName,
      vehicleModel,
      vehicleVarient,
      perDayPrice,
      numberOfPassengers,
      luggagePerPassenger,
    });

    await newPerDayVehicle.save();
    return res.status(200).json(newPerDayVehicle);
  } catch (e) {
    return console.log("Error adding per day vehicle", e);
  }
};
