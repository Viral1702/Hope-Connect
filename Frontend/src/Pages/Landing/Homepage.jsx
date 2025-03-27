import React from "react";
import { NavLink } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="h-48">
      Home page <NavLink to="/auth/login">Login</NavLink>
    </div>
  );
};

export default Homepage;
