const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  video: { type: mongoose.Schema.Types.ObjectId, ref: 'Video' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  commentText: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Comment", commentSchema);
