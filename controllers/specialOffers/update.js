const SpecialOffers = require("../../models/specialOffers/specialOffers");

module.exports = async (req, res, next) => {
  const { specialOfferId } = req.params;
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
    if (!specialOfferId) {
      return res.status(400).json({ message: "Special offer ID is required" });
    }

    let specialOffer = await SpecialOffers.findById(specialOfferId);

    if (!specialOffer) {
      return res.status(404).json({ message: "Special offer not found" });
    }

    specialOffer.title = title;
    specialOffer.description = description;
    specialOffer.vehicle = vehicle;
    specialOffer.numberOfGuests = numberOfGuests;
    specialOffer.sliderImages = sliderImages;
    specialOffer.banner = banner;
    specialOffer.days = days;
    specialOffer.originalPrice = originalPrice;
    specialOffer.price = price;

    specialOffer = await specialOffer.save();

    return res.status(200).json(specialOffer);
  } catch (error) {
    console.error("Error updating special offer:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
