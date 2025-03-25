import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Landing/Homepage";
import LandingOutlet from "./Outlets/LandingOutlet";
import Loginpage from "./Pages/Auth/Loginpage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        // User Routes
        <Route path="/" element={<LandingOutlet />}>
          <Route path="/" element={<Homepage />} />
        </Route>
        // Auth Routes
        <Route path="/auth">
          <Route path="login" element={<Loginpage />} />
        </Route>
        // Organization Routes
        <Route path="/organization">
          <Route path="login" element={<Loginpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
