const CustomBooking = require("../../models/customBooking/customBooking");

module.exports = async (req, res, next) => {
  const {
    numberOfAdult,
    numberOfKids,
    startDate,
    endDate,
    numberofDays,
    needHotel,
    hotelBudget,
    pickup,
    customMessage,
    status,
  } = req.body;
  try {
    if (
      !numberOfAdult ||
      !numberOfKids ||
      !startDate ||
      !endDate ||
      !numberofDays ||
      !needHotel ||
      !hotelBudget ||
      !pickup ||
      !customMessage
    )
      return res.status(403).json({ message: "Incomplete payload" });

    const newCustomBooking = new CustomBooking({
      numberOfAdult,
      numberOfKids,
      startDate,
      endDate,
      numberofDays,
      needHotel,
      hotelBudget,
      pickup,
      customMessage,
      status,
    });
    await newCustomBooking.save();
    return res.status(200).json(newCustomBooking);
  } catch (e) {
    return console.log("Error creating custom booking");
  }
};
