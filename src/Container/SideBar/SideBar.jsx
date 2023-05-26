import React from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import "./sidebar.css";
import AccountSetting from "../../Pages/AccountSetting/AccountSetting";
import BillingHistory from "../../Pages/BillingHistory/BillingHistory";

const SideBar = () => {
  return (
    <div>
      <Navbar />
      <div className="sidebar-main-div">
        <div className="sidebar-container">
          <ul className="sidebar-menu">
            <li>
              <Link to="/settings/account-settings" style={{ color: "black" }}>
                Account Settings
              </Link>
            </li>
            <li>
              <Link to="/settings/billing-history" style={{ color: "black" }}>
                Billing History
              </Link>
            </li>
            {/* Add more sidebar items with corresponding links */}
          </ul>
        </div>
        <div className="main-container">
          <Routes>
            <Route
              path="/settings/account-settings"
              element={<AccountSetting />}
            />
            <Route
              path="/settings/billing-history"
              element={<BillingHistory />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
