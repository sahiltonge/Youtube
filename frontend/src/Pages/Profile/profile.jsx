import React, { useEffect, useState } from "react";
import "./profile.css";
import { Link, useParams } from "react-router-dom";
import SideNavbar from "../../Components/Side-Navbar/SideNavbar";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import axios from "axios";

const Profile = ({ sideNavbar }) => {
  const { username } = useParams(); // assuming route like /profile/:username
  const [userData, setUserData] = useState({});
  const [userVideos, setUserVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await axios.get(`https://youtube-ujja.onrender.com/user/${username}`);
        const videoRes = await axios.get(`https://youtube-ujja.onrender.com/video/user/${username}`);

        setUserData(userRes.data);
        setUserVideos(videoRes.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchData();
  }, [username]);

  return (
    <div className="profile">
      <SideNavbar sideNavbar={sideNavbar} />

      <div className={sideNavbar ? "profile_page" : "profile_page_inactive"}>
        <div className="profile-top-section">
          <div className="profile-top-section-profile">
            <img
              src={userData?.profilePic || "/default-profile.png"}
              alt="profile"
              className="profile-top-section-img"
            />
          </div>
          <div className="profile_top_section_About">
            <div className="profile_top_section_About_Name">{userData?.channelName || "Channel Name"}</div>
            <div className="profile-top-section-info">
              @{userData?.userName} · {userVideos.length} videos
            </div>
            <div className="profile_top_section_info">{userData?.about || "No bio available."}</div>
          </div>
        </div>

        <div className="profile_videos">
          <div className="profile_videos_title">
            Videos &nbsp; <ArrowRightIcon />
          </div>

          <div className="profileVideos">
            {userVideos.length > 0 ? (
              userVideos.map((video) => (
                <Link to={`/watch/${video._id}`} key={video._id} className="profileVideo_block">
                  <div className="profileVideo_block_thumbnail">
                    <img src={video.thumbnail} alt="thumbnail" className="profileVideo_block_thumbnail_img" />
                  </div>
                  <div className="profileVideo_block_detail">
                    <div className="profileVideo_block_detail_name">{video.title}</div>
                    <div className="profileVideo_block_detail_about">
                      Created at {new Date(video.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p style={{ color: "gray", padding: "1rem" }}>No videos uploaded yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
