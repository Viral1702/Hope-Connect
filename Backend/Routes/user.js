const { Router } = require("express");
const {
  getAllPosts,
  addPost,
  getUserPosts,
  getProfile,
  updateProfile,
  getUserAndOrganizations,
} = require("../Controllers/userController");
const isAuthenticated = require("../Middlewares/isAuthMiddleware");
const { postMiddleware } = require("../Middlewares/index");
const multer = require("multer");
const UserRouter = Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

// Middleware
UserRouter.use(isAuthenticated);

UserRouter.get("/", getAllPosts);

// Create a post
UserRouter.post("/", upload.single("image"), postMiddleware, addPost);

UserRouter.get("/user-post", getUserPosts);
UserRouter.get("/user-profile", getProfile);
UserRouter.get("/post-data", getUserAndOrganizations);
UserRouter.post("/update-profile", updateProfile);

module.exports = UserRouter;
