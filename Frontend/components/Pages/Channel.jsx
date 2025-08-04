import { useEffect, useState } from "react";
import axios from "axios";
import instance from "../../src/api/Render-server";
import {jwtDecode} from "jwt-decode";
import ChannelForm from "../Sections/ChannelForm";
import ChannelPage from "../Sections/ChannelPage";
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Sections/Loader";

/*Showing the channel page when the user logs in. 
If the user doesn't have a channel then it will show them ChannelForm 
and If they have a channel then it will display ChannelPage.jsx*/ 
const Channel = () => {
// Getting user inputs
  const [channelData, setChannelData] = useState(null);
  const [videos, setVideos] = useState([]);
  const [authloading, setauthLoading] = useState(true);
  const [channelLoading, setChannelLoading] = useState(true);

  // Seeing if the user is authenticated or not
   const [authenticated, setAuthenticated] = useState(false);
  //  getting the token from local storage
  const token = localStorage.getItem("token");
  useEffect(() => {
    /* if the token is expired then it will remove 
    the expired token and tell the user to login-again and
     if it is not then it will pass the data to the second useEffect*/
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const now = Date.now() / 1000; // Getting the current time in seconds
        if (decoded.exp > now) {
          setAuthenticated(true); 
        } else {
          localStorage.removeItem("token"); // cleanup expired token
            setAuthenticated(false);
            toast.error("Token expired. Please Login again.")
           
        }
      } catch (err) {
        console.error("Invalid token:", err);
        localStorage.removeItem("token");
         setAuthenticated(false);
         toast.error("Login again.")
      }
    }
  setauthLoading(false);
}, []);

// If the user is authenticated, will fetch the channel created by them 
// else will SetChannelData to null. If the channelData is absent then it will show the channelForm
 useEffect(() => {
  if (!authenticated) return;

  instance.get("/getMyChannel", {
    headers: {
      Authorization: `Bearer ${token}`, 
    },
    withCredentials: true,
  })
  .then((res) => {
    setChannelData(res.data.channel);
    setVideos(res.data.channel.videos || []);
    toast.success(`Displaying contents`, {
  position: "top-center",
  autoClose: 3000,
  theme: "dark"
    })
  })
  .catch((err) => {
    if (err.response && err.response.status === 404) {
      setChannelData(null); // No channel exists — ready to create!
    } else {
      toast.error("Error fetching channel data");
    }
  })
  .finally(() => {
    setChannelLoading(false);
  });
}, [authenticated]);


return (
  <>
    <ToastContainer />
    {authloading || channelLoading ? (
      <div className="initial-screen">
        <Loader/>
      </div>
    ) : !authenticated ? (
      <div className="initial-screen">
        <h1 className="initial-text">You must be logged in to view this page.</h1>
      </div>
    ) : channelData ? (
      <ChannelPage channel={channelData} />
    ) : (
      <ChannelForm />
    )}
  </>
);
}

export default Channel;
