import { Link, useLocation} from "react-router";
import {useContext, useRef, useEffect} from "react";
import CategoryContext from "../../src/Context/CategoryContext";
// The sidebar layout created when the user opens the sidebar
export default function Sidebar({onToggle, show}){
  const location = useLocation()
 
  // getting the category from useContext and then setting it to filter the page based on category selected in sidebar
  const {category, setCategory} = useContext(CategoryContext);
  if (location.pathname !== "/"){
setCategory(5)
  }
// placing a useRef on the entire aside container. When the sidebar is open and user clicks outside the sidebar then the sidebar closes.
  const SideBarRef =useRef(null) ;

  useEffect(() => {
    // function for handling the clicks outside the sidebar (closing the sidebar)
    function handleClickOutside(event) {
      if (SideBarRef.current && !SideBarRef.current.contains(event.target)) {
        onToggle(); // close sidebar
      }
    }
  if (show) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [show]);

  return (
  <aside  ref={SideBarRef}
 className={`Toggle-sidebar ${show ? 'translate-x-0' : '-translate-x-full'}`}>


      {/* The Sidebar content */}
      <div className="sidebar-container">
        <div className="sidebar-link">
       <i onClick={onToggle} className="fa-solid fa-bars-staggered hamburger"></i>
     <i className="fa-brands fa-youtube Youtube-icon"></i>
     <h1 className="Title"> Streamly</h1>
      </div>
      <nav className="side_nav">
        <ul className="sidebar-links">
          <li className={`sidebar-link ${category===0?"active-Link":""}`} onClick={()=> {setCategory(0); onToggle()}}>
          <Link to = "/" className="flex items-center gap-3 w-full ml-[-2px]">
            <i className="fa-solid fa-house sidebar-link-icons"></i>
           <p className="sidebar-link-text">Home</p>
           </Link>
           </li>
          <li className={`sidebar-link ${category===22?"active-Link":""}`} onClick={()=> {setCategory(22); onToggle()}}>
            <Link to = "/" className="flex items-center gap-3 w-full ml-[-2px]">
             <i className="fa-solid fa-play sidebar-link-icons"></i>
                <p className="sidebar-link-text">Shorts</p>
            </Link>
            </li>
           
          <li className="sidebar-link">
             <i className="fa-brands fa-square-youtube sidebar-link-icons"></i>
                <p className="sidebar-link-text">Subscriptions</p></li>
        </ul>
      </nav>
      <nav className="side_nav">
        <h2 className="side-title">Categories:</h2>
        <ul className="sidebar-links">
          <li className={`sidebar-link ${category===20?"active-Link":""}`} onClick={()=>{setCategory(20); onToggle()}}>
            <Link to = "/" className="sidebar-link-iternal">
            <i className="fa-solid fa-gamepad sidebar-link-icons"></i>
            <p className="sidebar-link-text">Gaming</p>
            </Link>
          </li>
          <li className={`sidebar-link ${category===2?"active-Link":""}`} onClick={()=>{setCategory(2); onToggle()}}>
             <Link to = "/" className="sidebar-link-iternal">
            <i className="fa-solid fa-car-side sidebar-link-icons"></i>
            <p className="sidebar-link-text">Automobiles</p>
            </Link>
          </li>
          <li className={`sidebar-link ${category===17?"active-Link":""}`} onClick={()=>{setCategory(17);onToggle()}}>
           <Link to = "/" className="sidebar-link-iternal">
            <i className="fa-solid fa-volleyball sidebar-link-icons"></i>
            <p className="sidebar-link-text">Sports</p>
            </Link>
          </li>
          <li className={`sidebar-link ${category===25?"active-Link":""}`} onClick={()=>{setCategory(25);onToggle()}}>
           <Link to = "/" className="sidebar-link-iternal">
            <i className="fa-solid fa-newspaper sidebar-link-icons"></i>
            <p className="sidebar-link-text">News</p>
            </Link>
          </li>
          <li className={`sidebar-link ${category===24?"active-Link":""}`} onClick={()=>{setCategory(24);onToggle()}}>
            <Link to = "/" className="sidebar-link-iternal">
            <i className="fa-solid fa-tv sidebar-link-icons"></i>
            <p className="sidebar-link-text">Entertainment</p>
            </Link>
          </li>
          <li className={`sidebar-link ${category===1?"active-Link":""}`} onClick={()=>{setCategory(1);onToggle()}}>
            <Link to = "/" className="sidebar-link-iternal">
            <i className="fa-solid fa-film sidebar-link-icons"></i>
            <p className="sidebar-link-text">Movies</p>
            </Link>
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
         
        </ul>
      </nav>
      </div>
    </aside>
  );
};


