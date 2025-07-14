import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Form from '../components/form/Form'
import Footer from '../components/footer'
import './home.css'

const Complaint = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Spotless Hungry Crocodile</title>
      </Helmet>
      <Navbar></Navbar>
      <Form></Form>
      <Footer></Footer>
    </div>
  )
}

export default Complaint
