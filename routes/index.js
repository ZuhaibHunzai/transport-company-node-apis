const indexRouter = require("express").Router();

// api/auth
indexRouter.use("/auth", require("./users"));
//api/vehicle
indexRouter.use("/vehicle", require("./vehicles"));
//api/vehicle
indexRouter.use("/per-day-vehicle", require("./perDayVehicles"));
//api/custom-package
indexRouter.use("/custom-package", require("./customPackages"));

module.exports = indexRouter;
