const mongoose = require("mongoose");

const specialOffers = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  vehicle: {
    type: String,
    required: true,
  },
  numberOfGuests: {
    type: Number,
    required: true,
  },
  sliderImages: {
    type: File,
    required: true,
  },
  banner: {
    type: File,
    required: true,
  },
  days: {
    type: Number,
    required: true,
  },
  originalPrice: {
    type: Number,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("SpecialOffers", specialOffers);
