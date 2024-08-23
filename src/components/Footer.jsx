import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
import logo from '../images/jslee.png'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-container ">
          <Col md={4} className="footer-left">
            <div className="footer-logo">
              <img src={logo} alt="Balaji Construction Company Logo" />
              <h2 style={{color:"White"}}>JSLEE Architects</h2>
            </div>
            <p>
              The best construction company in Jaipur, JSLEE Architects, always stands up for your dreams. Be the first to take action toward your dream goal!!
            </p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-whatsapp"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </Col>

          <Col md={4} className="footer-middle ">
            <h4>Contact Info</h4>
            <p><i className="fas fa-map-marker-alt"></i> F 37-38, Govindam Tower, Kardhani, Govindpura, Kalwar Road, Jaipur, Rajasthan, India.</p>
            <p><i className="fas fa-phone-alt"></i> 9001-60-2012</p>
            <p><i className="fas fa-envelope"></i> Info@balajiconstructioncompany.com</p>
          </Col>

          <Col md={4} className="footer-right ">
            <h4>Our Services</h4>
            <ul>
              <li>Commercial Construction</li>
              <li>Residential Construction</li>
              <li>Interior Designing</li>
              <li>Independent House</li>
              <li>Restoration or Remediation</li>
              <li>Engineering Firm</li>
            </ul>
          </Col>
        </Row>
        <Row className="footer-bottom">
          <Col className="text-center">
            <p>&copy; 2022 balajiconstructioncompany.com. Designed By SMAC DIGITAL</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
