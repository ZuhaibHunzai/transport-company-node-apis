const SpecialOffers = require("../../models/specialOffers/specialOffers");

module.exports = async (req, res, next) => {
  try {
    const specialOffers = await SpecialOffers.find();

    if (specialOffers.length === 0) {
      return res.status(404).json({ message: "No special offers found" });
    }

    return res.status(200).json(specialOffers);
  } catch (error) {
    console.error("Error fetching special offers:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
