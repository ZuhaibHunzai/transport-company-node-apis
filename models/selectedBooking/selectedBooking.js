const mongoose = require("mongoose");
const selectedBookingStatus = [
  "Pending",
  "Confirmed",
  "In Progress",
  "Completed",
];
const selectedBooking = new mongoose.Schema({
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
  mobile: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  pickup: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  needRoundTrip: {
    type: Boolean,
    required: false,
  },
  returningDate: {
    type: Date,
    required: false,
  },
  vehicle: {
    type: String,
    required: true,
  },
  isRoundTrip: {
    type: Boolean,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: selectedBookingStatus,
    default: "Pending",
  },
});
module.exports = mongoose.model("SelectedBooking", selectedBooking);
