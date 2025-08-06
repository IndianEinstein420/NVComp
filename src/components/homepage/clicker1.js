import React, { useState } from "react";

import PropTypes from "prop-types";

import "./clicker1.css";

const Clicker1 = (props) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="thq-section-padding" id="clicker1-container">
      <div className="clicker1-container2 thq-section-max-width">
        <div className="clicker1-image-container">
          {activeTab === 0 && (
            <img
              alt={props.clicker1ImgAlt}
              src={props.clicker1ImgSrc}
              className="clicker1-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.clicker2ImgAlt}
              src={props.clicker2ImgSrc}
              className="clicker1-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.clicker3ImgAlt}
              src={props.clicker3ImgSrc}
              className="clicker1-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="clicker1-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="clicker1-tab-horizontal1"
          >
            <div className="clicker1-divider-container1">
              {activeTab === 0 && <div className="clicker1-container3"></div>}
            </div>
            <div className="clicker1-content1">
              <h2 className="thq-heading-2">{props.clicker1Title}</h2>
              <span className="thq-body-small">
                {props.clicker1Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="clicker1-tab-horizontal2"
          >
            <div className="clicker1-divider-container2">
              {activeTab === 1 && <div className="clicker1-container4"></div>}
            </div>
            <div className="clicker1-content2">
              <h2 className="thq-heading-2">{props.clicker2Title}</h2>
              <span className="thq-body-small">
                {props.clicker2Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="clicker1-tab-horizontal3"
          >
            <div className="clicker1-divider-container3">
              {activeTab === 2 && <div className="clicker1-container5"></div>}
            </div>
            <div className="clicker1-content3">
              <h2 className="thq-heading-2">{props.clicker3Title}</h2>
              <span className="thq-body-small">
                {props.clicker3Description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Clicker1.defaultProps = {
  clicker1ImgAlt: "Women performing activities",
  clicker2ImgAlt: "Support group",
  clicker3ImgAlt: "Humans supporting ech other",
  clicker1Description: "You're not alone on your journey",
  clicker2Description:
    "Engage with a supportive community where you can share experiences, exchange safety tips, and find solidarity",
  clicker3Description:
    "Our moderated forums foster a safe space for discussion and mutual growth, ensuring every voice is heard and valued",
  clicker1Title: "Community & Shared Experiences",
  clicker2Title: "Supportive Sides",
  clicker3Title: "Extensive Support",
  clicker1ImgSrc: "./clicker1img1.jpg",
  clicker2ImgSrc: "./clicker1img2.jpg",
  clicker3ImgSrc: "./clicker1img3.jpg",
};

Clicker1.propTypes = {
  clicker1ImgAlt: PropTypes.string,
  clicker3Description: PropTypes.string,
  clicker3Title: PropTypes.string,
  clicker3ImgSrc: PropTypes.string,
  clicker1ImgSrc: PropTypes.string,
  clicker2Description: PropTypes.string,
  clicker1Title: PropTypes.string,
  clicker3ImgAlt: PropTypes.string,
  clicker1Description: PropTypes.string,
  clicker2ImgSrc: PropTypes.string,
  clicker2ImgAlt: PropTypes.string,
  clicker2Title: PropTypes.string,
};

export default Clicker1;
