/* Header element for the navigation. It will take the prop function onToggle, 
where when the user clicks the hamburger, a sidebar list is displayed*/
import {useLocation, Link} from "react-router-dom"
export default function Header({ onToggle }){
  const location = useLocation();
  const isHomepage = location.pathname === "/";

  return (
    <header className="header-layout">
      {/* sidelinks: container containing the sidelinks when the 
      toggle is closed. When the hamburger is clicked, the sidebar is opened.*/}
      <div className="sidelinks">  

      <i onClick={onToggle} className="fa-solid fa-bars-staggered hamburger"></i>
    
      {
        isHomepage && (
          // sidelinks-links: links container which are below the hamburger
            <ul className="sidelinks-links">
              {/* sidebar-link contains the icon and the text styled in a container */}
              <Link to="/">
              <li className="sidelinks-link">
                <i className="fa-solid fa-house sidelinks-link-icons"></i>
                <p className="sidelinks-link-text">Home</p>
                </li>
                </Link> 
              <li className="sidelinks-link">
              <i className="fa-solid fa-play sidelinks-link-icons"></i>
                <p className="sidelinks-link-text">Shorts</p></li>

              <li className="sidelinks-link">
                <i className="fa-brands fa-square-youtube sidelinks-link-icons"></i>
                <p className="sidelinks-link-text">Subscriptions</p></li>
              <li className="sidelinks-link">
                <i className="fa-solid fa-circle-user sidelinks-link-icons"></i>
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
      <input type="text" placeholder="Search" className="search-bar-input"></input>
      <i className="fa-solid fa-magnifying-glass searchbtn"></i>
      </div>
      <i className="fa-solid fa-microphone microphone-logo"></i>
      </div>
      {/* account details for showing the user's account, create button and notification button */}
      <div className="account-details"> 
      <i className="fa-regular fa-bell bell-icon"></i>
    
      {/* tag name icon */}
      <i className="fa-solid fa-a name-tag"></i>
      </div>
      </div>
    </header>
  );
};


