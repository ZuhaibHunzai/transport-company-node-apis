const Vehicle = require("../../models/vehicle/vehicle");

module.exports = async (res, req, next) => {
  const { vehicleName, allowedDestinations, allowdPicupPoints, prices } =
    req.body;

  if (!vehicleName || !allowdPicupPoints || !allowedDestinations || !prices) {
    return res.status(400).json({ message: "incomplete payload" });
  }

  if (user.role === "user") {
    return res
      .status(400)
      .json({ message: "Unathorized! you are not allowed to add data" });
  }

  const vehicle = new Vehicle({
    vehicleName: vehicleName,
    allowdPicupPoints: allowdPicupPoints,
    allowedDestinations: allowedDestinations,
    prices: prices,
  });

  await vehicle.save();
  res.status(200).json(vehicle);

  try {
  } catch (err) {
    console.log(err);
  }
};
