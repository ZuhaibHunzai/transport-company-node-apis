const CustomPackage = require("../../models/customPackage/customPackage");

module.exports = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedPackage = await CustomPackage.findByIdAndDelete(id);

    if (!deletedPackage) {
      return res.status(404).json({ message: "Custom package not found" });
    }

    res.status(200).json({ message: "Custom package deleted successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
