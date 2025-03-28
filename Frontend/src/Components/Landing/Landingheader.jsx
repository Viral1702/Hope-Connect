import { useState } from "react";
import { Link } from "react-router-dom";

export default function Landingheader() {
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
          {isOpen ? "X" : <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex flex-col lg:flex-row lg:items-center absolute lg:static top-16 left-0 w-full lg:w-auto bg-[#F5C28E] lg:bg-transparent shadow-lg lg:shadow-none p-4 lg:p-0`}
        >
          <Link to="/" className="block px-4 py-2 text-black font-semibold hover:text-[#ff6a00]">
            Home
          </Link>
          <Link to="/aboutus" className="block px-4 py-2 text-black font-semibold hover:text-[#ff6a00]">
            About Us
          </Link>
          <Link to="/contactus" className="block px-4 py-2 text-black font-semibold hover:text-[#ff6a00]">
            Contact Us
          </Link>
          <Link to="/auth/login" className="block lg:ml-4 px-4 py-2 mt-2 lg:mt-0 bg-[#E38B29] text-black font-semibold text-center rounded-lg hover:bg-[#d47a22]">
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
}
