import React from "react";

import { Helmet } from "react-helmet";

import Navbar from "../components/navbar";
import Map from "../components/map/map";
import "./map.css";

const Map_ = (props) => {
  return (
    <>
      <Navbar></Navbar>
      <br />
      <br />
      <br />
      <div className="map-container">
        <Map></Map>
      </div>
    </>
  );
};

export default Map_;
