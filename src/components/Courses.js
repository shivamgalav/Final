import React,{useState} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
  } from "react-router-dom";
function Courses(props) {
  const handleDel = (e)=>{
    if(window.confirm("This will delete this course??")){
      console.log(e.target.id)
      delete props.mainData[e.target.id]
      localStorage.setItem(0, JSON.stringify(props.mainData));
      props.forceUpdate();
    }
  }

  return (
    <>
    {props.courses.map((it)=>(
      <ul className="list-group list-group-flush">
      <li className="list-group-item">
      <div class="input-group"  style={{marginBottom:"2%",marginLeft:"30%"}}>
                <Link to={`/teacher/${it}`}><input
                  type="text"
                  class="form-control"
                  style={{ backgroundColor: "white",border:"none" }}
                  disabled
                  value={it}
                  aria-label="option1"
                  aria-describedby="basic-addon1"
                  /></Link>
                <button className="btn btn-danger" id={it} onClick={handleDel} style={{borderRadius:"30px",marginLeft:"1%"}}>Delete Course</button>
              </div>
              </li>
              </ul>
          ))}
    </>
  )
}

export default Courses