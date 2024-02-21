const Vehicle = require("../../models/vehicle/vehicle");

module.exports = async (req, res, next) => {
  try {
    const vehicles = await Vehicle.find();

    return res.status(200).json(vehicles);
  } catch (error) {
    console.error("Error retrieving vehicles:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
