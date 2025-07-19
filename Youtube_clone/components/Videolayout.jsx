import {useNavigate} from "react-router-dom"
export default function Videolayout(){
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
           <img src="./pexels.jpg" alt="" className="thumbnail_image" />
            <div className="video-desc">
         <p className="thumbnail_title"> How to make robots realistic in an amazing ways</p>
           <p className="channel-name">GreatStack</p>
           <p className="channel-views">99k views &bull; 2 days ago</p>
        
        </div> 
           
        </div>
    )
}