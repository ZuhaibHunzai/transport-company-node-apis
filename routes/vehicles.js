const vehiclesRoute = require("express").Router();
const useAuth = require("../middleware/useAuth");

const {
  addVehicle,
  deleteVehicle,
  updateVehicle,
  getAllVehicles,
  getVehicleById,
} = require("../controllers/vehicle");

vehiclesRoute
  .post("/add", useAuth, addVehicle)
  .delete("/delete", useAuth, deleteVehicle)
  .post("/update", useAuth, updateVehicle)
  .get("/all", getAllVehicles)
  .get("/:id", getVehicleById);

module.exports = vehiclesRoute;
