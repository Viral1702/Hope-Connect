import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#FFE4C4]">
      <div className="bg-[#FCE3C7] p-8 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-2xl font-bold mb-4">Login Form</h2>

        {/* Username Field */}
        <div className="flex items-center bg-white p-2 rounded-md mb-4">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/user.png"
            alt="User Icon"
            className="w-5 mr-2"
          />
          <input
            type="text"
            name="Username"
            placeholder="Enter Username"
            className="w-full outline-none text-sm"
            required
          />
        </div>

        {/* Password Field */}
        <div className="flex items-center bg-white p-2 rounded-md mb-4">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/lock.png"
            alt="Lock Icon"
            className="w-5 mr-2"
          />
          <input
            type="password"
            name="Password"
            placeholder="Enter Password"
            className="w-full outline-none text-sm"
            required
          />
        </div>

        {/* Login Button */}
        <button className="w-full bg-[#FF914D] text-white py-2 rounded-md hover:bg-[#FF6A00] transition">
          Login
        </button>

        {/* Signup Link */}
        <p className="mt-3 text-sm">
          Not a member?{" "}
          <Link to="/register" className="text-[#FF6A00] font-bold">
            Signup Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
