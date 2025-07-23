import VideoPlayer from "./VideoPlayer"
import CommentSection from "./CommentSection"
import RecommendedVideos from "./RecomendedVideos"
import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Error from "./Error";
// Used for structuring of the videoPage. Acts as a endpoint of VideoPlayer, CommentSection and RecommendedVideos
export default function VideoPage(){
    // gets the current page location
    const location = useLocation();
    // Fetches through dynamic url
    const { videoId } = useParams();

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


    
return(
    <div className="VideoPage-container">
    <div className="CurrentVideo-description">
   <VideoPlayer video={video}/>
    <CommentSection videoId={videoId}/>
     </div>
     <div className="VideoPage-recommended">
    <RecommendedVideos category={video.snippet.categoryId}/>
    <RecommendedVideos category={video.snippet.categoryId}/>
    <RecommendedVideos category={video.snippet.categoryId}/>
    </div>
    </div>
)
    }
    
