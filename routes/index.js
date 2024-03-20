const indexRouter = require("express").Router();

//** /api/auth
indexRouter.use("/auth", require("./users"));
//** /api/custom-package
indexRouter.use("/custom-package", require("./customPackages"));
//** /api/per-day-booking
indexRouter.use("/per-day-booking", require("./perDayBooking"));
//** /api/per-day-vehicle
indexRouter.use("/per-day-vehicle", require("./perDayVehicle"));
//** /api/selected-booking
indexRouter.use("/selected-booking", require("./selectedBooking"));
//** /api/selected-vehicle
indexRouter.use("/seleted-vehicle", require("./perDayVehicle"));
//** /api/special-offers
indexRouter.use("/special-offers", require("./specialOffers"));

module.exports = indexRouter;
