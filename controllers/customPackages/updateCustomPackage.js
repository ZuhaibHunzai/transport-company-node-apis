const CustomPackage = require("../../models/customPackage/customPackage");

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const {
    numberOfAdults,
    numberOfKids,
    startDate,
    totalExpectedTripDays,
    customMessage,
    chooseVehicle,
    needHotel,
    hotelBudget,
    pickup,
  } = req.body;

  try {
    const updatedPackage = await CustomPackage.findByIdAndUpdate(
      id,
      {
        numberOfAdults,
        numberOfKids,
        startDate,
        totalExpectedTripDays,
        customMessage,
        chooseVehicle,
        needHotel,
        hotelBudget,
        pickup,
      },
      { new: true }
    );

    if (!updatedPackage) {
      return res.status(404).json({ message: "Custom package not found" });
    }

    return res.status(200).json(updatedPackage);
  } catch (error) {
    console.error("Error updating custom package:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
