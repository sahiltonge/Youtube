import React from "react";
import './App.css'
import { useState } from "react";
import { Route,Routes } from "react-router-dom";

import Navbar from "./Components/Navbar/navbar";
import Home from "./Pages/Home/home";
import Video from "./Pages/Video/video";
import Profile from "./Pages/Profile/profile";
import VideoUpload from "./Pages/VideoUpload/videoupload";
import Signup from "./Pages/Signup/signup";

function App(){

  const [sideNavbar,setsideNavbar] = useState(true)

  const setsideNavbarFunc=(value)=>{
    setsideNavbar(value)

  }

return(
  <div className="App">
    <Navbar setsideNavbarFunc={setsideNavbarFunc} sideNavbar={sideNavbar}/>
    <Routes>
      <Route path="/" element={<Home sideNavbar={sideNavbar}/>}/>
      <Route path="/watch/:id" element={<Video/>}/>
      <Route path="/user/:id" element={<Profile sideNavbar={sideNavbar}/>}/>
      <Route path="/:id/upload" element={<VideoUpload/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    
  </div>
)

}



export default App;