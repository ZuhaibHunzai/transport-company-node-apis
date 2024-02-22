const mongoose = require("mongoose");

const perDayVehicle = new mongoose.Schema({
  vehicleName: {
    type: String,
    required: true,
  },
  vehicleModel: {
    type: String,
    required: false,
  },
  perDayPrice: {
    type: Number,
    required: true,
  },
  numberOfPassengers: {
    type: Number,
    required: true,
  },
  luggagePerPassenger: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("PerDayVehicle", perDayVehicle);
