/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./bannerWithVideo.css";
import "../Navbar/navbar.css";
import { Link } from "react-router-dom";

const BannerWithVideo = () => {
  return (
    <>
      <div className="container">
        <div className="left left-container-box">
          <div className="big-font-heading">Unleash</div>
          <div className="big-font-heading">the Power of</div>
          <div className="big-font-heading">Automation!</div>
          <div className="small-font-heading">
            Transform Tally ERP Data to Schedule III Reporting
          </div>
          <div className="btn-group-banner">
            <button className="try-free-button" href="#">
              Try Free
            </button>
            <button className="talk-button" href="#">
              <Link to="/talkToUs" style={{ textDecoration: "none" }}>
                Talk To Us
              </Link>
            </button>
          </div>
        </div>
        <div className="right">
          <div className="video-wrapper">
            {/* <iframe
              src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&loop=1"
              frameborder="0"
              allowfullscreen
            ></iframe> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerWithVideo;
