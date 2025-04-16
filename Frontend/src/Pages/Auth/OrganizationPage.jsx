import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const OrganizationPage = () => {
  const [orgName, setOrgName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const handleOrganizationRegister = async (e) => {
    e.preventDefault();
    const loadingToast = toast.loading("Creating Organization...");

    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/auth/signup",
        {
          name: orgName,
          email,
          number: mobile,
          password,
          category,
        }
      );

      toast.success("Organization registered. OTP sent to email.", {
        id: loadingToast,
      });

      localStorage.setItem("token", data.token);
      navigate("/auth/verify-otp");
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed!", {
        id: loadingToast,
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-100">
      <div className="bg-orange-200 p-8 rounded-lg shadow-md w-96 text-center">
        <h2 className="text-2xl font-semibold mb-6">Create Organization</h2>

        <form onSubmit={handleOrganizationRegister} className="space-y-5">
          {/* Name */}
          <div className="flex items-center bg-white p-2 rounded-md shadow">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/user.png"
              alt="User Icon"
              className="w-5 mr-3"
            />
            <input
              type="text"
              value={orgName}
              onChange={(e) => setOrgName(e.target.value)}
              placeholder="Enter Organization Name"
              required
              className="w-full border-none outline-none text-sm"
            />
          </div>

          {/* Email */}
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

          {/* Mobile */}
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

          {/* Password */}
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

          {/* Category */}
          <div className="flex items-center bg-white p-2 rounded-md shadow">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/tags.png"
              alt="Category Icon"
              className="w-5 mr-3"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="w-full border-none outline-none text-sm"
            >
              <option value="">Select Category</option>
              <option value="NGO">NGO</option>
              <option value="education">Education</option>
              <option value="environment">Environment</option>
              <option value="health">Health</option>
              <option value="animal">Animal Welfare</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
          >
            Create Organization
          </button>
        </form>

        <p className="mt-4 text-sm">
          Already registered?{" "}
          <Link to="/auth/login" className="text-orange-600 font-bold">
            Login Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default OrganizationPage;
