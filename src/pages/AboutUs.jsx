import React from 'react'
import banner from '../images/aboutus_banner.png'
import { Col, Container, Row } from 'react-bootstrap'
import './AboutUs.css'
import img1 from '../images/services_ab1.png'
import img2 from '../images/services_ab2.png'
import img3 from '../images/services_ab3.png'
import check from '../images/check.png'
import consultation from '../images/consultation.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'


const AboutUs = () => {
  return (
    <>
      <Row>
        <Col className="banner-container">
          <div className="banner-wrapper">
            <img src={banner} alt="Banner" className="banner-image" />
            <div className="banner-overlay"></div>
          </div>
        </Col>
      </Row>
      <Row>
      <Col md={6} className="about-us-text">
          <p className="section-title">About Us</p>
          <hr style={{width:"10%", height:"5px", color:"#f1c40f"}}/>
          <h2 className="section-heading">Welcome to</h2>
          <h2 className="section-heading">JSLEE Architects</h2>
          <p className="section-paragraph">
            We have more than 10 years of experience in the building services industry, and offer superior building construction and paint solutions to residents across Jaipur, Rajasthan. Whatever your project, however big or small, you can rely on our skilled painters in Jaipur and home builders in Jaipur to take care of it from start to finish. Our legacy is a group of delighted homeowners who are happy with the spaces we’ve made for them and are enjoying it.
          </p> 
          <div className='d-flex justify-content-center align-items-center mt-4'>
          <img style={{width:"220px", }} src={consultation} alt="" />   
          <ul>
            <div className='d-flex align-items-center'>
                <img style={{height:"20px"}} src={check} alt="" />
                <li className='list-items'>  Strong Team of 200+ Labour</li>
            </div>
            <div className='d-flex align-items-center'>
                <img style={{height:"20px"}} src={check} alt="" />
                <li className='list-items'>  Professional Civil Engineers,Architects</li>
            </div>
            <div className='d-flex align-items-center'>
                <img style={{height:"20px"}} src={check} alt="" />
                <li className='list-items'>  Reserved Stock of Construction Materials</li>
            </div>
            <div className='d-flex align-items-center'>
                <img style={{height:"20px"}} src={check} alt="" />
                <li className='list-items'>  Direct Partner With Manufacturers</li>
            </div>
            <button className='consultation-btn m-2'>Book a free Consultation Call</button>
            </ul> 
          </div>
        </Col>

        <Col md={3}>
            <img style={{width:"100%", margin:"50px 2px"}} src={img1} alt="" />    
        </Col>

        <Col md={3}>
            <img style={{height:"350px", margin:"6px 2px"}} src={img2} alt="" />
            <img style={{height:"350px", margin:"6px 2px"}} src={img3} alt="" />
        </Col>
      </Row>

{/* Contact Us */}

<Container>
    <Row  className='contactUs-section'>
    <p className='form-title'>Let's Have a Talk</p>
    <h2 className='form-heading'>Have an upcoming project?</h2>
          <form>
            <Row>
            <Col md={6}>
            <Row className="mb-3">
              <Col>
                <input type="text" className="form-control" placeholder="Name" />
              </Col>
              <Col>
                <input type="text" className="form-control" placeholder="Phone Number" />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <input type="text" className="form-control" placeholder="Location" />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <textarea className="form-control" rows="3" placeholder="Your Message Here"></textarea>
              </Col>
            </Row>
            <button type="submit" className="btn btn-warning">
              Submit Now
            </button>
            </Col>

            <Col md={6} style={{padding:"30px 120px", textAlign:"center"}}>
                <h2>Feel Free to Contact Us !!</h2>
                <p>If You Need Any Assistance Fill the Form and our Team will Connect with you as soon as possible.</p>
            </Col>  
            </Row>     
          </form>
    </Row>
</Container>


{/* Company Details */}
<Container>
<Row className="align-items-center mb-5">
        <Col md={8}>
          <Row className="mb-4">
            <Col md={2}>
              <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#f1c40f', fontSize: '2rem' }} />
            </Col>
            <Col>
              <h4>Office Address</h4>
              <p>
                F 37-38, Govindam Tower, Kardhani, Govindpura,
                <br />
                Kalwar Road, Jaipur, Rajasthan, India.
              </p>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col md={2}>
              <FontAwesomeIcon icon={faEnvelope} style={{ color: '#f1c40f', fontSize: '2rem' }} />
            </Col>
            <Col>
              <h4>Email us</h4>
              <p>Info@balajiconstructioncompany.com</p>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col md={2}>
              <FontAwesomeIcon icon={faPhoneAlt} style={{ color: '#f1c40f', fontSize: '2rem' }} />
            </Col>
            <Col>
              <h4>Call us</h4>
              <p>9001-60-2012</p>
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <img
            src="your_image_path_here.png"
            alt="Construction Workers"
            style={{ width: '100%', height: 'auto' }}
          />
        </Col>
      </Row>
</Container>
      
      
    </>
  )
}

export default AboutUs
