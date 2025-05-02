import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo/TRUTHSCOPE3.svg";
import twitterIcon from "../assets/logo/twitter.svg";
import linkedinIcon from "../assets/logo/linkedin.svg";
import githubIcon from "../assets/logo/git.svg";
import behanceIcon from "../assets/logo/Behance.svg";

const Footer = () => {
  return (
    <footer style={{ background: "#16001f", color: "#fff", padding: "50px 0 30px", fontSize: "15px" }}>
      <Container>
        <Row className="gy-5">
          {/* Logo & About */}
          <Col lg={4} md={6}>
            <div className="d-flex align-items-center mb-3">
              <img src={logo} alt="TruthScope" style={{ height: "45px", marginRight: "15px" }} />
              <h5 className="m-0" style={{ fontWeight: "bold" }}>TRUTHSCOPE</h5>
            </div>
            <p style={{ textAlign: "justify", lineHeight: "1.7", marginBottom: "20px" }}>
              TruthScope is a web-based platform focused on raising awareness about AI-generated disinformation.
              Our tools and resources help you identify and understand how fake content is created and spread.
            </p>
            <p><strong>📍 Location:</strong> KNUST, Kumasi, Ghana</p>
            <p><strong>📞 Contact:</strong> +233543436781 | +2338052497421</p>
            <p><strong>📧 Email:</strong> truthscope9support@gmail.com</p>
          </Col>

          {/* Navigation Links */}
          <Col lg={5} md={6}>
            <Row>
              <Col xs={6} md={6}>
                <h5 className="mb-3">Navigation</h5>
                <ul className="list-unstyled">
                  <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
                  <li><Link to="/about-us" className="text-white text-decoration-none">About Us</Link></li>
                  <li><Link to="/contact-us" className="text-white text-decoration-none">Contact Us</Link></li>
                  <li><Link to="/interactive" className="text-white text-decoration-none">Interactive Detection</Link></li>
                  <li><Link to="/education" className="text-white text-decoration-none">Education</Link></li>
                  <li><Link to="/terms-conditions" className="text-white text-decoration-none">Terms and Conditions</Link></li>
                  <li><Link to="/privacy-policy" className="text-white text-decoration-none">Privacy Policy</Link></li>
                </ul>
              </Col>
              <Col xs={6} md={6}>
                <h5 className="mb-3">Services</h5>
                <ul className="list-unstyled">
                  <li>Text Analysis</li>
                  <li>Image Analysis</li>
                  <li>Video Analysis</li>
                  <li>Awareness Modules</li>
                </ul>
              </Col>
            </Row>
          </Col>

          {/* Newsletter & Social Media */}
          <Col lg={3} md={12}>
            <h5 className="mb-3">Subscribe to Our Newsletter</h5>
            <Form className="mb-4">
              <div className="d-flex align-items-center bg-white rounded-pill px-3 py-2">
                <Form.Control
                  type="email"
                  placeholder="Your email"
                  className="border-0 me-2"
                  style={{ fontSize: "14px", outline: "none" }}
                />
                <Button
                  style={{
                    backgroundColor: "#BE58CF",
                    border: "none",
                    borderRadius: "50px",
                    padding: "8px 20px",
                    fontWeight: "bold",
                  }}
                >
                  Subscribe
                </Button>
              </div>
            </Form>

            <h5 className="mb-3">Follow Us</h5>
            <div className="d-flex">
              <Link to="#"><img src={twitterIcon} alt="Twitter" className="me-3" style={{ width: "24px" }} /></Link>
              <Link to="#"><img src={linkedinIcon} alt="LinkedIn" className="me-3" style={{ width: "24px" }} /></Link>
              <Link to="#"><img src={githubIcon} alt="GitHub" className="me-3" style={{ width: "24px" }} /></Link>
              <Link to="#"><img src={behanceIcon} alt="Behance" style={{ width: "24px" }} /></Link>
            </div>
          </Col>
        </Row>

        <hr style={{ borderColor: "#fff", margin: "40px 0 20px" }} />

        <div className="text-center">
          <p className="m-0">
            &copy; 2025 <span style={{ color: "#BE58CF", fontWeight: "bold" }}>TRUTHSCOPE</span> — All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
