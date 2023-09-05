import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css'
import Button from 'react-bootstrap/Button';

const Header = ({ user, handleLogout }) => {
  return (
    <Navbar id="navbar" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">
          <h2 id="logo">Selling.</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mainbar">
            <Nav.Link id="navmain" href="/">Home</Nav.Link>
            <Nav.Link id="navmain" href="/">Products</Nav.Link>
            <Nav.Link id="navmain" href="/">About Us</Nav.Link>
            <Nav.Link id="navmain" href="/">Special</Nav.Link>
            <Nav.Link id="navmain" href="/">Testimonials</Nav.Link>
            <Nav.Link id="navmain" href="/">Blog</Nav.Link>
            <Nav.Link id="navmain" href="/">Contact</Nav.Link>
          </Nav>
         
          {user ? (
            <Nav className="contbar">
             
              <Button className="button10" onClick={handleLogout}>
                Log Out
              </Button>
            </Nav>
          ) : (
            <Nav className="contbar">
              <Link id="navlink" to="/SignIn">Login</Link>
              <Link id="navlink" to="/SignUp">Signup</Link>
            </Nav>
          )}

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;