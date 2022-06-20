import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
  } from "react-router-dom";

function ShowCourses(props) {
  return (
    <>
        {props.courses.map((it)=>(
          <Link to={`/student/${it}`}>
          <div className='card' style={{width:"18rem",margin:"auto",textAlign:"center",fontSize:"2rem"}}>{it}</div>
          </Link>
          ))}


    </>
  )
}

export default ShowCourses