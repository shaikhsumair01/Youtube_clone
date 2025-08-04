import { useState, useEffect } from "react"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"
import instance from "../../src/api/Render-server";
import { useNavigate } from "react-router";
export default function Authenticate(){
    const navigate = useNavigate()
    // Setting form inputs
    const [user, setUser] = useState("");
    const [error, setError] = useState("")
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // flipped is used for flipping the form window. 
    // On the front it has registeration and on back it is login
     const [Flipped, isFlipped] = useState(false);

    const handleAuth = async (e) => {
  e.preventDefault();
  // Checking which window is open
  const endpoint = Flipped ? "login" : "register";

  try {
    // storing payload based on the screen
    const payload = Flipped ? { email, password } : { username, email, password }; 

    // posting the data based on the endpoint
    const response = await instance.post(`/${endpoint}`, payload);

    // getting the token and user data based on the response
    const { token, user } = response.data;

    localStorage.setItem("token", token); // storing the JWT
    setUser(user); // updating the user
    // Success message (mostly bypassed by navigate as the page directly navigates to home)
     toast.success(`${Flipped ? "Login" : "Registration"} successful!`, {
  position: "top-center",
  autoClose: 3000,
  theme: "dark"
    });

    navigate("/"); // navigating to home page when logged in
  } catch (err) {
    // If the authentication fails
    console.error("Auth failed:", err);
    if(err.response.status == 500){
      setError("Server is waking up or unreachable. Please wait and try again.")
      toast.error("Can't access the server. The server is waking up, so please wait for a few moments")
    }
    setError("Authentication failed. Please check credentials.");
    // Sending the appropriate toast error to the user
      toast.error(err.response.data.message)
  }
};
useEffect(() => {
  // clearing the input fields
  setUsername("");
  setEmail("");
  setPassword("");
}, [Flipped]);

   
    return(
        <>
        <div className="Authenticate">
        <div className="card-wrapper">
            <div className={`card-inner ${Flipped ? "rotate-card" : ""}`}>
              {/* Register form card */}
         <form className="card-side front">
            <h2 className="Auth-header">Sign Up </h2>
            <div className="form-item-div">
            <label className="form-label">Enter your User Name: </label>
            <input type="text" placeholder="Username" value={username} className="form-input" onChange={(e)=>setUsername(e.target.value)} />
            </div>
            <div className="form-item-div">
            <label  className="form-label">Enter your Email Address: </label>
            <input type="text" placeholder="Email" value={email} className="form-input" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="form-item-div">
            <label  className="form-label">Enter your Password: </label>
            <input type= "password" placeholder="Password" className="form-input" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
           <button className="form-submit-btn" onClick={(e)=>handleAuth(e)}>Submit</button>
           <a href="#" className="auth-switch-link"  
           onClick={(e) => {
            e.preventDefault();
            isFlipped(!Flipped);
            }}
            >Have an Account?</a>
         </form>
         {/* Login-form card */}
         <form className="card-side back">
            <h2 className="Auth-header">Login</h2>
             <div className="form-item-div">
            <label className="form-label">Enter your Email Address: </label>
            <input type="text" placeholder="Email" value={email} className="form-input" onChange={(e)=>setEmail(e.target.value)} />
            </div>
              <div className="form-item-div">
            <label  className="form-label">Enter your Password: </label>
            <input type= "password" placeholder="Password" value={password} className="form-input" onChange={(e) => setPassword(e.target.value)}/>
            </div>
           <button className="form-submit-btn" onClick={(e)=>handleAuth(e)}>Submit</button>
           <a href="#" className="auth-switch-link"  
           onClick={(e) => {
            e.preventDefault();
            isFlipped(!Flipped);
            }}
            >Create a new Account?</a>
         </form>

         </div>
        </div>
        </div>
          <ToastContainer />
           
        </>
    )
}