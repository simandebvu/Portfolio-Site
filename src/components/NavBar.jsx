import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export const NavBar = () => (
  <>
    <Navbar bg="dark" variant="dark" sticky="top" className="d-flex flex-column flex-lg-row">
      <Navbar.Brand href="#home" className="font-weight-bold">
        Shingirayi Mandebvu
      </Navbar.Brand>
      <Nav className="ml-lg-auto">
        <Nav.Link href="#portfolio" className="text-white">Portfolio</Nav.Link>
        <Nav.Link href="#about" className="text-white">About</Nav.Link>
        <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>
      </Nav>
    </Navbar>
  </>
);

export default NavBar;
