import React from "react";

import { Helmet } from "react-helmet";

import Navbar from "../components/navbar";
import Hero from "../components/homepage/hero";
import Clicker1 from "../components/homepage/clicker1";
import Clicker2 from "../components/homepage/clicker2";
import "./home.css";

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>SafeHer</title>
      </Helmet>
      <Navbar></Navbar>
      <Hero></Hero>
      <Clicker1></Clicker1>
      <Clicker2></Clicker2>
    </div>
  );
};

export default Home;
