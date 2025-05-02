import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import image from "../assets/images/Login.png"; // Reusing Login.png

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Proceed with signup logic (e.g., send to backend)
    console.log("SignUp data:", formData);

    // Clear and redirect to login
    setFormData({ name: "", email: "", password: "", confirmPassword: "" });
    navigate("/login");
  };

  return (
    <Container fluid style={{ height: "100vh", padding: "0" }}>
      <Row style={{ height: "100%" }}>
        {/* Left Section - Image with Centered Text */}
        <Col
          md={6}
          className="position-relative d-flex justify-content-center align-items-center"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundColor: "#ffffff",
            height: "100%",
          }}
        >
          {/* Centered Text on Image */}
          <div
            style={{
              position: "absolute",
              color: "#BE58CF",
              fontSize: "2rem",
              fontWeight: "bold",
              textAlign: "center",
              top: "55%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              padding: "10px 20px",
              borderRadius: "10px",
            }}
          >
            Get Started
          </div>
        </Col>

        {/* Right Section - Form */}
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "#f8f9fa" }}
        >
          <div style={{ width: "80%", maxWidth: "400px" }}>
            <h3 className="mb-4 text-center" style={{ color: "#BE58CF" }}>
              Create Account

            </h3>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSignUp}>
              <Form.Group className="mb-3" controlId="signUpName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Full name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="signupEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="signupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Create password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Re-enter password"
                  required
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                />
              </Form.Group>

              <Button type="submit" className="w-100" style={{ background: "#BE58CF", border: "none" }}>
                Sign Up
              </Button>
            </Form>

            <p className="mt-3 text-center">
              Already have an account?{" "}
              <Link to="/login" style={{ color: "#BE58CF" }}>
                Log in
              </Link>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpPage;