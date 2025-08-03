/* Header element for the navigation. It will take the prop function onToggle, 
where when the user clicks the hamburger, a sidebar list is displayed*/
import {useLocation, Link, useNavigate} from "react-router-dom"
import CategoryContext from "../../src/Context/CategoryContext";
import { useContext, useRef } from "react";
import { jwtDecode } from "jwt-decode";


export default function Header({ onToggle }){
  const token = localStorage.getItem("token");
/* firstInitial variable is updated after the authentication. 
It takes the first alphabet of the username and converts it to uppercase. 
And then that value is used to display the name tag favicon*/
let firstInitial = null;
let isAuthenticated = false;

if (token) {
  try {
    const decoded = jwtDecode(token); // decoding the token and comparing it's validity
    const now = Date.now() / 1000;
    if (decoded.exp > now) {
      isAuthenticated = true;
      firstInitial = decoded.userName?.charAt(0).toUpperCase(); 
      console.log(firstInitial)
      // taking userName from the token to display name-tag favicon in the header
    }
  } catch (err) {
    isAuthenticated = false;
    localStorage.removeItem("token");
  }
}

  const location = useLocation();
  const isHomepage = location.pathname === "/";
  const isSearchpage = location.pathname.startsWith("/Search/");

  const {category, setCategory} = useContext(CategoryContext);
  const navigate = useNavigate();
   const searchInputRef = useRef(null);
// Searching based on the text provided by the user in the searchbar
const searchResult=(e)=>{
const search =searchInputRef.current?.value;
if (search.trim()) {
    navigate(`/Search/${encodeURIComponent(search)}`);
    searchInputRef.current.value = "";
}
};
const handleKeyDown = (e) => {
  if (e.key === "Enter") {
    searchResult();
  }
};


  return (
    <header className="header-layout">
      {/* sidelinks: container containing the sidelinks when the 
      toggle is closed. When the hamburger is clicked, the sidebar is opened.*/}
      <div className="sidelinks">  

      <i onClick={onToggle} className="fa-solid fa-bars-staggered hamburger"></i>
    
      {
        (isHomepage || isSearchpage) && (
          // sidelinks-links: links container which are below the hamburger
            <ul className="sidelinks-links">
              {/* sidebar-link contains the icon and the text styled in a container */}
              <Link to="/">
              <li className="sidelinks-link" onClick={()=>setCategory(0)}>
                <i className="fa-solid fa-house sidelinks-link-icons"></i>
                <p className="sidelinks-link-text">Home</p>
                </li>
                </Link> 
              <li className="sidelinks-link" onClick={()=>setCategory(22)}>
              <i className="fa-solid fa-play sidelinks-link-icons"></i>
                <p className="sidelinks-link-text">Shorts</p></li>
             
              <li className="sidelinks-link" onClick={() => navigate(isAuthenticated ? "/Channel" : "/Auth")}>
                <i className="fa-brands fa-square-youtube sidelinks-link-icons"></i>
                <p className="sidelinks-link-text">Subscriptions</p></li>
             
              <li className="sidelinks-link" onClick={() => navigate(isAuthenticated ? "/Channel" : "/Auth")}>
              {isAuthenticated?
              ( <span className="name-tag">{firstInitial}</span>):
              (<i className="fa-solid fa-user-circle sidelinks-link-icons "></i>)
              }
               <p className="sidelinks-link-text">You</p> </li>
             
            </ul>
          )
          }
        </div>
      {/* header element*/}
      <div className="main-header">
        {/* title div for logo and title */}
      <div className="title-div">
        <i className="fa-brands fa-youtube Youtube-icon"></i>
        <h1 className="Title"> Streamly</h1>
      </div>
      {/* Search section (search bar, the search button and the voice command button) */}
      <div className="Search-section">
        {/* search bar containing the search button and the search bar input */}
      <div className="Search-bar">
      <input type="text" placeholder="Search" className="search-bar-input" ref={searchInputRef} onKeyDown={handleKeyDown}
></input>
      {isAuthenticated?(<i className="fa-solid fa-magnifying-glass searchbtn" onClick={searchResult}></i>):(<i className="fa-solid fa-magnifying-glass searchbtn"></i>)}
      </div>
      
      </div>
      {/* account details for showing the user's account, create button and notification button */}
      <div className="account-details"> 
      <i className="fa-regular fa-bell bell-icon"></i>
    
      {/* tag name icon */}
      <div onClick={() => navigate(isAuthenticated ? "/Channel" : "/Auth")}
    style={{ cursor: "pointer" }}>
      {isAuthenticated?
      ( <span className="name-tag">{firstInitial}</span>):
       (<i className="fa-solid fa-user-circle user-icon "></i>)
        }
      </div>
      </div>
      </div>
    </header>
  );
};


