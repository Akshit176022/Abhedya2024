import React from "react";
import "./Login.css"


function Login (){
    return(


    

<div class="cardlogin">
      <div class="mainheaderlogin">
        <div class="headerlogin">
            Login
        </div>

        <form >
            <div class="componentslogin">
                <label for="email ">Enter email</label>
                <input type="text" id="email" name="email" placeholder="name@example.com"/>
            </div>

            <div class="componentslogin">
                <label for="password ">Enter password</label>
                <input type="text" id="password" name="password" placeholder="password"/>
            </div>

            <div class="buttonlogin">
                <button id="Buttonlogin">
                    Login
                </button>
            </div>
        </form>

        <div class="textlogin">
            <div class="forgot"><a href="/forgot">Forgot Password?</a></div>
            <div class="Signup"><a href="/sign">Don't have an account? Sign Up</a></div>

        </div>
    </div>
   </div>


  

    );
}
export default Login;