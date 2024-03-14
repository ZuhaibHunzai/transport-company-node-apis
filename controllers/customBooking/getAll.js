const CustomBooking = require("../../models/customBooking");

module.exports = async (req, res, next) => {
  try {
    const customBookings = await CustomBooking.find();

    if (customBookings.length === 0) {
      return res.status(404).json({ message: "No custom bookings found" });
    }

    return res.status(200).json(customBookings);
  } catch (error) {
    console.error("Error fetching custom bookings:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
