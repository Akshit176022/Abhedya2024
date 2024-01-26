import React from "react";
import "./Login.css"


function Login (){
    return(
<>

    

<div class="card">
      <div class="main">
        <div class="header">
            <h1>Login</h1>
        </div>

        <form action="./form.html">
            <div class="components">
                <label for="email ">Enter email</label>
                <input type="text" id="email" name="email" placeholder="name@example.com"/>
            </div>

            <div class="components">
                <label for="password ">Enter password</label>
                <input type="text" id="password" name="password" placeholder="password"/>
            </div>

            <div class="button">
                <button id="Button">
                    Login
                </button>
            </div>
        </form>

        <div class="text">
            <div class="forgot"><a href="#">Forgot Password?</a></div>
            <div class="Signup"><a href="#">Don't have an account? Sign Up</a></div>

        </div>
    </div>
   </div>


  
</>
    );
}
export default Login;