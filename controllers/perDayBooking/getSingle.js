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

    return res.status(200).json(perDayBooking);
  } catch (error) {
    console.error("Error fetching per-day booking:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
