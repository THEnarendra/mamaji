import './Navbar.css'; 
import logo from "../images/jslee.png";
import React, { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
  const [activeLink, setActiveLink] = useState("/");
  const handleNavClick = (path) => {
    setActiveLink(path);
  };
  return (
    <Navbar expand="lg" className="navbar-custom fixed-top">
      <div className="container d-flex justify-content-between align-items-center">

        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={logo}
            alt="Company Logo"
            className="logo"
            style={{ width: '100px' }}
          />
        </Navbar.Brand>
        <Navbar.Collapse id="navbar-nav" className="justify-content-center">
          <Nav className="mr-auto">
            <Nav.Link
              as={Link}
              to="/"
              onClick={() => handleNavClick('/')}
              className={activeLink === '/' ? 'active-navlink' : ''}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/aboutUs"
              onClick={() => handleNavClick('/aboutUs')}
              className={activeLink === '/aboutUs' ? 'active-navlink' : ''}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/projects"
              onClick={() => handleNavClick('/projects')}
              className={activeLink === '/projects' ? 'active-navlink' : ''}
            >
              Our Projects
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/services"
              onClick={() => handleNavClick('/services')}
              className={activeLink === '/services' ? 'active-navlink' : ''}
            >
              Services
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              onClick={() => handleNavClick('/contact')}
              className={activeLink === '/contact' ? 'active-navlink' : ''}
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex align-items-center social-and-toggle">
          <Button variant="warning" className="bt_nav">Enquire</Button>
          <a href="https://facebook.com" className="ms-3 social-icon">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://twitter.com" className="ms-3 social-icon">
            <FontAwesomeIcon icon={faTwitter}  />
          </a>
          <a href="https://instagram.com" className="ms-3 social-icon">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <Navbar.Toggle size='md' className='ms-2' aria-controls="navbar-nav" />
        </div>
      </div>
    </Navbar>
  );
};

export default CustomNavbar;
