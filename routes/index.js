const indexRouter = require("express").Router();

// api/auth
indexRouter.use("/auth", require("./users"));
//api/vehicle
indexRouter.use("/vehicle", require("./vehicles"));
//api/vehicle
indexRouter.use("/per-day-vehicle", require("./perDayVehicles"));

module.exports = indexRouter;
