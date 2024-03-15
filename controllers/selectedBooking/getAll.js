const SelectedBooking = require("../../models/selectedBooking/selectedBooking");

module.exports = async (req, res, next) => {
  try {
    const selectedBookings = await SelectedBooking.find();

    if (selectedBookings.length === 0) {
      return res.status(404).json({ message: "No selected bookings found" });
    }

    return res.status(200).json(selectedBookings);
  } catch (error) {
    console.error("Error fetching selected bookings:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
