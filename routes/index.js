const indexRouter = require("express").Router();

// api/auth
indexRouter.use("/auth", require("./users"));

module.exports = indexRouter;
