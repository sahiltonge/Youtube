import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import axios from "axios";

const BASE_URL = 'https://youtube-ujja.onrender.com';

function HomePage({ sideNavbar }) {
  const [videos, setVideos] = useState([]);

  const options = [
    "All", "Trending", "Music", "Gaming", "News", "Live",
    "Movies", "Sports", "Fashion & Beauty", "Learning", "Podcasts",
    "Technology", "Comedy", "Entertainment", "Documentary", "Science",
    "Travel", "Food", "Cars", "Health", "Kids", "History"
  ];

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/videos`);
        setVideos(res.data);
      } catch (err) {
        console.error("Failed to fetch videos", err);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className={sideNavbar ? "homePage" : "fullHomePage"}>
      <div className="homePage-options">
        {options.map((item, index) => (
          <div key={index} className="homePage-option">
            {item}
          </div>
        ))}
      </div>

      <div className={sideNavbar ? "home-mainPage" : "home-mainPageWithoutSidebar"}>
        {videos.map((video) => (
          <Link key={video._id} to={`/watch/${video._id}`} className="youtube-Video">
            <div className="youtube-thumbnailBox">
              <img src={video.thumbnailUrl} alt="thumbnail" className="youtube-thumbnailPic" />
              <div className="youtube-timingThumbnial">
                {video.duration || "0:00"}
              </div>
            </div>

            <div className="youtube-TitleBox">
              <div className="youtubeTitleBoxProfile">
                <img
                  src={video.owner?.profilePic || "https://i.ibb.co/2FsfXqM/default-user.png"}
                  alt="Profile"
                  className="youtube-thumbnail-profile"
                />
              </div>
              <div className="youtubetitleBox-Title">
                <div className="youtube-videotitle">{video.title}</div>
                <div className="youtube-channelName">{video.owner?.username}</div>
                <div className="youtube-views">{video.views} views</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
