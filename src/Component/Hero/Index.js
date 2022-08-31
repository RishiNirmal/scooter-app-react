import React, {useEffect}  from 'react'
import './Hero.css'
import Scooter from '../../Images/Hero/add-white.png'
import { Image, Row, Col, Container } from 'react-bootstrap'
import Play from '../../Images/Hero/play.png'
 

export default function Hero() {
  
  return (
   <>
  <section id="hero">
  <Container>
    <Row className="d-flex align-items-center" >
      <Col lg={6} className=" py-5 py-lg-0 order-2 order-lg-1"  data-aos="fade-right">
        <h3>Electric </h3>
        <h1>Scooter</h1>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        <a href="#about" className="btn-get-started scrollto">Order Now</a>
        <a href="#about" className="hero-play"><Image fluid src={Play} className="play-img" alt /></a>
        <Row>
        <Col md={4} className='happy-customers'>
        <p>9000+</p><label>Happy Customers</label>
        </Col>
        <Col md={4} className='happy-customers'>
        <p>15000+</p><label>Happy Customers</label>
        </Col>
        <Col md={4}></Col>
        </Row>
      </Col>
      <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left">
        <Image fluid src={Scooter} className="sco-img" alt />
      </div>
    </Row>
  </Container>
</section>{/* End Hero */}

   </>
  )
}
