import React, { useState } from "react";
import { Navbar as BootstrapNavbar, Nav, Button, Container, Dropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo/TRUTHSCOPE3.svg";

const Navbar = () => {
  const location = useLocation(); // Get the current URL path
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track user login status (set to false initially)

  const handleLogout = () => {
    // logout logic here (e.g., clearing session, redirecting to home, etc.)
    setIsLoggedIn(false); // Simulate logging out
  };

  return (
    <BootstrapNavbar expand="lg" style={{ background: "#800080", padding: "10px 20px" }}>
      <Container>
        {/* Left Section - Logo & Brand Name */}
        <BootstrapNavbar.Brand
          as={Link}
          to="/"
          className="d-flex align-items-center"
          style={{ color: "white", fontSize: "1.5rem", fontWeight: "bold", textDecoration: "none" }}
        >
          <img src={logo} alt="TruthScope" style={{ height: "40px", marginRight: "10px" }} />
          <span>TruthScope®</span>
        </BootstrapNavbar.Brand>

        {/* Middle Section - Navigation Links */}
        <Nav className="mx-auto">
          {[
            { name: "Home", path: "/" },
            { name: "Interactive Detection", path: "/interactive" },
            { name: "Education", path: "/education" },
            { name: "About Us", path: "/about-us" },
            { name: "Contact Us", path: "/contact-us" },
            { name: "Learn More", path: "/learn-more" }
            
          ].map((item) => (
            <Nav.Link
              as={Link}
              to={item.path}
              key={item.name}
              style={{
                color: location.pathname === item.path ? "#2f4f4f" : "white",
                fontWeight: location.pathname === item.path ? "bold" : "normal",
                margin: "0 2px",
                textDecoration: "none",
                borderBottom: location.pathname === item.path ? "3px solid #2f4f4f" : "none",
                paddingBottom: "5px"
              }}
            >
              {item.name}
            </Nav.Link>
          ))}
        </Nav>

        {/* Right Section - Profile Icon or Login/Sign Up */}
        <div className="d-flex" style={{ marginLeft: "auto" }}>
          {isLoggedIn ? (
            <Dropdown>
              <Dropdown.Toggle variant="link" id="profile-dropdown" style={{ background: "transparent", border: "none" }}>
                <img src="profile-icon.png" alt="Profile" className="profile-icon" style={{ width: "35px", height: "35px", borderRadius: "50%" }} />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                <Dropdown.Item href="/settings">Settings</Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button
                  variant="outline-light"
                  style={{
                    width: "110px",
                    height: "38px",
                    borderRadius: "50px",
                    fontWeight: "bold",
                    marginRight: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  Login
                </Button>
              </Link>

              <Link to="/signup" style={{ textDecoration: "none" }}>
              <Button
                  variant="outline-light"
                  style={{
                    width: "110px",
                    height: "38px",
                    borderRadius: "50px",
                    fontWeight: "bold",
                    marginRight: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  Sign Up
                </Button>
              </Link>

            </>
          )}
        </div>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;