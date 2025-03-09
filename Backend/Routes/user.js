const { Router } = require("express");
const {
  getAllPosts,
  addPost,
  getUserPosts,
} = require("../Controllers/userController");
const isAuthenticated = require("../Middlewares/isAuthMiddleware");
const { postMiddleware } = require("../Middlewares/index");

const UserRouter = Router();

// Middleware
UserRouter.use(isAuthenticated);

UserRouter.get("/", getAllPosts);
UserRouter.post("/", postMiddleware, addPost);
UserRouter.get("/user-post", getUserPosts);

module.exports = UserRouter;
