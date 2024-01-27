

import React, { useState, useEffect } from "react";
import "./navbar.css";
import {Link} from "react-router-dom"

function Navbar_new() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {

      } else {
   
      }
    };

    window.addEventListener("scroll", handleScroll);


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isActive ? 'menu-active' : ''}`}>
      <div className="header-bottom skewBg" data-header>
        <div className="container">

          <div className="logo">Abhedya</div>

          <nav className={`navbar ${isActive ? 'active' : ''}`} data-navbar>
            <ul className="navbar-list">

              <li className="navbar-item">
                <a href="/game" className="navbar-link skewBg" data-nav-link onClick={closeMenu}>Play Game</a>
              </li>

              <li className="navbar-item">
                <a href="/Time" className="navbar-link skewBg" data-nav-link onClick={closeMenu}>Timeline</a>
              </li>

              <li className="navbar-item">
                <a href="/Leaderboard" className="navbar-link skewBg" data-nav-link onClick={closeMenu}>Leaderboard</a>
              </li>

              <li className="navbar-item">
                <a href="/Login" className="navbar-link skewBg" data-nav-link onClick={closeMenu}>Login</a>
              </li>

              <li className="navbar-item">
                <a href="/rules" className="navbar-link skewBg" data-nav-link onClick={closeMenu}>Rules</a>
              </li>

            </ul>
          </nav>

          <div className="header-actions">
            <button className="nav-toggle-btn" aria-label="toggle menu" onClick={toggleMenu}>
              <ion-icon name={isActive ? "close-outline" : "menu-outline"} class={isActive ? "close" : "menu"}></ion-icon>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Navbar_new;
