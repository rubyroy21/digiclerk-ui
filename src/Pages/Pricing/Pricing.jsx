import React from "react";
import Navbar from "../../Container/Navbar/Navbar";
import "./pricing.css";
import { TiTickOutline } from "react-icons/ti";
import Footer from "../../Container/Footer/Footer";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "7em",
          fontSize: "21px",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <h1>Simple and Transparent Pricing</h1>
        <h5>
          Find the right plan for you, or seek help from experts{" "}
          <button className="talk-to-us">Talk to us</button>
        </h5>
      </div>
      <br />
      <div className="wrapper">
        <div className="table basic">
          <div className="price-section">
            <div className="price-area">
              <div className="inner-area">
                <span className="text">&#8377;</span>
                <span className="price">00</span>
              </div>
            </div>
          </div>

          <div className="package-name"></div>
          <div className="text-headline">
            Indian Rupees 4,999 per year 100 pages/month, then Re. 1/page For
            teams looking to automate Schedule III reporting from Tally ERP
          </div>
          <div className="features features-flex">
            <div>
              <li>
                <span className="list-name subscription-text">
                  <div className="icons-bg">
                    <TiTickOutline />
                  </div>
                  <div>7-day trial period</div>
                </span>
                <span className="icon check">
                  <i className="fas fa-check-circle"></i>
                </span>
              </li>
              <li>
                <span className="list-name subscription-text">
                  <div className="icons-bg">
                    <TiTickOutline />
                  </div>
                  <div>Annual subscription</div>
                </span>
                <span className="icon check">
                  <i className="fas fa-check-circle"></i>
                </span>
              </li>
              <li>
                <span className="list-name subscription-text">
                  <div className="icons-bg">
                    <TiTickOutline />
                  </div>
                  <div>Schedule III template included</div>
                </span>
                <span className="icon cross">
                  <i className="far fa-times-circle"></i>
                </span>
              </li>
              <li>
                <span className="list-name subscription-text">
                  <div className="icons-bg">
                    <TiTickOutline />
                  </div>
                  <div>Process Trial Balances of unlimited companies</div>
                </span>
                <span className="icon cross">
                  <i className="far fa-times-circle"></i>
                </span>
              </li>
            </div>
            <div className="btn">
              <button>
                <Link to="/payment-summary" className="link-style">
                  Get Started
                </Link>
              </button>
            </div>
          </div>
        </div>

        <div className="table Ultimate">
          <div className="price-section">
            <div className="price-area">
              <div className="inner-area">
                <span className="text price-range">&#8377;</span>
                <span className="price price-range">99</span>
              </div>
            </div>
          </div>
          <div className="package-name"></div>
          <div className="text-headline">
            Indian Rupees 7,500 per year 100 pages, then Re. 1/page For teams
            looking to automate parsing of information from scanned documents
          </div>
          <div className="features">
            <li>
              <span className="list-name subscription-text">
                <div className="icons-bg">
                  <TiTickOutline />
                </div>
                <div>Annual subscription</div>
              </span>
              <span className="icon check">
                <i className="fas fa-check-circle"></i>
              </span>
            </li>
            <li>
              <span className="list-name subscription-text">
                <div className="icons-bg">
                  <TiTickOutline />
                </div>
                <div>Schedule III template included</div>
              </span>
              <span className="icon check">
                <i className="fas fa-check-circle"></i>
              </span>
            </li>
            <li>
              <span className="list-name subscription-text">
                <div className="icons-bg">
                  <TiTickOutline />
                </div>
                <div>Process Trial Balances of unlimited companies</div>
              </span>
              <span className="icon check">
                <i className="fas fa-check-circle"></i>
              </span>
            </li>
            <li>
              <span className="list-name subscription-text">
                <div className="icons-bg">
                  <TiTickOutline />
                </div>
                <div>Capture data from scanned documents</div>
              </span>
              <span className="icon check">
                <i className="fas fa-check-circle"></i>
              </span>
            </li>
            <li>
              <span className="list-name subscription-text">
                <div className="icons-bg">
                  <TiTickOutline />
                </div>
                <div>Auto-capture tables</div>
              </span>
              <span className="icon check">
                <i className="fas fa-check-circle"></i>
              </span>
            </li>
            <li>
              <span className="list-name subscription-text">
                <div className="icons-bg">
                  <TiTickOutline />
                </div>
                <div>Enhanced image correction</div>
              </span>
              <span className="icon check">
                <i className="fas fa-check-circle"></i>
              </span>
            </li>
            <li>
              <span className="list-name subscription-text">
                <div className="icons-bg">
                  <TiTickOutline />
                </div>
                <div>Top up as and when required</div>
              </span>
              <span className="icon check">
                <i className="fas fa-check-circle"></i>
              </span>
            </li>
            <li>
              <span className="list-name subscription-text">
                <div className="icons-bg">
                  <TiTickOutline />
                </div>
                <div>Enhanced validity of 2-months for unused credits</div>
              </span>
              <span className="icon check">
                <i className="fas fa-check-circle"></i>
              </span>
            </li>
            <div className="btn">
              <button>Purchase</button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Pricing;
