import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#F5C28E] shadow-md border-b w-full sticky top-0 left-0 z-50">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/">
          <img
            src="/guest/Navlogo.png" // Corrected path for images inside `public/`
            alt="Logo"
            className="h-12"
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <button 
          className="text-white px-4 py-2 rounded bg-blue-500 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-white border-t p-4">
          <Link to="/login" className="block py-2">Login</Link>
          <Link to="/register" className="block py-2">Register</Link>
        </div>
      )}
    </div>
  );
}
