export default function VideoPlayer(){
    return(<>
     <div className="video-container">
    <img src="pexels.jpg" alt="" className="video-display" />
    </div>
     <div className="video-desc">
        <h2 className="video-title">How to train your Dragon? Honest trailers.</h2>
        <div className="video-info">
            
            <div className="about-channel">
            <img src="pexels.jpg" alt="" className="channel-logo"/>
            <div className="channel-info">
                <p className="channel-name">W3schools</p>
                <p className="channel-views">99k subscribers</p>
                </div>
            </div>
            <button className="Subscribe-button">Subscribe</button>
            <div className="Like-dislike">
             <div className="Like-button">  
            <i className="fa-regular fa-thumbs-up"></i>
            <p className="Like-count">9.3k</p>
                </div> 
                 <div className="divider" />
            <i className="disLike-button fa-regular fa-thumbs-down"></i>
            </div>
            <div className="Share-Button">
                <i className="fa-solid fa-share"></i>
                <p className="share-text">Share</p>
            </div>
        <i class="fa-solid fa-ellipsis three-dots"></i>
        </div>
        <div className="More-about">
            <div className="More-about-details">
                <p className="More-about-views">150k views</p>
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