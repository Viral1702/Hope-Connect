import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Landing/Homepage";
import LandingOutlet from "./Outlets/LandingOutlet";
import UserOutlet from "./Outlets/UserOutlet";
import OrganizationOutlet from "./Outlets/OrganizationOutlet";
import Loginpage from "./Pages/Auth/Loginpage";
import AboutUs from "./Pages/Landing/AboutUs";
import LoginOutlet from "./Outlets/LoginOutlet";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        // User Routes
        <Route path="/" element={<LandingOutlet />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutus" element={<AboutUs/>}/>
        </Route>
     
        <Route path="/login" element={<LoginOutlet />}>
          <Route index element={<Loginpage />} /> {/* Default page inside /login */}
         
         

        </Route>
        
        <Route path="/user" element={<UserOutlet />}>
          
          

        </Route>
        // Organization Routes
        <Route path="/organization" element={<OrganizationOutlet />}>
          <Route path="login" element={<Loginpage />} />
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
