const { Router } = require("express");
const {
  signup,
  signin,
  resetPassword,
} = require("../Controllers/authController");
const {
  signinMiddleware,
  signupMiddleware,
  resetPasswordMiddleware,
} = require("../Middlewares/index");

const AuthRouter = Router();

AuthRouter.post("/signup", signupMiddleware, signup);
AuthRouter.post("/signin", signinMiddleware, signin);
AuthRouter.put("/reset-password", resetPasswordMiddleware, resetPassword);

module.exports = AuthRouter;
