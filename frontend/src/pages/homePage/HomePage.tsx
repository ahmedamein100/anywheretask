import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import "./HomePage.css";

function HomePage() {
  const navigate = useNavigate();
  const handleLoginAsStudent = () => {
    localStorage.setItem("isAuthenticated", "true");
    navigate("/student-dashboard");
  };

  return (
    <div className="homepage-container">
      <h1>Anywhere Task Home Page!</h1>

      <div className="homepage-buttons">
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleLoginAsStudent()}
        >
          LOGIN AS STUDENT
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
