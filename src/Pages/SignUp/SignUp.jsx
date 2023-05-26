import React from "react";
import "./sign-up.css";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const SignUp = () => {
  return (
    <div className="main-div">
      <div className="signup-navbar">
        <div className="web-logo">
          <img
            src={require("../../Container/Navbar/DigiClerk_green.png")}
            alt=""
            style={{
              height: "66px",
              width: "180px",
            }}
          />
        </div>
        <div className="sign-up">Sign Up</div>
        <div className="close-icon">
          <Link className="close-icon-link" to="/">
            <img
              src="https://icons.veryicon.com/png/o/miscellaneous/kqt/close-116.png"
              alt=""
              style={{
                height: "50px",
                width: "50px",
              }}
            />
          </Link>
        </div>
      </div>
      <div className="second-text-line">
        Already have an account?
        <Link className="link-login" to="/login">
          &nbsp;Log In
        </Link>
      </div>
      <div className="container">
        <div className="column">
          <div className="input-fields">
            <form autoComplete="off">
              <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
                InputProps={{
                  style: { width: "300px" },
                }}
              />
              <TextField
                id="standard-basic"
                label="Type your email again"
                variant="standard"
                InputProps={{
                  style: { width: "300px" },
                }}
              />

              <TextField
                id="standard-basic"
                label="Password"
                variant="standard"
                InputProps={{
                  style: { width: "300px" },
                }}
              />

              <TextField
                id="standard-basic"
                label="Type your email again"
                variant="standard"
                InputProps={{
                  style: { width: "300px" },
                }}
              />

              <div className="signup-btn">
                <button id="signup-button">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
        <div className="column">
          <div className="signup-platform">
            <div className="google-signup">
              <div className="google-logo">
                <img
                  src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                  alt=""
                  className="google-png"
                />
              </div>
              <div className="google-text">Continue with Google</div>
            </div>
            <div className="google-signup">
              <div className="google-logo">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/800px-LinkedIn_icon_circle.svg.png"
                  alt=""
                  className="linkedIn-png"
                />
              </div>
              <div className="google-text">Continue with LinkedIn</div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="footer-text-line1">
        * By signing up, you agree to our Terms of Use and acknowledge you've
        read our Privacy Policy
      </div>
      <div className="footer-text-line2">
        This site is protected by reCAPTCHA Enterprise. Google's Privacy Policy
        and Terms of Use apply.
      </div>
    </div>
  );
};

export default SignUp;
