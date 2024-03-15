const perDayRoutes = require("express").Router();
const useAuth = require("../middleware/useAuth");

const {
  createSelectedBooking,
  deleteSelectedBooking,
  getAllSelectedBookings,
  getSingleSelectedBooking,
  updateSelectedBooking,
} = require("../controllers/selectedBooking");

perDayRoutes
  .post("/add", useAuth, createSelectedBooking)
  .delete("/:id", useAuth, deleteSelectedBooking)
  .get("/all", useAuth, getAllSelectedBookings)
  .get("/:id", useAuth, getSingleSelectedBooking)
  .post("/:id", useAuth, updateSelectedBooking);

module.exports = perDayRoutes;
