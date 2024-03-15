const SpecialOffers = require("../../models/specialOffers/specialOffers");

module.exports = async (req, res, next) => {
  const { specialOfferId } = req.params;

  try {
    const specialOffer = await SpecialOffers.findById(specialOfferId);

    if (!specialOffer) {
      return res.status(404).json({ message: "Special offer not found" });
    }

    await SpecialOffers.findByIdAndDelete(specialOfferId);

    return res
      .status(200)
      .json({ message: "Special offer deleted successfully" });
  } catch (error) {
    console.error("Error deleting special offer:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
