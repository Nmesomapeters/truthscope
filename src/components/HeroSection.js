import React from "react";
import heroImage from "../assets/images/home_page_hero_pic.png"; // image file name

const HeroSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${heroImage})`,
        height: "822px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        position: "relative",
        padding: "20px",
      }}
    >
      {/* Main Hero Text in the Center */}
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          backgroundColor: "rgba(0, 0, 0, 0)", // Semi-transparent background
          padding: "10px 20px",
          borderRadius: "8px",
          bottom:"5px"
        }}
      >
        Uncover the Truth with AI-Powered Detection
      </h1>

      {/* Caption Positioned at Bottom-Right */}
      <p
        style={{
          position: "absolute",
          bottom: "10px",
          right: "20px",
          fontSize: "1rem",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
          padding: "8px 15px",
          borderRadius: "5px",
          marginTop:"30px"
        }}
      >
        Explore how AI can detect and expose fake news & disinformation.
      </p>
    </div>
  );
};

export default HeroSection;
