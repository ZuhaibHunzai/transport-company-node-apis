const customPackagesRouter = require("express").Router();
const useAuth = require("../middleware/useAuth");
const {
  createCustomBooking,
  deleteCustomBooking,
  getAllCustomBookings,
  getSingleCustomBooking,
  updateCustomBooking,
} = require("../controllers/customBooking");

customPackagesRouter
  .post("/add", useAuth, createCustomBooking)
  .delete("/:id", useAuth, deleteCustomBooking)
  .get("/all", useAuth, getAllCustomBookings)
  .get("/:id", useAuth, getSingleCustomBooking)
  .post("/:id", useAuth, updateCustomBooking);

module.exports = customPackagesRouter;
