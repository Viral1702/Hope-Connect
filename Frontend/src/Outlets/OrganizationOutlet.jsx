import React from "react";
import { Outlet } from "react-router-dom";
import LandingHeader from "../Components/Landing/Landingheader";
import Footer from "../Components/Common/Footer";

const OrganizationOutlet = () => {
  return (
    <>
      <LandingHeader />
      <Outlet />
      <Footer />
    </>
  );
};

export default OrganizationOutlet;
