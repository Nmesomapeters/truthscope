
import React from "react";
import internationalnews from "../assets/images/international news.png";
import sportnews from "../assets/images/sport news pic.png";
import entertainmentnews from "../assets/images/entertainment news pic.png";

const RelatedNews = () => {
  return (
    <section style={{ textAlign: "center", padding: "50px", background: "#E4E2E4" }}>
      <h2 style={{fontWeight:"bold",}}>Explore Related News</h2>
      <p style={{marginBottom:"40px",}}>Stay Informed with verified news from credible sources</p>


      <div style={{ display: "flex", justifyContent: "center", gap: "100px" }}>
  {[internationalnews, sportnews, entertainmentnews].map((news, index) => (
    <div key={index} style={{ width: "20%", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <img src={news} alt={`News ${index + 1}`} style={{ width: "100%", borderRadius: "8px" }} />
      
      {/* Text Wrapper */}
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <p style={{ fontSize: "16px",  margin: "0" }}>
          {index === 0 ? "International News" : index === 1 ? "Sports News" : "Entertainment News"}
        </p>
      </div>
    </div>
  ))}
</div>
      
    </section>
  );
};

export default RelatedNews;