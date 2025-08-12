import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SettingsPage = ({ darkMode, setDarkMode }) => {
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/logout");
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();

    const oldPassword = e.target.oldPassword.value;
    const newPassword = e.target.newPassword.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/change-password/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify({
          old_password: oldPassword,
          new_password1: newPassword,
          new_password2: confirmPassword,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.detail || "Password change failed");
      }

      alert(result.detail);
      setIsPasswordChanged(true);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={`settings-page ${darkMode ? "dark" : "light"}`}>
      <div className="settings-container">
        <h2 className="settings-title">Account Settings</h2>
        
        {/* Theme toggle */}
        <div className="theme-toggle">
          <label htmlFor="darkModeSwitch" className="toggle-label">
            Theme:
          </label>
          <label className="switch">
            <input
              type="checkbox"
              id="darkModeSwitch"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <span className="slider"></span>
          </label>
          <span className="mode-text">{darkMode ? "Dark Mode" : "Light Mode"}</span>
        </div>

        {/* Change Password Form */}
        <form onSubmit={handleChangePassword} className="password-form">
          <div className="form-group">
            <label>Old Password</label>
            <input type="password" name="oldPassword" required />
          </div>

          <div className="form-group">
            <label>New Password</label>
            <input type="password" name="newPassword" required />
          </div>

          <div className="form-group">
            <label>Confirm New Password</label>
            <input type="password" name="confirmPassword" required />
          </div>

          <button type="submit" className="submit-btn">Change Password</button>
          {isPasswordChanged && <p className="success-msg">Password changed successfully!</p>}
        </form>

        {/* Logout Button */}
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
      
      {/* Add some styling for the page */}
      <style jsx>{`
        .settings-page {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 30px;
          min-height: 100vh;
          background-color: var(--bg-color);
          color: var(--text-color);
          transition: all 0.3s ease;
        }

        .settings-container {
          background-color: #fff;
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 600px;
        }

        .dark-mode .settings-container {
          background-color: #333;
          color: #fff;
        }

        .settings-title {
          text-align: center;
          margin-bottom: 30px;
          color: #6200ea;
        }

        .theme-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .toggle-label {
          margin-right: 10px;
        }

        .switch {
          position: relative;
          display: inline-block;
          width: 50px;
          height: 24px;
          margin-right: 10px;
        }

        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          transition: 0.4s;
          border-radius: 24px;
        }

        .slider:before {
          position: absolute;
          content: "";
          height: 18px;
          width: 18px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          transition: 0.4s;
          border-radius: 50%;
        }

        input:checked + .slider {
          background-color: #6200ea;
        }

        input:checked + .slider:before {
          transform: translateX(26px);
        }

        .mode-text {
          font-size: 14px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 5px;
        }

        .form-group input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        .dark-mode .form-group input {
          background-color: #444;
          color: #fff;
          border: 1px solid #555;
        }

        .submit-btn {
          background-color: #6200ea;
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          width: 100%;
        }

        .logout-btn {
          margin-top: 20px;
          background-color: #b00020;
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          width: 100%;
        }

        .success-msg {
          margin-top: 10px;
          color: green;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default SettingsPage;
