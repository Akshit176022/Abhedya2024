import React from "react";
// import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./components/Home_page/Home";
// import Leaderboard from "./components/Leaderboard/Leaderboard";
// import Rules from "./components/Rules/Rules";
// import Forgot from "./components/Forgot/Forgot";
import Login from "./components/Login/Login";

// import Sign_up from "./components/Sign_up/Signup";









;
function App(){
  return (
    

  
<BrowserRouter>
    <Routes>

      {/* <Route path="/" element={<><Home/><Navbar/></>}/>
      <Route path="/Leaderboard" element={<><Navbar/> <Leaderboard/></> }/>
       <Route path="/Rules" element={<><Navbar/> <Rules/></> }/> 
       <Route path="/Forgot" element={<> <Navbar/><Forgot/></> }/>
       <Route path="/Login" element={<> <Navbar/><Login/></> }/> */}
       {/* <Route path="/" element={<><Sign_up/></> }/> */}
       <Route path="/Login" element={<><Login/></> }/>




   </Routes>
   </BrowserRouter>
  );
}
export default App;
