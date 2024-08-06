import React from "react"
import "./homepage.css"

const Homepage = ({setLoginUser}) => {
    return (
     <div class="homepage-container"> 
         <div className="homepage">
            <h1>Hello! Welcome to Homepage</h1>
            <div className="button" onClick={() => setLoginUser({})} >Logout</div>
         </div>
     </div>
    )
}

export default Homepage