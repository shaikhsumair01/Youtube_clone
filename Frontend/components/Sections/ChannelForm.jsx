import { useState } from "react";
import { Link } from "react-router";
import axios from "axios";
import instance from "../../src/api/Render-server";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// creating the channel If the user doesn't have one
export default function ChannelForm() {
  // getting the info about the channel from the user through useState
  const [channelName, setChannelName] = useState("");
  const [description, setDescription] = useState("");

  // getting the token for giving user authorisation to create account
  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!channelName.trim() || !description.trim()) {
      toast.warn("Please fill in all fields");
      return;
    }
// posting user response to database
    try {
      const response = await instance.post(
        "/createChannel",
        { channelName, description },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      toast.success("Channel created successfully!");
      // Optionally reloading to re-fetch channel info 
      window.location.reload(); // trying to trigger the parent component update
    } catch (error) {
      // Showing error toast on failure
      if (error.response && error.response.status === 409) {
        toast.error("You already have a channel.");
      } else {
        toast.error(err.response.data.message);
      }
    }
  };

  return (
    // Channel Form
    <div className="ChannelForm">
        <ToastContainer/>
      <div className="Form-component">
        <h2 className="channel-form-title">Create Your Channel</h2>
        <form onSubmit={handleSubmit} className="channel-form">
            <div className="channel-form-item">
          <label className="channel-label">
            Channel Name:
            </label>
            <input
              type="text"
              value={channelName}
              onChange={(e) => setChannelName(e.target.value)}
              placeholder="e.g. DevExplained"
              required
              className="channelInput textbox"
            />
       
    </div>
         <div className="channel-form-item">
          <label className="channel-label">
            About:
             </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your channel..."
              required
              className="channelInput Textarea"
            />
         
    </div>
            <div className="button-div">
                 <button type="submit" className="form-submit-btn">Create Channel</button>
                <Link to="/"><button className="form-cancel-btn">Cancel</button></Link> 
            </div>
         
        </form>
      </div>
    </div>
  );
}
