import Videolayout from "./Videolayout"
/*This function component loops through the list of objects which we get from the api 
 and create the videolayout based on the data received to show on the homepage */
export default function Feed(){
    return(
        <div className="Thumbnail-container">
       <Videolayout></Videolayout> 
        <Videolayout></Videolayout>
        <Videolayout></Videolayout>
        <Videolayout></Videolayout>
        <Videolayout></Videolayout>
        <Videolayout></Videolayout>
        </div>
      
    )
}