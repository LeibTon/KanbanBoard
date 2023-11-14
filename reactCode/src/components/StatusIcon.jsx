import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCircleHalfStroke, faCircleCheck , faCircleXmark , faCircleInfo  } from '@fortawesome/free-solid-svg-icons'
function StatusIcon(props){
// This element is created so that the status icon can be modified separately

    const Icons = {
        "Todo": <FontAwesomeIcon icon={faCircle} style={{color: "#aaaeb6",}} />,
        "In progress": <FontAwesomeIcon icon={faCircleHalfStroke} style={{color: "#e5d048",}} />,
        "Backlog": <FontAwesomeIcon icon={faCircleInfo} style={{color: "#f94e15",}} />,
        "Done": <FontAwesomeIcon icon={faCircleCheck} style={{color: "#165ad0",}} />,
        "Canceled": <FontAwesomeIcon icon={faCircleXmark} style={{color: "#808185",}} />
    }


    return(

        <div style = {{width: "16px", height: "16px", display: "inline-block"}}>
            {Icons[props.status]}
        </div>
    )
}

export default StatusIcon;