const mongoose = require("mongoose");

const bookingStatus = ["Pending", "Confirmed", "In Progress", "Completed"];

const perDayBooking = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  pickup: {
    type: String,
    required: true,
  },
  fromDate: {
    type: Date,
    required: true,
  },
  toDate: {
    type: Date,
    required: true,
  },
  vehicle: {
    type: String,
    required: true,
  },
  perDayPrice: {
    type: Number,
    required: true,
  },
  Status: {
    type: String,
    enum: bookingStatus,
    default: "Pending",
  },
});

module.exports = mongoose.model("PerDayBooking", perDayBooking);
