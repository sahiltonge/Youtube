import React from "react";
import "./videoupload.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const VideoUpload = () => {
  const [inputField, setInputField] = useState({
    title: "",
    description: "",
    videoLink: "",
    thumbnail: "",
    videoType: "",
  });

  const [loader, setLoader] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const handleOnChangeInput = (event, name) => {
    setInputField({
      ...inputField,
      [name]: event.target.value,
    });
  };

  const uploadImage = async (e, type) => {
    setLoader(true);
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "youtube-clone");

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dojvm3yyg/${type}/upload`,
        data
      );
      const url = response.data.url;
      setLoader(false);
      let val = type === "image" ? "thumbnail" : "videoLink";
      setInputField((prev) => ({
        ...prev,
        [val]: url,
      }));
    } catch (err) {
      console.log(err);
      setLoader(false);
    }
  };

  const handleUpload = async () => {
    if (
      !inputField.title ||
      !inputField.description ||
      !inputField.thumbnail ||
      !inputField.videoLink ||
      !inputField.videoType
    ) {
      setMessage("Please fill in all fields and upload media.");
      return;
    }

    setUploading(true);
    setMessage("");

    try {
      const response = await axios.post(
        "https://youtube-ujja.onrender.com/api/video/upload",
        inputField
      );

      setMessage("✅ Video uploaded successfully!");
      setInputField({
        title: "",
        description: "",
        videoLink: "",
        thumbnail: "",
        videoType: "",
      });
    } catch (error) {
      console.error("Upload error:", error);
      setMessage("❌ Upload failed. Please try again.");
    }

    setUploading(false);
  };

  return (
    <div className="videoUpload">
      <div className="uploadBox">
        <div className="uploadVideoTitle">
          <YouTubeIcon sx={{ fontSize: "54px", color: "red" }} />
          Upload Video
        </div>

        <div className="uploadForm">
          <input
            value={inputField.title}
            onChange={(e) => handleOnChangeInput(e, "title")}
            type="text"
            placeholder="Title of Video"
            className="uploadFormInputs"
          />
          <input
            value={inputField.description}
            onChange={(e) => handleOnChangeInput(e, "description")}
            type="text"
            placeholder="Description"
            className="uploadFormInputs"
          />
          <input
            value={inputField.videoType}
            onChange={(e) => handleOnChangeInput(e, "videoType")}
            type="text"
            placeholder="Category"
            className="uploadFormInputs"
          />

          <div>
            Thumbnail{" "}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => uploadImage(e, "image")}
            />
          </div>
          <div>
            Video{" "}
            <input
              type="file"
              accept="video/mp4, video/webm, video/*"
              onChange={(e) => uploadImage(e, "video")}
            />
          </div>

          {loader && (
            <Box sx={{ display: "flex", mt: 2 }}>
              <CircularProgress />
            </Box>
          )}

          {message && (
            <div style={{ marginTop: "10px", color: "red", fontWeight: "bold" }}>
              {message}
            </div>
          )}
        </div>

        <div className="uploadBtns">
          <button
            className="uploadBtn-form"
            onClick={handleUpload}
            disabled={uploading}
          >
            {uploading ? "Uploading..." : "Upload"}
          </button>
          <Link to={"/"} className="uploadBtn-form">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoUpload;
