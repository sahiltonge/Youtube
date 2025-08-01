import React, { useState } from 'react';
import './login.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({ setLoginModal }) => {
  const [loginField, setLoginField] = useState({ userName: '', password: '' });
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleOnChangeInput = (event, name) => {
    setLoginField({ ...loginField, [name]: event.target.value });
  };

  const handleLogin = async () => {
    if (!loginField.userName || !loginField.password) {
      setErrorMsg('Please fill all fields');
      return;
    }

    try {
      const res = await axios.post('http://localhost:8000/api/auth/login', loginField); // Update if your backend URL differs
      console.log('Login successful:', res.data);

      // Example: storing token/local user data
      localStorage.setItem('userToken', res.data.token); // Optional
      localStorage.setItem('userData', JSON.stringify(res.data.user)); // Optional

      setLoginModal(false); // Close modal
      navigate('/'); // Redirect to homepage or dashboard
    } catch (err) {
      console.error('Login failed:', err);
      setErrorMsg(err?.response?.data?.error || 'Login failed. Try again.');
    }
  };

  return (
    <div className="login">
      <div className="login_card">
        <div className="titleCard_login">
          <YouTubeIcon sx={{ fontSize: '54px', color: 'red' }} className="login_youtubeImage" />
          <span>Login</span>
        </div>

        <div className="loginCredentials">
          <div className="userNameLogin">
            <input
              type="text"
              placeholder="Username"
              value={loginField.userName}
              onChange={(e) => handleOnChangeInput(e, 'userName')}
              className="userNameLoginUserName"
            />
          </div>
          <div className="userNameLogin">
            <input
              type="password"
              placeholder="Password"
              value={loginField.password}
              onChange={(e) => handleOnChangeInput(e, 'password')}
              className="userNameLoginUserName"
            />
          </div>
        </div>

        {errorMsg && <p className="login_error">{errorMsg}</p>}

        <div className="login_buttons">
          <div className="login-btn" onClick={handleLogin}>Login</div>
          <Link to="/signup" className="login-btn" onClick={() => setLoginModal(false)}>Signup</Link>
          <div className="login-btn" onClick={() => setLoginModal(false)}>Cancel</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
