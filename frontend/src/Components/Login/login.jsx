import React from 'react'
import './login.css'
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Login = ({setLoginModal}) => {

const [loginField,setLoginField] = useState({"userName":"","password":""})

const handleOnChangeInput = (event,name) =>{
    setLoginField({
        ...loginField,[name]:event.target.value
    })
}

  return (
    <div className='login'>
      <div className="login_card">
        <div className="titleCard_login">
            <YouTubeIcon sx={{fontSize:'54px',color:'red'}} className='login_youtubeImage'/>
        Login
        </div>
        <div className="loginCredentials">
            <div className="userNameLogin">
                <input type="text" placeholder='UserName' value={loginField.userName} onChange={(e)=>handleOnChangeInput(e,"userName")} className="userNameLoginUserName" />
            </div>

            <div className="userNameLogin">
                <input type="password" placeholder='Password' value={loginField.password} onChange={(e)=>handleOnChangeInput(e,"password")} className="userNameLoginUserName" />
            </div>
        </div>
        <div className="login_buttons">
            <div className="login-btn">Login</div>
            <Link to={'/signup'} className="login-btn" onClick={()=>setLoginModal()}>Signup</Link>
            <div className="login-btn" onClick={()=>setLoginModal()}>Cancle</div>
        </div>
      </div>
      
    </div>
  )
}

export default Login
