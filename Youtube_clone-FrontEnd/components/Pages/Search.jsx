import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import formatters from "../../Utlis.js/formatters";
import moment from "moment";
export default function Search(){
    const { searchId } = useParams();
   const [videos, setVideos] = useState([])
    useEffect(()=>{
        if(searchId){
            const fetchOnSearch = async()=>{
                try{
                    const data = import.meta.env.VITE_Youtube_Api_key;  
                    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${searchId}&key=${data} `)
                    const result = await response.json();
                    console.log(result)
                    const items = result.items;
                  const videoItems = items.filter(item => item.id.kind === "youtube#video");
                    setVideos(videoItems)
                }
                catch(error){
                    console.error("Couldn't get the data", error)
                }
            }
            fetchOnSearch();
        };
    }, [searchId])
 const Navigate = useNavigate();
    const handleClick=(video,e)=>{
        console.log(e)
    const isChannelClick = e.target.classList.contains("channel-name");
    if (isChannelClick){
        Navigate("/Channel")
    }
    else{
      // will send the video details the user has clicked on via props 
      // checks for the videoId if it is in object form or is directly in string argument
      const videoId = video.id?.videoId || video.id;
      // passes the video details to VideoPage
      Navigate(`/VideoPage/${videoId}`, { state: { video } });

    }
    }

    return(
        <div className="search-video-list-wrapper">
        {
            videos.map(video=>{
                return(
                    <div className="Search-Container" onClick={(e) => handleClick(video, e)}>
                       <div className="Search-result">
                        <img src={video.snippet.thumbnails.high.url} alt="" className="Search-thumbnail"/>
                        <div className="Search-info">
                         <h2 className="Search-title">{video.snippet.title}</h2>
                         <p className="channel-views">{formatters(Math.floor(Math.random() * 90000 + 10000))} views &bull; {moment(video.snippet.publishedAt).fromNow()}</p>
                        <p className="channel-name">{video.snippet.channelTitle}</p>
                        <p className="search-description">{video.snippet.description}</p>
                        </div>
                         <i className="fa-solid fa-ellipsis-vertical"></i>
                        </div> 
                    </div>
                )
            })
        }
        </div>
    )
}