import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AnalysisSection from "./components/AnalysisSection";
import RelatedNews from "./components/RelatedNews";
import Footer from "./components/Footer";
import WhyChooseUs from "./components/WhyChooseUs";
import TechnologySection from "./components/TechnologySection";
import ScrollToTop from "./components/ScrollToTop";

// import login, logout and signup pages
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import SignupPage from "./pages/SignUpPage";
import InteractiveDetectionPage from "./pages/InteractiveDetectionPage";
import EducationPage from './pages/EducationPage';
import LearnMorePage from "./pages/LearnMorePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import ResultAndFeedbackPage from "./pages/ResultAndFeedbackPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage"; 
import ResetPasswordPage from "./pages/ResetPasswordPage";
import QuizPage from "./pages/QuizPage";

import 'aos/dist/aos.css';





function App() {
  return (
    <>
      <Navbar />
      {/* 👇 Scrolls to top on route change */}
      <ScrollToTop />

      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <AnalysisSection />
              <RelatedNews />
              <TechnologySection />
              <WhyChooseUs />
              <Footer />
            </>
          }
        />

        {/* Login Page */}
        <Route path="/login" element={<LoginPage />} />

        {/* Signup Page */}
        <Route path="/signup" element={<SignupPage />} />

        {/* Logout Page */}
        <Route path="/logout" element={<LogoutPage />} />

        {/* Interactive Detection Page */}
        <Route path="/interactive" element={<InteractiveDetectionPage />} /> {/* Updated the route */}

          {/* Education Page */}
        <Route path="/education" element={<EducationPage />} />

        {/* Learn more Page */}
        <Route path="/learn-more" element={<LearnMorePage />} />

        {/* about us Page */}
        <Route path="/about-us" element={<AboutUsPage />} />

        {/* Contact us Page */}
        <Route path="/contact-us" element={<ContactUsPage />} />

        {/* Results and feedback Page */}
        <Route path="/results-feedback" element={<ResultAndFeedbackPage />} />

        {/* Terms and conditions Page */}
        <Route path="/terms-conditions" element={<TermsAndConditionsPage />} />

        {/* Contact us Page */}
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

        {/* forgot password Page */}
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        {/* Reset password Page */}
        <Route path="/reset-password" element={<ResetPasswordPage />} />

        {/* Reset password Page */}
        <Route path="/quiz" element={<QuizPage />} />


      </Routes>
    </>
  );
}

export default App;