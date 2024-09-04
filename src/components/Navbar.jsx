import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons'; // Correct import for faBars
import './Navbar.css'; 
import logo from "../images/jslee.png";
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen)
  };

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Row className="w-100 align-items-center">
          {/* Logo Column */}
          <Col xs={6} md={2}>
            <Navbar.Brand as={Link} to="/">
              <img
                src={logo}
                width="90"
                height="40"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </Navbar.Brand>
          </Col>

          {/* Navigation Links Column */}
          <Col xs={12} md={7} className={isOpen ? "mob-nav": "nav-Menu"}>
            <Nav className="justify-content-center">
              <Nav.Link as={Link} to="/" className="nav-link-custom mx-2">Home</Nav.Link>
              <Nav.Link as={Link} to="/aboutUs" className="nav-link-custom mx-2">About Us</Nav.Link>
              <Nav.Link as={Link} to="/projects" className="nav-link-custom mx-2">Our Projects</Nav.Link>
              <Nav.Link as={Link} to="/services" className="nav-link-custom mx-2">Services</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="nav-link-custom mx-2">Contact Us</Nav.Link>
            </Nav>
          </Col>

          {/* Icons and Burger Icon Column */}
          <Col xs={6} md={3} className="d-flex justify-content-end align-items-center icons-burger">
            <Button variant="warning" className="mx-2 nav-button">Enquire Us</Button>
            <FontAwesomeIcon icon={faFacebookF} className="mx-2 social-icon" />
            <FontAwesomeIcon icon={faTwitter} className="mx-2 social-icon" />
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            <FontAwesomeIcon onClick={toggle} icon={faBars} className="burger-icon" />
          </Col>
        </Row>
        </Container>
    </Navbar>
  );
}

export default CustomNavbar;
