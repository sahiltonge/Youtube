import React from "react";
import "./profile.css";
import { Link } from "react-router-dom";
import SideNavbar from "../../Components/Side-Navbar/SideNavbar";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Profile = (sideNavbar) => {
  return (
    <div className="profile">
      <SideNavbar sideNavbar={sideNavbar} />

      <div className={sideNavbar ?"profile_page":"profile_page_inactive"}>
        <div className="profile-top-section">
          <div className="profile-top-section-profile">
            <img src="" alt="" className="profile-top-section-img" />
          </div>
          <div className="profile_top_section_About">
            <div className="profile_top_section_About_Name">codingH</div>
            <div className="profile-top-section-info">@user1 .4 videos</div>
            <div className="profile_top_section_info">about section</div>
          </div>
        </div>

        <div className="profile_videos">
          <div className="profile_videos_title">
            Videos &nbsp; <ArrowRightIcon />
          </div>
          <div className="profileVideos">

            {/* div for a video */}
            <Link to={'/watch/:id'} className="profileVideo_block">
                <div className="profileVideo_block_thumbnail">
                    <img src="" alt="" className="profileVideo_block_thumbnail_img" />
                </div>

                <div className="profileVideo_block_detail">
                    <div className="profileVideo_block_detail_name">Video title</div>
                    <div className="profileVideo_block_detail_about">created at 2024-9-8</div>
                </div>

            </Link>

             {/* div for a video */}
            <Link to={'/watch/:id'} className="profileVideo_block">
                <div className="profileVideo_block_thumbnail">
                    <img src="" alt="" className="profileVideo_block_thumbnail_img" />
                </div>

                <div className="profileVideo_block_detail">
                    <div className="profileVideo_block_detail_name">Video title</div>
                    <div className="profileVideo_block_detail_about">created at 2024-9-8</div>
                </div>

            </Link>

             

          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
