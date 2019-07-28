import React, { Component } from "react";
import { Link } from "react-router-dom";
class NavbarMobile extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="mobile-nav">
          <div className="container">
            <ul className="menu">
              <l1>
                <span className="products">Products</span>
                <ul className="sub-menu">
                  <l1>
                    <Link id="test1" to="/test1">
                      Test1
                    </Link>
                  </l1>
                  <l1>
                    <Link id="test2" to="/test2">
                      Test2
                    </Link>
                  </l1>
                </ul>
              </l1>

              <l1>
                <Link id="signup" to="/faq">
                  About
                </Link>
              </l1>
              <l1>
                <Link id="faq" to="/faq">
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
              <l1>
                <Link id="login" to="/signin">
                  Login
                </Link>
              </l1>
              <l1>
                <Link id="create_account" className="signup-btn" to="/signup">
                  Create a Free Account
                </Link>
              </l1>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavbarMobile;
