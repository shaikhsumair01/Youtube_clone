import { Link } from "react-router";

export default function Sidebar({onToggle, show}){
  return (
  <aside className={`Toggle-sidebar ${show ? 'translate-x-0' : '-translate-x-full'}`}>


      {/* The Sidebar content */}
      <div className="sidebar-container">
        <div className="sidebar-link">
       <i onClick={onToggle} className="fa-solid fa-bars-staggered hamburger"></i>
     <i className="fa-brands fa-youtube Youtube-icon"></i>
     <h1 className="Title"> Streamly</h1>
      </div>
      <nav className="side_nav">
        <ul className="sidebar-links">
          <Link to = "/" onClick={onToggle}>
          <li className="sidebar-link">
            <i className="fa-solid fa-house sidebar-link-icons"></i>
           <p className="sidebar-link-text">Home</p></li>
           </Link>
          <li className="sidebar-link">
            <i className="fa-solid fa-play sidebar-link-icons"></i>
                <p className="sidebar-link-text">Shorts</p></li>
          <li className="sidebar-link">
             <i className="fa-brands fa-square-youtube sidebar-link-icons"></i>
                <p className="sidebar-link-text">Subscriptions</p></li>
        </ul>
      </nav>
      <nav className="side_nav">
        <h2 className="side-title">Categories:</h2>
        <ul className="sidebar-links">
          <li className="sidebar-link">
            <i className="fa-solid fa-gamepad sidebar-link-icons"></i>
            <p className="sidebar-link-text">Gaming</p>
          </li>
          <li className="sidebar-link">
            <i className="fa-solid fa-car-side sidebar-link-icons"></i>
            <p className="sidebar-link-text">Automobiles</p>
          </li>
          <li className="sidebar-link">
            <i className="fa-solid fa-volleyball sidebar-link-icons"></i>
            <p className="sidebar-link-text">Sports</p>
          </li>
          <li className="sidebar-link">
            <i className="fa-solid fa-newspaper sidebar-link-icons"></i>
            <p className="sidebar-link-text">News</p>
          </li>
          <li className="sidebar-link">
            <i className="fa-solid fa-tv sidebar-link-icons"></i>
            <p className="sidebar-link-text">Entertainment</p>
          </li>
        </ul>
      </nav>
      <nav className="side_nav">
        <h2 className="side-title">Subscribed</h2>
        <ul className="sidebar-links">
          <li className="sidebar-link">
            <i className="fa-solid fa-circle-user sidebar-link-icons"></i>
            <p className="sidebar-link-text">Pew-Die-Pie</p>
          </li>
          <li className="sidebar-link">
              <i className="fa-solid fa-circle-user sidebar-link-icons"></i>
            <p className="sidebar-link-text">Mr Beast</p>
          </li>
          <li className="sidebar-link">
              <i className="fa-solid fa-circle-user sidebar-link-icons"></i>
            <p className="sidebar-link-text">T-series</p>
          </li>
        </ul>
      </nav>
      </div>
    </aside>
  );
};


