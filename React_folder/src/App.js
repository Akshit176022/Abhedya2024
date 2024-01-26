import React from "react";
// import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./components/Login/Login";
import Navbar_new from "./components/Navbar_new/Navbar_new";











;
function App(){
  return (
    

  
<BrowserRouter>
    <Routes>

      <Route path="/" element={<><Navbar_new/></>}/> 
  





   </Routes>
   </BrowserRouter>
  );
}
export default App;
