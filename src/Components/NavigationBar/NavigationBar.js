import { React, useState, useEffect } from "react";
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./NavigationBar.scss";
import { FaBars } from "react-icons/fa";
import Cv from "../../Assets/documents/Jean-CV.pdf";

const NavigationBar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <Fragment>
      <div className="navbar-overall-container">
      <div className="navigation-bar container">
        <div className="logo-container">
          <Link to="/" className="link">
            <h4 className="logo">JEAN</h4>
          </Link>
        </div>
        <button className="nav-toggle" onClick={toggleLinks}>
          <FaBars />
        </button>
        <div className="nav-links-container ">
          <Link to="/" className="nav-link ">
            HOME
          </Link>
          <Link to="/about" className="nav-link ">
            ABOUT
          </Link>

          <a
            className="nav-link link"
            href={Cv}
            alt="alt text"
            target="_blank"
            rel="noopener noreferrer"
          >
            RESUME
          </a>
        </div>

      </div>
      {showLinks ? (
        <div className="mobile-nav-links-container">
          <Link to="/" className="nav-link ">
            Home
          </Link>
          <Link to="/about" className="nav-link ">
            About
          </Link>
          <a
            className="nav-link link"
            href={Cv}
            alt="alt text"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      ) : null}
      </div>


      <Outlet />
    </Fragment>
  );
};
export default NavigationBar;
