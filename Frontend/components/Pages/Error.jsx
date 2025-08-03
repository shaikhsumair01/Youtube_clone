import {Link} from "react-router-dom";
export default function Error(){
    return(
        <div className="Error-div">
            <h1 className="Error-text">Error 404!</h1>
            <p className="Error-details">Hmmm...Cannot understand your request <i className="fa-solid fa-face-frown-open icon-error"></i></p>
             <Link to="/"><button className="back-btn">Go Back</button></Link>
        </div>

)
}