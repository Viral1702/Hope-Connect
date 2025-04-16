const Post = require("../Models/postModel");
const Category = require("../Models/categoryModel");
const User = require("../Models/userModel");
const jwt = require("jsonwebtoken");
const { config } = require("dotenv");

config();

const getAllPosts = async (req, res) => {
  try {
    const data = await Post.find({ status: "pending" }).populate("userId");
    res.status(200).json({
      data,
    });
  } catch (error) {
    console.log("Get all posts Error: ", error);
    res.status(203).json({
      message: "Internal server Error",
    });
  }
};

const addPost = async (req, res) => {
  try {
    const { message, location, category } = req.body;

    // Extract image from multer
    const image = req.file?.path;

    if (!image) {
      return res.status(400).json({ message: "Image not uploaded" });
    }

    const data = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
    const userId = data._id;

    const categoryData = await Category.findOne({ name: category });
    if (!categoryData) {
      return res.status(404).json({ message: "Category is invalid" });
    }

    const categoryId = categoryData._id;

    const newPost = await Post.create({
      userId,
      message,
      image,
      location,
      categoryId,
    });

    await User.findByIdAndUpdate(
      userId,
      { $push: { posts: newPost._id } },
      { new: true, useFindAndModify: false }
    );

    res.status(200).json({
      message: "New Post Added",
      newPost,
    });
  } catch (error) {
    console.log("Add Post Error: ", error);
    res.status(500).json({
      message: "Internal server Error",
    });
  }
};

const getUserPosts = async (req, res) => {
  try {
    const { _id } = req.body;
    const data = await Post.find({ userId: _id });
    res.status(200).json({
      data,
    });
  } catch (error) {
    console.log("Get User Post Error: ", error);
    res.status(203).json({
      message: "Internal server Error",
    });
  }
};

const getProfile = async (req, res) => {
  try {
    const userId = req.body._id;

    const profileData = await User.findById(userId).populate("posts");

    if (!profileData) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(profileData);
  } catch (error) {
    console.log("Error in getProfile ", error);
    res.status(500).json({ message: "Internal server Error" });
  }
};

const updateProfile = async (req, res) => {
  try {
    const userId = req.body._id;
    const { name, password, number } = req.body;
    const profileData = await User.findByIdAndUpdate(userId, {
      name,
      password,
      number,
    });
    return res.status(200).json({ message: "Profile updates successfully" });
  } catch (error) {
    console.log("Error in getProfile ", error);
    res.status(500).json({ message: "Internal server Error" });
  }
};

const getUserAndOrganizations = async (req, res) => {
  try {
    const userId = req.body._id;

    // Fetch user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Fetch organizations
    const organizations = await User.find({
      categoryId: { $ne: null },
    }).populate("categoryId");

    const orgs = organizations.map((o) => o.categoryId.name);

    // Send the response with user's name and organizations
    res.status(200).json({
      name: user.name,
      organizations: orgs,
    });
  } catch (error) {
    console.error("Error fetching user and organizations:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAllPosts,
  addPost,
  getUserPosts,
  getProfile,
  updateProfile,
  getUserAndOrganizations,
};
