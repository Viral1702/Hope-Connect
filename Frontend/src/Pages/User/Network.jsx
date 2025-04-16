import React, { useEffect, useState } from "react";
import axios from "axios";

const Network = () => {
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    const fetchOrganizations = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:3000/api/organization/all",
          {
            headers: {
              Authorization: token,
            },
          }
        );

        setOrganizations(res.data); // assuming the API returns an array
      } catch (error) {
        console.error("Error fetching organizations:", error.message);
      }
    };

    fetchOrganizations();
  }, []);

  return (
    <div className="bg-orange-100 min-h-screen p-8">
      {/* Header Section */}
      <div className="flex items-center justify-between p-10 bg-orange-200 mb-20 rounded-2xl">
        <div className="w-202">
          <img
            src="/Network/Main.png"
            alt="Logo"
            className="mx-auto w-150 h-100 mb-4"
          />
        </div>
        <div className="flex flex-col items-center mr-60">
          <p className="text-lg font-semibold">Alone we can do so little</p>
          <p className="text-lg font-semibold ml-20">
            Together we can do so much.
          </p>
        </div>
      </div>

      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {organizations.map((org) => (
          <div
            key={org._id}
            className="bg-orange-200 p-6 rounded-xl shadow-md text-center"
          >
            <div className="mx-auto flex items-center justify-center mb-6">
              <img src="/Network/NGO.png" alt="NGO" className="w-50 h-50" />
            </div>
            <h2 className="text-lg font-semibold mb-2">{org.name}</h2>
            <p className="text-sm mb-4">
              {org.categoryId?.name || "No category assigned"}
            </p>
            <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Network;
