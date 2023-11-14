import React from "react";
import '../css/group.css';
import UserPic from "./UserPic";
import StatusIcon from "./StatusIcon";
import PriorityIcon from "./PriorityIcon";
import Card from "./Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function Group(props){
    // This element creates the header for a group and assigns the respective cards

    const priorityList = {
        0: "No priority",
        4: "Urgent",
        3: "High",
        2: "Medium",
        1: "Low",
        
    }
    
    function groupHeading(){
        var element;
        var id;

        // Creating the group header based on choice of grouping
        if(type === "status"){
            element = <StatusIcon status = {keyid}/>
            id = keyid
        }
        else if(type === "priority"){
            element = <PriorityIcon priority = {keyid}/>
            id = priorityList[keyid]
        }
        else {
            element = <UserPic usr = {keyid} name = {users[keyid]["name"]} status = {users[keyid]["available"]} />
            id = users[keyid]["name"]
        }
        return <div className = "group-title"> {element} <span style = {{marginRight: "10px", marginLeft: "10px", fontWeight:600}}>{id}</span><span style = {{fontWeight: 300, color: "grey"}}> {length}</span></div>
    }
    
    const data  = props.data;
    const type = props.type;
    const keyid = props.keyid;
    const length = props.length;
    const users = props.users;
    return <div className = "group-container">
        <div className = "group-heading">
            {groupHeading()}
            <div className = "group-options"><span style = {{marginRight: "17px"}}><FontAwesomeIcon icon={faPlus} /></span>  <span style = {{marginRight: "7px"}}><FontAwesomeIcon icon={faEllipsis} /></span> </div>
        </div>
        {data.map((x) => <Card type = {type} data = {x} user = {users[x.userId]}/>)}
    </div>
}

export default Group;