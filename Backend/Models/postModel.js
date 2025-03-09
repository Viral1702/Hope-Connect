const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  message: { type: String, required: true },
  image: { type: String },
  location: { type: Object },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  status: { type: String, enum: ["active", "inactive"], default: "active" },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
