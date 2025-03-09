const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  message: { type: String, required: true },
  image: { type: String },
  location: { type: Object },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  status: {
    type: String,
    enum: ["rejected", "pending", "approved"],
    default: "pending",
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
