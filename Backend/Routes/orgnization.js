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
    const data = await Post.find({ categoryId });
    res.send(data);
  } catch (error) {
    console.log("getCategoryData Error: ", error);
    resizeBy.status(500).json({ message: "Internal server Error" });
  }
});

module.exports = OrganizationRouts;
