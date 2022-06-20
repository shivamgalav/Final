import React from 'react'
import ShowCourses from './ShowCourses';



function Student(props) {

    let courses = Object.keys(props.data);

  return (
    <>
                <div style={{width:"50rem",textAlign:'center',margin:"auto"}}><h2>Courses For Which You Can Take Quiz</h2></div>              
                
                <ShowCourses courses={courses} />
              </>
  )
}

export default Student