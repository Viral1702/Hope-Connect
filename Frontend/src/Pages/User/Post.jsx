import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

function Post() {
  const [userName, setUserName] = useState("");
  const [organizations, setOrganizations] = useState([]);
  const [selectedOrg, setSelectedOrg] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState({ x: "", y: "" });

  useEffect(() => {
    // Fetch user and organizations
    axios
      .get("http://localhost:3000/api//post-data", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        const { name, organizations } = res.data;
        setUserName(name);
        setOrganizations(organizations);
      })
      .catch((err) => {
        toast.error("Error loading user info");
        console.error(err);
      });

    // Get user location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          x: position.coords.latitude,
          y: position.coords.longitude,
        });
      },
      (err) => {
        toast.error("Failed to get location");
        console.error(err);
      }
    );
  }, []);

  const handleSubmit = async () => {
    if (!image || !message || !selectedOrg) {
      toast.error("Please fill all fields");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("message", message);
    formData.append(
      "location",
      `https://www.google.com/maps?q=${location.x},${location.y}`
    );
    formData.append("category", selectedOrg);

    try {
      const res = await axios.post("http://localhost:3000/api/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("token"),
        },
      });

      toast.success(res.data.message || "Post uploaded successfully!");
      setMessage("");
      setImage(null);
      setSelectedOrg("");
    } catch (error) {
      toast.error("Failed to upload post");
      console.error(error);
    }
  };

  return (
    <div className="bg-[#F7E8D5] min-h-screen p-4 sm:p-8 font-sans">
      <div className="mx-auto mt-8 sm:mt-20 max-w-md sm:max-w-lg">
        <div className="bg-[#FFC586] p-2 rounded mb-2">
          {userName || "Loading..."}
        </div>

        <textarea
          placeholder="Share your thoughts ....................."
          className="w-full bg-white p-2 rounded border-none outline-none resize-none mb-2"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <div className="flex flex-col sm:flex-row items-center justify-between bg-[#FFC586] rounded">
          <div className="flex flex-col sm:flex-row items-center mb-2 sm:mb-0">
            <label className="text-sm p-2 rounded mr-0 sm:mr-2 cursor-pointer mb-2 sm:mb-0 w-full sm:w-auto">
              Upload Photo
              <input
                type="file"
                className="hidden"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </label>

            <select
              className="text-sm p-2 rounded mr-0 sm:mr-2 cursor-pointer w-full sm:w-auto"
              value={selectedOrg}
              onChange={(e) => setSelectedOrg(e.target.value)}
            >
              <option value="">Select Organization</option>
              {Array.isArray(organizations) && organizations.length > 0 ? (
                organizations.map((org, i) => (
                  <option key={i} value={org}>
                    {org}
                  </option>
                ))
              ) : (
                <option disabled>Loading organizations...</option>
              )}
            </select>
          </div>

          <button
            onClick={handleSubmit}
            className="text-black text-sm p-2 rounded"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;