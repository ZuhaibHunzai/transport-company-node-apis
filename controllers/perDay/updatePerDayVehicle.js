const Vehicle = require("../../models/perDayVehicle/perDayVehicle");

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const {
    vehicleName,
    vehicleModel,
    perDayPrice,
    numberOfPassengers,
    luggagePerPassenger,
  } = req.body;

  try {
    const updatedVehiclePerDayVehicle = await Vehicle.findByIdAndUpdate(
      id,
      {
        vehicleName: vehicleName,
        vehicleModel: vehicleModel,
        pickup: pickup,
        numberOfPassengers: destination,
        luggagePerPassenger: luggagePerPassenger,
        perDayPrice: perDayPrice,
      },
      { new: true }
    );

    if (!updatedVehiclePerDayVehicle) {
      return res.status(404).json({ message: "Vehicle not found" });
    }

    return res.status(200).json(updatedVehiclePerDayVehicle);
  } catch (error) {
    console.error("Error updating vehicle:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
