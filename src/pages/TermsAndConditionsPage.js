import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Footer from "../components/Footer";
import termsImage from "../assets/images/terms.png";
import { Link } from "react-router-dom";

const TermsAndConditionsPage = () => {
    return (
        <>
            {/* Hero Section */}
            <div style={{ position: "relative" }}>
                <img
                    src={termsImage}
                    alt="Terms and Conditions"
                    style={{
                        width: "100%",
                        height: "400px",
                        objectFit: "cover",
                        filter: "brightness(0.4)",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                        color: "#fff",
                    }}
                >
                    <h1 style={{ fontWeight: "800", fontSize: "3.2rem", letterSpacing: "1px" }}>
                        Terms & Conditions
                    </h1>
                    <p style={{ fontSize: "1.25rem", marginTop: "10px" }}>
                        Please read our terms and conditions carefully before using TruthScope
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <Container fluid style={{ padding: "60px 15px", backgroundColor: "#f8f9fc" }}>
                <Row className="text-center mb-5">
                    <Col>
                        <h2 style={{ color: "#BE58CF", fontWeight: "bold" }}>Our Policy</h2>
                        <p style={{ fontSize: "1.1rem", color: "#666" }}>
                            Welcome to TruthScope. These Terms and Conditions outline the rules for using our platform. <br />
                            By accessing or using TruthScope, you agree to these terms.
                        </p>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col md={10} lg={8}>
                        <Card style={{ border: "none", borderRadius: "12px", boxShadow: "0 8px 20px rgba(0,0,0,0.07)" }}>
                            <Card.Body style={{ padding: "40px" }}>

                                <div className="mb-5">
                                    <h4 className="mb-3">Introduction</h4>
                                    <p>
                                        Welcome to TruthScope! These Terms and Conditions govern your use of our website and services. By accessing our platform, you agree to comply with these terms. If you disagree with any part, please refrain from using the site.
                                    </p>
                                </div>

                                <div className="mb-5">
                                    <h4 className="mb-3">Account Creation and Termination</h4>
                                    <p>
                                        Users may be required to register for an account to access certain features. You must provide accurate information and maintain the confidentiality of your login credentials. We reserve the right to suspend or terminate accounts that violate these terms or are deemed abusive or fraudulent.
                                    </p>
                                </div>

                                <div className="mb-5">
                                    <h4 className="mb-3">User-Generated Content</h4>
                                    <p>
                                        Some areas of TruthScope may allow you to submit text, images, or other data. You retain ownership of your content but grant us a non-exclusive, royalty-free license to use, reproduce, and display such content on the platform. We reserve the right to remove or moderate submissions at our discretion.
                                    </p>
                                </div>

                                <div className="mb-5">
                                    <h4 className="mb-3">Usage of the Website</h4>
                                    <p>
                                        TruthScope must be used for lawful, ethical purposes. You may not misuse the service to harm, harass, or deceive others, reverse-engineer platform components, or attempt to disrupt the platform’s functionality.
                                    </p>
                                </div>

                                <div className="mb-5">
                                    <h4 className="mb-3">Prohibited Activities</h4>
                                    <p>
                                        You are strictly prohibited from:
                                    </p>
                                    <ul>
                                        <li>Distributing malicious or false content</li>
                                        <li>Hacking, scraping, or engaging in unauthorized data extraction</li>
                                        <li>Attempting to bypass access controls or security systems</li>
                                        <li>Violating the intellectual property rights of others</li>
                                    </ul>
                                </div>

                                <div className="mb-5">
                                    <h4 className="mb-3">AI Use and Limitations</h4>
                                    <p>
                                        TruthScope utilizes AI models to analyze and identify disinformation. While our tools are built with high accuracy, we do not guarantee 100% correctness in outputs. Users are encouraged to verify results and use them as guidance, not absolute fact.
                                    </p>
                                </div>

                                <div className="mb-5">
                                    <h4 className="mb-3">Intellectual Property</h4>
                                    <p>
                                        All content on this platform—including text, graphics, logos, models, and algorithms—is the property of TruthScope or its licensors and is protected by intellectual property laws. You may not reproduce or redistribute content without prior written permission.
                                    </p>
                                </div>

                                <div className="mb-5">
                                    <h4 className="mb-3">Privacy and Data Collection</h4>
                                    <p>
                                        Please refer to our <Link to="/privacy-policy">Privacy Policy</Link> for information on how we collect, use, and protect your personal data, including use of cookies and tracking technologies.
                                    </p>
                                </div>

                                <div className="mb-5">
                                    <h4 className="mb-3">Third-Party Links and Integrations</h4>
                                    <p>
                                        TruthScope may contain links or integrations to third-party websites or APIs. We are not responsible for the content or practices of external platforms and encourage you to review their respective terms.
                                    </p>
                                </div>

                                <div className="mb-5">
                                    <h4 className="mb-3">Service Availability and Modifications</h4>
                                    <p>
                                        We strive for continuous availability but may experience interruptions due to maintenance, technical issues, or updates. We reserve the right to modify, suspend, or discontinue any part of the platform without notice.
                                    </p>
                                </div>

                                <div className="mb-5">
                                    <h4 className="mb-3">Indemnification</h4>
                                    <p>
                                        You agree to indemnify and hold harmless TruthScope, its affiliates, employees, and partners from any claim, liability, loss, or expense (including legal fees) arising from your use of the platform, your content, or your violation of these terms.
                                    </p>
                                </div>

                                <div className="mb-5">
                                    <h4 className="mb-3">Limitation of Liability</h4>
                                    <p>
                                        TruthScope shall not be liable for any indirect, incidental, or consequential damages arising from your use or inability to use the platform, including reliance on AI results or third-party content.
                                    </p>
                                </div>

                                <div className="mb-5">
                                    <h4 className="mb-3">Changes to the Terms</h4>
                                    <p>
                                        We reserve the right to update these terms at any time. Updated versions will be posted on this page, and continued use of the site after changes indicates acceptance of the revised terms.
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <h4 className="mb-3">Governing Law</h4>
                                    <p>
                                        These Terms and Conditions are governed by the laws of the Republic of Ghana, without regard to its conflict of law principles.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="mb-3">Contact Us</h4>
                                    <p>
                                        For any questions regarding these Terms, please contact us at: <strong>support@truthscope.com</strong>
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



export default TermsAndConditionsPage;
