const { model, Schema } = require("mongoose");

const Vehicle = model(
  "Vehicle",
  new Schema({
    vehicleName: {
      type: String,
      required: true,
    },
    allowedDestinations: {
      type: [String],
      required: true,
    },
    allowedPickupPoints: {
      type: [String],
      required: true,
    },
    prices: {
      type: Map,
      of: Number,
      required: true,
    },
  })
);

module.exports = Vehicle;
