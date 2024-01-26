import React from "react";
import  "./Signup.css";






function Sign_up(){
    return(
        <>

<div class="card">
      <div class="main">
        <div class="header">
            <h1>Sign Up</h1>
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

            <div class="components">
                <label for="name  ">Enter username</label>
                <input type="text" id="name " name="name " placeholder="Your Name"/>
            </div>

            <div class="components">
                <label for="name  ">Enter your Phone number</label>
                <input type="number" id="phone" name="name " placeholder="Phone Number"/>
            </div>
            <div class="button">
                <button id="Button">
                    SIGN UP
                </button>
            </div>

        </form>

        <div class="text">
 
            <div class="Signup"><a href="">Already have an account? Sign Up</a></div>

        </div>
    </div>
   </div> 


        </>

    );
}

export default Sign_up;