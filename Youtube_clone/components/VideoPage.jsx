import VideoPlayer from "./VideoPlayer"
import CommentSection from "./CommentSection"
import RecommendedVideos from "./RecomendedVideos"
export default function VideoPage(){
    return(
    <div className="VideoPage-container">
    <div className="CurrentVideo-description">
   <VideoPlayer/>
    <CommentSection/>
     </div>
     <div className="VideoPage-recommended">
    <RecommendedVideos/>
    <RecommendedVideos/>
    <RecommendedVideos/>
    </div>
    </div>
)
}