// Default imports
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//ProtectedRoute
import ProtectedRoute from "./Components/Common/ProtectedRoute";

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
import OrgProfilePage from "./Pages/Organization/OrgProfilePage";

import { Toaster } from "react-hot-toast";
import VerifyOtpPage from "./Pages/Auth/VerifyOTPPage";
import OrganizationPage from "./Pages/Auth/OrganizationPage";
const App = () => {
  return (
    <>
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

            <Route
              path="/user/*"
              element={
                <ProtectedRoute>
                  <UserOutlet /> {/* Wrapping the user routes with layout */}
                </ProtectedRoute>
              }
            >
              <Route path="allpost" element={<AllPost />} />
              <Route path="post" element={<Post />} />
              <Route path="network" element={<Network />} />
              <Route path="profile" element={<Profile />} />
            </Route>

            <Route
              path="/organization/*"
              element={
                <ProtectedRoute>
                  <OrganizationOutlet />{" "}
                </ProtectedRoute>
              }
            >
              <Route path="" element={<OrgHomepage />} />
              <Route path="profile" element={<OrgProfilePage />} />
              <Route path=":id" element={<OrgSinglePostPage />} />
            </Route>

            {/* Auth Routes */}
            <Route path="/auth" element={<LoginOutlet />}>
              <Route path="login" element={<Loginpage />} />
              <Route path="register" element={<Registerpage />} />
              <Route
                path="create-organization"
                element={<OrganizationPage />}
              />
              <Route path="verify-otp" element={<VerifyOtpPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </OrgProvider>

      <Toaster />
    </>
  );
};

export default App;
