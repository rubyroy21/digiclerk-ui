import React, { useState } from "react";
import "./sign-up.css";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Footer from "../../Container/Footer/Footer";
import axios from "axios";
import Swal from "sweetalert2";

const SignUp = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const [otpShow, setOtpShow] = useState(false);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [showPlans, setShowPlans] = useState(true);

  const navigate = useNavigate();

  const handleOtpSend = () => {
    console.log("Before Axios request");
    axios
      .get(`http://dev.xlrt.ai:8090/auth/otp?email=${email}`)
      .then((response) => {
        console.log(response.data, "response data");
        if (email.length !== 0) {
          Swal.fire({
            icon: "success",
            text: response.data,
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    setOtpShow(true);
  };

  const handleValidateCode = () => {
    console.log(verificationCode, "verification code");
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        otp: verificationCode,
      }),
    };
    fetch("http://dev.xlrt.ai:8090/auth/otp/validate", requestOptions)
      .then((response) => {
      localStorage.setItem(
          "authorization",
          response.headers.get("authorization")
        );
        localStorage.setItem("username", userid);
        return response.json()
      })
      .then((data) => {
        console.log(data, "data");
        if (data === true) {
          Swal.fire({
            icon: "success",
            text: "Verified OTP",
          });
          setPasswordShow(true);
          navigate("/dashboard-customer");
        } else {
          Swal.fire({
            icon: "info",
            text: "Invalid OTP",
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const handlePlanSelect = () => {
    console.log("function called");
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        fname: fname,
        lname: lname,
        pwd: password,

      }),
    };
    fetch("http://dev.xlrt.ai:8090/tenants/user/signup", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "data");
      })
      .catch((err) => console.log(err));
    setShowPlans(!showPlans);
  };

  const handleVerificationChange = (e) => {
    setVerificationCode(e.target.value);
  };

  return (
    <div className="main-div">
      <div className="signup-navbar">
        <div className="web-logo">
          <img
            src={require("../../Container/Navbar/Digiclark powered by Xlrt_teal.png")}
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
      {showPlans ? (
        <>
          <div className="second-text-line">
            Already have an account?
            <Link className="link-login" to="/login">
              &nbsp;Log In
            </Link>
          </div>
        </>
      ) : null}
      <div className="container-signup">
        <div className="column">
          {showPlans ? (
            <>
              <div className="input-fields">
                <form autoComplete="off">
                  <TextField
                    id="standard-basic"
                    label="First Name"
                    variant="standard"
                    InputProps={{
                      style: { width: "300px" },
                    }}
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                  />
                  <TextField
                    id="standard-basic"
                    label="Last Name"
                    variant="standard"
                    InputProps={{
                      style: { width: "300px" },
                    }}
                    autoComplete="on"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                  />
                  <TextField
                    id="standard-basic"
                    label="Username"
                    variant="standard"
                    InputProps={{
                      style: { width: "300px" },
                    }}
                    autoComplete="on"
                    value={userid}
                    onChange={(e) => setUserid(e.target.value)}
                  />
                  <TextField
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    InputProps={{
                      style: { width: "300px" },
                    }}
                    autoComplete="on"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    id="standard-basic"
                    label="Password"
                    variant="standard"
                    type="password"
                    InputProps={{
                      style: { width: "300px" },
                    }}
                    autoComplete="on"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </form>
                <br />
                <div className="signup-btn">
                  <button id="signup-button" onClick={handlePlanSelect}>
                    Next
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <PlansAvailable
                handleOtpSend={handleOtpSend}
                otpShow={otpShow}
                verificationCode={verificationCode}
                handleVerificationChange={handleVerificationChange}
                handleValidateCode={handleValidateCode}
                passwordShow={passwordShow}
              />
            </>
          )}
        </div>
        {showPlans ? (
          <>
            <SocialMediaSignIn />
          </>
        ) : null}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

const PlansAvailable = (props) => {
  const [showVerificationAndPwd, setShowVerificationAndPwd] = useState(true);

  const handleVerificationAndPwd = () => {
    setShowVerificationAndPwd(!showVerificationAndPwd);
  };
  return (
    <>
      {showVerificationAndPwd ? (
        <>
          <div class="con-items ">
            <div class="item item1">
              <div class="con-img">
                <img src="1-3.png" alt="" />
              </div>
              <header>
                <h3>Basic</h3>
                <p>
                  <b>$0 / user</b>
                </p>
              </header>
              <ul>
                <li>
                  <i class="bx bx-check"></i>
                  7-day trial period
                </li>
                <li>
                  <i class="bx bx-check"></i>
                  Annual subscription
                </li>
                <li>
                  <i class="bx bx-check"></i>
                  Schedule III template included
                </li>
                <li>
                  <i class="bx bx-check"></i>
                  Process Trial Balances of unlimited companies
                </li>
              </ul>
              <button onClick={handleVerificationAndPwd}>Choose Plan</button>
            </div>
            <div class="item color item2">
              <div class="con-img">
                <img src="2-1.png" alt="" />
              </div>
              <span class="badge">Popular</span>
              <header>
                <h3>Pro</h3>
                <p>
                  <b>$99 / user</b>
                </p>
              </header>
              <ul>
                <li>
                  <i class="bx bx-check"></i>
                  Annual <b>subscription</b>
                </li>
                <li>
                  <i class="bx bx-check"></i>
                  Schedule III template included
                </li>
                <li>
                  <i class="bx bx-check"></i>
                  Process Trial Balances of unlimited companies
                </li>
                <li>
                  <i class="bx bx-check"></i>
                  Capture data from scanned documents
                </li>
                <li>
                  <i class="bx bx-check"></i>
                  Auto-capture tables
                </li>
                <li>
                  <i class="bx bx-check"></i>
                  Enhanced image correction
                </li>
                <li>
                  <i class="bx bx-check"></i>
                  Top up as and when required
                </li>
                <li>
                  <i class="bx bx-check"></i>
                  Enhanced validity of 2-months for unused credits
                </li>
              </ul>
              <button class="border">Choose Plan</button>
            </div>
          </div>
        </>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Button variant="outlined" size="small" onClick={props.handleOtpSend}>
            Get Otp
          </Button>
          {props.otpShow ? (
            <>
              <TextField
                id="standard-basic"
                label="Enter Verification Code"
                variant="standard"
                InputProps={{
                  style: { width: "300px" },
                }}
                value={props.verificationCode}
                onChange={props.handleVerificationChange}
              />
              <Button
                variant="outlined"
                size="small"
                onClick={props.handleValidateCode}
              >
                Validate Code
              </Button>
            </>
          ) : null}
        </div>
      )}
    </>
  );
};

const SocialMediaSignIn = () => {
  return (
    <>
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
    </>
  );
};

export { SignUp, PlansAvailable, SocialMediaSignIn };
