const Post = require("../Models/postModel");
const Category = require("../Models/categoryModel");
const User = require("../Models/userModel");

const getAllPosts = async (req, res) => {
  try {
    const data = await Post.find({});
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
    // get Data
    const { _id, message, image, location, category } = req.body;
    // get Category
    const categoryData = await Category.findOne({ name: category });
    if (!categoryData) {
      res.status(404).json({ message: "Category is invalid" });
      return;
    }
    const categoryId = categoryData._id;
    // Create new Post
    const newPost = await Post.create({
      userId: _id,
      message,
      image,
      location,
      categoryId,
    });

    // Update uses Post Array
    const updatedPostArray = await User.findByIdAndUpdate(
      _id,
      { $push: { posts: newPost._id } }, // Push newTask into tasks array
      { new: true, useFindAndModify: false } // Return updated document
    );

    // Send response
    res.status(200).json({
      message: "New Post Added",
      newPost,
    });
  } catch (error) {
    console.log("Add Post Error: ", error);
    res.status(203).json({
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

module.exports = { getAllPosts, addPost, getUserPosts };
