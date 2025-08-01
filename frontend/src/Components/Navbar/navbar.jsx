import React, { useEffect, useState } from 'react';
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import Login from '../Login/login';
import axios from 'axios';

const BASE_URL = 'https://youtube-ujja.onrender.com';

const Navbar = ({ setsideNavbarFunc, sideNavbar }) => {
  const [user, setUser] = useState(null);
  const [navbarModal, setNavbarModal] = useState(false);
  const [login, setLogin] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Load user on mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) return;

        const res = await axios.get(`${BASE_URL}/api/user/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
      } catch (err) {
        console.error('User fetch failed:', err.message);
      }
    };

    fetchUser();
  }, []);

  const handleClickModal = () => {
    setNavbarModal((prev) => !prev);
  };

  const sideNavbarFunc = () => {
    setsideNavbarFunc(!sideNavbar);
  };

  const handleProfile = () => {
    navigate(`/user/${user?._id}`);
    setNavbarModal(false);
  };

  const setLoginModal = () => {
    setLogin(false);
  };

  const onClickOfPopUpOption = (action) => {
    setNavbarModal(false);

    if (action === 'login') {
      setLogin(true);
    } else if (action === 'logout') {
      localStorage.removeItem('token');
      setUser(null);
      navigate('/');
    }
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="navbarHamberger" onClick={sideNavbarFunc}>
          <MenuIcon sx={{ color: 'white' }} />
        </div>
        <Link to={'/'} className="navbar-youtubeImg">
          <YouTubeIcon sx={{ fontSize: '34px', color: 'red' }} className="nav-youtubeImage" />
          <div className="navbar-youtubeTitle">YouTube</div>
        </Link>
      </div>

      <div className="navbar-middle">
        <div className="navbar-searchbox">
          <input
            type="text"
            placeholder="Search"
            className="navbar-searchbox-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
          />
          <div className="navbar-searchIconBox">
            <SearchIcon sx={{ fontSize: '28px', color: 'white' }} />
          </div>
        </div>
        <div className="navbar-mic">
          <KeyboardVoiceIcon sx={{ color: 'white' }} />
        </div>
      </div>

      <div className="navbar-right">
        {user && (
          <Link to={`/${user._id}/upload`}>
            <VideoCallIcon sx={{ fontSize: '30px', cursor: 'pointer', color: 'white' }} />
          </Link>
        )}
        <NotificationsIcon sx={{ fontSize: '30px', cursor: 'pointer', color: 'white' }} />

        <img
          onClick={handleClickModal}
          src={user?.profilePic || 'https://i.ibb.co/2FsfXqM/default-user.png'}
          alt="User"
          className="navbar-right-logo"
        />

        {navbarModal && (
          <div className="navbar-modal">
            {user ? (
              <>
                <div className="navbar-modal-option" onClick={handleProfile}>
                  Profile
                </div>
                <div
                  className="navbar-modal-option"
                  onClick={() => onClickOfPopUpOption('logout')}
                >
                  Logout
                </div>
              </>
            ) : (
              <div
                className="navbar-modal-option"
                onClick={() => onClickOfPopUpOption('login')}
              >
                Login
              </div>
            )}
          </div>
        )}
      </div>

      {login && <Login setLoginModal={setLoginModal} />}
    </div>
  );
};

export default Navbar;
