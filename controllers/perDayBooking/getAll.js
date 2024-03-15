const PerDayBooking = require("../../models/perDayBooking/PerDaybookings");

module.exports = async (req, res, next) => {
  try {
    const perDayBookings = await PerDayBooking.find();

    if (perDayBookings.length === 0) {
      return res.status(404).json({ message: "No per-day bookings found" });
    }

    return res.status(200).json(perDayBookings);
  } catch (error) {
    console.error("Error fetching per-day bookings:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
