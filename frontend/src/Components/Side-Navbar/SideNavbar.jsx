import React from 'react'
import './SideNavbar.css'
import HomeIcon from '@mui/icons-material/Home';
import VideocamIcon from '@mui/icons-material/Videocam';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import HistoryIcon from '@mui/icons-material/History';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ContentCutIcon from '@mui/icons-material/ContentCut';

function SideNavbar({sideNavbar}) {
  return (
    <div className={sideNavbar ? 'home-sideNavbar' : 'home-sideNavbarHide'}>

      <div className="home-sideNavbarTop">

        <div className={`home-sideNavbarTopOption`}>
          <HomeIcon/>
          <div className="home-sideNavbarTopOptionTitle">Home </div>
        </div>

        <div className={`home-sideNavbarTopOption`}>
          <VideocamIcon/>
          <div className="home-sideNavbarTopOptionTitle">Shorts </div>
        </div>

        <div className={`home-sideNavbarTopOption`}>
          <SubscriptionsIcon/>
          <div className="home-sideNavbarTopOptionTitle">Subscription </div>
        </div>

      </div>

      <div className="home-sideNavbarMiddle">
        
        <div className={`home-sideNavbarTopOption`}>
          <div className="home-sideNavbarTopOptionTitle">You </div>
          <KeyboardArrowRightIcon/>
        </div>

        <div className={`home-sideNavbarTopOption`}>
          <RecentActorsIcon/>
          <div className="home-sideNavbarTopOptionTitle">Your Channel </div>
        </div>

        <div className={`home-sideNavbarTopOption`}>
          <HistoryIcon/>
          <div className="home-sideNavbarTopOptionTitle">History </div>
        </div>

        <div className={`home-sideNavbarTopOption`}>
          <PlaylistAddIcon/>
          <div className="home-sideNavbarTopOptionTitle">Playlists </div>
        </div>

        <div className={`home-sideNavbarTopOption`}>
          <SmartDisplayIcon/>
          <div className="home-sideNavbarTopOptionTitle">Your videos </div>
        </div>

        <div className={`home-sideNavbarTopOption`}>
          <WatchLaterIcon/>
          <div className="home-sideNavbarTopOptionTitle">Watch later </div>
        </div>

        <div className={`home-sideNavbarTopOption`}>
          <ThumbUpIcon/>
          <div className="home-sideNavbarTopOptionTitle">Liked videos </div>
        </div>

        <div className={`home-sideNavbarTopOption`}>
          <ContentCutIcon/>
          <div className="home-sideNavbarTopOptionTitle">Your clips </div>
        </div>

      </div>

      <div className="home-sideNavbarMiddle">

        <div className={`home-sideNavbarTopOption`}>
          <div className="home-sideNavbarTopOptionTitleHeader">Subscription </div>
        </div>

        <div className={`home-sideNavbarTopOption`}>
          <img src="" alt="" className="home-sideNavbar-ImgLogo" />
          <div className="home-sideNavbarTopOptionTitleHeader"> </div>
        </div>

        <div className={`home-sideNavbarTopOption`}>
          <img src="" alt="" className="home-sideNavbar-ImgLogo" />
          <div className="home-sideNavbarTopOptionTitleHeader"> </div>
        </div>

        <div className={`home-sideNavbarTopOption`}>
          <img src="" alt="" className="home-sideNavbar-ImgLogo" />
          <div className="home-sideNavbarTopOptionTitleHeader"> </div>
        </div>



      </div>

    </div>
  )
}

export default SideNavbar
