import React from "react";
// import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./components/Login/Login";
import Navbar_new from "./components/Navbar_new/Navbar_new";


<<<<<<< HEAD
// import Sign_up from "./components/Sign_up/Signup";
import Faqs from "./components/faqs/faqs"
=======
>>>>>>> 6e218473af2071a6014c5f77926c8cd0ce4134af









;
function App(){
  return (
    

  
<BrowserRouter>
    <Routes>

<<<<<<< HEAD
      {/* <Route path="/" element={<><Home/><Navbar/></>}/>
      <Route path="/Leaderboard" element={<><Navbar/> <Leaderboard/></> }/>
       <Route path="/Rules" element={<><Navbar/> <Rules/></> }/> 
       <Route path="/Forgot" element={<> <Navbar/><Forgot/></> }/>
       <Route path="/Login" element={<> <Navbar/><Login/></> }/> */}
       {/* <Route path="/" element={<><Sign_up/></> }/> */}
       <Route path="/" element={<><Faqs/></> }/>
=======
      <Route path="/" element={<><Navbar_new/></>}/> 
  

>>>>>>> 6e218473af2071a6014c5f77926c8cd0ce4134af




   </Routes>
   </BrowserRouter>
  );
}
export default App;
