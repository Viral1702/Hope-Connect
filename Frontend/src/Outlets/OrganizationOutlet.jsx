import React from "react";
import { Outlet } from "react-router-dom";
<<<<<<< HEAD
=======
// import LandingHeader from "../Components/Landing/Landingheader";
>>>>>>> 1feb47508360a3f302507512adb3684a5ea3dd0e
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
