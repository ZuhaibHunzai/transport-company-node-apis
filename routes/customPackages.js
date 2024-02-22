const customPackagesRouter = require("express").Router();
const useAuth = require("../middleware/useAuth");
const {
  addCustomPackage,
  deleteCustomPackage,
  getAllCustomPackages,
  getSingleCustomPackage,
  updateSingleCustomPackage,
} = require("../controllers/customPackages");

customPackagesRouter
  .post("/add", useAuth, addCustomPackage)
  .delete("/:id", useAuth, deleteCustomPackage)
  .get("/all", useAuth, getAllCustomPackages)
  .get("/:id", useAuth, getSingleCustomPackage)
  .post("/:id", useAuth, updateSingleCustomPackage);

module.exports = customPackagesRouter;
