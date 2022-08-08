import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import {TiTick} from "@react-icons/all-files/ti/TiTick"
import {BiPhone} from "@react-icons/all-files/bi/BiPhone"
import {BiCalculator} from "@react-icons/all-files/bi/BiCalculator"
import {FaChevronDown} from "@react-icons/all-files/fa/FaChevronDown"





function SideBarData(){
    return(<>
    
        <div className="secondbox_main"style={{marginRight:"7px"}}>
          <div className="hor">
            <h1></h1>
          </div>

        <div className="col-secondbox ">
          {/* <div className="mb-3">
           
            <select id="disabledSelect" className="form-select">
              <option>Filter By Date</option>
            </select>
          </div> */}
          <div class="input-group mb-3">
 
  <input type="text" class="form-control select" placeholder="Filter By Date" aria-label="Username" aria-describedby="basic-addon1"/>
  <span class="input-group-text" id="basic-addon1"><FaChevronDown/></span>
</div>
        </div>
        <div className="side_boxs">
          <div className="row">
            <div className="col-lg-3 col-sm-3 col-md-3 col-3">
            <div className="icon_box">
           <BiPhone/>
            </div>
            </div>
            <div className="col-lg-9 col-sm-9 col-md-9 col-9">
            <div className="text_box">
              <h5 className="side_main">Informed product features</h5>
              <p className="p_sidemain">You Contacted with <span style={{color:"red"}}>Charles Gamez</span></p>
              <p className="p_sidemain">13 nov 2018 5:49am</p>
            </div>

           

            </div>
          </div>
        </div>

        <div className="side_boxs">
          <div className="row">
            <div className="col-lg-3 col-sm-3 col-md-3 col-3">
            <div className="icon_box">
              <TiTick/>
            </div>
            </div>
            <div className="col-lg-9 col-sm-9 col-md-9 col-9">
            <div className="text_box">
              <h5 className="side_main">Send Products Brochure</h5>
              <p className="p_sidemain">You Added a To Do Task with <span style={{color:"red"}}>Arun Var</span></p>
              <p className="p_sidemain">10 Nov 2018 6:49pm</p>
            </div>

           

            </div>
          </div>
        </div>

        <div className="side_boxs">
          <div className="row">
            <div className="col-lg-3 col-sm-3 col-md-3 col-3">
            <div className="icon_box">
            <BiCalculator/>
            </div>
            </div>
            <div className="col-lg-9 col-sm-9 col-md-9 col-9">
            <div className="text_box">
              <h5 className="side_main">Send  Product Brochure</h5>
              <p className="p_sidemain">You Added a To Do Task with <span style={{color:"red"}}>Arun Var</span></p>
              <p className="p_sidemain">10 Nov 2018 6:49Pm</p>
            </div>

           

            </div>
          </div>
        </div>
     

        <div className="side_boxs">
          <div className="row">
            <div className="col-lg-3 col-sm-3 col-md-3 col-3">
            <div className="icon_box">
            <BiPhone/>
            </div>
            </div>
            <div className="col-lg-9 col-sm-9 col-md-9 col-9">
            <div className="text_box">
              <h5 className="side_main">Informed product features</h5>
              <p className="p_sidemain">You Contacted with <span style={{color:"red"}}>Charles Gamez</span></p>
              <p className="p_sidemain">13 nov 2018 5:49am</p>
            </div>

           

            </div>
          </div>
        </div>

     

       
           

        </div>
     
    </>)
}

export default SideBarData