import formatters from "../Utlis.js/formatters"
export default function CommentSection({video}){
    return(
        <>
        <h1 className="Comments-section-title"> {video.statistics?.commentCount?formatters(video.statistics.commentCount):formatters(Math.floor(Math.random() * 90000 + 10000))} Comments:</h1>
        <div className="Comment-layout">
        <i className="fa-solid fa-circle-user Comment-logo"></i>
        <div className="Comment">
        <p className="User-Name">Sumair Shaikh</p>
        <p className="Comment-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Temporibus ab libero, minima ratione quo perspiciatis animi consequatur? 
            Animi praesentium ad ipsa minus consequatur?
             Ea, aut nesciunt modi harum est autem!</p>
             </div>
              <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
        <div className="Comment-layout">
        <i className="fa-solid fa-circle-user Comment-logo"></i>
        <div className="Comment">
        <p className="User-Name">Sumair Shaikh</p>
        <p className="Comment-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Temporibus ab libero, minima ratione quo perspiciatis animi consequatur? 
            Animi praesentium ad ipsa minus consequatur?
             Ea, aut nesciunt modi harum est autem!</p>
             </div>
              <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
        <div className="Comment-layout">
       <i className="fa-solid fa-circle-user Comment-logo"></i>
        <div className="Comment">
        <p className="User-Name">Sumair Shaikh</p>
        <p className="Comment-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Temporibus ab libero, minima ratione quo perspiciatis animi consequatur? 
            Animi praesentium ad ipsa minus consequatur?
             Ea, aut nesciunt modi harum est autem!</p>
             </div>
              <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
        </>
    )
}