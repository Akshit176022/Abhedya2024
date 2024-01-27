import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Sign_up/Signup";
// import Newhome from "./components/New_home/New_home";
import Leaderboard from "./components/Leaderboard/Leaderboard";
 import Rules from "./components/Rules/Rules";
import Forgot from "./components/Forgot/Forgot";
import {Link} from "react-router-dom";



// import Home from "./components/Home_page/Home"
import Timelines from "./components/timeline/timeline";
import Fnav from "./components/Final_navbar/navbar";
import Fhome from "./components/Final_home/home";
import Game from "./components/Game/game";
















;
function App(){
  return (
    

  
<BrowserRouter>
    <Routes>

    <Route path="/Login" element={<> <Fnav/><Login/></> }/> 

        <Route path="/" element={<> <Fnav/><Fhome/></> }/> 
        <Route path="/Sign" element={<> <Fnav/><Signup/></> }/> 
        <Route path="/Leaderboard" element={<> <Fnav/><Leaderboard/></> }/> 
        <Route path="/Time" element={<> <Fnav/><Timelines/></> }/> 
        <Route path="/Game" element={<> <Fnav/><Game/></> }/> 
        <Route path="/rules" element={<> <Fnav/><Rules/></> }/> 



        

 
        

    
    


      










   </Routes>
   </BrowserRouter>
  );
}
export default App;
