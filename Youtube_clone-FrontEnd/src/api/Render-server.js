
import axios from "axios";

const instance = axios.create({
  baseURL: "https://youtube-clone-backend-6b23.onrender.com",
  withCredentials: true, // if you're using cookies or sessions
});

export default instance;
