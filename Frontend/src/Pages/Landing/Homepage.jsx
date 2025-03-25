import React from "react";
import { NavLink } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      Home page <NavLink to="/auth/login">Login</NavLink>
    </div>
  );
};

export default Homepage;
