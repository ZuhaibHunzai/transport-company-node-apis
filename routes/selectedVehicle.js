const perDayRoutes = require("express").Router();
const useAuth = require("../middleware/useAuth");

const {
  createSelectedVehicle,
  deleteSelectedVehicle,
  getAllSelectedVehicles,
  getSingleSelectedVehicle,
  updateSelectedVehicle,
} = require("../controllers/selectedVehicle");

perDayRoutes
  .post("/add", useAuth, createSelectedVehicle)
  .delete("/:id", useAuth, deleteSelectedVehicle)
  .get("/all", useAuth, getAllSelectedVehicles)
  .get("/:id", useAuth, getSingleSelectedVehicle)
  .post("/:id", useAuth, updateSelectedVehicle);

module.exports = perDayRoutes;
