import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const goToAbout = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;
