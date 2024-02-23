const mongoose = require("mongoose");

const customPackage = mongoose.Schema({
  numberOfAdults: {
    type: Number,
    required: true,
  },
  numberOfKids: {
    type: Number,
    required: false,
  },
  startDate: {
    type: Date,
    required: true,
  },
  totalExpectedTripDays: {
    type: Number,
    required: true,
  },
  customMessage: {
    type: String,
    required: true,
  },
  chooseVehicle: {
    type: String,
    required: true,
  },
  needHotel: {
    type: Boolean,
    required: true,
  },
  hotelBudget: {
    type: Number,
    required: true,
  },
  pickup: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("CustomPackage", customPackage);
