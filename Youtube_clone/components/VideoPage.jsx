import VideoPlayer from "./VideoPlayer"
import CommentSection from "./CommentSection"
export default function VideoPage(){
    return(
    <div className="VideoPage-container">
    <div className="CurrentVideo-description">
   <VideoPlayer/>
    <CommentSection/>
     </div>

    </div>
)
}