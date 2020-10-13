import React, { useState, useEffect } from 'react';
import '../styles/SideBar.css';
import { NavMenu } from '../components/NavMenu';
import { Profile } from '../components/Profile';
import 'boxicons/css/boxicons.css';

export const SideBar = () => {
  const [menuActive, setMenuState] = useState(false);
  useEffect(() => {
    document.body.classList.toggle('mobile-nav-active', menuActive);
  }, [menuActive]);

  return (
    <header id="header">
      <div className="d-flex flex-column">
        <div className="profile">
          <Profile />
        </div>
        <NavMenu />
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
  );
};

export default SideBar;
