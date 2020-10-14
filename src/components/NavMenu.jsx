import React from 'react';
import { NavHashLink } from 'react-router-hash-link';

export const NavMenu = () => (
  <nav className="nav-menu">
    <ul>
      <NavHashLink to="#home" activeClassName="active">
        <i className="bx bx-home" />
        Home
      </NavHashLink>
      <NavHashLink to="#about" activeClassName="active">
        <i className="bx bx-user" />
        About
      </NavHashLink>
      <NavHashLink to="#portfolio" activeClassName="active">
        <i className="bx bx-book-content" />
        Portfolio
      </NavHashLink>
      <NavHashLink to="#contact" activeClassName="active">
        <i className="bx bx-envelope" />
        Contact
      </NavHashLink>

    </ul>
  </nav>
);

export default NavMenu;
