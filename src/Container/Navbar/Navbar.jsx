/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import "./navbar.css";
import { AiOutlineDown } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import MenuDrawer from "./MenuDrawer";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import { Button, Menu, MenuItem } from "@mui/material";

export default function Navbar() {
  const [isNavlinkOpen, setIsNavLinkOpen] = useState(false);

  const userName = localStorage.getItem("username");
  const authorization = localStorage.getItem("authorization");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("authorization");
    navigate("/");
  };
  return (
    <nav>
      <div className="logo">
        <img
          src={require("./DigiClerk_green.png")}
          alt=""
          style={{
            height: "90px",
            width: "230px",
          }}
        />
      </div>
      <div
        className={isNavlinkOpen ? "hamburger toggle" : "hamburger"}
        onClick={() => {
          setIsNavLinkOpen((pre) => !pre);
        }}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <ul className={isNavlinkOpen ? "open nav-links" : "nav-links"}>
        <li className={isNavlinkOpen ? "fade" : ""} id="dropdown">
          Product{" "}
          {/* <span>
            <AiOutlineDown style={iconStyle} />
          </span> */}
          <ul className="dropdown-menu">
            <li className="dropdown-text">action 1</li>
            <li className="dropdown-text">action 2</li>
            <li className="dropdown-text">action 3</li>
            <li className="dropdown-text">action 4</li>
          </ul>
        </li>
        <li className={isNavlinkOpen ? "fade" : ""}>Company</li>
        <li className={isNavlinkOpen ? "fade" : ""}>Pricing</li>
        {authorization ? (
          <>
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <>
                  <Button variant="contained" {...bindTrigger(popupState)}>
                    Hi {userName}
                  </Button>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem onClick={popupState.close}>Profile</MenuItem>
                    <MenuItem onClick={popupState.close}>My account</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                </>
              )}
            </PopupState>
          </>
        ) : (
          <li className={isNavlinkOpen ? "fade" : ""} id="btn-group">
            <button className="signin-button">
              <Link to="/signup" className="link-signup">
                Sign Up
              </Link>
            </button>
            <button className="join-button" href="#">
              Try Free
            </button>
            {/* <MenuDrawer /> */}
          </li>
        )}
      </ul>
    </nav>
  );
}
