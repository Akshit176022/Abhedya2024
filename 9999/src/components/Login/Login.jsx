import React from "react";
import "./Login.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function Login (){
    return(
<>

    

    <div class="container">
      <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div class="card border-0 shadow rounded-3 my-5">
            <div class="card-body p-4 p-sm-5">
              <h5 class="card-title text-center mb-5 fw-light fs-5" id="login">Login  </h5>
              <form class="form"/>
                <div class="form-floating mb-3">
                  <label for="floatingInput">Enter email</label>
                  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                  
                </div>
                <div class="form-floating mb-3">
                  <label for="floatingPassword">Enter password</label>
                  <input type="password" class="form-control  hello" id="floatingPassword" placeholder="Password"/>
                 
                </div>
  
           
                <div class="d-grid">
                  <button class="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Login</button>
                </div>
              
                <div class="text-center mb-3">
                  <a href="./forgot_password.html" class="btn-link" id="forgotPasswordLink">Forgot Password?</a>

              </div>
              <div class="text-center mt-3">
                <p class="text-white">Don't have an account? <a href="./signup.html" id="SignUp">Sign Up</a></p>
            </div>
            
              

         
                </div>

            </div>
          </div>
        </div>
      </div>


  
</>
    );
}
export default Login;