import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const loadingToast = toast.loading("Registering...");

    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/auth/signup",
        {
          name: username,
          email,
          number: mobile,
          password,
        }
      );

      toast.success("Signup successful. OTP sent to your email.", {
        id: loadingToast,
      });

      // Redirect to verify OTP page and store token
      localStorage.setItem("token", data.token);
      navigate("auth/verify-otp");
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed!", {
        id: loadingToast,
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-100">
      <div className="bg-orange-200 p-8 rounded-lg shadow-md w-96 text-center">
        <h2 className="text-2xl font-semibold mb-6">Register Form</h2>

        <form onSubmit={handleRegister} className="space-y-5">
          <div className="flex items-center bg-white p-2 rounded-md shadow">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/user.png"
              alt="User Icon"
              className="w-5 mr-3"
            />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              required
              className="w-full border-none outline-none text-sm"
            />
          </div>

          <div className="flex items-center bg-white p-2 rounded-md shadow">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/phone.png"
              alt="Phone Icon"
              className="w-5 mr-3"
            />
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter Mobile Number"
              required
              pattern="[0-9]{10}"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              required
              className="w-full border-none outline-none text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-sm ">
          Create an Organization?{" "}
          <Link
            to="/auth/create-organization"
            className="text-orange-600 font-bold"
          >
            Create Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
