import formatters from "../../Utlis.js/formatters";
import { Link } from "react-router";
import moment from "moment";
// Contains the code for displaying the video player, and even about the channel
export default function VideoPlayer({video, channelData}){
    const videoId = video.id?.videoId || video.id;

    return(<>
     <div className="video-container">
     <iframe
        className="video-display"
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title={video.snippet.title}
        allowFullScreen
         allow="autoplay; encrypted-media"
      ></iframe>

    </div>
     <div className="video-desc">
        <h2 className="video-title">{video.snippet.title}</h2>
        <div className="video-info">
            
            <div className="about-channel">
            <Link to ="/Channel">
           <img src={channelData?channelData.snippet.thumbnails.medium.url:"pexels.jpg"} alt="" className="channel-logo" />
            </Link>    
            <div className="channel-info">
                <Link to ="/Channel">
                <p className="videoPlayer-channel-name">{video.snippet.channelTitle}</p>
                </Link>
                <p className="channel-views">{formatters(channelData?channelData.statistics?.viewCount:"4k")} Subscribers</p>
                </div>
            </div>
          
            <button className="Subscribe-button">Subscribe</button>
            <div className="Like-dislike">
             <div className="Like-button">  
            <i className="fa-regular fa-thumbs-up"></i>
            <p className="Like-count">{formatters(video.statistics?.likeCount)}</p>
                </div> 
                 <div className="divider" />
            <i className="disLike-button fa-regular fa-thumbs-down"></i>
            </div>
         
            <div className="Share-Button">
                <i className="fa-solid fa-share"></i>
                <p className="share-text">Share</p>
            </div>
           
        <i className="fa-solid fa-ellipsis three-dots"></i>
        </div>
        <div className="More-about">
            <div className="More-about-details">
                <p className="More-about-views">{formatters(video.statistics?.viewCount)} views</p>
                <p className="More-about-date">{moment(video.snippet.publishedAt).fromNow()}</p>
            </div>
            <p className="More-about-text">{video.snippet.description}</p>
        </div>
    </div>
    </>)
}