import React from 'react'
import { Navbar, Container, Nav, Button, Image, Form, FormControl, InputGroup } from 'react-bootstrap'
import Logo from '../../Images/Logo/sco.png'
import { BsSearch } from "@react-icons/all-files/bs/BsSearch"
import { BiShoppingBag } from "@react-icons/all-files/bi/BiShoppingBag"
import './Menubar.css'

export default function Menubar() {
  return (
    <>
 <header id="header">
  <div className="container d-flex align-items-center justify-content-between">
    <div className="logo">
      <a href="index.html"><Image src={Logo} alt="" class="img-fluid" /></a>
    </div>
    <nav id="navbar" className="navbar">
      <ul>
        <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
        <li><a className="nav-link scrollto" href="#about">Features</a></li>
        <li><a className="nav-link scrollto" href="#services">Scooter</a></li>
        <li><a className="nav-link scrollto" href="#portfolio">Portfolio</a></li>
        {/* <li><a className="nav-link scrollto" href="#team">Team</a></li> */}
        {/* <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down" /></a>
          <ul>
            <li><a href="#">Drop Down 1</a></li>
            <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right" /></a>
              <ul>
                <li><a href="#">Deep Drop Down 1</a></li>
                <li><a href="#">Deep Drop Down 2</a></li>
                <li><a href="#">Deep Drop Down 3</a></li>
                <li><a href="#">Deep Drop Down 4</a></li>
                <li><a href="#">Deep Drop Down 5</a></li>
              </ul>
            </li>
            <li><a href="#">Drop Down 2</a></li>
            <li><a href="#">Drop Down 3</a></li>
            <li><a href="#">Drop Down 4</a></li>
          </ul>
        </li> */}
        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
        {/* <li><a className="getstarted scrollto" href="#about">Get Started</a></li> */}
      </ul>
      
      <i className="bi bi-list mobile-nav-toggle" />
    </nav>{/* .navbar */}
    <InputGroup className="top-search-control" >
    <Button className='top-search-btn' id="button-addon1">
    <BsSearch />
    </Button>
    <FormControl
      aria-label="Example text with button addon"
      aria-describedby="basic-addon1"
      className='top-search'
    />
    <Button className='cart-btn'><BiShoppingBag/></Button>
  </InputGroup>
  </div>
</header>{/* End Header */}


    </>
  )
}
