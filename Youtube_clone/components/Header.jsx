/* Header element for the navigation. It will take the prop function onToggle, 
where when the user clicks the hamburger, the sidebar list is displayed*/
import {useLocation} from "react-router-dom"
export default function Header({ onToggle }){
  const location = useLocation();
  const isHomepage = location.pathname === "/";

  return (
    <header className="header-layout">
      {
        isHomepage && (
      <div className="default-sidebar">  
      <button onClick={onToggle} className="hamburger">
        ☰
      </button>
            <ul className="default-links">
              <li className="sidebar-link">Home</li>
              <li className="sidebar-link">Shorts</li>
              <li className="sidebar-link">Subscriptions</li>
              <li className="sidebar-link">You</li>
            </ul>
        </div>

        )

      }
      {/* header element*/}
      <div className="main-header">
        {/* title div for logo and title */}
      <div className="title-div">
        <i className="fa-brands fa-youtube Youtube-icon"></i>
        <h1 className="Title"> Streamly</h1>
      </div>
      {/* Search section (search bar, the search button and the voice command button) */}
      <div className="Search-section">
      <div className="Search-bar">
      <input type="text" placeholder="Search" className="search-bar-input"></input>
      <i className="fa-solid fa-magnifying-glass searchbtn"></i>
      </div>
      <i className="fa-solid fa-microphone microphone-logo"></i>
      </div>
      {/* account details for showing the user's account, create button and notification button */}
      <div className="account-details">
        <div className="create-button-div">
      <i className="fa-solid fa-plus create-logo"></i>
      <p className="create-logo-text">Create</p>
      </div>
      <i className="fa-regular fa-bell bell-icon"></i>
      <i className="fa-solid fa-a name-tag"></i>
      </div>
      </div>
    </header>
  );
};


