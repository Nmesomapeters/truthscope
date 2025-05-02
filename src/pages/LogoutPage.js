import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear any stored login data (adjust to your app's logic)
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    // Redirect to homepage after logout
    navigate("/");
  }, [navigate]);

  return null; // No UI needed, just redirect
};

export default LogoutPage;
