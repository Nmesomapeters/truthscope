import React from "react";
import textAnalysis from "../assets/images/homepage Text Analysis pic.png";
import imageAnalysis from "../assets/images/Homepage Image analysis.png";
import videoAnalysis from "../assets/images/homepage video pic.png";
import { Link } from "react-router-dom";

const AnalysisSection = () => {
  return (
    <section style={{ padding: "50px", textAlign: "center", }}>
      <h2 style={{ fontWeight: "bold", }}>Features Overview</h2>
      <p style={{ marginBottom: "80px", }}>
        Explore our advanced technology designed to detect misinformation across text, images, and videos.
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "100px" }}>
        {[
          { img: textAnalysis, title: "Text Analysis", caption: "Analyze textual content for misinformation" },
          { img: imageAnalysis, title: "Image Analysis", caption: "Detect fake or manipulated images" },
          { img: videoAnalysis, title: "Video Analysis", caption: "Identify deepfakes and misinformation in videos" }
        ].map((feature, index) => (
          <div key={index} style={{ width: "300px", textAlign: "center" }}>

            {/* Title Above Image */}
            <h3 style={{ fontSize: "20px", color: "black", marginBottom: "20px" }}>
              {feature.title}
            </h3>

            {/* Image */}
            <img src={feature.img} alt={feature.title} style={{ width: "100%", borderRadius: "8px" }} />

            {/* Caption Below Image */}
            <p style={{ marginTop: "15px", fontSize: "14px", color: "#333" }}>{feature.caption}</p>

            {/* Buttons */}
            <div style={{ marginTop: "40px" }}>
              <Link to="/interactive">
                <button style={{
                  width: "125px", height: "41px", borderRadius: "50px", background: "#BE58CF",
                  color: "white", fontSize: "14px", border: "none", marginRight: "10px", cursor: "pointer"
                }}>
                  Try
                </button>
              </Link>

              <Link to="/learn-more">
                <button style={{
                  width: "125px", height: "41px", borderRadius: "50px", background: "white",
                  border: "2px solid #BE58CF", color: "black", fontSize: "14px", cursor: "pointer",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)"
                }}>
                  Learn More
                </button>
              </Link>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default AnalysisSection;
