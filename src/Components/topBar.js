import React from 'react'
import { Button } from 'react-bootstrap'
import {GoTriangleRight} from '@react-icons/all-files/go/GoTriangleRight'
import {BsCircle} from '@react-icons/all-files/bs/BsCircle'
// import{FaCircle} from "@react-icons/all-files/go/FaCircle"
// import {BsCheckCircleFill} from "@react-icons/all-files/bs/BsCheckCircle"
export default function TopBar() {
  return (
    <>
        

        <div className="container-fluid top_main ">
        <div className="container-fluid ">
          <div className="main_top">
            <ul className="main_topul">
              <li className="li_arrow">

                <Button type="button" className="btn li_button ">
                  status 1
                  <span className="span_topbar"><BsCircle/></span>
                  <span class="span_icon">
                    
                    <GoTriangleRight/>
                  </span>


{/* <span><FaCircle/></span> */}
                </Button>
              </li>
              <li class="li_arrow">
              <span class="span_icon_front">
                    
                    <GoTriangleRight/>
                  </span>
                <Button type="button" className="btn li_button_second ">
                  New
                  <span className="span_second"><BsCircle/></span>
                  <span className="span_icon_second">
                  <GoTriangleRight/>
                  </span>
                </Button>
              </li>
              <li class="li_arrow">
              <span class="span_icon_frontsecond">
                    
                    <GoTriangleRight/>
                  </span>
                <Button type="button" className="btn li_button_third  ">
                  Working
                  <span className="span_three"><BsCircle/></span>
                  <span className="span_icon_third">
                  <GoTriangleRight/>
                  </span>
                </Button>
              </li>
              <li class="li_arrow">
              <span class="span_icon_frontthird">
                    
                    <GoTriangleRight/>
                  </span>
                <Button type="button" className="btn li_button_third  ">
                  Nurturing
                  <span className="span_four"><BsCircle/></span>
                  <span className="span_icon_four">
                  <GoTriangleRight/>
                  </span>
                </Button>
              </li>
              <li class="li_arrow">
              <span class="span_icon_frontfour">
                    
                    <GoTriangleRight/>
                  </span>
                <Button type="button" className="btn li_button_third  ">
                  Converted
                  {/* <span className="span_icon_five">
                  <GoTriangleRight/>
                  </span> */}
                       <span className="span_five"><BsCircle/></span>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="bottom_box">
          <ul className="bottom_ul">
            <li className="li_bottoms">ACTIVITY</li>
            <li className="li_bottom">INFORMATION</li>
          </ul>
        </div>
      </div>


    </>
  )
}
