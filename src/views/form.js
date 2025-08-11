import React from "react";

import { Helmet } from "react-helmet";

import Navbar from "../components/navbar";
import Form from "../components/form/Form";
import "./home.css";

const Complaint = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>SafeHer</title>
      </Helmet>
      <Navbar></Navbar>
      <Form></Form>
    </div>
  );
};

export default Complaint;
