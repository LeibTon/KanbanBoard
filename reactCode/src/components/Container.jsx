import React from "react";
import Group from './Group';
import '../css/container.css';

function Container(props){
    // This element reprents the Kanban Board and creates different groups

    const group = props.group;
    const order = props.order;
    const tickets = props.data.tickets;
    const users = props.data.users;

    // Create different groups based on the grouping criterion
    //Note that I have created these userdefined keys because there might be some group with no ticket
    var groupObject = {}
    if(group === "status"){
        groupObject["Backlog"] = [];
        groupObject["Todo"]= [];
        groupObject["In progress"]= [];
        groupObject["Done"] = [];
        groupObject["Canceled"] = [];
   
    }
    else if(group === "priority"){
        groupObject[0] = [];
        groupObject[4] = [];
        groupObject[3] = [];
        groupObject[2] = [];
        groupObject[1] = [];
    }
    else{
        groupObject['usr-1'] = [];
        groupObject['usr-2'] = [];
        groupObject['usr-3'] = [];
        groupObject['usr-4'] = [];
        groupObject['usr-5'] = [];
    }

    for (const object of tickets){
        groupObject[object[group]].push(object);
    }

    // Modify the array of users to an object to ease the access of different user data
    var userData = {}

    for (const object of users) {
        const userID = object.id;
        userData[userID] = object;
      }

      // Sort Arrays based on the choice and generate an array of different groups
      function groupArrays(){
        var grouparray = [];
        for(const dictkey of Object.keys(groupObject)){
            const array = groupObject[dictkey];
            if(order === "title")
                array.sort((a, b) => a.title.localeCompare(b.title));
            else
                array.sort((a, b) => b.priority - a.priority)
        grouparray.push(<Group type = {group} data = {array} keyid = {dictkey} length = {array.length} users = {userData}/>)
        }
        return grouparray;
    }


    return <div className = "main-container">
        {groupArrays()}
    </div>
}

export default Container;