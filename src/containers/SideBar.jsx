import React, { useState, useEffect } from 'react';
import '../styles/SideBar.css';
import { NavHashLink } from 'react-router-hash-link';
import { isMobile } from 'react-device-detect';
import { Profile } from '../components/Profile';
import 'boxicons/css/boxicons.css';

export const SideBar = () => {
  const [menuActive, setMenuState] = useState(false);

  useEffect(() => {
    if (isMobile) {
      console.log('mobi');
      document.body.classList.toggle('mobile-nav-active', menuActive);
    }
  }, [menuActive]);

  return (
    <aside>
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <Profile />
          </div>
          <nav className="nav-menu">
            <ul>
              <NavHashLink
                to="#home"
                activeClassName="active"
                onClick={() => setMenuState(prevMenuActive => !prevMenuActive)}
              >
                <i className="bx bx-home" />
                Home
              </NavHashLink>
              <NavHashLink
                to="#about"
                activeClassName="active"
                onClick={() => setMenuState(prevMenuActive => !prevMenuActive)}
              >
                <i className="bx bx-user" />
                About
              </NavHashLink>
              <NavHashLink
                to="#portfolio"
                activeClassName="active"
                onClick={() => setMenuState(prevMenuActive => !prevMenuActive)}
              >
                <i className="bx bx-book-content" />
                Portfolio
              </NavHashLink>
              <NavHashLink
                to="#contact"
                activeClassName="active"
                onClick={() => setMenuState(prevMenuActive => !prevMenuActive)}
              >
                <i className="bx bx-envelope" />
                Contact
              </NavHashLink>

            </ul>
          </nav>
          <button
            type="button"
            aria-label="button"
            onClick={() => setMenuState(prevMenuActive => !prevMenuActive)}
            className="mobile-nav-toggle d-xl-none"
          >
            <i className={`nav-ham ${menuActive ? 'icofont-close' : 'icofont-navigation-menu'}`} />

          </button>
        </div>
      </header>
    </aside>
  );
};

export default SideBar;
