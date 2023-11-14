import './css/display.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import Container from './components/Container';
import React, {useState, useEffect} from "react";
import { useCookies } from 'react-cookie';

function App() {

  const [cookies, setCookies] = useCookies(['group', 'order'])
  const [data, setData] = useState()

  // Fetch Data using API
  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
    .then((response) => response.json())
    .then((data) => {
      setData(data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }, [])

  // Update cookies
  function handleGroupChange(e){
    setCookies("group", e.target.value, { path: '/' })
  }

  function handleOrderChange(e){
    setCookies("order", e.target.value, {path : '/'})
  }

  return (

    <div>
      {/* Display Button  */}
    <div className = "top-container">
<div className="dropdown">
  <button className="dropbtn"> <span style={{color:'grey', marginRight: '7px'}}><FontAwesomeIcon icon={faSliders} /></span> Display 
  <span style={{color:'grey', marginLeft: '7px'}}><FontAwesomeIcon icon={faCaretDown} /></span>
  </button>
  <div className="dropdown-content">
    <div className = "dropdown-main-content">
    <div className="dropdown-group" style={{marginBottom: "10px"}}>
      <span>Grouping</span>
      <select className = "dropbtn selectbtn" onChange={handleGroupChange} defaultValue={cookies.group ? cookies.group : "status"}>
        <option value="status">Status</option>
        <option value="userId">User</option>
        <option value="priority">Priority</option>
      </select>
    </div>
    <div className="dropdown-group">
      <span>Ordering</span>
      <select className = "dropbtn selectbtn" onChange={handleOrderChange} defaultValue={cookies.order ? cookies.order : "priority"}>
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>
    </div>
    </div>
  </div>
</div>
</div>
{data !==undefined ? <Container group = {cookies.group ? cookies.group : "status"} order = {cookies.order ? cookies.order : "priority"} data = {data}/>: ""}
</div>
  );
}

export default App;
