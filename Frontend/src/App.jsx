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
import Registerpage from "./Pages/Auth/Registerpage";
import AboutUs from "./Pages/Landing/AboutUs";
import LoginOutlet from "./Outlets/LoginOutlet";
import OrgHomepage from "./Pages/Organization/OrgHomepage";
import ContactUs from "./Pages/Landing/ContactUs";
import { OrgProvider } from "./Context/OrganizationContext";
import OrgSinglePostPage from "./Pages/Organization/OrgSinglePostPage";

// Users Pages
import AllPost from "./Pages/User/AllPost";
import Network from "./Pages/User/Network";
import Post from "./Pages/User/Post";
import Profile from "./Pages/User/Profile";

const App = () => {
  return (
    <OrgProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingOutlet />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Route>

          <Route path="/login" element={<LoginOutlet />}>
            <Route index element={<Loginpage />} />{" "}
            {/* Default page inside /login */}
          </Route>

          <Route path="/user" element={<UserOutlet />}>
            <Route path="allpost" element={<AllPost />} />
            <Route path="post" element={<Post />} />
            <Route path="network" element={<Network />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          <Route path="/organization" element={<OrganizationOutlet />}>
            <Route path="" element={<OrgHomepage />} />
            <Route path=":id" element={<OrgSinglePostPage />} />
          </Route>

          {/* Auth Routes */}
          <Route path="/auth" element={<LoginOutlet />}>
            <Route path="login" element={<Loginpage />} />
            <Route path="register" element={<Registerpage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </OrgProvider>
  );
};

export default App;
