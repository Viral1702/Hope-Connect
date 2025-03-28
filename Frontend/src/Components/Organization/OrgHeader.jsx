import { Link } from "react-router-dom";

const OrgHeader = () => {
  return (
    <nav className="bg-[#F5C28E] shadow-md border-b w-full sticky top-0 left-0 flex items-center justify-between p-4">
      <Link to="/">
        <img className="h-12" src="../../../public/guest/Navlogo.png" alt="" />
      </Link>
      <Link to="/organization">All Post</Link>
      <Link to="/notifications">Notifications</Link>
      <Link to="/profile">
        <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <svg
            className="absolute w-12 h-12 text-gray-400 -left-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </Link>
    </nav>
  );
};

export default OrgHeader;
