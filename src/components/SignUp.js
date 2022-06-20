import React from 'react';
import './App.css';

function SignUp() {
  return (
    <> 
        <div class="login">
    <form name='form-login'>

        <h1>REGISTER</h1>

        <label for="name">Email</label>
        <input type="email" id="name" placeholder="Username" required />

        <label for="pw">Password</label>
        <input type="password"
               id= "pw"
               placeholder="Password" required />

        <ul class="helper-text">
            <li class="length">Must be at least 8 characters long.</li>
            <li class="lowercase">Must contain a lowercase letter.</li>
            <li class="uppercase">Must contain an uppercase letter.</li>
            <li class="special">Must contain a number or special character.</li>
        </ul>
        <input id="rgstr_btn" type="submit" value="Register" onclick="store()" />

    </form>
</div>
    </>
  )
}

export default SignUp