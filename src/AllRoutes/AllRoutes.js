import { Routes, Route } from "react-router-dom";
import SignUp from "../Pages/SignUp/SignUp";
import MainContainer from "../Container/MainContainer/MainContainer";
import Login from "../Pages/Login/Login";
import TalkToUs from "../Pages/TalkToUs/TalkToUs";
import AccountSetting from "../Pages/AccountSetting/AccountSetting";
import BillingHistory from "../Pages/BillingHistory/BillingHistory";
import SideBar from "../Container/SideBar/SideBar";
import { Dashboard } from "../Pages/Dashboard/Dashboard";
import DataGrid from "../Pages/DataGrid/DataGrid";
import XmlReview from "../XMLReview/XmlReview";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/talkToUs" element={<TalkToUs />} />
        <Route exact path="/settings/*" element={<SideBar />} />
        <Route
          exact
          path="/settings/account-settings"
          element={<AccountSetting />}
        />
        <Route
          exact
          path="/settings/billing-history"
          element={<BillingHistory />}
        />
        <Route exact path="/talkToUs" element={<TalkToUs />} />
        <Route exact path="/" element={<MainContainer />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path = "/fs/:docId" element={<XmlReview/>} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
