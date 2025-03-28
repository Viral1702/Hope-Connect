// Default imports
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Outlets
import LandingOutlet from "./Outlets/LandingOutlet";
import UserOutlet from "./Outlets/UserOutlet";
import OrganizationOutlet from "./Outlets/OrganizationOutlet";

// Pages
import Homepage from "./Pages/Landing/Homepage";
import Loginpage from "./Pages/Auth/Loginpage";
import AboutUs from "./Pages/Landing/AboutUs";
import LoginOutlet from "./Outlets/LoginOutlet";
import OrgHomepage from "./Pages/Organization/OrgHomepage";
import RegisterPage from "./Pages/Auth/Registerpage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<LandingOutlet />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Route>
     
        
     
        <Route path="/user" element={<UserOutlet />}></Route>
       
        <Route path="/organization" element={<OrganizationOutlet />}>
          <Route path="" element={<OrgHomepage />} />
        </Route>
      
        {/* Auth Routes */}
<Route path="/auth" element={<LoginOutlet />}>
  <Route path="login" element={<Loginpage />} />
  <Route path="register" element={<RegisterPage/>} />
</Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
