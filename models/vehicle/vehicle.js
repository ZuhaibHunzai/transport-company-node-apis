const { model, Schema } = require("mongoose");

const Vehicle = model(
  "Vehicle",
  new Schema({
    vehicleName: {
      type: String,
      required: true,
    },
    allowedDestinations: {
      type: String,
      required: true,
    },
    allowdPicupPoints: {
      type: String,
      required: true,
    },
    prices: {
      type: Number,
      required: true,
    },
  })
);

module.exports = Vehicle;
