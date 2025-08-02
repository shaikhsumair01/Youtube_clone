import { useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
/* The Layout function component acts as a shell housing both header and sidebar. 
 It passes the prop showSidebar which is used to toggle the condition of opening and closing the sidebar*/
export default function Layout(){
    const [showSidebar, setshowSidebar] = useState(false);
    const toggleSidebar = () => setshowSidebar(prev=> !prev) 
    return(
    <div>
    <Header onToggle={toggleSidebar} />
    {showSidebar&& <SideBar onToggle = {toggleSidebar} show={showSidebar}/>}
    </div>
    )
}