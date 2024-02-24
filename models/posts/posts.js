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
  images: {
    type: File,
    required: true,
  },
  date: {
    type: Date.now(),
    required: true,
  },
});
module.exports = mongoose.model("Post", post);
