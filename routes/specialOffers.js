const specialOffersRoutes = require("express").Router();
const useAuth = require("../middleware/useAuth");
const {
  createSpecialOffer,
  deleteSpecialOffer,
  getAllSpecialOffers,
  getSingleSpecialOffer,
  updateSpecialOffer,
} = require("../controllers/specialOffers");

specialOffersRoutes
  .post("/add", useAuth, createSpecialOffer)
  .delete(":/id", useAuth, deleteSpecialOffer)
  .get("/all", getAllSpecialOffers)
  .get(":/id", getSingleSpecialOffer)
  .post("/update", useAuth, updateSpecialOffer);

module.exports = specialOffersRoutes;
