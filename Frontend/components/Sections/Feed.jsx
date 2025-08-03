import { useContext, useState, useEffect } from "react"
import Videolayout from "./Videolayout"
import CategoryContext from "../../src/Context/CategoryContext";
/*This function component loops through the list of objects which we get from the api 
 and create the videolayout based on the data received to show on the homepage */
export default function Feed(){
    // creating a useState for setting the videos
    const [videos, setVideos] = useState([]);
    // using useContext to get the category and displaying the video based on category
   const { category, setCategory } = useContext(CategoryContext);

// using useEffect to fetch the videos
    useEffect(()=>{
        const fetchVideos = async() =>{
            try{
                const data = import.meta.env.VITE_Youtube_Api_key;             
                // fetching the videos
  const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=US&videoCategoryId=${category}&key=${data} `)
  const result = await response.json();

  // storing the videos
    const items = result.items;
  
 
setVideos(items);

      } catch (error) {
        console.error("Failed to fetch YouTube videos", error);
      }
    };
    fetchVideos()
    },[category])
    return(
        <div className="Thumbnail-container">
       {videos.map((video, index) => (
        <Videolayout key={index} video={video} />
      ))}

        </div>
      
    )
}