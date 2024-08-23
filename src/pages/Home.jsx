import React from 'react'
import banner from '../images/banner.jpg'
import banner2 from '../images/jslee (2).png'
import icon from '../images/iconcopy.png'
import banner3 from '../images/banner2.png'
import civilMan from '../images/civil.png'
import map from '../images/map.png'
import banner4 from '../images/banner3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

import './Home.css'
import { Container, Row, Col, ProgressBar, Card, Button } from 'react-bootstrap'

const Home = () => {
  return (
    <>

{/* Home Banner Section */}
    <Row className='banner'>
      <img className="banner-img" src={banner} alt="" />
    </Row>

{/* Team Work Section */}
<div className='teamwork'>
<Row className=' justify-content-center team-work'>    
    <Col xs={2} md={2} lg={2} className="text-center">
      <img src={icon} alt="" className="icon-img" />
      <p>Smart Work</p>
    </Col>
    <Col xs={2} md={2} lg={2} className="text-center">
      <img src={icon} alt="" className="icon-img" />
      <p>Unique Design</p>
    </Col>
    <Col xs={2} md={2} lg={2} className="text-center">
      <img src={icon} alt="" className="icon-img" />
      <p>Skilled Team</p>
    </Col>
    <Col xs={2} md={2} lg={2} className="text-center">
      <img src={icon} alt="" className="icon-img" />
      <p>Best Pricing</p>
    </Col>
    <Col xs={2} md={2} lg={2} className="text-center">
      <img src={icon} alt="" className="icon-img" />
      <p>Quality Material</p>
    </Col>
    
  </Row>
</div>
    

{/* Small About Us Section */}
    <Row >
      <Col className="about-us-section">
            <Row>
                <Col style={{padding:"20px"}}>
                    <h2>About Us <span className="icon-info">ℹ️</span></h2>
                    <h1 style={{fontWeight:"600"}}>Our Manufactures High Quality Products</h1>
                    <p className="highlighted-text">
                        Now only trust professionals who are using next generation technologies and processes during the most important time of your life: building the most valuable asset for your family.
                    </p>
                    <div className="regular-text">
                        <p>Creating buildings is great and we want more people involved.</p>
                        <p>Construction is offering greater choice for daylight provision.</p>
                        <p>Explore More Services.</p>
                    </div>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col xs={12} md={8}>
                    <h3>BUSINESS CONSULTING</h3>
                    <ProgressBar now={100} label="99%" variant="warning" className="mt-2"/>
                </Col>
            </Row>

            <Row className="mt-4 align-items-center">
                <Col xs={12} md={8}>
                    <div className="profile-section d-flex align-items-center">
                        <img 
                            src="https://via.placeholder.com/50" 
                            alt="Profile" 
                            className="rounded-circle me-3"
                        />
                        <div>
                            <h5>JAY PRAKASH KUMAWAT</h5>
                            <p className="text-muted">Managing Director</p>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={4} className="text-end">
                    <Button variant="warning" className="read-more-btn">Read More &raquo;</Button>
                </Col>
            </Row>
      </Col>
      <Col>
      <section className="image-grid-section">
            <Row>
                <Col xs={11} md={6} className="mb-4">
                    <img 
                        src="https://via.placeholder.com/400" 
                        alt="Placeholder 1" 
                        className="img-fluid rounded"
                    />
                </Col>
                <Col xs={11} md={6} className="mb-4">
                    <img 
                        src="https://via.placeholder.com/400" 
                        alt="Placeholder 2" 
                        className="img-fluid rounded"
                    />
                </Col>
            </Row>
            <Row>
                <Col xs={11} md={6} className="mb-4">
                    <img 
                        src="https://via.placeholder.com/400" 
                        alt="Placeholder 3" 
                        className="img-fluid rounded"
                    />
                </Col>
                <Col xs={11} md={6} className="mb-4">
                    <img 
                        src="https://via.placeholder.com/400" 
                        alt="Placeholder 4" 
                        className="img-fluid rounded"
                    />
                </Col>
            </Row>
        </section>
      </Col>
    </Row>

    <Row style={{background:'#e8e8e8', padding:"15px"}} className=' justify-content-center'>
    <h1 className='text-center'>We Provide Best Services in Jaipur</h1>
      <div className="team-work">
        
      <Col className="card-wrap">
  <div className="card-header one">
    <img src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
  </div>
  <div className="card-content">
    <h1 className="card-title">Title</h1>
    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
  </div>
    </Col>
      <Col xs={5} className="card-wrap">
  <div className="card-header one">
    <img src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
  </div>
  <div className="card-content">
    <h1 className="card-title">Title</h1>
    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
  </div>
    </Col>
      <Col xs={5} className="card-wrap">
  <div className="card-header one">
    <img src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
  </div>
  <div className="card-content">
    <h1 className="card-title">Title</h1>
    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
  </div>
    </Col>
      <Col className="card-wrap">
  <div className="card-header one">
    <img src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
  </div>
  <div className="card-content">
    <h1 className="card-title">Title</h1>
    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
  </div>
    </Col>
      </div>


    </Row>

    <Row style={{marginTop: "-100px"}}>
      <div style={{position: "relative", top:"300px", background:"rgba(245, 0, 0, 0.39)"}} >
      <h1 style={{fontSize:"60px", fontWeight:"600"}} className='d-flex justify-content-center '>Trusted By Indias Best Organizations</h1>
      </div>
      
    <img src={banner2} alt="" className="icon-img" />
    </Row>

    <Row>
      <img style={{width:"100vw"}} src={banner3} alt="" />
      <img style={{position: "absolute", width: "400px"}} src={civilMan} alt="" />
    </Row>

    <Container className="my-5">
      <Row className="text-center">
        <Col>
          <h2 className="text-uppercase fw-bold">Detailed Construction Planning By Experts</h2>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col xs={12} md={4} className="mb-4">
          <Card className="h-100 shadow-sm card-hover">
            <Card.Body className="d-flex flex-column align-items-center">
            <FontAwesomeIcon className="icon-hover" style={{fontSize:"50px", margin:"10px"}} icon={faHouse} />
              <Card.Title>Consultancy in Architecture and Structure</Card.Title>
              <Card.Text>
              Our team of professionals visits your site to understand your requirements and consult on best practices of construction spaces.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} className="mb-4  ">
          <Card className="h-100 shadow-sm card-hover">
            <Card.Body className="d-flex flex-column align-items-center">
            <FontAwesomeIcon className="icon-hover" style={{fontSize:"50px", margin:"10px"}} icon={faHouse} />
              <Card.Title>2D and 3D Construction Layout</Card.Title>
              <Card.Text>
              Based on the initial discussion, our expert team of architects will help you get a final 2D and 3D layout of your home.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} className="mb-4  ">
          <Card className="h-100 shadow-sm card-hover">
            <Card.Body className="d-flex flex-column align-items-center">
            <FontAwesomeIcon className="icon-hover" style={{fontSize:"50px", margin:"10px"}} icon={faHouse} />
              <Card.Title>3D VR Walkthrough Of Your Dream Home</Card.Title>
              <Card.Text>
              We will not only assist you with the layout, but we will also provide you with a complete virtual tour of your home before we lay the first brick.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col  md={4} className="mb-4  ">
          <Card className="h-100 shadow-sm card-hover">
            <Card.Body className="d-flex flex-column align-items-center">
            <FontAwesomeIcon className="icon-hover" style={{fontSize:"50px", margin:"10px"}} icon={faHouse} />
              <Card.Title>Construction Estimate and Layout</Card.Title>
              <Card.Text>
              One of the most risky drives to your home could have an uncertain start. You will never go over budget if you start your journey with Anuda Construction.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col  md={4} className="mb-4  ">
          <Card className="h-100 shadow-sm card-hover">
            <Card.Body className="d-flex flex-column align-items-center">
            <FontAwesomeIcon className="icon-hover" style={{fontSize:"50px", margin:"10px"}} icon={faHouse} />
              <Card.Title>Civil Engineer Monitoring and Support</Card.Title>
              <Card.Text>
              Do not let the unskilled people decide on the right mix for construction. Our team of skilled civil engineers ensures the strength of the Project.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
    </Container>

    <Row className='justify-content-center text-center'>
      <p style={{color:"#f1c40f", fontSize:"28px", marginBottom:"5px"}}>-- Anuda Constructions Process --</p>
      <hr style={{width:"40%", textAlign:"left", marginLeft:"0", height:"4px", borderRadius:"10px", }}/>
      <h2 style={{fontWeight:"520", fontSize:"40px", marginBottom:"30px"}}>How We Make Home Construction Easy</h2>
      <img style={{width: "50vw"}} src={map} alt="" />
    </Row>

    <Row>
      <img className='my-5' src={banner4} alt="" />
      {/* <div style={{
    position: 'relative',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  }}></div> */} 
    </Row>

    <Row className='justify-content-center text-center' >
      <p style={{color:"#f1c40f", fontSize:"28px", marginBottom:"5px"}}>-- Why Choose JSLEE Architects --</p>
      <hr style={{width:"30%", textAlign:"left", marginLeft:"0", height:"4px", borderRadius:"10px", }}/>
      <h2 style={{fontWeight:"520", fontSize:"40px", marginBottom:"30px"}}>Enjoy Unlimited Access</h2>
    </Row>



    <Row className="content-row">
  <Col md={4} className="text-section">
    <Row className="align-items-center mb-4 p-4">
      <Col xs={2} className="icon-col">
        <FontAwesomeIcon icon={faHouse} />
      </Col>
      <Col xs={10} className="text-col">
        <h1>Flexible Services</h1>
        <p>In a free hour when our power of choice is untrammelled and when nothing prevents.</p>
      </Col>
    </Row>
    <Row className="align-items-center mb-4 p-4">
      <Col xs={2} className="icon-col">
        <FontAwesomeIcon icon={faHouse} />
      </Col>
      <Col xs={10} className="text-col">
        <h1>Flexible Services</h1>
        <p>In a free hour when our power of choice is untrammelled and when nothing prevents.</p>
      </Col>
    </Row>
    <Row className="align-items-center mb-4 p-4">
      <Col xs={2} className="icon-col">
        <FontAwesomeIcon icon={faHouse} />
      </Col>
      <Col xs={10} className="text-col">
        <h1>Flexible Services</h1>
        <p>In a free hour when our power of choice is untrammelled and when nothing prevents.</p>
      </Col>
    </Row>
  </Col>

  <Col md={4} className="image-section d-flex align-items-center justify-content-center">
    <img className="responsive-image" src={civilMan} alt="Civil Engineer" />
  </Col>

  <Col md={4} className="text-section">
    <Row className="align-items-center mb-4 p-4">
      <Col xs={2} className="icon-col">
        <FontAwesomeIcon icon={faHouse} />
      </Col>
      <Col xs={10} className="text-col">
        <h1>Flexible Services</h1>
        <p>In a free hour when our power of choice is untrammelled and when nothing prevents.</p>
      </Col>
    </Row>
    <Row className="align-items-center mb-4 p-4">
      <Col xs={2} className="icon-col">
        <FontAwesomeIcon icon={faHouse} />
      </Col>
      <Col xs={10} className="text-col">
        <h1>Flexible Services</h1>
        <p>In a free hour when our power of choice is untrammelled and when nothing prevents.</p>
      </Col>
    </Row>
    <Row className="align-items-center mb-4 p-4">
      <Col xs={2} className="icon-col">
        <FontAwesomeIcon icon={faHouse} />
      </Col>
      <Col xs={10} className="text-col">
        <h1>Flexible Services</h1>
        <p>In a free hour when our power of choice is untrammelled and when nothing prevents.</p>
      </Col>
    </Row>
  </Col>
</Row>



  </>
  )
}

export default Home
