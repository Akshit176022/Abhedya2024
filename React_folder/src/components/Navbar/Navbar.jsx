import React from "react";
import "./Navbar.css"
function Navbar(){
    return(
        <>
<nav class="navbar">
       
       <div class="logo">
         PRODYOGIKI
         </div>
   
 
       <ul class="nav-links">
   
 
         <input type="checkbox" id="checkbox_toggle" />
         <label for="checkbox_toggle" class="hamburger">&#9776;</label>
   
 
         <div class="menu">
   
           <li><a href="/">Home</a></li>
           <li class="services">
             <a href="#">Guide</a>
   
 
             <ul class="dropdown">
               <li><a href="#">Timeline </a></li>
               <li><a href="/rules">Rules </a></li>
               <li><a href="#">Note</a></li>
               <li><a href="">Prize Pool</a></li>
             </ul>
   
           </li>
   
           <li><a href="/Leaderboard">Leaderboard</a></li>
           <li><a href="">login</a></li>
         </div>
       </ul>
</nav>
        </>
    );
    
}
export default Navbar;