import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const loadingToast = toast.loading("Logging in...");

    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/auth/signin",
        {
          email: username,
          password,
        }
      );

      toast.success(data.message || "Login successful!", { id: loadingToast });

      // Optionally store token
      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      // Navigate based on role
      setTimeout(() => {
        if (data.role && data.role === "user") {
          navigate("/user/allpost");
        } else {
          navigate("/organization");
        }
      }, 1000);
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Login failed. Please try again.",
        { id: loadingToast }
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-100">
      <div className="bg-orange-200 p-8 rounded-lg shadow-md w-96 text-center">
        <h2 className="text-2xl font-semibold mb-6">Login Form</h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="flex items-center bg-white p-2 rounded-md shadow">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/user.png"
              alt="User Icon"
              className="w-5 mr-3"
            />
            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          <Link to="/auth/register" className="text-orange-600 font-bold">
            Signup Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
