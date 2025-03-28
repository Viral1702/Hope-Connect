import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      {/* Registration Container */}
      <div className="bg-blue-200 p-8 rounded-lg shadow-md w-96 text-center">
        <h2 className="text-2xl font-semibold mb-6">Register Form</h2>

        {/* Register Form */}
        <form className="space-y-5">
          <div className="flex items-center bg-white p-2 rounded-md shadow">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/user.png"
              alt="User Icon"
              className="w-5 mr-3"
            />
            <input
              type="text"
              placeholder="Enter Username"
              required
              className="w-full border-none outline-none text-sm"
            />
          </div>

          <div className="flex items-center bg-white p-2 rounded-md shadow">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/email.png"
              alt="Email Icon"
              className="w-5 mr-3"
            />
            <input
              type="email"
              placeholder="Enter Email"
              required
              className="w-full border-none outline-none text-sm"
            />
          </div>

          <div className="flex items-center bg-white p-2 rounded-md shadow">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/lock.png"
              alt="Lock Icon"
              className="w-5 mr-3"
            />
            <input
              type="password"
              placeholder="Enter Password"
              required
              className="w-full border-none outline-none text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-bold">
            Login Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
