import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Courses from "./Courses";
function useForceUpdate(){
  // eslint-disable-next-line
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update the state to force render
}

function Teacher(props) {
  const forceUpdate = useForceUpdate()
  const [courseName, setCourseName] = useState("")
  const handleName = (e)=>{
    setCourseName(e.target.value);
  }

  let courses = Object.keys(props.data);
  const addCourse = ()=>{
    if(courseName==""){
      window.alert("Can't name course as empty")
    }
    else if(props.data[courseName]!=null){
      window.alert("Already Exist")
    }
    else{
      props.data[courseName] = [];
      localStorage.setItem(0, JSON.stringify(props.data));
      props.forceUpdate();
      setCourseName("")
      console.log(courses);
    }
  }
  return (
      
      
        
      <>
          <form autoComplete="off">
          <input style={{
          maxWidth: "29rem",
          marginLeft: "30%",
          marginTop: "1%",
          marginBottom: "3%",
        }}
          type="title"
          className="form-control"
          id="exampleFormControlInput1"
          value={courseName}
          onChange={handleName}
        />
        </form>
      <Button variant="primary" onClick={addCourse} style={{ marginLeft: "53%", borderRadius:"30px"}}>
                Add Courses 
        </Button><br/><br/>
        <Courses courses={courses} mainData={props.data} forceUpdate={forceUpdate}/>
        </>
  );
}

export default Teacher;
