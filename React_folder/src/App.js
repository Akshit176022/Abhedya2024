import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Sign_up/Signup";
// import Newhome from "./components/New_home/New_home";
import Leaderboard from "./components/Leaderboard/Leaderboard";
 import Rules from "./components/Rules/Rules";
import Forgot from "./components/Forgot/Forgot";
// import Faqs from "./components/Faq/Faq";




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


        <Route path="/" element={<div className="App"> <Fnav/><Fhome/><Footer/> </div>}/> 
        <Route path="/Sign" element={<div className="App"><> <Fnav/><Signup/><Footer/></></div> }/> 
        <Route path="/Leaderboard" element={<div className="App"><> <Fnav/><Leaderboard/><Footer/></></div> }/> 
        <Route path="/Time" element={<div className="App"><> <Fnav/><Timelines/><Footer/></></div>}/> 
        <Route path="/Game" element={<div className="App"><> <Fnav/><Game/><Footer/></> </div>}/> 
        <Route path="/rules" element={<div className="App"><> <Fnav/><Rules/><Footer/></></div> }/> 
        <Route path="/forgot" element={<div className="App"><> <Fnav/><Forgot/><Footer/></> </div>}/> 
        <Route path="/login" element={<div className="App"><> <Fnav/><Login/><Footer/></></div> }/> 
        <Route path="/nav" element={<div className="App"><> <Fnav/></> </div>}/> 





    


      










   </Routes>
   </BrowserRouter>
  );
}
export default App;
