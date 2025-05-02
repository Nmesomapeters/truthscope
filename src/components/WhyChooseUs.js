import React from "react";

const WhyChooseUs = () => {
  return (
    <section style={{ textAlign: "center", padding: "50px", background: "#FCEBFF" }}>
      <h2 style={{fontWeight:"bold", marginBottom:"40px",}}>Why Detection Matters</h2>
      <p>In today’s digital landscape, the spread of misinformation has become a significant concern. Social media platforms, serving as primary information sources,
         often facilitate the rapid dissemination of false narratives. A recent survey revealed that 48% of individuals across 27 countries have been misled by fake news, 
         believing false stories to be true until discovering otherwise. </p>
      <p>The consequences of falling victim to misinformation are profound, leading to misguided beliefs, public health risks, and societal divisions. For instance, during the 
      COVID-19 pandemic, misinformation perpetuated beliefs that led to vaccine avoidance and mask refusal, ultimately contributing to increased morbidity.</p>
      <p>Prominent figures have also raised their voices against the spread of fake news. Former President Barack Obama emphasized the importance of a unified society, 
stating:
       <br/>
 <i>“It’s that fundamental belief that I am my brother’s keeper, I am my sister’s keeper, that makes this country work. It’s what allows us to pursue our individual dreams, yet still come together as a single American family.”</i></p>
      <p>This underscores the need for reliable tools and resources to navigate the complex information landscape we face daily.

By adopting the mindset of fact-checkers and equipping ourselves with the knowledge to question, verify, and detect fake news, we can contribute to a more informed and resilient society.</p>

      <div style={{ display: "flex", justifyContent: "center", gap: "40px", marginTop:"70px"}}>
        {[{ title: "48%", desc: " of individuals across 27 countries have been misled by fake news." },
          { title: "64%", desc: "of U.S. adults say “fake news” causes confusion on basic facts. " },
          { title: "23%", desc: "of U.S. adults admit to sharing false news, knowingly or unknowingly. " }].map((stat, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <h3 style={{ fontSize: "2rem", color: "#800080" }}>{stat.title}</h3>
            <p>{stat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;