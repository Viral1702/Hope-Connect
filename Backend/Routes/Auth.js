const { Router } = require("express");
const {
  signup,
  signin,
  resetPassword,
  verifyOTP,
} = require("../Controllers/authController");
const {
  signinMiddleware,
  signupMiddleware,
  resetPasswordMiddleware,
} = require("../Middlewares/index");

const AuthRouter = Router();

AuthRouter.post("/signup", signupMiddleware, signup);
AuthRouter.post("/signin", signinMiddleware, signin);
AuthRouter.post("/verify-otp", verifyOTP);
AuthRouter.put("/reset-password", resetPasswordMiddleware, resetPassword);

module.exports = AuthRouter;
