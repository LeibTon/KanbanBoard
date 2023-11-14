import React from "react";
import '../css/userPic.css';


function UserPic(props){
  // This element is created so that the userPic can be modified separately
    const userProfilePicture = {
        "usr-1": "https://randomuser.me/api/portraits/men/45.jpg",
        "usr-2": "https://randomuser.me/api/portraits/men/47.jpg",
        "usr-4": "https://randomuser.me/api/portraits/men/98.jpg"
    }
    
    function getInitials(name) {
        let initials = "";
        const words = name.split(" ");
      
        for (const word of words) {
          initials += word[0];
        }
      
        return initials.toUpperCase();
      }

    return(
    <div className="user-profile">
    <div className="user-pic">
        {userProfilePicture[props.usr] ? <img src= {userProfilePicture[props.usr]} alt="User Profile" /> : <div className = "user-initials">{getInitials(props.name)}</div>}
      <div className="status-indicator" style = {{backgroundColor: props.status ? "green" : "grey"}}></div>
    </div>
  
    
  </div>)
}
export default UserPic;