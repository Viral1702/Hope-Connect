const { Router } = require("express");
const {
  signup,
  signin,
  resetPassword,
} = require("../Controllers/authController");

const AuthRouter = Router();

AuthRouter.post("/signup", signup);
AuthRouter.post("/signin", signin);
AuthRouter.put("/reset-password", resetPassword);

module.exports = AuthRouter;
