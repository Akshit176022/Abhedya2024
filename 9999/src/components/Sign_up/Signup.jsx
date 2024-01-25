import React from "react";
import  "./Signup.css";






function Sign_up(){
    return(
        <>

<div class="container">
        <div class="row">
            <div class="column-sm-9 column-md-7 column-lg-5 mx-auto">
                <div class="custom-card">
                    <div class="card-body">
                        <h5 class="card-title text-center" id="login">Login</h5>
                        <form class="login-form">
                            <div class="form-group">
                                <label for="email">Enter email</label>
                                <input type="email" class="form-input" id="email" placeholder="name@example.com"/>
                            </div>
                            <div class="form-group">
                                <label for="password">Enter password</label>
                                <input type="password" class="form-input" id="password" placeholder="Password"/>
                            </div>

                            <div class="button-container">
                                <button class="login-button" type="submit">Login</button>
                            </div>

                            <div class="text-center-link">
                                <a href="./forgot_password.html" class="forgot-password-link" id="forgotPasswordLink">Forgot Password?</a>
                            </div>
                            <div class="text-center mt-3">
                                <p class="text-white">Don't have an account? <a href="./signup.html" id="SignUp">Sign Up</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>


        </>

    );
}

export default Sign_up;