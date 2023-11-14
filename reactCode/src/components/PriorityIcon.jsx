import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faCircleExclamation, faThermometerFull , faThermometerHalf , faThermometerEmpty  } from '@fortawesome/free-solid-svg-icons'
function PriorityIcon(props){
// This element is created so that the priority icons can be modified separately

    const Icons = {
        0: <FontAwesomeIcon icon={faEllipsis} style={{color: "#5a5858",}} />,
        1: <FontAwesomeIcon icon={faThermometerEmpty} style={{color: "#5a5858",}}/>,
        2: <FontAwesomeIcon icon={faThermometerHalf} style={{color: "#5a5858",}} />,
        3: <FontAwesomeIcon icon={faThermometerFull} style={{color: "#5a5858",}} />,
        4: <FontAwesomeIcon icon={faCircleExclamation} style={{color: "#f95e0b",}} />
    }
    
    return(

        <div style = {{width: "16px", height: "16px", display: "inline-block"}}>
            {Icons[props.priority]}
        </div>
    )
}

export default PriorityIcon