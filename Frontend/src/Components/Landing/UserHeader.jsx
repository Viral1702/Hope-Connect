import React from "react";
import { Link } from "react-router-dom";

const UserHeader = () => {
  return (
    <header className="w-full p-4 bg-white shadow-md">
      <nav className="container mx-auto flex justify-center">
        <Link to="/">
          <img
            src="/images/guest/logo-removebg-preview.png"
            alt="Logo"
            className="w-40"
          />
        </Link>
      </nav>
    </header>
  );
};

export default UserHeader;
