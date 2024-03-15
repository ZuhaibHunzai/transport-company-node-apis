const perDayRoutes = require("express").Router();
const useAuth = require("../middleware/useAuth");

const {
  createPerDayVehicle,
  deletePerDayVehicle,
  getAllPerDayVehicles,
  getSinglePerDayVehicle,
  updatePerDayVehicle,
} = require("../controllers/perDayVehicle");

perDayRoutes
  .post("/add", useAuth, createPerDayVehicle)
  .delete("/:id", useAuth, deletePerDayVehicle)
  .get("/all", useAuth, getAllPerDayVehicles)
  .get("/:id", useAuth, getSinglePerDayVehicle)
  .post("/:id", useAuth, updatePerDayVehicle);

module.exports = perDayRoutes;
