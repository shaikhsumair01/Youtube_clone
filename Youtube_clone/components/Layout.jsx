import { useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
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