// Contains the code for displaying the video player, and even about the channel
export default function VideoPlayer({video}){
     const videoId = video.id || video.id.videoId;

    return(<>
     <div className="video-container">
     <iframe
        className="video-display"
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={video.snippet.title}
        allowFullScreen
      ></iframe>

    </div>
     <div className="video-desc">
        <h2 className="video-title">{video.snippet.title}</h2>
        <div className="video-info">
            
            <div className="about-channel">
            <img src="pexels.jpg" alt="" className="channel-logo"/>
            <div className="channel-info">
                <p className="channel-name">{video.snippet.channelTitle}</p>
                <p className="channel-views">{Math.trunc(Math.random()*200)}k Subscribers</p>
                </div>
            </div>
            <button className="Subscribe-button">Subscribe</button>
            <div className="Like-dislike">
             <div className="Like-button">  
            <i className="fa-regular fa-thumbs-up"></i>
            <p className="Like-count">{Math.round(Math.random()*10)/10}k</p>
                </div> 
                 <div className="divider" />
            <i className="disLike-button fa-regular fa-thumbs-down"></i>
            </div>
            <div className="Share-Button">
                <i className="fa-solid fa-share"></i>
                <p className="share-text">Share</p>
            </div>
        <i className="fa-solid fa-ellipsis three-dots"></i>
        </div>
        <div className="More-about">
            <div className="More-about-details">
                <p className="More-about-views">{video.statistics?.viewCount || "150k"}</p>
                <p className="More-about-date">4 months ago</p>
            </div>
            <p className="More-about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Repellendus, assumenda in. Exercitationem hic quidem ratione omnis voluptatum sequi, 
                expedita maiores in pariatur suscipit perspiciatis error ipsa reprehenderit doloremque,
                 sit magni. Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                 Fugiat iure repellendus id iusto commodi officiis, 
                 vel ut earum sint consequatur quasi ducimus at quas, 
                 nemo libero dicta eaque facilis consequuntur!</p>
        </div>
    </div>
    </>)
}