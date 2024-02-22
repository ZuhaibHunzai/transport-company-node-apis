const PerDayVehicle = require("../../models/perDayVehicle/perDayVehicle");

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
    const updatedVehicle = await PerDayVehicle.findByIdAndUpdate(
      id,
      {
        vehicleName: vehicleName,
        vehicleModel: vehicleModel,
        perDayPrice: perDayPrice,
        numberOfPassengers: numberOfPassengers,
        luggagePerPassenger: luggagePerPassenger,
      },
      { new: true }
    );

    if (!updatedVehicle) {
      return res.status(404).json({ message: "Vehicle not found" });
    }

    return res.status(200).json(updatedVehicle);
  } catch (error) {
    console.error("Error updating vehicle:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
