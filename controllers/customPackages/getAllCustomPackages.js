const CustomPackage = require("../../models/customPackage/customPackage");

module.exports = async (req, res, next) => {
  try {
    const customPackages = await CustomPackage.find();

    res.status(200).json(customPackages);
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
