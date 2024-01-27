import React from "react";
import  "./Signup.css";






function Sign_up(){
    return(
        <>

<div class="cardsignup">
      <div class="mainsignup">
        <div class="headersignup">
         <h1> Sign Up</h1>
        </div>

        <form action="./form.html">
            <div class="componentssignup">
                <label for="email ">Enter email</label>
                <input type="text" id="email" name="email" placeholder="name@example.com"/>
            </div>

            <div class="componentssignup">
                <label for="password ">Enter password</label>
                <input type="text" id="password" name="password" placeholder="password"/>
            </div>

            <div class="componentssignup">
                <label for="name  ">Enter username</label>
                <input type="text" id="name " name="name " placeholder="Your Name"/>
            </div>

            <div class="componentssignup">
                <label for="name  ">Enter your Phone number</label>
                <input type="number" id="phone" name="name " placeholder="Phone Number"/>
            </div>
            <div class="buttonsignup">
                <button id="Buttonsignup">
                    SIGN UP
                </button>
            </div>

        </form>

        <div class="text">
 
            <div class="Signup"><a href="/login">Already have an account? Login in</a></div>

        </div>
    </div>
   </div> 


        </>

    );
}

export default Sign_up;