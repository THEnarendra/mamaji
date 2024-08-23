import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Navbar.css'; 
import logo from "../images/jslee.png"
import { Link } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Row className="w-100 align-items-center">
          <Col xs={2} md={2} lg={2}>
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
          <Col xs={8} md={7} lg={7} 
          // className="nav-center-links"
          className={isOpen ? "navMenu " : " navItems"} 
          >
            <Nav className="justify-content-center nav-link">
              <Nav.Link as={Link} to="/" className="nav-link-custom mx-2 text-lg">Home</Nav.Link>
              <Nav.Link as={Link} to="/aboutUs" className="nav-link-custom mx-2">About Us</Nav.Link>
              <Nav.Link as={Link} to="/projects" className="nav-link-custom mx-2">Our Projects</Nav.Link>
              <Nav.Link as={Link} to="/services" className="nav-link-custom mx-2">Services</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="nav-link-custom mx-2">Contact Us</Nav.Link>
            </Nav>
          </Col>
          <Col xs={2} md={3} lg={3} 
          className={isOpen ? "navIcons " : " text-right d-flex justify-content-center align-items-center nav-center-icons"} 
          >
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
