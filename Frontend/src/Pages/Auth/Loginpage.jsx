import React from "react";
import { NavLink } from "react-router-dom";
import LoginForm from "../../components/user/login/LoginForm";

const Loginpage = () => {
  return (
    <div>
      Login <NavLink to="/">Home</NavLink>
      <UserHeader/>
      <LoginForm/>
    </div>
  );
};

export default Loginpage;
