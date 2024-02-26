const mongoose = require("mongoose");

const post = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  SliderImages: {
    type: File,
    required: true,
  },
  bgImage: {
    type: String,
    required: true,
  },
  date: {
    type: Date.now(),
    required: true,
  },
});
module.exports = mongoose.model("Post", post);
