import React from "react";
// import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./components/Login/Login";
import Navbar_new from "./components/Navbar_new/Navbar_new";


// import Sign_up from "./components/Sign_up/Signup";
import Faqs from "./components/faqs/faqs"









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
       <Route path="/" element={<><Faqs/></> }/>




   </Routes>
   </BrowserRouter>
  );
}
export default App;
