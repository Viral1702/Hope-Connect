import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });

  const [slides, setSlides] = useState([]);

  const [currentSlide, setCurrentSlide] = useState(0);

  // Fetch user profile on mount
  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;
      try {
        const response = await axios.get(
          "http://localhost:3000/api/user-profile",
          {
            headers: {
              Authorization: token,
            },
          }
        );

        setFormData({
          name: response.data.name,
          email: response.data.email,
          number: response.data.number,
          password: response.data.password,
        });

        if (response.data.posts) {
          setSlides(response.data.posts);
        }
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/api/update-profile",
        formData
      );
      alert("Profile updated successfully!");
      console.log(res.data);
    } catch (error) {
      console.error("Failed to update profile:", error);
      alert("Error updating profile");
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="bg-[#fde9d5] min-h-screen p-5 flex flex-col items-center">
      <div className="bg-[#fcd8b0] p-8 rounded-lg shadow-md w-full max-w-md text-center mb-8">
        <h3 className="text-2xl font-semibold mb-6">User Profile</h3>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center border border-gray-300 rounded-md p-2 mb-4 bg-white">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/user.png"
              alt="User Icon"
              className="w-5 mr-2"
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border-none outline-none text-base"
            />
          </div>
          <div className="flex items-center border border-gray-300 rounded-md p-2 mb-4 bg-white">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/email.png"
              alt="Email Icon"
              className="w-5 mr-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border-none outline-none text-base"
            />
          </div>
          <div className="flex items-center border border-gray-300 rounded-md p-2 mb-4 bg-white">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/phone.png"
              alt="Phone Icon"
              className="w-5 mr-2"
            />
            <input
              type="text"
              name="number"
              placeholder="Mobile No"
              value={formData.number}
              onChange={handleChange}
              required
              className="w-full border-none outline-none text-base"
            />
          </div>
          <div className="flex items-center border border-gray-300 rounded-md p-2 mb-4 bg-white">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/lock.png"
              alt="Lock Icon"
              className="w-5 mr-2"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border-none outline-none text-base"
            />
          </div>
          <button
            type="submit"
            className="bg-[#f5a25d] text-white py-2 px-4 rounded-md w-full mt-2 hover:bg-[#e0894c]"
          >
            Edit Profile
          </button>
        </form>
      </div>
      <section className="mt-8 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4 text-center">Your Posts</h2>
        <div className="relative overflow-hidden flex justify-center items-center">
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#f5a25d] text-white p-2 rounded-full w-10 h-10 z-10 hover:bg-[#e0894c] flex items-center justify-center"
          >
            {"<"}
          </button>
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="min-w-full p-5 bg-[#fcd8b0] rounded-lg shadow-md text-center"
              >
                <img
                  src={`http://localhost:3000/${slide.image}`}
                  alt={`Slide ${index}`}
                  className="w-full max-w-xs mx-auto rounded-lg mb-4"
                />
                <p>{slide.message}</p>
              </div>
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#f5a25d] text-white p-2 rounded-full w-10 h-10 z-10 hover:bg-[#e0894c] flex items-center justify-center"
          >
            {">"}
          </button>
        </div>
        <div className="flex justify-center mt-4">
          {slides.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-2 mx-1 rounded-full cursor-pointer ${
                currentSlide === index ? "bg-[#f5a25d]" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Profile;
