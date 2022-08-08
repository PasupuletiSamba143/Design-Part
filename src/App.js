import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from ".././src/Components/Header"
import AddAttachement from "./Components/AddAttachement";
import ActivitySet from "./Components/ActivitySet";
import Field from "./Components/customField";
import Event from "./Components/Event";
import LoadCalls from "./Components/LoadCalls";
import MakeNote from "./Components/MakeNote";
import Task from "./Components/Task";
// import topBar from "./Components/topBar";
import TopBar from "./Components/topBar";
import SideBarData from "./Components/sidebardata";

function App() {
  return (
<div>

<TopBar/>
<div className="container-fluid">
  <div className="row g-2">
  <div className=" col-lg-9  col-12 col-md-12 col-sm-12">


  <BrowserRouter>
     <Header/>
    <Switch>

    {/* <Route path="/" component={Task}/>  */}
    <Route path="/" component={Task}/>
   <Route path="/loadcalls" component={LoadCalls}/>
   <Route path="/task" component={Task}/>
   <Route path="/event" component={Event}/>
   <Route path="/makenote" component={MakeNote}/>
   <Route path="/addAttachement" component={AddAttachement}/>
   <Route path="/activityset" component={ActivitySet}/>
   <Route path="/field" component={Field}/>
   {/* <Route path="/" component={Task}/> */}
    

    </Switch>


     
    </BrowserRouter>
  </div>

<div className="col-lg-3 col-12 col-md-12 col-sm-12">

<SideBarData/>
</div>

  </div>

{/* <div>

    </div> */}
    </div>
    </div>
  );
}

export default App;
