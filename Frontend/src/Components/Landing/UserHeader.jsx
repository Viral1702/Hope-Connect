import { useState } from "react";
import { Link } from "react-router-dom";

export default function UserHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#F5C28E] shadow-md border-b w-full sticky top-0 left-0 z-50">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/">
          <img
            src="../../../public/guest/Navlogo.png"
            alt="Logo"
            className="h-12"
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            "X"
          ) : (
            <span className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </span>
          )}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex flex-col lg:flex-row lg:items-center absolute lg:static top-16 left-0 w-full lg:w-auto bg-[#F5C28E] lg:bg-transparent shadow-lg lg:shadow-none p-4 lg:p-0`}
        >
          <Link
            to="/user/allpost"
            className="block px-4 py-2 text-black font-semibold hover:text-[#ff6a00]"
          >
            All Post
          </Link>
          <Link
            to="/user/network"
            className="block px-4 py-2 text-black font-semibold hover:text-[#ff6a00]"
          >
            Network
          </Link>
          <Link
            to="/user/post"
            className="block px-4 py-2 text-black font-semibold hover:text-[#ff6a00]"
          >
            Post
          </Link>

          {/* User Icon (beside Notification) */}
          <Link to="/user/profile" className="block px-4 py-2">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/user.png" // User icon
              alt="User Icon"
              className="w-6 h-6 rounded-full"
            />
          </Link>
        </div>
      </nav>
    </div>
  );
}
