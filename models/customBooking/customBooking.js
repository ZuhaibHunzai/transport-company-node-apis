const mongoose = require("mongoose");
const customPackageStatus = [
  "Pending",
  "Confirmed",
  "In Progress",
  "Completed",
];
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
  endDate: {
    type: Date,
    required: true,
  },
  numberofDays: {
    type: Number,
    required: false,
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
  customMessage: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: customPackageStatus,
    default: "Pending",
  },
});

module.exports = mongoose.model("CustomPackage", customPackage);
