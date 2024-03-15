const PerDayBooking = require("../../models/perDayBooking/PerDaybookings");

module.exports = async (req, res, next) => {
  const { bookingId } = req.params;

  try {
    if (!bookingId) {
      return res.status(400).json({ message: "Booking ID is required" });
    }

    const perDayBooking = await PerDayBooking.findById(bookingId);

    if (!perDayBooking) {
      return res.status(404).json({ message: "Per-day booking not found" });
    }

    await PerDayBooking.findByIdAndDelete(bookingId);

    return res
      .status(200)
      .json({ message: "Per-day booking deleted successfully" });
  } catch (error) {
    console.error("Error deleting per-day booking:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
