import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Sign_up/Signup";
// import Newhome from "./components/New_home/New_home";
import Leaderboard from "./components/Leaderboard/Leaderboard";
 import Rules from "./components/Rules/Rules";
import Forgot from "./components/Forgot/Forgot";

// import Home from "./components/Home_page/Home"
import Timelines from "./components/timeline/timeline";
import Navbar_new from "./components/Navbar_new/Navbar_new";
















;
function App(){
  return (
    

  
<BrowserRouter>
    <Routes>


       <Route path="/Login" element={<> <Navbar_new/><Login/></> }/>  
      <Route path="/Signup" element={<> <Navbar_new/> <Signup/></> }/>
      {/* <Route path="/New_home" element={<> <Newhome/></> }/>   */}
      <Route path="/Leaderboard" element={<>  <Navbar_new/><Leaderboard/></> }/> 
       <Route path="/Rules" element={<> <Navbar_new/><Rules/> </>}/> 
       <Route path="/Forgot" element={<><Navbar_new/><Forgot/> </>}/> 
       <Route path="/" element={<><Navbar_new/><Timelines/> </>}/>  
        {/* <Route path="/" element={<><Home/> </>}/>    */}
        <Route path="/Nav" element={<> <Navbar_new/></> }/> 
    


      










   </Routes>
   </BrowserRouter>
  );
}
export default App;
