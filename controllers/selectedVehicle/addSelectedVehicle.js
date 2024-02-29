const SelectedVehicle = require("../../models/selectedVehicle/selectedVehicle");

const selectedVehicle = async (req, res, next) => {
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
      !vehicleModel ||
      !variant ||
      !pickup ||
      !destination ||
      !price ||
      !numberOfPassengers ||
      !luggagePerPassenger ||
      !isRoundTrip ||
      !totalDistance ||
      !expectedDriveTime ||
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
    console.log(err, "error adding a selected vehicle");
  }
};
