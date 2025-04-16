const { Router } = require("express");
const jwt = require("jsonwebtoken");
const User = require("../Models/userModel");
const Post = require("../Models/postModel");
require("dotenv").config();

const OrganizationRouts = Router();

OrganizationRouts.get("/", async (req, res) => {
  try {
    const token = req.headers.authorization;
    const { _id } = await jwt.verify(token, process.env.JWT_SECRET);
    if (!_id) {
      res.status(200).json({ message: "Organization not found" });
      return;
    }
    const { categoryId } = await User.findById(_id);
    const data = await Post.find({ categoryId, status: "pending" }).populate(
      "userId"
    );
    res.status(200).json({ data, message: "This is your data" });
  } catch (error) {
    console.log("getCategoryData Error: ", error);
    resizeBy.status(500).json({ message: "Internal server Error" });
  }
});

OrganizationRouts.get("/all", async (req, res) => {
  try {
    const users = await User.find({ categoryId: { $ne: null } }).populate(
      "categoryId"
    );
    res.status(200).json(users);
  } catch (error) {
    console.log("getCategoryData Error: ", error);
    resizeBy.status(500).json({ message: "Internal server Error" });
  }
});

OrganizationRouts.get("/:id", async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(404).json({ message: "Id not found" });
  }
  const data = await Post.find({ _id: id }).populate("userId");
  if (!data) {
    res.status(403).json({ message: "Invalid Post" });
  }
  res.status(200).json({ data, message: "Hello world!!" });
});

OrganizationRouts.put("/approve/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatePost = await Post.findByIdAndUpdate(id, { status: "approved" });
    res.status(200).json({ message: "Request approved" });
  } catch (error) {
    console.log("getCategoryData Error: ", error);
    resizeBy.status(500).json({ message: "Internal server Error" });
  }
});

OrganizationRouts.put("/reject/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatePost = await Post.findByIdAndUpdate(id, { status: "rejected" });
    res.status(200).json({ message: "Request rejected" });
  } catch (error) {
    console.log("getCategoryData Error: ", error);
    resizeBy.status(500).json({ message: "Internal server Error" });
  }
});

module.exports = OrganizationRouts;
