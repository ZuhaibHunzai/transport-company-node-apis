const SpecialOffers = require("../../models/specialOffers/specialOffers");

module.exports = async (req, res, next) => {
  const {
    title,
    description,
    vehicle,
    numberOfGuests,
    sliderImages,
    banner,
    days,
    originalPrice,
    price,
  } = req.body;

  try {
    if (
      !title ||
      !description ||
      !vehicle ||
      !numberOfGuests ||
      !sliderImages ||
      !banner ||
      !days ||
      !originalPrice ||
      !price
    ) {
      return res.status(403).json({ message: "Invalid payload" });
    }

    const newSpecialOffer = new SpecialOffers({
      title,
      description,
      vehicle,
      numberOfGuests,
      sliderImages,
      banner,
      days,
      originalPrice,
      price,
    });

    await newSpecialOffer.save();
    return res.status(200).json(newSpecialOffer);
  } catch (error) {
    console.error("Error adding a special offer:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
