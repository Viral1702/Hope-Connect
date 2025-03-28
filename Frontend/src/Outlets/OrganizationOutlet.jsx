import React from "react";
import { Outlet } from "react-router-dom";
// import LandingHeader from "../Components/Landing/Landingheader";
import Footer from "../Components/Common/Footer";
import OrgHeader from "../Components/Organization/OrgHeader";

const OrganizationOutlet = () => {
  return (
    <>
      <OrgHeader />
      <Outlet />
      <Footer />
    </>
  );
};

export default OrganizationOutlet;
