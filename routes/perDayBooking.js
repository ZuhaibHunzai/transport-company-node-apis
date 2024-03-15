const perDayRoutes = require("express").Router();
const useAuth = require("../middleware/useAuth");

const {
  createPerDayBooking,
  deletePerDayBooking,
  getAllPerDayBookings,
  getSinglePerDayBooking,
  updatePerDayBooking,
} = require("../controllers/perDayBooking");

perDayRoutes
  .post("/add", useAuth, createPerDayBooking)
  .delete("/:id", useAuth, deletePerDayBooking)
  .get("/all", useAuth, getAllPerDayBookings)
  .get("/:id", useAuth, getSinglePerDayBooking)
  .post("/:id", useAuth, updatePerDayBooking);

module.exports = perDayRoutes;
