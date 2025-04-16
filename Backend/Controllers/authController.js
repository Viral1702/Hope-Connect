const User = require("../Models/userModel");
const Category = require("../Models/categoryModel");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
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

    const otpNumber = Math.floor(100000 + Math.random() * 900000);

    // Create new User
    const newUser = await User.create({
      name,
      email,
      number,
      password,
      status: "inactive",
      categoryId,
      otp: otpNumber,
    });
    const isMail = await sendMail(newUser);
    if (!isMail) res.status(400).json({ message: "Somthing want wrong" });
    const token = jwt.sign(
      {
        email: newUser.email,
        _id: newUser._id,
      },
      process.env.JWT_SECRET
    );
    res.status(200).json({
      message: "OTP sent",
      token,
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
    const userData = await User.findOne({
      email,
    });

    if (!userData) {
      res.status(203).json({
        message: "Email is not fond please signup whith this email",
      });
      return;
    }

    const isValid = await User.findOne({
      email,
      password,
      status: "active",
    });

    if (isValid) {
      const token = jwt.sign(
        { email, _id: userData._id },
        process.env.JWT_SECRET
      );

      return res.status(200).json({
        message: "Logined Successfully..",
        token,
        role: isValid.categoryId === null ? "user" : "organization",
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

const sendMail = async (user) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email options
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: user.email,
    subject: "Activate Your Account - Hope-connect",
    html: `
  <div style="font-family: Arial, sans-serif; background-color: #ffffff; padding: 20px; color: #000000;">
    <div style="max-width: 600px; margin: auto; border: 1px solid #eeeeee; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
      <div style="background-color: #000000; padding: 20px; text-align: center;">
        <h1 style="color: #FFD700; margin: 0;">Hope-connect</h1>
      </div>
      <div style="padding: 30px 20px;">
        <p style="font-size: 16px;">Hello <strong>${
          user.name || "User"
        }</strong>,</p>
        <p style="font-size: 15px; color: #333333;">
          Thank you for creating an account with Hope-connect. To activate your account, please use the following One-Time Password (OTP):
        </p>
        <div style="text-align: center; margin: 30px 0;">
          <h2 style="font-size: 28px; letter-spacing: 4px; color: #000000;">${
            user.otp
          }</h2>
        </div>
      
        <p style="margin-top: 40px; font-size: 14px; color: #888888;">Thanks, <br />The Hope-connect Team</p>
      </div>
      <div style="background-color: #000000; padding: 15px; text-align: center;">
        <p style="color: #ffffff; font-size: 12px; margin: 0;">&copy; ${new Date().getFullYear()} Hope-connect. All rights reserved.</p>
      </div>
    </div>
  </div>
`,
  };

  // Send the email
  const res = await transporter.sendMail(mailOptions);

  return true;
};

const verifyOTP = async (req, res) => {
  const token = req.headers.authorization;
  const { otp } = req.body;

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const userID = decoded._id;
  const user = await User.findOne({ _id: userID, otp });

  if (!user) return res.status(400).json({ message: "Invalid OTP" });

  const activeUser = await User.findByIdAndUpdate(userID, { status: "active" });
  res.status(200).json({ message: "Your account activate" });
};

module.exports = { signup, signin, resetPassword, verifyOTP };