const CustomPackage = require("../../models/customPackage/customPackage");

module.exports = async (req, res, next) => {
  const { id } = req.params;

  try {
    const customPackage = await CustomPackage.findById(id);

    if (!customPackage) {
      return res.status(404).json({ message: "Custom package not found" });
    }

    res.status(200).json(customPackage);
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
