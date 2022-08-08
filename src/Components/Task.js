import React, { useState,useEffect } from "react";
import SideBarData from "./sidebardata";
// import TableData from "./tabledata";
import { Button } from "react-bootstrap";
import "../assests/css/main.css";

export default function Task() {
  const intialValues = {
    tType: "",
    subject: "",
    assigned: "",
    starting: "",
    ending: "",
    rDate: "",
    status:""
  };
   const [state, setState] = useState(intialValues);

  const [data, setData] = useState([]);
  const onHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setData([...data, state]);
    setState(intialValues);
  };

  const { tType, subject, assigned, starting, ending, rDate,status } = state;

  // useEffect(() => {
  // setData([...data,state])
  
  // }, [])
  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-9">
            <div className="col_mainbox">
              <div className="main_fisrttop">
                <div className="box_topmain">
                  <h4 className="mainheadding">New Task</h4>
                  <div className="mainbox_form">
                    <form>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form_box">
                            <div className="col-secondbox">
                              <div className="mb-3">
                                <label
                                  for="disabledSelect"
                                  className="form-label "
                                >
                                  Task Type
                                  <span style={{ color: "red" }}>*</span>
                                </label>
                                <select
                                  id="disabledSelect"
                                  className="form-select"
                                  name="tType"
                                  value={tType}
                                  onChange={onHandler}
                                >
                                  <option></option>
                                  <option>To Do</option>
                                  <option>Search bar</option>
                                  <option>Nav Bar</option>
                                  <option>Home Page</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form_box">
                            <div className="mb-3">
                              <label
                                for="exampleFormControlInput1"
                                className="form-label"
                              >
                                Subject
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput1"
                                name="subject"
                                value={subject}
                                onChange={onHandler}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form_box">
                            <div className="col-secondbox">
                              <div className="mb-3">
                                <label
                                  for="disabledSelect"
                                  className="form-label "
                                >
                                  Assigned to
                                  <span style={{ color: "red" }}>*</span>
                                </label>
                                <select
                                  id="disabledSelect"
                                  className="form-select"
                                  name="assigned"
                                  value={assigned}
                                  onChange={onHandler}
                                >
                                  <option></option>
                                  <option>Charles Gomez</option>
                                  <option>Arun Varma</option>
                                  <option>Samba</option>
                                </select>
                              </div>

                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="mb-3">
                                    <label
                                      for="exampleFormControlInput1"
                                      className="form-label"
                                      name="starting"
                                      value={starting}
                                      onChange={onHandler}
                                    >
                                      Start Date
                                    </label>
                                    <input
                                      type="date"
                                      className="form-control"
                                      id="exampleFormControlInput1"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="mb-3">
                                    <label
                                      for="exampleFormControlInput1"
                                      className="form-label"
                                      name="ending"
                                      value={ending}
                                      onChange={onHandler}
                                    >
                                      End Date
                                    </label>
                                    <input
                                      type="date"
                                      className="form-control"
                                      id="exampleFormControlInput1"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="mb-3">
                                <label
                                  for="exampleFormControlInput1"
                                  className="form-label"
                                >
                                  Remind on
                                </label>
                                <input
                                  type="date"
                                  className="form-control"
                                  id="exampleFormControlInput1"
                                  name="rDate"
                                  value={rDate}
                                  onChange={onHandler}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form_box">
                            <div className="mb-3">
                              <label
                                for="exampleFormControlTextarea1"
                                className="form-label"
                              >
                                Example textarea
                              </label>
                              <textarea
                                style={{ resize: "none" }}
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="8"
                              ></textarea>
                            </div>

                            <Button type="button" className="btn button_submit">
                              Cancle
                            </Button>
                            <Button
                              type="button"
                              className="btn button_submits"
                              onClick={submitHandler}
                            >
                              Apply
                            </Button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            <h5>Task List</h5>

              <table className="table  table-striped">
        <thead className="table table-bordered" style={{marginBottom:'10px'}}>
          <tr style={{marginBottom:'10px'}}>
            <th>#</th>
            <th className="table_tr" style={{marginBottom:'10px'}}>Subject</th>
            <th>Type</th>
            <th>Assigned To</th>
            <th>Due Date</th>
            <th style={{marginLeft:"500px"}}>
            status
              <select style={{border:"none",marginRight:"10px"}} name="status" value={status} onChange={onHandler} className="select_box">
                <option style={{ border:"none",marginRight:"500px"}}></option>
                <option style={{ border:"none",marginRight:"500px"}}>NotStart</option>
              </select>
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((res, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{res.subject}</td>
                <td>{res.tType}</td>
                <td>{res.assigned}</td>
                <td>{res.rDate}</td>
                <td>{res.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

            </div>

            {/* <TableData /> */}
          </div>
          
           {/* <div className="col-lg-3 col-md-3">
             <SideBarData />
           </div> */}
        </div>
      </div>

      {/* <table className="table table">
        <thead>
          <tr>
            <th>#</th>
            <th>Subject</th>
            <th>Type</th>
            <th>Assigned To</th>
            <th>Due Date</th>
            <th>
              status
              <select>
                <option></option>
                <option>NotStart</option>
              </select>
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((res, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{res.subject}</td>
                <td>{res.tType}</td>
                <td>{res.assigned}</td>
                <td>{res.rDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table> */}
    </>
  );
}
