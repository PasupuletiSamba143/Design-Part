
import React from 'react'
// import ActivitySet from './ActivitySet'
// import AddAttachement from './AddAttachement'
// import customField from './customField'
// import Event from './Event'
// import LoadCalls from './LoadCalls'
// import MakeNote from './MakeNote'
// import Task from './Task'
import { Link } from 'react-router-dom'
// import Task from './Task'
import SideBarData from './sidebardata';
import '../Components/header.css';
export default function Header() {

return (
    
    
<div>
        
<nav className="navbar navbar-expand-lg bg-light" style={{width:"932px"}}>
  <div className="container">
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item ">
          < Link className="nav-link " to="loadcalls" >Log Calls</Link>
        </li>
        <li className="nav-item nav_bar">
          < Link className="nav-link"  to="task" >Task</Link>
        </li>
        <li className="nav-item  nav_bar">
          < Link className="nav-link " to="event" >Event</Link>
        
        </li>
      
        <li className="nav-item nav_bar">
          < Link className="nav-link " to="makenote" >Make Note</Link>
        
        </li>
        
        <li className="nav-item nav_bar">
          < Link className="nav-link" to="addAttachement" >AddAttachement</Link>
        
        </li>
        
        <li className="nav-item nav_bar">
          < Link className="nav-link" to="activityset" >ActivitySet</Link>
        
        </li>
        
        <li className="nav-item nav_bar">
          < Link className="nav-link " to="field" >custom Field</Link>
        
        </li>
      </ul>
     
    </div>
  </div>
</nav>
</div>



    
  )
}