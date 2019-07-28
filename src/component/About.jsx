import React, { Component } from "react";
import NavbarMobile from "./template/NavbarMobile";
import Footer from "./template/Footer";
import Navbar from "./template/Navbar";
class About extends Component {
  state = {};
  render() {
    return (
      <div>
        <div class="signin-modal">
          <div class="closeslide">
            <div class="line1" />
            <div class="line2" />
          </div>
          <div class="_half-width _left _padding-50 _no-show">
            <img
              src="sitestatics/img/piggy-signin.png"
              class="signin-img _margin-50"
              alt=""
            />
            <h1 class="_margin-100">It's time to Save & Invest</h1>
          </div>
          <div class="_right _padding-50 signin">
            <div class="_center">
              <a href="index.html">
                <img
                  src="../storage.googleapis.com/piggybankservice.appspot.com/statics/logo-main-web-shifted-min.png"
                  class="logo"
                  alt="PiggyVest Logo"
                />
              </a>
              <h2>Login to your Account</h2>
            </div>
            <form
              action="https://www.piggyvest.com/login"
              method="post"
              class="_margin-100 signin-form"
            >
              <label for="email" class="_left">
                Email or Phone Number
              </label>
              <input
                type="text"
                name="email"
                value=""
                class="_left _margin-10"
              />
              <label for="password" class="_margin-20 _left">
                Password
              </label>
              <input type="password" name="password" class="_left _margin-10" />
              <div class="clearboth" />
              <div class="actionholder">
                <input type="hidden" name="loginacc" value="1" />
                <input
                  type="hidden"
                  name="goto"
                  value="https://www.piggyvest.com/about"
                />
                <input type="submit" class="btn _margin-20" value="Log In" />

                <div class="_margin-20">
                  <a href="onboarding/register.html" class="_margin-20">
                    Create an Account Instead
                  </a>{" "}
                  <br />
                  <a href="forgot.html" class="_margin-20">
                    Forgot Password?
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* mobile menu icon  */}
        <div class="nav-icon blue-nav-icon _margin-10">
          <div class="line1" />
          <div class="line2" />
          <div class="line3" />
        </div>

        <NavbarMobile />
        {/*  Nav */}
        <Navbar />
        <header class="header">
          <section class="intro-text _margin-100">
            <div class="container">
              <h1 class="_margin-50 _middle">
                One Mission: To give people the power to manage their finances
                by making it clearer and more transparent.
              </h1>
              <div align="center">
                <img
                  src="sitestatics/img/mission-illustration-700-min.png"
                  class="img-700"
                  alt=""
                />
              </div>
              <p class="_half-width justify _middle">
                Our core team brings together top class talent from the worlds
                of finance, tech and beyond, representing a strong combination
                of proven skills and passion to ensure that everyone can better
                manage their finances.
              </p>
            </div>
          </section>
        </header>

        {/* How It Works */}
        <section class="content">
          <div class="container _center">
            <h1 class="_margin-100">We Are Known For</h1>
            <div class="how-works firstcapspanh3 _margin-50">
              <div class="_width-25 _padding-20 _flex">
                <img src="sitestatics/img/transparency-min.png" alt="" />
                <h3>
                  <span>T</span>ransparency
                </h3>
              </div>
              <div class="_width-25 _padding-20 _flex">
                <img src="sitestatics/img/innovation-min.png" alt="" />
                <h3>
                  <span>C</span>larity
                </h3>
              </div>
              <div class="_width-25 _padding-20 _flex">
                <img src="sitestatics/img/integrity-min.png" alt="" />
                <h3>
                  <span>E</span>ase
                </h3>
              </div>
              <div class="_width-25 _padding-20 _flex">
                <img src="sitestatics/img/Efficiency-min.png" alt="" />
                <h3>
                  <span>I</span>nnovation
                </h3>
              </div>
            </div>
            <a href="faq.html" class="btn blue _margin-50">
              Visit FAQs
            </a>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />

        <Footer />
      </div>
    );
  }
}

export default About;
