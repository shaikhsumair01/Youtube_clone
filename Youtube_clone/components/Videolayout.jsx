import {useNavigate} from "react-router-dom"
// This function component is used for structuring the thumbnail and the video details shown on the homepage 
export default function Videolayout(props){

    const originalDate = new Date(props.video.snippet.publishedAt);  // The date we get from the api is in ISO format
const now = new Date();  // We retrieve the Current time

// calculate the difference in the time
const diffMilliseconds = now - originalDate;
const diffSeconds = Math.floor(diffMilliseconds / 1000);
const diffMinutes = Math.floor(diffSeconds / 60);
const diffHours = Math.floor(diffMinutes / 60);
const diffDays = Math.floor(diffHours / 24);
const diffMonths = Math.floor(diffDays / 30)
const diffYears = Math.floor(diffMonths / 12);

let timeAgo;
// setting timeAgo variable 
if (diffYears > 0) {
  timeAgo = `${diffYears} year${diffYears > 1 ? 's' : ''} ago`;
}else if(diffMonths>0){
    timeAgo = `${diffMonths} month${diffMonths> 1 ? "s" :""} ago`;
} 
else if (diffDays > 0) {
  timeAgo = `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
} else if (diffHours > 0) {
  timeAgo = `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
} else if (diffMinutes > 0) {
  timeAgo = `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`;
} else {
  timeAgo = `just now`;
}


// If the user clicks on the channel name then the page will navigate to the channel name else it will navigate to the videoPage
    const Navigate = useNavigate();
    const handleClick=(e)=>{
    const isChannelClick = e.target.classList.contains("channel-name");
    if (isChannelClick){
        Navigate("/Channel")
    }
    else{
        Navigate("/VideoPage")
    }
    }

    return(
        <div className="thumbnail_card" onClick={handleClick}>
           <img src={props.video.snippet.thumbnails.high.url} alt="" className="thumbnail_image"/>
            <div className="video-thumbnail-desc">
         <p className="thumbnail_title">{props.video.snippet.title}</p>
           <p className="channel-name">{props.video.snippet.channelTitle}</p>
           <p className="channel-views">{Math.trunc(Math.random()*200)}k views &bull; {timeAgo}</p>
        
        </div> 
           
        </div>
    )
}