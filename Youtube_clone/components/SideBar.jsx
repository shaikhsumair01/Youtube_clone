export default function Sidebar({onToggle, show}){
  return (
  <aside className={`Toggle-sidebar ${show ? 'translate-x-0' : '-translate-x-full'}`}>


      {/* The Sidebar content */}
      <div className="sidebar-container">
        <div className="sidebar-link">
       <button onClick={onToggle} className="hamburger">
        ☰
      </button>
     <i className="fa-brands fa-youtube Youtube-icon"></i>
     <h1 className="Title"> Streamly</h1>
      </div>
      <nav>
        <ul className="sidebar-links">
          <li className="sidebar-link">
            <i class="fa-solid fa-house sidelinks-link-icons"></i>
           <p className="sidebar-link-text">Home</p></li>
          <li className="sidebar-link">
            <i class="fa-solid fa-play sidelinks-link-icons"></i>
                <p className="sidebar-link-text">Shorts</p></li>
          <li className="sidebar-link">
             <i class="fa-brands fa-square-youtube sidelinks-link-icons"></i>
                <p className="sidebar-link-text">Subscriptions</p></li>
        </ul>
      </nav>
      </div>
    </aside>
  );
};


