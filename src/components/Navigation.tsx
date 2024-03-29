import React from "react";
import { Link } from "react-scroll";

const Navigation = () => {
  const Logo = require("./../res/images/logo.svg").default;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
      <div className="container">
        {/* Text Logo - Use this if you don't have a graphic logo */}
        {/* <a className="navbar-brand logo-text page-scroll" href="index.html">Sync</a> */}

        {/* Image Logo */}
        <a className="navbar-brand logo-image" href="index.html">
          <img src={Logo} alt="alternative" />
        </a>

        {/* Mobile Menu Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-awesome fas fa-bars"></span>
          <span className="navbar-toggler-awesome fas fa-times"></span>
        </button>
        {/* end of mobile menu toggle button */}

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                to="description"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link page-scroll"
              >
                DESCRIPTION <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="features"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link page-scroll"
              >
                FEATURES
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="screens"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link page-scroll"
              >
                SCREENS
              </Link>
            </li>

            {/* Dropdown Menu*/}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle page-scroll"
                id="navbarDropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                EXTRA
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="article-details.html">
                  <span className="item-text">ARTICLE DETAILS</span>
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="terms-conditions.html">
                  <span className="item-text">TERMS CONDITIONS</span>
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="privacy-policy.html">
                  <span className="item-text">PRIVACY POLICY</span>
                </a>
              </div>
            </li>
            {/* end of dropdown menu */}
          </ul>
          <span className="nav-item">
            <a className="btn-outline-sm page-scroll" href="#download">
              DOWNLOAD
            </a>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
