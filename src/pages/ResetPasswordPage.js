import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import image from "../assets/images/Login.png"; // Use same image as Login

const ResetPasswordPage = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Add password reset logic here (e.g., call to backend)
    console.log("Resetting password to:", newPassword);
    navigate("/login"); // Redirect to login after reset
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
          {/* Centered Text */}
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
            Reset Password
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
              Reset Your Password
            </h3>
            <Form onSubmit={handleReset}>
              <Form.Group className="mb-3" controlId="newPassword">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter new password"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm new password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Form.Group>

              <Button
                type="submit"
                className="w-100"
                style={{ background: "#BE58CF", border: "none" }}
              >
                Reset Password
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ResetPasswordPage;