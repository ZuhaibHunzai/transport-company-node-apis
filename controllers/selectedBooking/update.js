const SelectedBooking = require("../../models/selectedBooking");

module.exports = async (req, res, next) => {
  const { bookingId } = req.params;
  const {
    name,
    username,
    email,
    mobile,
    date,
    pickup,
    destination,
    needRoundTrip,
    returningDate,
    vehicle,
    isRoundTrip,
    price,
    status,
  } = req.body;

  try {
    if (!bookingId) {
      return res.status(400).json({ message: "Booking ID is required" });
    }

    let selectedBooking = await SelectedBooking.findById(bookingId);

    if (!selectedBooking) {
      return res.status(404).json({ message: "Selected booking not found" });
    }

    selectedBooking.name = name;
    selectedBooking.username = username;
    selectedBooking.email = email;
    selectedBooking.mobile = mobile;
    selectedBooking.date = date;
    selectedBooking.pickup = pickup;
    selectedBooking.destination = destination;
    selectedBooking.needRoundTrip = needRoundTrip;
    selectedBooking.returningDate = returningDate;
    selectedBooking.vehicle = vehicle;
    selectedBooking.isRoundTrip = isRoundTrip;
    selectedBooking.price = price;
    selectedBooking.status = status;

    selectedBooking = await selectedBooking.save();

    return res.status(200).json(selectedBooking);
  } catch (error) {
    console.error("Error updating selected booking:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
