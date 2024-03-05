import React from "react";
import "./Forgot.css"

function Forgot(){
    return(
        <>

<div className="forcontainer">



<div class="forgot-password-container">
    <h2>Forgot Password</h2>
    <p>Enter your email address below to reset your password.</p>
    <form id="forgotPasswordForm">
       <div className="labelforgotpassword"> <label for="email">Email:</label></div>
        <div className="inputforgot"><input type="email" id="email" name="email" required/></div>
       <div Class="Passwordforgot"><button type="buttonforgot">Reset Password</button></div> 
    </form>
</div>

</div>



        </>
    )
}
export default Forgot;