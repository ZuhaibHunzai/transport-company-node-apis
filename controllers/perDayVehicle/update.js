const PerDayVehicle = require("../../models/perDayVehicle/perDayVehicle");

module.exports = async (req, res, next) => {
  const { vehicleId } = req.params;
  const {
    vehicleName,
    vehicleModel,
    vehicleVarient,
    perDayPrice,
    numberOfPassengers,
    luggagePerPassenger,
  } = req.body;

  try {
    if (!vehicleId) {
      return res.status(400).json({ message: "Vehicle ID is required" });
    }

    let perDayVehicle = await PerDayVehicle.findById(vehicleId);

    if (!perDayVehicle) {
      return res.status(404).json({ message: "Per-day vehicle not found" });
    }

    perDayVehicle.vehicleName = vehicleName;
    perDayVehicle.vehicleModel = vehicleModel;
    perDayVehicle.vehicleVarient = vehicleVarient;
    perDayVehicle.perDayPrice = perDayPrice;
    perDayVehicle.numberOfPassengers = numberOfPassengers;
    perDayVehicle.luggagePerPassenger = luggagePerPassenger;

    perDayVehicle = await perDayVehicle.save();

    return res.status(200).json(perDayVehicle);
  } catch (error) {
    console.error("Error updating per-day vehicle:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
