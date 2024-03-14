const SelectedVehicle = require("../../models/selectedVehicle/selectedVehicle");

module.exports = async (req, res, next) => {
  const { vehicleId } = req.params;
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
    if (!vehicleId) {
      return res.status(400).json({ message: "Vehicle ID is required" });
    }

    let selectedVehicle = await SelectedVehicle.findById(vehicleId);

    if (!selectedVehicle) {
      return res.status(404).json({ message: "Selected vehicle not found" });
    }

    selectedVehicle.vehicleName = vehicleName;
    selectedVehicle.vehicleModel = vehicleModel;
    selectedVehicle.variant = variant;
    selectedVehicle.pickup = pickup;
    selectedVehicle.destination = destination;
    selectedVehicle.price = price;
    selectedVehicle.numberOfPassengers = numberOfPassengers;
    selectedVehicle.luggagePerPassenger = luggagePerPassenger;
    selectedVehicle.isRoundTrip = isRoundTrip;
    selectedVehicle.totalDistance = totalDistance;
    selectedVehicle.expectedDriveTime = expectedDriveTime;
    selectedVehicle.route = route;

    selectedVehicle = await selectedVehicle.save();

    return res.status(200).json(selectedVehicle);
  } catch (error) {
    console.error("Error updating selected vehicle:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
