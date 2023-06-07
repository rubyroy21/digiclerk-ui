import { Routes, Route } from "react-router-dom";
import { SignUp } from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import TalkToUs from "../Pages/TalkToUs/TalkToUs";
import AccountSetting from "../Pages/AccountSetting/AccountSetting";
import { Dashboard } from "../Pages/Dashboard/Dashboard";
import XmlReview from "../XMLReview/XmlReview";
import { Pricing } from "../Pages/Pricing/Pricing";
import PaymentSummary from "../Pages/PaymentSummary/PaymentSummary";
import HomePage from "../Pages/HomePage/HomePage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/talkToUs" element={<TalkToUs />} />
        <Route exact path="/account-settings" element={<AccountSetting />} />
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/dashboard-customer" element={<Dashboard />} />
        <Route exact path="/fs/:docId" element={<XmlReview />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/payment-summary" element={<PaymentSummary />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
