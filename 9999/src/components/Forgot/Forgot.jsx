import React from "react";
import "./Forgot.css"

function Forgot(){
    return(
        <>


<div class="forgot-password-container">
    <h2>Forgot Password</h2>
    <p>Enter your email address below to reset your password.</p>
    <form id="forgotPasswordForm">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required/>
       <div Class="Password"><button type="button">Reset Password</button></div> 
    </form>
</div>




        </>
    )
}
export default Forgot;