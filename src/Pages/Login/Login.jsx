import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import jwtDecode from 'jwt-decode';
import "../SignUp/sign-up.css";
import "./login.css";
import { AiFillEye } from "react-icons/ai";
import Footer from "../../Container/Footer/Footer";

const Login = () => {
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [response, setResponse] = useState(null);
  const [jwtToken, setJwtToken] = useState();
  const [status, setStatus] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    fetch("https://dev.xlrt.ai/auth-api/gatekeeper/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: password,
        userid: userid,
      }),
    })
      .then((response) => {
        let auth =  response.headers.get("authorization").split(/(\s+)/)
            .filter((e) => e.trim().length > 0)[1]
        localStorage.setItem(
          "authorization",
          response.headers.get("authorization")
        );
        localStorage.setItem(
          "jwtSecurityToken",
          response.headers.get("authorization")
        );
        
        localStorage.setItem("username", userid);
        setJwtToken(
          response.headers
            .get("authorization")
            .split(/(\s+)/)
            .filter((e) => e.trim().length > 0)[1]
        );
        let decodedToken = jwtDecode(auth);
         console.log(decodedToken)
        // console.log(decoded);
        localStorage.setItem("credentials", JSON.stringify(decodedToken));
        // console.log(jwtToken);
         
        // console.log(jwtToken);

        if (!response.ok) {
          throw new Error("Login request failed");
        }
        return response.json();
      })
      .then((data) => {
        // console.log(data, "data");
        setResponse(data);
        
         // Store the response in the state variable
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    navigate("/dashboard-customer");
    setStatus(true);
  };

  // let decoded = jwt_decode(jwtToken);
  // console.log(decoded);
  // localStorage.setItem("credentials", decoded);
  // localStorage.setItem("credentials", decoded);

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
        <div className="sign-up">Login</div>
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
        Not have an account
        <Link className="link-login" to="/signup">
          &nbsp;Sign up
        </Link>
      </div>
      <div className="container-signup">
        <div className="column">
          <div className="input-fields">
            <form autoComplete="off" onSubmit={handleLogin}>
              <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
                InputProps={{
                  style: { width: "300px" },
                }}
                value={userid}
                onChange={(e) => setUserid(e.target.value)}
              />

              <TextField
                id="standard-basic"
                label="Password"
                type={showPassword ? "text" : "password"}
                variant="standard"
                autoComplete="current-password"
                InputProps={{
                  style: { width: "300px" },
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="show-password" onClick={togglePasswordVisibility}>
                {showPassword ? "Hide" : "Show"} Password
              </div>
              <br />
              <div className="forgot-password-1">
                <div className="forgot-password">Forgot Password?</div>
              </div>
              <div className="signup-btn">
                <button id="signup-button">Login</button>
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
      <br />
      {/* <div className="footer-text-line1">
        * By signing up, you agree to our Terms of Use and acknowledge you've
        read our Privacy Policy
      </div>
      <div className="footer-text-line2">
        This site is protected by reCAPTCHA Enterprise. Google's Privacy Policy
        and Terms of Use apply.
      </div> */}
      <Footer />
    </div>
  );
};

export default Login;
