const PerDayBooking = require("../../models/perDayBooking");

module.exports = async (req, res, next) => {
  const { bookingId } = req.params;
  const {
    name,
    username,
    email,
    phone,
    pickup,
    fromDate,
    toDate,
    vehicle,
    perDayPrice,
    Status,
  } = req.body;

  try {
    if (!bookingId) {
      return res.status(400).json({ message: "Booking ID is required" });
    }

    let perDayBooking = await PerDayBooking.findById(bookingId);

    if (!perDayBooking) {
      return res.status(404).json({ message: "Per-day booking not found" });
    }

    perDayBooking.name = name;
    perDayBooking.username = username;
    perDayBooking.email = email;
    perDayBooking.phone = phone;
    perDayBooking.pickup = pickup;
    perDayBooking.fromDate = fromDate;
    perDayBooking.toDate = toDate;
    perDayBooking.vehicle = vehicle;
    perDayBooking.perDayPrice = perDayPrice;
    perDayBooking.Status = Status;

    perDayBooking = await perDayBooking.save();

    return res.status(200).json(perDayBooking);
  } catch (error) {
    console.error("Error updating per-day booking:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
