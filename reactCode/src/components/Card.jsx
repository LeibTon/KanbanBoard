import '../css/card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

import StatusIcon from "./StatusIcon";
import UserPic from "./UserPic";
import PriorityIcon from "./PriorityIcon";
import React from "react";

function Card(props){

  // This element creates separate cards using the data.

  // Truncates the text title if it's more than 55 characters
    function truncateText(text) {
        const maxLength = 55;
        if (text.length > maxLength) {
          return text.substring(0, maxLength - 3) + "...";
        } else {
          return text;
        }
      }

      const data = props.data;
      const user = props.user;
      const type = props.type;

    return(
        <div className = "card-main">
          <div className = "card-sub-main">
            <div className='card-profile'>{type === "userId"? "": <UserPic usr = {user.id} name = {user.name} status = {user.available} />} </div>
            <h1>{data.id}</h1>
            <div className = "title-holder">
            {type === "status"? "": <span style = {{marginRight: "7px"}}><StatusIcon status = {data.status}/></span>} <h2>{truncateText(data.title)}</h2> </div>
            {type === "priority"? "" : <div className = "block-container"><PriorityIcon priority = {data.priority} /></div>}
            {data.tag.map((x) => <div className = "block-container"><FontAwesomeIcon icon={faCircle} style={{color: "#aaaeb6",}}/> <span>{x}</span></div>)}
        </div>
        </div>
    )
}

export default Card;