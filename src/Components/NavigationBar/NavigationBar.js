import { React, useState, useEffect } from "react";
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./NavigationBar.scss";
import { FaBars } from "react-icons/fa";

const NavigationBar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <Fragment>
      <div className="navigation-bar">
        <div className="logo-container">
          <Link to="/">
            <h1 className="logo">JN</h1>
          </Link>
        </div>
        <button className="nav-toggle" onClick={toggleLinks}>
          <FaBars />
        </button>
        <div className="nav-links-container ">
          <Link to="/" className="nav-link ">
            Home
          </Link>
          <Link to="/about" className="nav-link ">
            About
          </Link>
          <Link to="/Certifications" className="nav-link ">
            Certifications
          </Link>
        </div>
      </div>

      {showLinks ? (
        <div className="mobile-nav-links-container ">
          <Link to="/" className="nav-link ">
            Home
          </Link>
          <Link to="/about" className="nav-link ">
            About
          </Link>
          <Link to="/Certifications" className="nav-link ">
            Certifications
          </Link>
        </div>
      ) : null}
      <Outlet />
    </Fragment>
  );
};
export default NavigationBar;
