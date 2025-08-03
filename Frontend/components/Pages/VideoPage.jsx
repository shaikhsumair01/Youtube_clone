import VideoPlayer from "../Sections/VideoPlayer"
import CommentSection from "../Sections/CommentSection"
import RecommendedVideos from "../Sections/RecomendedVideos"
import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Error from "./Error";
// Used for structuring of the videoPage. Acts as a endpoint of VideoPlayer, CommentSection and RecommendedVideos
export default function VideoPage(){
    // gets the current page location
    const location = useLocation();
    // Fetches through dynamic url
    const { videoId } = useParams();

    // for videoPlayer 
// Will show the video if the state has video or will return null
const [video, setVideo] = useState(location.state?.video || null);
// for loading the video
const [loading, setLoading] = useState(false);
// Fetch video if not passed via location.state
  useEffect(() => {
    if (!video && videoId) {
      setLoading(true);
      const fetchVideo = async () => {
        try {
          const API_KEY = import.meta.env.VITE_Youtube_Api_key;
          const res = await fetch(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${videoId}&key=${API_KEY}`
          );
          const data = await res.json();
          setVideo(data.items[0]);
        } catch (error) {
          console.error("Error fetching video:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchVideo();
    }
  }, [videoId, video]);

  if (loading) return <div>Loading video...</div>;
  if (!video) return <Error />;

  // for recommended videos 
const [recommended, setRecommended] = useState([]);

useEffect(() => {
  const fetchRecommended = async () => {
    try {
      const API_KEY = import.meta.env.VITE_Youtube_Api_key;
      const res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=15&key=${API_KEY}`
      );
      const data = await res.json();

      // Pick 10 random ones
      const shuffled = data.items.sort(() => 0.5 - Math.random());
      setRecommended(shuffled.slice(0, 10));
    } catch (err) {
      console.error("Error fetching static recommendations:", err);
    }
  };
  fetchRecommended();
}, []);

//  fetching channel details:
const [channelData, setChannelData] = useState(null)
useEffect(() => {
  const fetchOtherData = async () => {
    try {
      const API_KEY = import.meta.env.VITE_Youtube_Api_key;
      const channelId = video?.snippet?.channelId;
      if (!channelId) return;

      const res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=${channelId}&key=${API_KEY}`
      );
      const data = await res.json();

      if (data?.items && data.items.length > 0) {
        setChannelData(data.items[0]);
      } else {
        console.warn("No channel data returned for ID:", channelId);
      }
    } catch (err) {
      console.error("Error fetching channel's data: ", err);
    }
  };
  fetchOtherData();
}, [video]);



return(
    <div className="VideoPage-container">
    <div className="CurrentVideo-description">
   <VideoPlayer key={videoId} video={video}  channelData = {channelData}/>
    <CommentSection video={video}/>
     </div>
     <div className="VideoPage-recommended">
   {recommended.map((vid)=>
  <RecommendedVideos  video={vid}/>)}
    </div>
    </div>
)
    }
    
