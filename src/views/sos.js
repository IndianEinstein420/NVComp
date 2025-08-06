import React from "react";

import { Helmet } from "react-helmet";

import Navbar from "../components/navbar";
import "./map.css";

const Sos = (props) => {
  return (
    <>
      <Navbar></Navbar>
      <br />
      <br />
      <br />
      <h1>Local Emergency Numbers & Hotlines</h1>
      <br />
      <h3>Quick access to vital emergency contacts and support hotlines</h3>
      <br />
      <br />
      <div className="buttons">
        <a href="tel:100">
          <button onClick={() => alert("Alerted the Police.")}>
            Alert the Police
          </button>
        </a>
        <a href="tel:9834826742">
          <button onClick={() => alert("Alerted your Family.")}>
            Alert My Family
          </button>
        </a>
      </div>
      <div className="buttons">
        <a href="tel:181">
          <button
            className="B3"
            onClick={() => alert("Alerted Women Helpline.")}
          >
            Contact Women Helpline
          </button>
        </a>
      </div>
    </>
  );
};

export default Sos;
