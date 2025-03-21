import React from "react";
import { Outlet } from "react-router-dom";
import HomeNavbar from "../Components/HomeNavbar";
import HomeFooter from "../Components/HomeFooter";

const HomeOutlet = () => {
  return (
    <>
      <HomeNavbar />
      <Outlet />
      <HomeFooter />
    </>
  );
};

export default HomeOutlet;
