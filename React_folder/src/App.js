import React from "react";
// import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./components/Login/Login";
import Navbar_new from "./components/Navbar_new/Navbar_new";
import Login from "./components/Login/Login";
import Sign_up from "./components/Sign_up/Signup";











;
function App(){
  return (
    

  
<BrowserRouter>
    <Routes>

      <Route path="/" element={<><Login/></>}/> 
      <Route path="/Sign_up" element={<><Sign_up/></>}/> 

  





   </Routes>
   </BrowserRouter>
  );
}
export default App;
