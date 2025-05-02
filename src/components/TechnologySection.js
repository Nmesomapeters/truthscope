import React from "react";
import techImage from "../assets/images/Technology behind it pic.png";

const TechnologySection = () => {
  return (<section style={{ display: "flex", alignItems: "center", padding: "50px", background: "#ffffff" }}>
    <div style={{ width: "50%", paddingRight: "20px" }}>
      <h2 style={{fontWeight:"bold",}}>Technology Behind It</h2>
      <p>By analyzing social media activity, search engine results, and online communications, 
         advanced computational technologies can help clarify what is considered "true" in 
         the digital landscape. Artificial intelligence also plays a crucial role in this process, 
         automating the categorization and tagging of reliable information while enhancing 
         the efficiency and effectiveness of fact-checking systems.</p>
      <p>These technologies work together to create a comprehensive understanding of the online information ecosystem, aiming to promote accuracy and reduce the prevalence of false information. Some popular data analysis methods include text mining, sentiment analysis, social network analysis, and machine learning techniques. 
      The combination of these methodologies allows for a deeper understanding of the context, content, and potential biases present in the information.</p>
      <p>Termininology: Natural Language Processing (NLP) is a subfield of artificial intelligence that focuses on the interaction between computers and human language. It enables machines to understand, analyze, and generate human language in a way that is meaningful and useful. In the context of fake news detection, NLP techniques are employed to process and analyze textual information, such as news articles, social media posts, and online content, to identify cues and patterns that may indicate the presence of misinformation.</p>

    </div>
    <img src={techImage} alt="Technology Illustration" style={{ width: "60%", borderRadius: "20px", height:"40%", marginLeft:"10px", }} />
  </section>
);
};

export default TechnologySection;