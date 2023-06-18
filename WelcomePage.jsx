import React from "react";
import "./Welcome.css"; // Import the CSS file for styling
import { Button } from "@mui/material";

const WelcomePage = () => {
  return (
    <div className="container">
      <h1 style={{ fontSize : "30px"}}>Flight Reservation System</h1>
      <br></br>
      <h2 style={{ fontSize : "20px"}}>Travel with Enjoy....</h2>
      <Button className="btn" href="/Table">
        Get Started
    
      </Button>
      
    </div>
  );
};

export default WelcomePage;