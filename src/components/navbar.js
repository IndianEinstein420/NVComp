import React from "react";
import PropTypes from "prop-types";
import "./navbar.css";

const Navbar = (props) => {
  return (
    <nav
      className="navbar-container"
      role="navigation"
      aria-label="Main Navigation"
    >
      <header data-thq="thq-navbar" className="navbar-navbar-interactive">
        <img
          alt={props.logoAlt}
          src={props.logoSrc}
          className="navbar-image1"
        />
        <div data-thq="thq-navbar-nav" className="navbar-desktop-menu">
          <ul className="navbar-links1">
            <a href="./">
              <li className="thq-link thq-body-small">{props.link1}</li>
            </a>
            <a href="./about">
              <li className="thq-link thq-body-small">{props.link2}</li>
            </a>
            <a href="./faq">
              <li className="thq-link thq-body-small">{props.link3}</li>
            </a>
            <a href="./map">
              <li className="thq-link thq-body-small">{props.link4}</li>
            </a>
            <a href="./sos">
              <li className="thq-link thq-body-small">{props.link5}</li>
            </a>
            <a href="./lib">
              <li className="thq-link thq-body-small">{props.link6}</li>
            </a>
          </ul>
          <div className="navbar-buttons1">
            <a
              href={props.action1}
              className="navbar-action11 thq-button-animated thq-button-filled"
            >
              <span className="thq-body-small">Report a Problem</span>
            </a>
          </div>
        </div>
        <div
          data-thq="thq-burger-menu"
          className="navbar-burger-menu"
          aria-label="Menu Toggle"
        ></div>
        <div data-thq="thq-mobile-menu" className="navbar-mobile-menu">
          <div className="navbar-nav">
            <div className="navbar-top">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="navbar-logo"
              />
              <div
                data-thq="thq-close-menu"
                className="navbar-close-menu"
              ></div>
            </div>
            <ul className="navbar-links2">
              <a href="./">
                <li className="thq-link thq-body-small">{props.link1}</li>
              </a>
              <a href="./about">
                <li className="thq-link thq-body-small">{props.link2}</li>
              </a>
              <a href="./faq">
                <li className="thq-link thq-body-small">{props.link3}</li>
              </a>
              <a href="./map">
                <li className="thq-link thq-body-small">{props.link4}</li>
              </a>
              <a href="./sos">
                <li className="thq-link thq-body-small">{props.link5}</li>
              </a>
              <a href="./lib">
                <li className="thq-link thq-body-small">{props.link6}</li>
              </a>
            </ul>
          </div>
          <div className="navbar-buttons2">
            <a href={props.action1} className="thq-button-filled">
              Report a Problem
            </a>
          </div>
        </div>
      </header>
    </nav>
  );
};

Navbar.defaultProps = {
  link1: "Home",
  link2: "About",
  link3: "FAQs",
  link4: "Emergency",
  link5: "Sos",
  link6: "Library",
  logoSrc: "./logo.png",
  logoAlt: "School Logo",
  action1: "/complaint",
};

Navbar.propTypes = {
  link1: PropTypes.string,
  link2: PropTypes.string,
  link3: PropTypes.string,
  link4: PropTypes.string,
  link5: PropTypes.string,
  link6: PropTypes.string,
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string,
  action1: PropTypes.string,
};

export default Navbar;
