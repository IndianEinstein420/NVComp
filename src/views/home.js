import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Hero from '../components/homepage/hero'
import Features1 from '../components/homepage/features1'
import Features2 from '../components/homepage/features2'
import Testimonial from '../components/homepage/testimonial'
import Contact from '../components/homepage/contact'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Spotless Hungry Crocodile</title>
      </Helmet>
      <Navbar></Navbar>
      <Hero></Hero>
      <Features1></Features1>
      <Features2></Features2>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default Home
