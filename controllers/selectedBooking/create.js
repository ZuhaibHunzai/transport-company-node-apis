const SelectedBooking = require("../../models/selectedBooking");

module.exports = async (req, res, next) => {
  const {
    name,
    username,
    email,
    mobile,
    date,
    pickup,
    destination,
    needRoundTrip,
    returningDate,
    vehicle,
    isRoundTrip,
    price,
    status,
  } = req.body;
  try {
    if (!date || !pickup || !destination || !vehicle || isRoundTrip || !price) {
      return res.status(403).json({ message: " Incomplete Payload" });
    }

    const newSelectedBooking = new SelectedBooking({
      name,
      username,
      email,
      mobile,
      date,
      pickup,
      destination,
      needRoundTrip,
      returningDate,
      vehicle,
      isRoundTrip,
      price,
      status,
    });

    await newSelectedBooking.save();
    return res.status(200).json(newSelectedBooking);
  } catch (err) {
    return console.log("Error creating selected booking", err);
  }
};
