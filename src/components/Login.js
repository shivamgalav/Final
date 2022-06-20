import React from 'react'
import '../App.css';
import {Link} from 'react-router-dom';

function Login() {

        
  return (
    <>  
        <div style={{display:'flex',justifyContent:'spaceEvenly',marginTop:"20%",flexDirection:'column',alignItems:'stretch',alignContent:'center',flexWrap:'wrap',gap:'20px'}}>
            <Link to='/teacher'><button className='btn btn-primary'>Teacher</button></Link>
            <Link to='/student'><button className='btn btn-primary'>Student</button></Link>
        </div>
    </>
  )
}

export default Login