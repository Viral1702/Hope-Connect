import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Common/Footer";
import UserHeader from "../components/Landing/UserHeader";

const UserOutlet = () => {
  return (
    <>
      <UserHeader />
      <Outlet />
      <Footer />
    </>
  );
};

export default UserOutlet;
