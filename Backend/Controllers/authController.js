const User = require("../Models/userModel");
const Category = require("../Models/categoryModel");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const signup = async (req, res) => {
  try {
    const { name, email, number, password } = req.body;
    const category = req.body?.category ?? null;

    // Check if User Exists
    const isExists = await User.findOne({
      $or: [{ email }, { number }],
    });

    if (isExists) {
      return res.status(203).json({
        message:
          "User with this email or number already exists, please enter another email or number",
      });
    }

    // Find categoryId by name
    const categoryDoc = await Category.findOne({ name: category });
    const categoryId = categoryDoc?._id ?? null;

    // Create new User
    const newUser = await User.create({
      name,
      email,
      number,
      password,
      status: "inactive",
      categoryId,
      otp: null,
    });

    res.status(200).json({
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    console.error("Signup Error: ", error);
    res.status(500).json({
      message: "Internal server error..",
    });
  }
};

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isValid = await User.findOne({
      email,
      password,
      status: "active",
    });
    if (isValid) {
      const token = jwt.sign(email, process.env.JWT_SECRET);
      res.status(200).json({
        message: "Logined Successfully..",
        token,
      });
    }
    if (!isValid) {
      res.status(203).json({
        message: "Your credentials are incorrect OR account will inactive",
      });
    }
  } catch (error) {
    console.log("Signin Error: ", error);
    res.status(500).json({
      message: "Internal server error..",
    });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { email, password } = req.body;
    const response = await User.updateOne({ email }, { password: password });
    if (response) {
      res.status(200).json({
        message: "Password updated successfully",
      });
    }
  } catch (error) {
    console.log("Reset Password Error: ", error);
    res.status(500).json({
      message: "Internal server error..",
    });
  }
};

module.exports = { signup, signin, resetPassword };
