import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="w-full bg-cover bg-center flex justify-center items-center p-6"
      style={{ backgroundImage: "url('../../../public/Footer/footerImage.png')" }}
    >
      <div className="w-full h-48 flex flex-col md:flex-row justify-between items-center p-6 bg-[#F5C28E]/90 rounded-lg shadow-md">
        {/* Left Section - Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src="../../../public/guest/Navlogo.png"
              alt="Logo"
              className="h-16"
            />
          </Link>
        </div>
        
        {/* Middle Section - Description */}
        <div className="text-center md:text-left md:ml-6">
          <h2 className="text-xl font-bold text-black">Hope Connect</h2>
          <p className="text-black text-sm mt-2">
            Helps report and track homeless children and beggars, <br />
            aiding their rescue through photos, location detection, <br />
            and welfare collaboration.
          </p>
        </div>
        
        {/* Right Section - Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios-filled/50/000000/instagram.png" alt="Instagram" />
          </a>
          <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios-filled/50/000000/whatsapp.png" alt="WhatsApp" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios-filled/50/000000/youtube.png" alt="YouTube" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png" alt="Facebook" />
          </a>
        </div>
      </div>
    </footer>
  );
}
