import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import image from "../assets/images/Login.png"; // Reuse the same image

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // Add password reset logic here (e.g., send reset email)
    console.log("Reset link sent to:", email);
    alert("If this email exists, a reset link has been sent.");
  };

  return (
    <Container fluid style={{ height: "100vh", padding: "0" }}>
      <Row className="g-0" style={{ height: "100%" }}>
        {/* Left Section - Image */}
        <Col
          md={6}
          style={{
            position: "relative",
            backgroundImage: `url(${image})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundColor: "#fff",
            height: "100%",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "55%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#BE58CF",
              fontSize: "1.5rem",
              fontWeight: "bold",
              textAlign: "center",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              padding: "10px 20px",
              borderRadius: "10px",
            }}
          >
            Password Troubles? <br/> We’ve Got You Covered!
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
              Forgot Password
            </h3>
            <Form onSubmit={handleForgotPassword}>
              <Form.Group className="mb-4" controlId="forgotEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Button
                type="submit"
                className="w-100"
                style={{ background: "#BE58CF", border: "none" }}
              >
                Send Reset Link
              </Button>
            </Form>
            <p className="mt-3 text-center">
              Remember your password?{" "}
              <Link to="/login" style={{ color: "#BE58CF" }}>
                Log in
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

export default ForgotPasswordPage;