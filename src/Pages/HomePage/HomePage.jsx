import React from "react";
import Navbar from "../../Container/Navbar/Navbar";
import BannerWithVideo from "../../Container/BannerWithVideo/BannerWithVideo";
import Footer from "../../Container/Footer/Footer";
import { PlansAvailable } from "../SignUp/SignUp";
import { PricingPackage } from "../Pricing/Pricing";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <BannerWithVideo />
      <PricingPackage />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default HomePage;
