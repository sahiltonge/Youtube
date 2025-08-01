import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

function HomePage({sideNavbar}) {
  const options = [
    "All",
    "Trending",
    "Music",
    "Gaming",
    "News",
    "Live",
    "Movies",
    "Sports",
    "Fashion & Beauty",
    "Learning",
    "Podcasts",
    "Technology",
    "Comedy",
    "Entertainment",
    "Documentary",
    "Science",
    "Travel",
    "Food",
    "Cars",
    "Health",
    "Kids",
    "History",
  ];

  return (
    <div className={sideNavbar ? "homePage" : 'fullHomePage'}>
      <div className="homePage-options">
        {options.map((item, index) => {
          return (
            <div key={index} className="homePage-option">
              {item}
            </div>
          );
        })}
      </div>

      <div className={sideNavbar ? "home-mainPage" : "home-mainPageWithoutSidebar"}>

        <Link to={'/watch/:id'} className="youtube-Video">
           <div className="youtube-thumbnailBox">
             <img src="" alt="thumbnail" className="youtube-thumbnailPic" />
             <div className="youtube-timingThumbnial">
                28
             </div>
           </div>

           <div className="youtube-TitleBox">
            <div className="youtubeTitleBoxProfile">
                <img src="" alt="Profile" className="youtube-thumbnail-profile" />
            </div>
            <div className="youtubetitleBox-Title">
                <div className="youtube-videotitle">Title</div>
                <div className="youtube-channelName">channel</div>
                <div className="youtube-views">view</div>
            </div>
           </div>
        </Link>

        <Link to={'/watch/:id'} className="youtube-Video">
           <div className="youtube-thumbnailBox">
             <img src="" alt="thumbnail" className="youtube-thumbnailPic" />
             <div className="youtube-timingThumbnial">
                28
             </div>
           </div>

           <div className="youtube-TitleBox">
            <div className="youtubeTitleBoxProfile">
                <img src="" alt="Profile" className="youtube-thumbnail-profile" />
            </div>
            <div className="youtubetitleBox-Title">
                <div className="youtube-videotitle">Title</div>
                <div className="youtube-channelName">channel</div>
                <div className="youtube-views">view</div>
            </div>
           </div>
        </Link>

        <Link to={'/watch/:id'} className="youtube-Video">
           <div className="youtube-thumbnailBox">
             <img src="" alt="thumbnail" className="youtube-thumbnailPic" />
             <div className="youtube-timingThumbnial">
                28
             </div>
           </div>

           <div className="youtube-TitleBox">
            <div className="youtubeTitleBoxProfile">
                <img src="" alt="Profile" className="youtube-thumbnail-profile" />
            </div>
            <div className="youtubetitleBox-Title">
                <div className="youtube-videotitle">Title</div>
                <div className="youtube-channelName">channel</div>
                <div className="youtube-views">view</div>
            </div>
           </div>
        </Link>

        <Link to={'/watch/:id'} className="youtube-Video">
           <div className="youtube-thumbnailBox">
             <img src="" alt="thumbnail" className="youtube-thumbnailPic" />
             <div className="youtube-timingThumbnial">
                28
             </div>
           </div>

           <div className="youtube-TitleBox">
            <div className="youtubeTitleBoxProfile">
                <img src="" alt="Profile" className="youtube-thumbnail-profile" />
            </div>
            <div className="youtubetitleBox-Title">
                <div className="youtube-videotitle">Title</div>
                <div className="youtube-channelName">channel</div>
                <div className="youtube-views">view</div>
            </div>
           </div>
        </Link>

        <Link to={'/watch/:id'} className="youtube-Video">
           <div className="youtube-thumbnailBox">
             <img src="" alt="thumbnail" className="youtube-thumbnailPic" />
             <div className="youtube-timingThumbnial">
                28
             </div>
           </div>

           <div className="youtube-TitleBox">
            <div className="youtubeTitleBoxProfile">
                <img src="" alt="Profile" className="youtube-thumbnail-profile" />
            </div>
            <div className="youtubetitleBox-Title">
                <div className="youtube-videotitle">Title</div>
                <div className="youtube-channelName">channel</div>
                <div className="youtube-views">view</div>
            </div>
           </div>
        </Link>

        <Link to={'/watch/:id'} className="youtube-Video">
           <div className="youtube-thumbnailBox">
             <img src="" alt="thumbnail" className="youtube-thumbnailPic" />
             <div className="youtube-timingThumbnial">
                28
             </div>
           </div>

           <div className="youtube-TitleBox">
            <div className="youtubeTitleBoxProfile">
                <img src="" alt="Profile" className="youtube-thumbnail-profile" />
            </div>
            <div className="youtubetitleBox-Title">
                <div className="youtube-videotitle">Title</div>
                <div className="youtube-channelName">channel</div>
                <div className="youtube-views">view</div>
            </div>
           </div>
        </Link>



        

      </div>



    </div>
  );
}

export default HomePage;
