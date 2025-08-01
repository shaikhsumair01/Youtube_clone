// an initial section shown on the homepage when the user is not authenticated (signed in)
import { useNavigate } from "react-router"
export default function InitialPage(){
    const navigate = useNavigate()
    return(
    <div className="initial-screen">
        <i className="fa-solid fa-circle-user initial-icon" onClick={()=>navigate('/Auth')}></i>
        <h1 className="initial-text">Log-in to view the content</h1>
        </div>
)
}