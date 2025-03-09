const { Router } = require("express");
const { getAllPosts, addPost } = require("../Controllers/userController");
const isAuthenticated = require("../Middlewares/authMiddleware");

const UserRouter = Router();

// Middleware
UserRouter.use(isAuthenticated);

UserRouter.get("/", getAllPosts);
UserRouter.post("/", addPost);

module.exports = UserRouter;
