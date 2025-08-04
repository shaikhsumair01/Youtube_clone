import { useState, useEffect, useRef } from "react";
import axios from "axios";
import instance from "../../src/api/Render-server";
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Shows the channelPage. Contains the video crud operations as well
export default function ChannelPage({ channel }) {
  // Shows a modal screen for adding and updating the videos
  const [showModal, setShowModal] = useState(false);
  // fetching user inputs
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  // Setting the video from the videos fetched from getMyChannel route
  const [videos, setVideos] = useState(channel.videos || []);
  // Creating a dropdown for providing edit/delete video option when the user clicks on the elipses 
  const [showDropdownId, setShowDropdownId] = useState(null);
  // For editing the videos
  const [isEditing, setIsEditing] = useState(false);
  const [editVideoId, setEditVideoId] = useState(null);
  
  // Showing a channel logo (which is the channel title's first letter)
  const { channelName } = channel;
  const initial = channelName.charAt(0).toUpperCase();
  // getting the token
   const token = localStorage.getItem("token");

   const dropdownRef = useRef(null); // for closing the dropdown


  //  if the modal is open we get the form of either saving or editing the video details 
  function openModal(video = null) {
    setShowModal(true); // opens modal window
    if (video) {
      // if the video is present then we will keep setIsEditing to true to edit the video
      setIsEditing(true);
      // Taking the video by id
      setEditVideoId(video._id);
      // Updating/setting the title
      setTitle(video.title);
      // setting/ updating the url
      setUrl(video.url);
      // setting the description
      setDescription(video.description || "");
      // setting the thumbnail url
      setThumbnailUrl(video.thumbnailUrl || "");
    } else {
      // in case we are creating the video we will set the setIsEditing to false
      setIsEditing(false);
      // since we don't have a video we will keep setEditVideoId to null
      setEditVideoId(null);
      // keeping the inputs empty for the user inputs
      setTitle("");
      setUrl("");
      setDescription("");
      setThumbnailUrl("");
    }
  }
// closing the modal
  function closeModal() {
    setShowModal(false);
  }

  /* On submit we will take the payload from the user
   and then pass them to their respective url to edit or to add*/
  async function handleSubmit() {
    if (!title || (!url && !isEditing)) {
      toast.error("Title and URL are required for new Videos.");
      return;
    }

    const payload = {
      title,
      url,
      description,
      thumbnailUrl,
      channelId: channel._id,
    };

    try {
      // if is Editing then we pass the video details to the put request
      if (isEditing) {
        const res = await instance.put(`/updateVideo/${editVideoId}`, 
          payload,
          {
            headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
          }
       );
      //  we will search for the video then update the video 
        setVideos((prev) =>
          prev.map((v) => (v._id === editVideoId ? res.data.video : v))
        );
        toast.success("Video updated successfully!");
        // Else we will upload the video
      } else {
        const res = await instance.post("/uploadVideo",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
          
        }
      
      );
        setVideos((prev) => [...prev, res.data.video]);
        toast.success("Video uploaded successfully!");
      }
      closeModal();
    } catch (err) {
      toast.error(err.response.data.message);
      console.error(err);
    }
  }

  // Closing the dropdown
useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setShowDropdownId(null); // Close dropdown
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

// deeleting the video
async function handleDelete(videoId) {
  try {
    await instance.delete(`/deleteVideo/${videoId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });
    // removes the video
    setVideos((prev) => prev.filter((v) => v._id !== videoId));
    toast.success("Video deleted successfully!");
    setShowDropdownId(null); // close dropdown
  } catch (err) {
    toast.error("Failed to delete video.");
    console.error(err);
  }
}

  return (
    <div className="channel-page">
      <ToastContainer/>
      <div className="channel-page-header">
        <div className="channel-page-logo">{initial}</div>
        <div className="channel-info">
          <h1 className="channel-page-title">{channelName}</h1>
          <p className="channel-page-description">{channel.description}</p>
        </div>
      </div>

      <div className="video-section">
        <div className="video-section-header-container">
          <h2 className="video-section-header">Uploaded Videos:</h2>
          <i className="fa-solid fa-plus addVids" onClick={() => openModal()}></i>
        </div>

        {showModal && (
          <div className="Modal-screen">
            <div className="Modal-header">
              <h2>{isEditing ? "Update your video" : "Create your video"}</h2>
              <i className="fa-solid fa-xmark cancel" onClick={closeModal}></i>
            </div>
            <div className = "video-form-container">
              <div className="video-form-element">
            <label className="video-form-label">Title</label>
            <input
              type="text"
              value={title}
              placeholder="e.g: The perfect beginner React project"
              onChange={(e) => setTitle(e.target.value)}
              className="channelInput modal-inputs"
            />
            </div>
             <div className="video-form-element">
            <label className="video-form-label">URL</label>
            <input
              type="text"
              value={url}
              placeholder="eg: https://youtu.be/DgRrrOt0Vr8?si=-sHCeKs3tTqxttF8"
              onChange={(e) => setUrl(e.target.value)}
              className="channelInput modal-inputs"
            />
            </div>
             <div className="video-form-element">
            <label className="video-form-label">Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="eg: Creating a simple calculator using react."
              className="channelInput modal-inputs"
            />
            </div>
           
            <button onClick={handleSubmit} className="form-submit-btn">
              {isEditing ? "Update Video" : "Upload Video"} 
            </button>
            </div>
          </div>
        )}
        {/* If no videos found then show no-videos else show the channel-video-container */}
        {videos.length === 0 ? (
          <p className="no-videos">No videos uploaded yet.</p>
        ) : (
          <div className="channel-video-container">
            {videos.map((video) => (
              <div key={video._id} className="channel-video-flex">
              <div className="thumbnail_card">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="thumbnail_image"
                />
                <div className="video-thumbnail-desc">
                 <p className="thumbnail_title">{video.title}</p>
                <p className="channel-video-desc">{video.description}</p>
                </div>
               </div>
                <i
                  className="fa-solid fa-ellipsis-vertical video-options"
                  onClick={()=> setShowDropdownId((prev)=>(prev===video._id? null : video._id))}
                ></i>
                {
                  // showing dropdown for when the user wants to update /  delete the video
                  showDropdownId === video._id && (
                  <div className="video-dropdown" ref={dropdownRef}>
                  <button onClick={() => openModal(video)} className="drop-btn">Update</button>
                  <button onClick={() => handleDelete(video._id)} className="drop-btn">Delete</button>
                  </div>
                  )
                }
                </div>

            ))}
          </div>
        )}
      </div>
    </div>
  );
}
