import React, { useState, useEffect } from "react";
import "./Navbar.css";

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

          <a href="#" className="logo">Abhedya</a>

          <nav className={`navbar ${isActive ? 'active' : ''}`} data-navbar>
            <ul className="navbar-list">

              <li className="navbar-item">
                <a href="#home" className="navbar-link skewBg" data-nav-link onClick={closeMenu}>Home</a>
              </li>

              <li className="navbar-item">
                <a href="#live" className="navbar-link skewBg" data-nav-link onClick={closeMenu}>Guide</a>
              </li>

              <li className="navbar-item">
                <a href="#features" className="navbar-link skewBg" data-nav-link onClick={closeMenu}>Leaderboard</a>
              </li>

              <li className="navbar-item">
                <a href="#shop" className="navbar-link skewBg" data-nav-link onClick={closeMenu}>Login</a>
              </li>

              <li className="navbar-item">
                <a href="#" className="navbar-link skewBg" data-nav-link onClick={closeMenu}>Contact</a>
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
