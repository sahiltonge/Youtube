const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const port = 5000;

require("./Connection/conn");

const user = require("./Middleware/authentication");

const { signUp, login, getChannelDetails } = require("./Controllers/user");
const {
  uploadVideo,
  getAllVideo,
  getVideoById,
  getAllVideoByUserID
} = require("./Controllers/video");
const {
  addComment,
  getCommentByVideoId
} = require("./Controllers/comment");

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(cookieParser());
app.use(express.json());

// User Routes
app.post("/api/signup", signUp);
app.post("/api/login", login);
app.get("/api/channel", user, getChannelDetails);

// Video Routes
app.post("/api/upload", user, uploadVideo);
app.get("/api/videos", getAllVideo);
app.get("/api/video/:id", getVideoById);
app.get("/api/videos/user/:userId", getAllVideoByUserID);

// Comment Routes
app.post("/api/comment", user, addComment);
app.get("/api/comment/:videoId", getCommentByVideoId);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
