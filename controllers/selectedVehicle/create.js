const SelectedVehicle = require("../../models/selectedVehicle/selectedVehicle");

module.exports = async (req, res, next) => {
  const {
    vehicleName,
    vehicleModel,
    variant,
    pickup,
    destination,
    price,
    numberOfPassengers,
    luggagePerPassenger,
    isRoundTrip,
    totalDistance,
    expectedDriveTime,
    route,
  } = req.body;
  try {
    if (
      !vehicleName ||
      !pickup ||
      !destination ||
      !price ||
      !numberOfPassengers ||
      !luggagePerPassenger ||
      !isRoundTrip ||
      !route
    ) {
      return res.status(403).json({ message: "invalid payload" });
    }

    const newSelectedVehicle = new SelectedVehicle({
      vehicleName,
      vehicleModel,
      variant,
      pickup,
      destination,
      price,
      numberOfPassengers,
      luggagePerPassenger,
      isRoundTrip,
      totalDistance,
      expectedDriveTime,
      route,
    });

    await newSelectedVehicle.save();
    return res.status(200).json(newSelectedVehicle);
  } catch (err) {
    return console.log("error adding a selected vehicle", err);
  }
};
