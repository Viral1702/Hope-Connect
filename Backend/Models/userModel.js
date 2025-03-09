const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  number: { type: Number, unique: true, required: true },
  password: { type: String, required: true },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  otp: { type: String },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  status: { type: String, enum: ["active", "inactive"], required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
