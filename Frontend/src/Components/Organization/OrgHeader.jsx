import { Link, useLocation, useNavigate } from "react-router-dom";
import { useOrgContext } from "../../Context/OrganizationContext";

const OrgHeader = () => {
  const { post } = useOrgContext();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const isProfilePage = location.pathname === "/organization/profile";

  return (
    <nav className="bg-[#F5C28E] shadow-md border-b w-full sticky top-0 left-0 flex items-center justify-between p-4">
      <Link to="/">
        <img
          className="h-12"
          src="../../../public/guest/Navlogo.png"
          alt="Logo"
        />
      </Link>

      <div className="flex items-center gap-6">
        <Link to="/organization">All Post</Link>
        <Link to="/organization">Total Post ({post.length || 0})</Link>

        {isProfilePage ? (
          <button
            onClick={handleLogout}
            className="text-red-600 underline hover:text-red-800 transition"
          >
            Logout
          </button>
        ) : (
          <Link to="/organization/profile">
            <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <svg
                className="absolute w-12 h-12 text-gray-400 -left-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default OrgHeader;
