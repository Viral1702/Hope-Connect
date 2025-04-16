import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const OrgProfilePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  // Fetch user profile data
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return [];

        const { data } = await axios.get(
          "http://localhost:3000/api/user-profile",
          {
            headers: {
              Authorization: `${token}`, // Attach token in the request
            },
          }
        );
        console.log(data);

        setFormData({
          name: data.name,
          mobile: data.number,
          email: data.email,
          password: data.password,
        });
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfile();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) return [];
      const response = await axios.post(
        "http://localhost:3000/api/update-profile",
        formData,
        {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("Profile updated Successfully");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-orange-100">
      <div className="bg-orange-200 p-6 rounded-lg shadow-lg w-96">
        <form onSubmit={handleSubmit}>
          <label className="block font-semibold">
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="block w-full mt-1 p-2 rounded-md border border-gray-300 bg-white"
            />
          </label>

          <label className="block font-semibold mt-4">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full mt-1 p-2 rounded-md border border-gray-300 bg-white"
              disabled
            />
          </label>

          <label className="block font-semibold mt-4">
            Mobile no:
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="block w-full mt-1 p-2 rounded-md border border-gray-300 bg-white"
            />
          </label>

          <label className="block font-semibold mt-4">
            Password:
            <input
              type="text"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="block w-full mt-1 p-2 rounded-md border border-gray-300 bg-white"
            />
          </label>

          <button
            type="submit"
            className="mt-6 w-full bg-orange-400 text-white font-semibold py-2 rounded-md hover:bg-orange-500 transition"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrgProfilePage;
