import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AnalysisSection from "../components/AnalysisSection";
import RelatedNews from "../components/RelatedNews";
import TechnologySection from "../components/TechnologySection";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <AnalysisSection />
      <RelatedNews />
      <TechnologySection />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default HomePage;