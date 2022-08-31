import React from 'react'
import { Col, Container, Figure, Row } from 'react-bootstrap'
import './About.css'

export default function About() {
  return (
   <>
  {/* ======= About Section ======= */}
<section id="about" className="about section-bg">
  <Container>
    <Row className="gy-4">
      <Col xl={5} className="image" />
      <Col xl={7} >
        <Figure className="content d-flex flex-column justify-content-center ps-0 ps-xl-4">
          <Figure as='h3' data-aos="fade-in" data-aos-delay={100}>What is Lorem Ipsum?</Figure>
          <Figure as='p' data-aos="fade-in">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Figure>
          <Row className=" gy-4 mt-3">
            <Col md={6} className="icon-box" data-aos="fade-up">
              <box-icon name="receipt"></box-icon>
              <Figure as='h4'><a href="#">Corporis voluptates sit</a></Figure>
              <Figure as='p'>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</Figure>
            </Col>
            <Col md={6} className="icon-box" data-aos="fade-up" data-aos-delay={100}>
              <box-icon name="cube-alt"></box-icon>
              <Figure as='h4'><a href="#">Ullamco laboris nisi</a></Figure>
              <Figure as='p'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</Figure>
            </Col>
            <Col md={6} className=" icon-box" data-aos="fade-up" data-aos-delay={200}>
            <box-icon name="images"></box-icon>
              <Figure as='h4'><a href="#">Labore consequatur</a></Figure>
              <Figure as='p'>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</Figure>
            </Col>
            <Col md={6} className=" icon-box" data-aos="fade-up" data-aos-delay={300}>
            <box-icon name="shield"></box-icon>
              <Figure as='h4'><a href="#">Beatae veritatis</a></Figure>
              <Figure as='p'>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</Figure>
            </Col>
          </Row>
        </Figure>{/* End .content*/}
      </Col>
    </Row>
  </Container>
</section>{/* End About Section */}

   </>
  )
}
