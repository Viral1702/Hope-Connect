const { Router } = require("express");
const OrganizationRouts = Router();
const jwt = require("jsonwebtoken");
const User = require("../Models/userModel");
const Post = require("../Models/postModel");
require("dotenv").config();

OrganizationRouts.get("/", async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const { _id } = await jwt.verify(token, process.env.JWT_SECRET);
    if (!_id) {
      res.status(200).json({ message: "Organization not found" });
      return;
    }
    const { categoryId } = await User.findById(_id);
    const data = await Post.find({ categoryId }).populate("userId");
    res.send(data);
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
  res.status(200).json(data);
});

module.exports = OrganizationRouts;
