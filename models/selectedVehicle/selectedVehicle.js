const mongoose = require("mongoose");

const selectedPlaceVehicle = new mongoose.Schema({
  vehicleName: {
    type: String,
    required: true,
  },
  vehicleModel: {
    type: String,
    required: false,
  },
  variant: {
    type: String,
    required: false,
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
  numberOfPassengers: {
    type: Number,
    required: true,
  },
  luggagePerPassenger: {
    type: String,
    required: true,
  },
  isRoundTrip: {
    type: String,
    required: true,
  },
  totalDistance: {
    type: Number,
    required: false,
  },
  expectedDriveTime: {
    type: String,
    required: false,
  },
  route: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("SelectedPlaceVehicle", selectedPlaceVehicle);
