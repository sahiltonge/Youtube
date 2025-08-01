import React from 'react'
import "./video.css"
import { Link } from 'react-router-dom';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { useState } from 'react';

const Video = () => {

    const [message,setMessage] = useState('')

  return (
    <div className='video'>
      <div className="videoPostSection">
        <div className="video-youtube">
            <video width="400" controls autoPlay className='video-youtube-player'>

                <source src={''} type='video/mp4'/>
                <source src={''} type='video/webm'/>

                not  support

            </video>
        </div>

        <div className="video-youtubeAbout">
            <div className="video-utubeTitle">{'for begineer'}</div>
            <div className="youtube-video-profileBlock">
                <div className="youtube-video-profileBlock-left">
                    <Link to={'/user/:id'} className="utube-video-profile-left-img">
                        <img src="" alt="" className="utube-video-profile-left-image" />
                    </Link>
                    <div className="youtube-sub">
                        <Link to={'/user/:id'} className="user">user1</Link>
                        <div className="date">34-43-344</div>
                    </div>
                    <div className="subBtnYoutube">Subscribe</div>
                </div>

                <div className="youtube-video-likeblock">
                    <div className="video-like"><ThumbUpIcon/><div className="number-like">{32}</div></div>
                    <div className="divider"></div>
                    <div className="video-dislike"><ThumbDownIcon/></div>
                </div>


            </div>
            <div className="youtube-video-about">
                <div>2024-23-24</div>
                <div> Description</div>
            </div>

        </div>

        <div className="utube-comment-section">
            <div className="comment-sectionTitle"> 2 comment</div>
            <div className="youtube-SelfComment">
                <img src="" alt="" className="video-selfcommentProfile" />
                <div className="addComment">
                    <input type="text"value={message} onChange={(e)=>{setMessage(e.target.value)}} placeholder='Add a comment' className="addInputComment" />
                    <div className="canclesumbitcommit">
                        <div className="cancle">Cancle</div>
                        <div className="cancle">Comment</div>
                    </div>
                </div>
            </div>

             <div className="youtube-othersComment">

                <div className="youtube-SelfComment">
                <img src="" alt="" className="video-selfcommentProfile" />
                <div className="others-commentSection">
                    <div className="others-commentSectionHeader">
                    <div className="channelName-comment">UserName</div>
                    <div className="commentTimingsOthers">2025-4-4</div>
                    </div>
                    <div className="otherCommentSectionComment">
                        This is the cool web app project
                    </div>
                </div>
                </div>

                <div className="youtube-SelfComment">
                <img src="" alt="" className="video-selfcommentProfile" />
                <div className="others-commentSection">
                    <div className="others-commentSectionHeader">
                    <div className="channelName-comment">UserName</div>
                    <div className="commentTimingsOthers">2025-4-4</div>
                    </div>
                    <div className="otherCommentSectionComment">
                        This is the cool web app project
                    </div>
                </div>
                </div>

                <div className="youtube-SelfComment">
                <img src="" alt="" className="video-selfcommentProfile" />
                <div className="others-commentSection">
                    <div className="others-commentSectionHeader">
                    <div className="channelName-comment">UserName</div>
                    <div className="commentTimingsOthers">2025-4-4</div>
                    </div>
                    <div className="otherCommentSectionComment">
                        This is the cool web app project
                    </div>
                </div>
                </div>

                
             </div>
        </div>
      </div>

      <div className="videoSuggestions">
        <div className="videoSuggestionsBlock">
            <div className="video-suggestion-thumbnail">
                <img src="" alt="" className="video-suggestion-thumbnail-img" />
            </div>

            <div className="video-suggestions-about">
                <div className="video-suggestion-about-title">
                    it is a title
                </div>
                <div className="video-suggestions-about-profile">Profile</div>
                <div className="video-suggestions-about-profile">view and day</div>
            </div>
        </div>

        <div className="videoSuggestionsBlock">
            <div className="video-suggestion-thumbnail">
                <img src="" alt="" className="video-suggestion-thumbnail-img" />
            </div>

            <div className="video-suggestions-about">
                <div className="video-suggestion-about-title">
                    it is a title
                </div>
                <div className="video-suggestions-about-profile">Profile</div>
                <div className="video-suggestions-about-profile">view and day</div>
            </div>
        </div>

        <div className="videoSuggestionsBlock">
            <div className="video-suggestion-thumbnail">
                <img src="" alt="" className="video-suggestion-thumbnail-img" />
            </div>

            <div className="video-suggestions-about">
                <div className="video-suggestion-about-title">
                    it is a title
                </div>
                <div className="video-suggestions-about-profile">Profile</div>
                <div className="video-suggestions-about-profile">view and day</div>
            </div>
        </div>

        <div className="videoSuggestionsBlock">
            <div className="video-suggestion-thumbnail">
                <img src="" alt="" className="video-suggestion-thumbnail-img" />
            </div>

            <div className="video-suggestions-about">
                <div className="video-suggestion-about-title">
                    it is a title
                </div>
                <div className="video-suggestions-about-profile">Profile</div>
                <div className="video-suggestions-about-profile">view and day</div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Video
