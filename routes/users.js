const authRouter = require("express").Router();

authRouter
  .post("/login", require("../controllers/auth/login"))
  .post("/register", require("../controllers/auth/register"));

module.exports = authRouter;
