import React, { useEffect, useState } from 'react';
import './video.css';
import { Link, useParams } from 'react-router-dom';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import axios from 'axios';

const Video = () => {
  const { id } = useParams(); // video ID from route
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState([]);
  const [message, setMessage] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Fetch video data
  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const res = await axios.get(`https://youtube-ujja.onrender.com/api/video/find/${id}`);
        setVideo(res.data);
      } catch (err) {
        console.log('Error loading video:', err);
      }
    };

    const fetchComments = async () => {
      try {
        const res = await axios.get(`https://youtube-ujja.onrender.com/api/comment/${id}`);
        setComments(res.data);
      } catch (err) {
        console.log('Error loading comments:', err);
      }
    };

    const fetchSuggestions = async () => {
      try {
        const res = await axios.get('https://youtube-ujja.onrender.com/api/video/random');
        setSuggestions(res.data);
      } catch (err) {
        console.log('Error loading suggestions:', err);
      }
    };

    fetchVideo();
    fetchComments();
    fetchSuggestions();
  }, [id]);

  const handleCommentSubmit = async () => {
    try {
      await axios.post(`https://youtube-ujja.onrender.com/api/comment/${id}`, {
        comment: message,
      }, {
        withCredentials: true
      });
      setMessage('');
      // refresh comments
      const res = await axios.get(`https://youtube-ujja.onrender.com/api/comment/${id}`);
      setComments(res.data);
    } catch (err) {
      console.log('Comment failed:', err);
    }
  };

  if (!video) return <div>Loading...</div>;

  return (
    <div className='video'>
      <div className="videoPostSection">
        <div className="video-youtube">
          <video width="400" controls autoPlay className='video-youtube-player'>
            <source src={video.videoUrl} type='video/mp4' />
            Not supported
          </video>
        </div>

        <div className="video-youtubeAbout">
          <div className="video-utubeTitle">{video.title}</div>

          <div className="youtube-video-profileBlock">
            <div className="youtube-video-profileBlock-left">
              <Link to={`/user/${video.userId}`} className="utube-video-profile-left-img">
                <img src={video.profilePic} alt="channel" className="utube-video-profile-left-image" />
              </Link>
              <div className="youtube-sub">
                <Link to={`/user/${video.userId}`} className="user">{video.channelName}</Link>
                <div className="date">{new Date(video.createdAt).toLocaleDateString()}</div>
              </div>
              <div className="subBtnYoutube">Subscribe</div>
            </div>

            <div className="youtube-video-likeblock">
              <div className="video-like">
                <ThumbUpIcon />
                <div className="number-like">{video.likes.length}</div>
              </div>
              <div className="divider"></div>
              <div className="video-dislike">
                <ThumbDownIcon />
              </div>
            </div>
          </div>

          <div className="youtube-video-about">
            <div>{new Date(video.createdAt).toLocaleDateString()}</div>
            <div>{video.desc}</div>
          </div>
        </div>

        <div className="utube-comment-section">
          <div className="comment-sectionTitle">{comments.length} comments</div>
          <div className="youtube-SelfComment">
            <img src="" alt="" className="video-selfcommentProfile" />
            <div className="addComment">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Add a comment'
                className="addInputComment"
              />
              <div className="canclesumbitcommit">
                <div className="cancle" onClick={() => setMessage('')}>Cancel</div>
                <div className="cancle" onClick={handleCommentSubmit}>Comment</div>
              </div>
            </div>
          </div>

          <div className="youtube-othersComment">
            {comments.map((comment) => (
              <div className="youtube-SelfComment" key={comment._id}>
                <img src={comment.profilePic} alt="user" className="video-selfcommentProfile" />
                <div className="others-commentSection">
                  <div className="others-commentSectionHeader">
                    <div className="channelName-comment">{comment.userName}</div>
                    <div className="commentTimingsOthers">{new Date(comment.createdAt).toLocaleDateString()}</div>
                  </div>
                  <div className="otherCommentSectionComment">{comment.comment}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="videoSuggestions">
        {suggestions.map((item) => (
          <Link to={`/video/${item._id}`} className="videoSuggestionsBlock" key={item._id}>
            <div className="video-suggestion-thumbnail">
              <img src={item.thumbnail} alt="thumb" className="video-suggestion-thumbnail-img" />
            </div>
            <div className="video-suggestions-about">
              <div className="video-suggestion-about-title">{item.title}</div>
              <div className="video-suggestions-about-profile">{item.channelName}</div>
              <div className="video-suggestions-about-profile">{item.views} views • {new Date(item.createdAt).toLocaleDateString()}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Video;
