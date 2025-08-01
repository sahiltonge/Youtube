import React, { useState } from 'react';
import './signup.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();

  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const [signUpField, setSignUpField] = useState({
    channelName: '',
    userName: '',
    password: '',
    about: '',
    profilePic: ''
  });

  const handleInputField = (event, name) => {
    setSignUpField({
      ...signUpField,
      [name]: event.target.value
    });
  };

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'youtube-clone');

    try {
      const response = await axios.post('https://api.cloudinary.com/v1_1/dojvm3yyg/image/upload', data);
      const imageUrl = response.data.url;
      setUploadedImageUrl(imageUrl);
      setSignUpField({ ...signUpField, profilePic: imageUrl });
    } catch (err) {
      console.log('Image upload error:', err);
    }
  };

  const handleSignUp = async () => {
    try {
      const res = await axios.post('https://youtube-ujja.onrender.com/api/auth/signup', signUpField);
      alert('Signup Successful');
      navigate('/login');
    } catch (err) {
      alert(err.response?.data?.error || 'Signup Failed');
    }
  };

  return (
    <div className='signup'>
      <div className="signup_card">
        <div className="signUp_title">
          <YouTubeIcon sx={{ fontSize: '54px', color: 'red' }} className='login_youtubeImage' />
          Signup
        </div>

        <div className="signUp_Inputs">
          <input value={signUpField.channelName} onChange={(e) => handleInputField(e, 'channelName')} type="text" placeholder='Channel Name' className="signUP_Inputs_inp" />
          <input value={signUpField.userName} onChange={(e) => handleInputField(e, 'userName')} type="text" placeholder='User Name' className="signUP_Inputs_inp" />
          <input value={signUpField.password} onChange={(e) => handleInputField(e, 'password')} type="password" placeholder='Password' className="signUP_Inputs_inp" />
          <input value={signUpField.about} onChange={(e) => handleInputField(e, 'about')} type="text" placeholder='About Your Channel' className="signUP_Inputs_inp" />

          <div className="image_upload_signup">
            <input type="file" onChange={(e) => uploadImage(e)} />
            <div className="image_upload_signup_div">
              {uploadedImageUrl && <img src={uploadedImageUrl} alt="profile" className="image_default_signUp" />}
            </div>
          </div>

          <div className="signUpBtns">
            <div className="signUpBtn" onClick={handleSignUp}>SignUp</div>
            <Link to={'/'} className="signUpBtn">Home Page</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
