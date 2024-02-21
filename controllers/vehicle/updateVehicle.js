const Vehicle = require("../../models/vehicle/vehicle");

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const { vehicleName, vehicleModel, pickup, destination, price, perDayPrice } =
    req.body;

  try {
    const updatedVehicle = await Vehicle.findByIdAndUpdate(
      id,
      {
        vehicleName: vehicleName,
        vehicleModel: vehicleModel,
        pickup: pickup,
        destination: destination,
        price: price,
        perDayPrice: perDayPrice,
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
