import React from "react";
//  import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./components/Home_page/Home";
// import Leaderboard from "./components/Leaderboard/Leaderboard";
// import Rules from "./components/Rules/Rules";
//  import Forgot from "./components/Forgot/Forgot";
// import Login from "./components/Login/Login";

//  import Sign_up from "./components/Sign_up/Signup";
 import Navbar_new from "./Navbar_new/Navbar";









;
function App(){
  return (
    

  
<BrowserRouter>
    <Routes>

      <Route path="/Navbar" element={<><Navbar_new/></>}/>





   </Routes>
   </BrowserRouter>
  );
}
export default App;