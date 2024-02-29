const PerDayBooking = require("../../models/perDayBooking");

module.exports = async (req, res, next) => {
  const {
    name,
    username,
    email,
    phone,
    pickup,
    fromDate,
    toDate,
    vehicle,
    perDayPrice,
    Status,
  } = req.body;

  try {
    if (
      !name ||
      !username ||
      !email ||
      !phone ||
      !pickup ||
      !fromDate ||
      !toDate ||
      !vehicle ||
      !perDayPrice ||
      !Status
    ) {
      return res.status(403).json({ message: "Incomplete json" });
    }

    const newPerDayBooking = new PerDayBooking({
      name,
      username,
      email,
      phone,
      pickup,
      fromDate,
      toDate,
      vehicle,
      perDayPrice,
      Status,
    });

    await newPerDayBooking.save();
    return res.status(200).json(newPerDayBooking);
  } catch (e) {
    return console.log("Error creating booking", e);
  }
};
