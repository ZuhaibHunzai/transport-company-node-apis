const PerDayVehicle = require("../../models/perDayVehicle/perDayVehicle");

exports.addPerDayVehicle = async (req, res) => {
  try {
    const {
      vehicleName,
      perDayPrice,
      numberOfPassengers,
      luggagePerPassenger,
    } = req.body;

    if (
      !vehicleName ||
      !perDayPrice ||
      !numberOfPassengers ||
      !luggagePerPassenger
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newPerDayVehicle = new PerDayVehicle({
      vehicleName,
      vehicleModel,
      perDayPrice,
      numberOfPassengers,
      luggagePerPassenger,
    });

    const perDayVehicle = await newPerDayVehicle.save();

    res.status(201).json({
      message: "PerDayVehicle added successfully",
      perDayVehicle: perDayVehicle,
    });
  } catch (error) {
    console.error("Error adding PerDayVehicle:", error);
    res.status(500).json({ error: "Failed to add PerDayVehicle" });
  }
};
