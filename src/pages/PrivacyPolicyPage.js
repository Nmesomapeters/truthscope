import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Footer from "../components/Footer";
import privacyImage from "../assets/images/privacy.png"; // Make sure you have this image

const PrivacyPolicyPage = () => {
    return (
        <>
            {/* Hero Section */}
            <div style={{ position: "relative" }}>
                <img
                    src={privacyImage}
                    alt="Privacy Policy"
                    style={{
                        width: "100%",
                        height: "400px",
                        objectFit: "cover",
                        filter: "brightness(0.5)",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                        color: "white",
                    }}
                >
                    <h1 style={{ fontWeight: "bold", fontSize: "3rem" }}>Privacy Policy</h1>
                    <p style={{ fontSize: "1.2rem" }}>
                        Understand how we protect your personal information
                    </p>
                </div>
            </div>

            <Container fluid style={{ padding: "60px 0", backgroundColor: "#f7f7f7" }}>
                <Row className="text-center mb-5">
                    <Col>
                        <h2 style={{ color: "#BE58CF" }}>Privacy Policy</h2>
                        <p>Welcome to TruthScope! Your privacy is important to us. <br /> This policy explains how we collect, use,
                            and protect your personal information when you use our platform.</p>
                    </Col>
                </Row>

                <Row>
                    <Col md={10} className="mx-auto">
                        <Card>
                            <Card.Body>
                                <div className="mb-5">
                                    <h4 className="mb-3">Introduction</h4>
                                    <p>
                                        At TruthScope, we are committed to safeguarding your privacy. This Privacy Policy
                                        outlines how we collect, use, and protect your information when you interact with our platform.
                                    </p>
                                </div>

                                <div className="mb-5">
                                    <h4 className="mb-3">Information We Collect</h4>
                                    <p>
                                        We may collect personal information such as your name, email address, uploaded content, and
                                        technical data like IP address, device type, and browser.
                                    </p>
                                </div>

                                <div className="mb-5">
                                    <h4 className="mb-3">How We Use Your Information</h4>
                                    <ul>
                                        <li>Provide and improve our services</li>
                                        <li>Analyze usage and performance</li>
                                        <li>Communicate with you regarding updates or feedback</li>
                                        <li>Maintain platform security</li>
                                    </ul>
                                </div>

                                <div className="mb-5">
                                    <h4 className="mb-3">Data Sharing</h4>
                                    <p>
                                        We do not sell or rent your data. We may share it with trusted service providers strictly
                                        for operational purposes and only under confidentiality agreements.
                                    </p>
                                </div>

                                <div className="mb-5">
                                    <h4 className="mb-3">Cookies</h4>
                                    <p>
                                        We use cookies to enhance user experience. You can choose to disable cookies in your browser,
                                        but some features may not function correctly.
                                    </p>
                                </div>

                                <div className="mb-5">
                                    <h4 className="mb-3">Data Security</h4>
                                    <p>
                                        We use industry-standard security measures to protect your personal information from
                                        unauthorized access or disclosure.
                                    </p>
                                </div>

                                <div className="mb-5">
                                    <h4 className="mb-3">User Rights</h4>
                                    <p>
                                        You have the right to access, update, or delete your personal information. Contact us to
                                        exercise these rights.
                                    </p>
                                </div>

                                <div className="mb-5">
                                    <h4 className="mb-3">Changes to This Policy</h4>
                                    <p>
                                        We may update this Privacy Policy periodically. Please review this page regularly for any
                                        changes.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="mb-3">Contact Us</h4>
                                    <p>
                                        For any questions or concerns about your privacy, please reach out to us at:{" "}
                                        <strong>truthscope9support@gmail.com</strong>
                                    </p>
                                </div>
                            </Card.Body>

                        </Card>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </>
    );
};

export default PrivacyPolicyPage;