import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="pg-footer">
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-content-column">
              <div className="footer-logo">
                <h1
                  style={{
                    color: "white",
                  }}
                >
                  DigiClark
                </h1>
              </div>
              <div className="footer-menu">
                <h2 className="footer-menu-name"> Get Started</h2>
                <ul id="menu-get-started" className="footer-menu-list">
                  <li className="menu-item menu-item-type-post_type menu-item-object-product">
                    <a href="#" className="footer-text">
                      Start
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-product">
                    <a href="#" className="footer-text">
                      Documentation
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-product">
                    <a href="#" className="footer-text">
                      Installation
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-content-column">
              <div className="footer-menu">
                <h2 className="footer-menu-name"> Company</h2>
                <ul id="menu-company" className="footer-menu-list">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="#" className="footer-text">
                      Contact
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                    <a href="#" className="footer-text">
                      News
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="#" className="footer-text">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-menu">
                <h2 className="footer-menu-name"> Legal</h2>
                <ul id="menu-legal" className="footer-menu-list">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                    <a href="#" className="footer-text">
                      Privacy Notice
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="#" className="footer-text">
                      Terms of Use
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-content-column">
              <div className="footer-menu">
                <h2 className="footer-menu-name"> Quick Links</h2>
                <ul id="menu-quick-links" className="footer-menu-list">
                  <li className="menu-item menu-item-type-custom menu-item-object-custom">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="#"
                      className="footer-text"
                    >
                      Support Center
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="#"
                      className="footer-text"
                    >
                      Service Status
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="#" className="footer-text">
                      Security
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="#" className="footer-text">
                      Blog
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-post_type_archive menu-item-object-customer">
                    <a href="#" className="footer-text">
                      Customers
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="#" className="footer-text">
                      Reviews
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-content-column">
              <div className="footer-call-to-action">
                <h2 className="footer-call-to-action-title"> Let's Chat</h2>
                <p className="footer-call-to-action-description">
                  {" "}
                  Have a support question?
                </p>
                <a
                  className="footer-call-to-action-button button footer-text"
                  href="#"
                  target="_self"
                >
                  {" "}
                  Get in Touch{" "}
                </a>
              </div>
              <div className="footer-call-to-action">
                <h2 className="footer-call-to-action-title"> You Call Us</h2>
                <p className="footer-call-to-action-link-wrapper">
                  {" "}
                  <a
                    className="footer-call-to-action-link footer-text"
                    href="tel:0124-64XXXX"
                    target="_self"
                  >
                    {" "}
                    0124-64XXXX{" "}
                  </a>
                </p>
              </div>
            </div>
            <div className="footer-social-links">
              {" "}
              <img
                src={require("../../images/footer-links.png")}
                className="footer-social-amoeba-svg"
                alt=""
              />
              <a
                className="footer-social-link linkedin "
                href="#"
                target="_blank"
              >
                <span className="hidden-link-text">Linkedin</span>
                <img
                  src={require("../../images/icons/linkedin_icon.png")}
                  className="footer-social-icon-svg"
                  alt=""
                />
              </a>
              <a
                className="footer-social-link twitter "
                href="#"
                target="_blank"
              >
                <span className="hidden-link-text">Twitter</span>
              </a>
              <a
                className="footer-social-link youtube "
                href="#"
                target="_blank"
              >
                <span className="hidden-link-text">Youtube</span>
                <svg
                  className="footer-social-icon-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                >
                  <path
                    className="footer-social-icon-path"
                    d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"
                  ></path>
                </svg>
              </a>
              <a
                className="footer-social-link github "
                href="#"
                target="_blank"
              >
                <span className="hidden-link-text">Github</span>
                <svg
                  className="footer-social-icon-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path
                    className="footer-social-icon-path"
                    d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z "
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="footer-copyright-wrapper">
              <p className="footer-copyright-text">
                <a
                  className="footer-copyright-link footer-text"
                  href="#"
                  target="_self"
                >
                  {" "}
                  ©2023. | DigiClark | All rights reserved.{" "}
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
