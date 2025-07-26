export default function RecommendedVideos({video}){
   
    return(<div className="RecommendedVideo-container">
        <img src={video.snippet.thumbnails.medium.url} className="recommendedVideo-thumbnail"/>
      
       <div className="recommended-details">
        <h2 className="recommended-title">{video.snippet.title}</h2>
       <p className="recommended-channel">{video.snippet.channelTitle}</p>
       <p className="recommended-views">49 views</p>
       </div>
       <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>);
}