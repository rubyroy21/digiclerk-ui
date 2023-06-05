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
    localStorage.removeItem("jwtSecurityToken")
    localStorage.removeItem("credentials")
    navigate("/");
  };

  const handleAccountSetting = () => {
    navigate("/account-settings");
  };
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img
            src={require("./Digiclark powered by Xlrt_teal.png")}
            alt=""
            style={{
              height: "90px",
              width: "230px",
            }}
          />
        </Link>
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
          <ul className="dropdownMenubar">
            <li className="dropdown-text">action 1</li>
            <li className="dropdown-text">action 2</li>
            <li className="dropdown-text">action 3</li>
            <li className="dropdown-text">action 4</li>
          </ul>
        </li>
        <li className={isNavlinkOpen ? "fade" : ""}>Company</li>
        <li className={isNavlinkOpen ? "fade" : ""}>
          <Link to="/pricing" className="link-css">Pricing</Link>
        </li>
        {authorization ? (
          <>
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <>
                  <Button
                    variant="contained"
                    {...bindTrigger(popupState)}
                    id="btn-username"
                  >
                    Hi! {userName}
                  </Button>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem onClick={popupState.close}>Profile</MenuItem>
                    <MenuItem onClick={handleAccountSetting}>
                      Account Settings
                    </MenuItem>
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
