const mongoose = require("mongoose");

const vehicleAndPrices = new mongoose.Schema({
  vehicleName: {
    type: String,
    required: true,
  },
  vehicleModel: {
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
  perDayPrice: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Vehicle", vehicleAndPrices);
