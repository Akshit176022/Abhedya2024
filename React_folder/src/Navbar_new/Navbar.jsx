import React from "react";
import "./Navbar.css"
function Navbar_new(){
    return(
        <>
          <header class="header">

    

<div class="header-bottom skewBg" data-header>
  <div class="container">

    <a href="#" class="logo">Abhedya</a>

    <nav class="navbar" data-navbar>
      <ul class="navbar-list">

        <li class="navbar-item">
          <a href="#home" class="navbar-link skewBg" data-nav-link>Home</a>
        </li>

        <li class="navbar-item">
          <a href="#live" class="navbar-link skewBg" data-nav-link>Guide</a>
        </li>

        <li class="navbar-item">
          <a href="#features" class="navbar-link skewBg" data-nav-link>Leaderboard</a>
        </li>

        <li class="navbar-item">
          <a href="#shop" class="navbar-link skewBg" data-nav-link>Login</a>
        </li>

        <li class="navbar-item">
          <a href="#" class="navbar-link skewBg" data-nav-link>Contact</a>
        </li>

      </ul>
    </nav>

    <div class="header-actions">

      <button class="nav-toggle-btn" aria-label="toggle menu" data-nav-toggler>
        <ion-icon name="menu-outline" class="menu"></ion-icon>
        <ion-icon name="close-outline" class="close"></ion-icon>
      </button>

    </div>

  </div>
</div>

</header>

        
        </>


    );
}
export default Navbar_new;