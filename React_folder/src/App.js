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
import Fnav from "./components/Final_navbar/navbar";
import Fhome from "./components/Final_home/home";
import Game from "./components/Game/game";
import Footer from "./components/footer/footer";


















;
function App(){
  return (
    

  
<BrowserRouter>
    <Routes>


        <Route path="/" element={<> <Fnav/><Fhome/><Footer/></> }/> 
        <Route path="/Sign" element={<> <Fnav/><Signup/><Footer/></> }/> 
        <Route path="/Leaderboard" element={<> <Fnav/><Leaderboard/><Footer/></> }/> 
        <Route path="/Time" element={<> <Fnav/><Timelines/><Footer/></>}/> 
        <Route path="/Game" element={<> <Fnav/><Game/><Footer/></> }/> 
        <Route path="/rules" element={<> <Fnav/><Rules/><Footer/></> }/> 
        <Route path="/forgot" element={<> <Fnav/><Forgot/><Footer/></> }/> 
        <Route path="/login" element={<> <Fnav/><Login/><Footer/></> }/> 



    


      










   </Routes>
   </BrowserRouter>
  );
}
export default App;
