import React from "react";
<<<<<<< HEAD
import LoginForm from "../../components/user/login/LoginForm";
import UserHeader from "../../components/Landing/UserHeader";
=======
import { Link } from "react-router-dom";
>>>>>>> 1feb47508360a3f302507512adb3684a5ea3dd0e

const LoginPage = () => {
  return (
<<<<<<< HEAD
    <div>
      <LoginForm />
=======
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-100">
     

      {/* Authentication Container */}
      <div className="bg-orange-200 p-8 rounded-lg shadow-md w-96 text-center">
        <h2 className="text-2xl font-semibold mb-6">Login Form</h2>

        {/* Login Form */}
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
            className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-sm">
          Not a member?{" "}
          <Link to="/register" className="text-orange-600 font-bold">
            Signup Now
          </Link>
        </p>
      </div>
>>>>>>> 1feb47508360a3f302507512adb3684a5ea3dd0e
    </div>
  );
};

export default LoginPage;
