import React from 'react'
import { Col, Container, Row, Figure, Image} from 'react-bootstrap'
import './OurClients.css'
import Vogue from '../../Images/Logo/vogue.png'
import Hm from '../../Images/Logo/hm.png'
import Gucci from '../../Images/Logo/gucci.png'

export default function OurClients() {
  return (
    <>
       <Row>
           <Col md={4} className='our-clients-text-bg'>
              <Figure as="h1" className='our-clients-text'> Our major <br/> Clients</Figure>
           </Col>
           <Col md={8} className='our-clients-logo-bg'>
                <Row className='mt-4'>
                    <Col md={4}><Image src={Vogue}/></Col>
                    <Col md={4}><Image src={Hm}/></Col>
                    <Col md={4}><Image src={Gucci}/></Col>
                </Row>
           </Col>
       </Row>
    </>
  )
}
