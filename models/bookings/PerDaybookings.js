const mongoose = require("mongoose");

const bookingStatus = ["Processing", "Confirmed", "In Progress", "Complete"];

const dailyBookings = new mongoose.Schema({
  guestName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: Number,
    required: true,
  },
  vehicle: {
    type: String,
    required: true,
  },
  numberOfDays: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  Status: {
    type: String,
    enum: bookingStatus,
    default: "processing",
  },
});

module.exports = mongoose.model("DailyBooking", dailyBookings);
