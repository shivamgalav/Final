import { BrowserRouter as Router, Routes,Link, Route, Redirect,} from "react-router-dom";
import './App.css';
import React,{useState} from "react";
import Login from './components/Login';
import Student from './components/student/Student';
import Teacher from './components/Teacher';
import CreateForm from "./components/CreateForm";
import ShowQuiz from './components/student/ShowQuiz';

if(localStorage.length == 0){
  let emparr={};
  localStorage.setItem(0,JSON.stringify(emparr));
  localStorage.setItem(1,JSON.stringify(emparr));
  
}

let data = {};
let studentData = {};
try{
  data =JSON.parse(localStorage.getItem(0));
  studentData = JSON.parse(localStorage.getItem(1));;
}
catch(err){
  localStorage.setItem(0,JSON.stringify({}));
  localStorage.setItem(1,JSON.stringify({}));
}


function useForceUpdate(){
  // eslint-disable-next-line
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update the state to force render
}

function App() {

  const forceUpdate = useForceUpdate()
  let courses = Object.keys(data);

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route exact path='/teacher' element={<Teacher data={data} forceUpdate={forceUpdate}/>}>
          
        </Route>
            {courses.map(it=>(
              <Route exact path={`/teacher/${it}`} element={<CreateForm data={data[`${it}`]} mainData={data} />}>
              </Route>
            ))}
        <Route exact path='/student' element={<Student data={data} studentData = {studentData}/>}>

        </Route>
        {courses.map((it) => (
            <Route
              exact
              path={`/student/${it}`}
              element={
                <ShowQuiz data={data[`${it}`]} mainData={data} studentData={studentData} />
              }
            ></Route>
          ))}
      </Routes>
      </Router>
      
    </>
  );
}
export default App;
