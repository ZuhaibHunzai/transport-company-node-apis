const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI;

const connect = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connected to DB Successfully");
  } catch (e) {
    console.log("error connecting to db", e);
  }
};

module.exports = { connect };
