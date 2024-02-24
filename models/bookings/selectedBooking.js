const mongoose = require("mongoose");

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
  vehicle: {
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
  price: {
    type: Number,
    required: true,
  },
  roundTrip: {
    type: Boolean,
    required: true,
  },
});
module.exports = mongoose.model("SelectedBooking", selectedBooking);
