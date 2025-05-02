import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import image from "../assets/images/Login.png"; // image path

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here (e.g., fetch from backend)
    console.log("Login with", email, password);
    navigate("/"); // Redirect to homepage after login
  };

  return (
    <Container fluid style={{ height: "100vh", padding: "0" }}>
      <Row className="g-0" style={{ height: "100%" }}>
        {/* Left Section - Image */}
        <Col
          md={6}
          style={{
            position: "relative", // Allows absolute positioning inside
            backgroundImage: `url(${image})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundColor: "#fff",
            height: "100%",
          }}
        >
          {/* Centered Text on Image */}
          <div
            style={{
              position: "absolute",
              top: "55%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#BE58CF",
              fontSize: "2rem",
              fontWeight: "bold",
              textAlign: "center",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              padding: "10px 20px",
              borderRadius: "10px",
            }}
          >
            Truth Awaits
          </div>
        </Col>

        {/* Right Section - Form */}
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "#f7f7f7" }}
        >
          <div style={{ width: "80%", maxWidth: "400px" }}>
            <h3 className="mb-4 text-center" style={{ color: "#BE58CF" }}>
              Welcome Back
            </h3>
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="loginEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="loginPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button
                type="submit"
                className="w-100"
                style={{ background: "#BE58CF", border: "none" }}
              >
                Login
              </Button>
            </Form>
            <p className="mt-3 text-center">
              Forgot your password?{" "}
              <Link to="/forgot-password" style={{ color: "#BE58CF" }}>
                Reset here
              </Link>
            </p>
            <p className="text-center">
              Don’t have an account?{" "}
              <Link to="/signup" style={{ color: "#BE58CF" }}>
                Sign up
              </Link>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;