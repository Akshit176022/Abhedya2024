import React, { useState } from "react";
import "./Navbar_new.css";

function Navbar_new() {
  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    console.log("toggleNavbar")
    setIsActive(!isActive);
  };

  const closeNavbar = () => {
    setIsActive(false);
  };

  return (

    <header className={`header ${isActive ? 'active' : ''}`}>

      <div className="header-bottom skewBg" data-header>
        <div className="container">

          <a href="#" className="logo">Abhedya</a>

          <nav className="navbar" data-navbar>
            <ul className="navbar-list">

              <li className="navbar-item">
                <a href="#home" className="navbar-link skewBg" data-nav-link onClick={closeNavbar}>Home</a>
              </li>

              <li className="navbar-item">
                <a href="#live" className="navbar-link skewBg" data-nav-link onClick={closeNavbar}>Guide</a>
              </li>

              <li className="navbar-item">
                <a href="#features" className="navbar-link skewBg" data-nav-link onClick={closeNavbar}>Leaderboard</a>
              </li>

              <li className="navbar-item">
                <a href="#shop" className="navbar-link skewBg" data-nav-link onClick={closeNavbar}>Login</a>
              </li>

              <li className="navbar-item">
                <a href="#" className="navbar-link skewBg" data-nav-link onClick={closeNavbar}>Contact</a>
              </li>

            </ul>
          </nav>

          <div className="header-actions">

            <button className="nav-toggle-btn" aria-label="toggle menu" data-nav-toggler onClick={toggleNavbar}>
              <ion-icon name="menu-outline" className={`menu ${isActive ? 'hidden' : ''}`}></ion-icon>
              <ion-icon name="close-outline" className={`close ${isActive ? '' : 'hidden'}`}></ion-icon>
            </button>

          </div>

        </div>
      </div>

    </header>
  );
}

export default Navbar_new;
