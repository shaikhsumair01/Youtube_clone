export default function RecommendedVideos(){
    return(<div className="RecommendedVideo-container">
        <img src="pexels.jpg" alt="recommended-thumbnail" className="recommendedVideo-thumbnail"/>
       <div className="recommended-details">
        <h2 className="recommended-title">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam pariatur ipsam id quam,
             laboriosam rerum quidem accusamus fuga, 
             ducimus delectus ut porro quae praesentium architecto ullam iste quia. Libero, dolorem.</h2>
       <p className="recommended-channel">Geeks for Geeks</p>
       <p className="recommended-views">48k views</p>
       </div>
       <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>);
}