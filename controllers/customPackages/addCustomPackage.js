const CustomPackage = require("../../models/customPackage/customPackage");

module.exports = async (req, res, next) => {
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
    if (
      !numberOfAdults ||
      !numberOfKids ||
      !startDate ||
      !totalExpectedTripDays ||
      !customMessage ||
      !chooseVehicle ||
      !needHotel ||
      !hotelBudget ||
      !pickup
    ) {
      console.log(
        numberOfAdults,
        numberOfKids,
        startDate,
        totalExpectedTripDays,
        customMessage,
        chooseVehicle,
        needHotel,
        hotelBudget,
        pickup
      );
      return res.status(400).json({ message: "incomplete payload" });
    }
    const customPackage = new CustomPackage({
      numberOfAdults,
      numberOfKids,
      startDate,
      totalExpectedTripDays,
      customMessage,
      chooseVehicle,
      needHotel,
      hotelBudget,
      pickup,
    });

    await customPackage.save();
    res.status(200).json(customPackage);
  } catch (err) {
    console.error("Error creating custom package:", err);
    return res.status(500).json({ message: "internal server error" });
  }
};
