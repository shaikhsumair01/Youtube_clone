import InitialPage from "../Sections/InitialPage"
import { useEffect, useState } from "react";
import {jwtDecode} from "jwt-decode";
import FilterVids from "../Sections/FilterVids"
import Feed from "../Sections/Feed"


export default function Home(){
    const [authenticated, setAuthenticated] = useState(false);
    const token = localStorage.getItem("token");

     useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const now = Date.now() / 1000; // Getting the current time in seconds
        if (decoded.exp > now) {
          setAuthenticated(true); // checking if the time we get now is less than the token expiry time, if true then the user is authenticated
        } else {
          localStorage.removeItem("token"); // cleanup expired token
          setAuthenticated(false);
        }
      } catch (err) {
        console.error("Invalid token:", err);
        localStorage.removeItem("token");
        setAuthenticated(false);
      }
      
    }
}, []);


    return(<div>
    {
     authenticated ? (
        <>
          <FilterVids />
          <Feed />
        </>
      ) : (
        <InitialPage />
      )}

    </div>)
}