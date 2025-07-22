import { useState, useEffect } from "react"
import axios from "axios"
import Videolayout from "./Videolayout"
/*This function component loops through the list of objects which we get from the api 
 and create the videolayout based on the data received to show on the homepage */
export default function Feed(){
    // creating a useState for setting the videos
    const [videos, setVideos] = useState([]);
    // we will get random data from this topics array and slice this array after shuffling to display mixed categories to the user on the homepage.
    const topics = ["coding", "funny moments", "travel", "music", "startup culture", "design trends", "space", "robotics", "gaming"];

// using useEffect to fetch the videos
    useEffect(()=>{
        const fetchVideos = async() =>{
            try{
                const data = import.meta.env.VITE_Youtube_Api_key;
                console.log("API Key:", data);
                // sort the array topics
               const shuffledTopics = topics.sort(() => 0.5 - Math.random()); 
               const selectedTopics = shuffledTopics.slice(0, 5);

const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
  params: {
    part: 'snippet',
    q: selectedTopics.join(" "),
    maxResults: 12,
    type: 'video',
    key: data,
  }
});

    const items = response.data.items;
    const filteredVideos = items.filter(item => item.id.kind === "youtube#video");
    console.log(filteredVideos)
    setVideos(filteredVideos);
      } catch (error) {
        console.error("Failed to fetch YouTube videos", error);
      }
    };
    fetchVideos()
    },[])
    return(
        <div className="Thumbnail-container">
       {videos.map((video, index) => (
        <Videolayout key={index} video={video} />
      ))}

        </div>
      
    )
}