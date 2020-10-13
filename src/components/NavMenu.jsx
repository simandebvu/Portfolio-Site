/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

export const NavMenu = () => {
  const handleNavClick = () => {
    document.body.classList.toggle('mobile-nav-active');
  };
  return (
    <nav className="nav-menu">
      <ul>
        <li
          className="active"
          onClick={handleNavClick}
        >
          <a href="#home">
            <i className="bx bx-home" />
            {' '}
            <span>Home</span>
          </a>
        </li>
        <li
          onClick={handleNavClick}
        >
          <a href="#about">
            <i className="bx bx-user" />
            {' '}
            <span>About</span>
          </a>
        </li>
        <li
          onClick={handleNavClick}
        >
          <a href="#portfolio">
            <i className="bx bx-book-content" />
            {' '}
            Portfolio
          </a>
        </li>
        <li
          onClick={handleNavClick}
        >
          <a href="#contact">
            <i className="bx bx-envelope" />
            {' '}
            Contact
          </a>
        </li>

      </ul>
    </nav>
  );
};

export default NavMenu;
