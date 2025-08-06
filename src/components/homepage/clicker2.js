import React, { useState } from "react";

import PropTypes from "prop-types";

import "./clicker2.css";

const Clicker2 = (props) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="thq-section-padding" id="clicker2-container">
      <div className="clicker2-container2 thq-section-max-width">
        <div className="clicker2-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="clicker2-tab-horizontal1"
          >
            <div className="clicker2-divider-container1">
              {activeTab === 0 && <div className="clicker2-container3"></div>}
            </div>
            <div className="clicker2-content1">
              <h2 className="thq-heading-2">{props.clicker1Title}</h2>
              <span className="thq-body-small">
                {props.clicker1Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="clicker2-tab-horizontal2"
          >
            <div className="clicker2-divider-container2">
              {activeTab === 1 && <div className="clicker2-container4"></div>}
            </div>
            <div className="clicker2-content2">
              <h2 className="thq-heading-2">{props.clicker2Title}</h2>
              <span className="thq-body-small">
                {props.clicker2Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="clicker2-tab-horizontal3"
          >
            <div className="clicker2-divider-container3">
              {activeTab === 2 && <div className="clicker2-container5"></div>}
            </div>
            <div className="clicker2-content3">
              <h2 className="thq-heading-2">{props.clicker3Title}</h2>
              <span className="thq-body-small">
                {props.clicker3Description}
              </span>
            </div>
          </div>
        </div>
        <div className="clicker2-image-container">
          {activeTab === 0 && (
            <img
              alt={props.clicker1ImgAlt}
              src={props.clicker1ImgSrc}
              className="clicker2-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.clicker2ImgAlt}
              src={props.clicker2ImgSrc}
              className="clicker2-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.clicker3ImgAlt}
              src={props.clicker3ImgSrc}
              className="clicker2-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  );
};

Clicker2.defaultProps = {
  clicker1ImgAlt: "Man using computer",
  clicker2ImgAlt: "Self Defence",
  clicker3ImgAlt: "woman using web with child",
  clicker1Description:
    "Empower yourself with vital information. Access a curated library of educational resources covering self-defense techniques, legal rights, mental well-being support, and guidance on navigating various safety scenarios. Knowledge is your strongest defense",
  clicker2Description:
    "Beyond theory, into practice. Explore interactive guides and short video snippets demonstrating fundamental self-defense moves and de-escalation tactics. Learn how to use your voice, body language, and simple techniques to protect yourself effectively",
  clicker3Description:
    "In today's connected world, safety extends online. Learn how to protect your digital footprint, identify and report cyberbullying, manage privacy settings, and maintain a secure online presence. Your digital peace of mind matters",
  clicker1Title: "Essential Safety Resources",
  clicker2Title: "Practical Self-Defense Guides",
  clicker3Title: "Digital Safety & Online Well-being",
  clicker1ImgSrc: "./clicker2img1.jpg",
  clicker2ImgSrc: "./clicker2img2.jpg",
  clicker3ImgSrc: "./clicker2img3.jpg",
};

Clicker2.propTypes = {
  clicker3Description: PropTypes.string,
  clicker1ImgAlt: PropTypes.string,
  clicker1Description: PropTypes.string,
  clicker3ImgAlt: PropTypes.string,
  clicker2Title: PropTypes.string,
  clicker1Title: PropTypes.string,
  clicker1ImgSrc: PropTypes.string,
  clicker3ImgSrc: PropTypes.string,
  clicker2Description: PropTypes.string,
  clicker3Title: PropTypes.string,
  clicker2ImgAlt: PropTypes.string,
  clicker2ImgSrc: PropTypes.string,
};

export default Clicker2;
