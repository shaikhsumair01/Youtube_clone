import formatters from "../Utlis.js/formatters"
export default function CommentSection({video}){
    return(
        <>
        <h1 className="Comments-section-title"> {formatters(video.statistics.commentCount)} Comments:</h1>
        <div className="Comment-layout">
        <i className="fa-solid fa-circle-user Comment-logo"></i>
        <div className="Comment">
        <p className="User-Name">@Sam.123</p>
        <p className="Comment-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Temporibus ab libero, minima ratione quo perspiciatis animi consequatur? 
            Animi praesentium ad ipsa minus consequatur?
             Ea, aut nesciunt modi harum est autem!</p>
             </div>
              <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
        <div className="Comment-layout">
        <i className="fa-solid fa-circle-user Comment-logo"></i>
        <p className="Comment-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Temporibus ab libero, minima ratione quo perspiciatis animi consequatur? 
            Animi praesentium ad ipsa minus consequatur?
             Ea, aut nesciunt modi harum est autem!</p>
              <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
        <div className="Comment-layout">
       <i className="fa-solid fa-circle-user Comment-logo"></i>
        <p className="Comment-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Temporibus ab libero, minima ratione quo perspiciatis animi consequatur? 
            Animi praesentium ad ipsa minus consequatur?
             Ea, aut nesciunt modi harum est autem!</p>
              <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
        </>
    )
}