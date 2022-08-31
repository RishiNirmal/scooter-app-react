import React from 'react'
import { Card, Col, Container, Figure, Image, Row } from 'react-bootstrap'
import './Services.css'
import Service1 from '../../Images/service1.png'

export default function Services() {
  return (
   <>
  {/* ======= Services Section ======= */}
<section id="services" className="services section-bg">
  <Container>
    <Figure className="section-title">
      <Figure as="h2" data-aos="fade-in">Services</Figure>
      <Figure as="p" data-aos="fade-in">Lorem ipsum dolor sit amet. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</Figure>
    </Figure>
    <Row>
      <Col md={6} className=" d-flex" data-aos="fade-right">
        <Card>
          <Figure>
            <Card.Img src={Service1} alt="..." />
          </Figure>
          <Card.Body>
            <Card.Title as="h5"><a href>Temporibus laudantium</a></Card.Title>
            <Figure as="p" className="card-text">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</Figure>
            <Figure className="read-more"><a href="#"><i className="bi bi-arrow-right" /> Read More</a></Figure>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} className="d-flex" data-aos="fade-left">
        <Card>
          <Figure>
            <Card.Img src={Service1} alt="..." />
          </Figure>
          <Card.Body>
            <Card.Title as='h5' className="card-title"><a href>Aperiores voluptates</a></Card.Title>
            <Figure as='p' className="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</Figure>
            <Figure className="read-more"><a href="#"><i className="bi bi-arrow-right" /> Read More</a></Figure>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} className="d-flex" data-aos="fade-right">
        <Card>
          <Figure>
            <Card.Img src={Service1} alt="..." />
          </Figure>
          <Card.Body>
            <Card.Title as="h5" ><a href>Veritatis natus nisi</a></Card.Title>
            <Figure as="p" className="card-text">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</Figure>
            <Figure className="read-more"><a href="#"><i className="bi bi-arrow-right" /> Read More</a></Figure>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} className="d-flex" data-aos="fade-left">
        <Card>
          <Figure>
            <Card.Img src={Service1} alt="..." />
          </Figure>
          <Card.Body>
            <Card.Title as="h5" ><a href>Aliquam veritatis</a></Card.Title>
            <Figure as="p" className="card-text">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</Figure>
            <Figure className="read-more"><a href="#"><i className="bi bi-arrow-right" /> Read More</a></Figure>
          </Card.Body>
        </Card>
      </Col>
      
    </Row>
  </Container>
</section>{/* End Services Section */}

   </>
  )
}
