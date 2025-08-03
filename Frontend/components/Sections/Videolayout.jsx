import {useNavigate} from "react-router-dom"
import moment from 'moment';
import formatters from "../../Utlis.js/formatters";
// This function component is used for structuring the thumbnail and the video details shown on the homepage 
export default function Videolayout(props){

// If the user clicks on the channel name then the page will navigate to the channel name else it will navigate to the videoPage
    const Navigate = useNavigate();
    const handleClick=(e)=>{
    const isChannelClick = e.target.classList.contains("channel-name");
    if (isChannelClick){
        Navigate("/Channel")
    }
    else{
      // will send the video details the user has clicked on via props 
      // checks for the videoId if it is in object form or is directly in string argument
      const videoId = props.video.id?.videoId || props.video.id;
      // passes the video details to VideoPage
      Navigate(`/VideoPage/${videoId}`, { state: { video: props.video } });

    }
    }

    return(
        <div className="thumbnail_card" onClick={handleClick}>
           <img src={props.video.snippet.thumbnails.medium.url} alt="" className="thumbnail_image"/>
            <div className="video-thumbnail-desc">
         <p className="thumbnail_title">{props.video.snippet.title}</p>
           <p className="channel-name">{props.video.snippet.channelTitle}</p>
           <p className="channel-views">{formatters(props.video.statistics?.viewCount)} views &bull; {moment(props.video.snippet.publishedAt).fromNow()}</p>
    
        </div> 
           
        </div>
    )
}