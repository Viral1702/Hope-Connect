import React from "react";
import { Outlet } from "react-router-dom";
import LoginHeader from "../components/Landing/LoginHeader"; // Correct import

const LoginOutlet = () => {
  return (
    <>
      <LoginHeader />
      <Outlet /> {/* This renders the Loginpage inside LoginOutlet */}
    </>
  );
};

export default LoginOutlet;
