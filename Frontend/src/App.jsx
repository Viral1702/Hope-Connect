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

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        // User Routes
        <Route path="/" element={<LandingOutlet />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Route>
     
        <Route path="/login" element={<LoginOutlet />}>
          <Route index element={<Loginpage />} /> {/* Default page inside /login */}
        </Route>
        
        <Route path="/user" element={<UserOutlet />}>
        
        </Route>
        <Route path="/user" element={<UserOutlet />}></Route>
        // Organization Routes
        <Route path="/organization" element={<OrganizationOutlet />}>
          <Route path="" element={<OrgHomepage />} />
        </Route>
        // Auth Routes
        <Route path="/auth">
          <Route path="login" element={<Loginpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
