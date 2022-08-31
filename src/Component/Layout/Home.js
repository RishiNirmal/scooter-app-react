import React from 'react'
import Header from '../Header/Header'
import Hero from '../Hero/Index'
import About from './About'
import OurClients from './OurClients'
import Services from './Services'

export default function MainLayout() {
  return (
    <>
    <Header/>
    <Hero/>
    <OurClients/>
    <About/>
    <Services/>
    </>
  )
}
