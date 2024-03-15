const CustomBooking = require("../../models/customBooking/customBooking");

module.exports = async (req, res, next) => {
  const { bookingId } = req.params;
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
    if (!bookingId) {
      return res.status(400).json({ message: "Booking ID is required" });
    }

    let customBooking = await CustomBooking.findById(bookingId);

    if (!customBooking) {
      return res.status(404).json({ message: "Custom booking not found" });
    }

    customBooking.numberOfAdult = numberOfAdult;
    customBooking.numberOfKids = numberOfKids;
    customBooking.startDate = startDate;
    customBooking.endDate = endDate;
    customBooking.numberofDays = numberofDays;
    customBooking.needHotel = needHotel;
    customBooking.hotelBudget = hotelBudget;
    customBooking.pickup = pickup;
    customBooking.customMessage = customMessage;
    customBooking.status = status;

    customBooking = await customBooking.save();
    c;
    return res.status(200).json(customBooking);
  } catch (error) {
    console.error("Error updating custom booking:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
