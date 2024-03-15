const SelectedBooking = require("../../models/selectedBooking/selectedBooking");

module.exports = async (req, res, next) => {
  const { bookingId } = req.params;

  try {
    if (!bookingId) {
      return res.status(400).json({ message: "Booking ID is required" });
    }

    const selectedBooking = await SelectedBooking.findById(bookingId);

    if (!selectedBooking) {
      return res.status(404).json({ message: "Selected booking not found" });
    }

    return res.status(200).json(selectedBooking);
  } catch (error) {
    console.error("Error fetching selected booking:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
