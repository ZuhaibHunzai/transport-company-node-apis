const indexRouter = require("express").Router();

// api/auth
indexRouter.use("/auth", require("./users"));
//api/vehicle
indexRouter.use("/vehicle", require("./vehicles"));

module.exports = indexRouter;
