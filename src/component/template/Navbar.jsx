import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="top-nav  alt-nav navwhite">
        <div className="container">
          <a href="index.html">
            <img
              src="../storage.googleapis.com/piggybankservice.appspot.com/statics/pvest-logo-web-white-min.png"
              className="logo"
              alt=""
            />
          </a>
          <a href="index.html">
            <img
              src="../storage.googleapis.com/piggybankservice.appspot.com/statics/logo-main-web-shifted-min.png"
              className="logo-alt"
              alt=""
            />
          </a>

          <ul className="menu _no-show">
            <l1 className="menu-list">
              <Link id="about" className="menu-link" to="/about">
                About
              </Link>
            </l1>
            <l1 className="menu-list">
              <Link className="menu-link" to="/faq">
                FAQ
              </Link>
            </l1>
            <l1 className="menu-list">
              <a
                className="menu-link"
                href="https://medium.com/@wabilo"
                target="_blank"
                rel="noopener noreferrer"
              >
                BLOG
              </a>
            </l1>
            <l1 className="menu-list">
              <Link className="menu-link" to="/signin">
                Log In
              </Link>
            </l1>
            <l1 className="menu-list">
              <Link className="menu-link signup-btn" to="/signup">
                Create a Free Account
              </Link>
            </l1>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
