const CustomBooking = require("../../models/customBooking/customBooking");

module.exports = async (req, res, next) => {
  const { bookingId } = req.params;

  try {
    if (!bookingId) {
      return res.status(400).json({ message: "Booking ID is required" });
    }

    const customBooking = await CustomBooking.findById(bookingId);

    if (!customBooking) {
      return res.status(404).json({ message: "Custom booking not found" });
    }

    await CustomBooking.findByIdAndDelete(bookingId);

    return res
      .status(200)
      .json({ message: "Custom booking deleted successfully" });
  } catch (error) {
    console.error("Error deleting custom booking:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
