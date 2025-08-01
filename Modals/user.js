const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  channelName: { type: String, required: true },
  profilePic: { type: String, required: true },
  password: { type: String, required: true },
  about: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
