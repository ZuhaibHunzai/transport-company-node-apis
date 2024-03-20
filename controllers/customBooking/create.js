const CustomBooking = require("../../models/customBooking/customBooking");

module.exports = async (req, res, next) => {
  const {
    numberOfAdults,
    numberOfKids,
    startDate,
    endDate,
    numberofDays,
    needHotel,
    hotelBudget,
    pickup,
    customMessage,
  } = req.body;
  try {
    if (
      !numberOfAdults ||
      !numberOfKids ||
      !startDate ||
      !endDate ||
      !needHotel ||
      !hotelBudget ||
      !pickup ||
      !customMessage
    )
      return res.status(403).json({ message: "Incomplete payload" });

    const newCustomBooking = new CustomBooking({
      numberOfAdults,
      numberOfKids,
      startDate,
      endDate,
      numberofDays,
      needHotel,
      hotelBudget,
      pickup,
      customMessage,
    });
    await newCustomBooking.save();
    return res.status(200).json(newCustomBooking);
  } catch (e) {
    return console.log("Error creating custom booking");
  }
};
