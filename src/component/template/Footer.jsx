import React, { Component } from "react";
class Footer extends Component {
  state = {};
  render() {
    return (
      <footer class="content">
        <div class="container">
          <ul class="_right foot-links">
            <h3>COMPANY</h3>
            <li>
              <a href="../about.html">About</a>
            </li>

            <li>
              <a href="../faq.html">FAQs</a>
            </li>
            <li>
              <a href="../terms.html">Terms of Use</a>
            </li>
            <li>
              <a href="../privacy.html">Privacy Policy</a>
            </li>
            <li>
              <span class="icon">
                <a href="https://www.facebook.com/PiggybankNG" target="_blank">
                  <img
                    alt="Facebook"
                    src="../images/social-media-icon-FB-80-min.png"
                  />
                </a>
              </span>

              <span class="icon">
                <a href="https://twitter.com/PiggybankNG" target="_blank">
                  <img
                    alt="Twitter"
                    src="../images/social-media-icon-TWT-80-min.png"
                  />
                </a>
              </span>

              <span class="icon">
                <a href="https://instagram.com/PiggybankNG" target="_blank">
                  <img
                    alt="Instagram"
                    src="../images/social-media-icon-instagram-80-min.png"
                  />
                </a>
              </span>
            </li>
          </ul>

          <ul class="_right foot-links">
            <h3>Quick Links</h3>
            <li>
              <a href="../autosave.html">AutoSave™</a>
            </li>
            <li>
              <a href="../link.html">PiggyLink</a>
            </li>
            <li>
              <a href="../quicksave.html">Quick Save™</a>
            </li>
            <li>
              <a href="../safelock.html">SafeLock™</a>
            </li>
            <li>
              <a href="../withdrawals.html">Withdrawals & Breaking</a>
            </li>
            <li>
              <a href="../salarysavingsteps.html">Salary Management</a>
            </li>
          </ul>

          <div class="info">
            <a href="#">
              <img
                src="../../storage.googleapis.com/piggybankservice.appspot.com/statics/pvest-logo-web-grey.png"
                class="logo"
                alt=""
              />
            </a>
            <p class="_margin-10">
              PiggyVest{" "}
              <a
                href="https://medium.com/@PiggybankNG/introducing-piggyvest-the-future-of-savings-and-investments-e82482d3a595"
                target="_blank"
              >
                (formerly piggybank.ng)
              </a>{" "}
              is the largest online savings & investing platform in Nigeria. For
              over 3 years, our customers have saved and invested billions of
              Naira that they would normally be tempted to spend.
              <br /> <br />
              Physical Office Address: No. 16, Boyle Street, Lagos Island,
              Lagos, Nigeria.
            </p>
            <p>
              <a href="tel:0700 933 933 933">
                0700 933 933 933 <b>(Mon-Fri from 9am-5pm)</b>
              </a>{" "}
              -
              <a href="../cdn-cgi/l/email-protection.html#e5868a8b91848691a5958c82829c93809691cb868a88">
                <span
                  class="__cf_email__"
                  data-cfemail="eb8884859f8a889fab9b828c8c929d8e989fc5888486"
                >
                  [email&#160;protected]
                </span>
              </a>
            </p>
            <p class="copy">
              © 2016 - 2019 PiggyTech Global Limited - RC 1405222
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
