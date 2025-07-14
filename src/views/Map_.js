import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Map from '../components/map/map'
import Footer from '../components/footer'
import './map.css'

const Map_ = (props) => {
  return (
    <>
      <Navbar></Navbar>
      <div className="map-container">
        <Map></Map>
      </div><br  /><br  /><br  /><br  />
      <div className="buttons"> 
        <a href = "tel:100"><button>Alert the Police.</button></a><br  /><br  />
        <a href = "tel:9834826742"><button>Alert My Family.</button></a>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Map_
