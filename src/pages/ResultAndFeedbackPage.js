import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import Footer from "../components/Footer";
import resultImage from "../assets/images/result.png";

const ResultAndFeedbackPage = () => {
  const [feedback, setFeedback] = useState("");
  const [fileName] = useState("Example_File.png");
  const [analysisResult, setAnalysisResult] = useState("No result available yet.");
  const [analysisBreakdown] = useState({
    indicator1: "Example Indicator 1: Explanation here about the result and why it's significant.",
    indicator2: "Example Indicator 2: Explanation of how this indicator affects the overall analysis.",
    indicator3: "Example Indicator 3: Details of this indicator and its role in detecting misinformation.",
  });

  const handleFeedbackChange = (e) => setFeedback(e.target.value);

  const handleSubmitFeedback = (e) => {
    e.preventDefault();
    if (feedback) {
      console.log("Feedback submitted:", feedback);
      alert("Thank you for your feedback!");
      setFeedback(""); // Clear the feedback after submission
    } else {
      alert("Please provide your feedback.");
    }
  };

  return (
    <>
      <style>
        {`
          .btn-custom {
            background-color: white !important;
            color: #BE58CF !important;
            border: 2px solid #BE58CF !important;
            font-weight: bold;
            padding: 10px 25px;
            transition: 0.3s ease;
            border-radius: 5px;
            text-transform: uppercase;
          }

          .btn-custom:hover {
            background-color: #BE58CF !important;
            color: white !important;
          }

          .highlight-box {
            background-color: #BE58CF;
            color: white;
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 20px;
            font-size: 1.1rem;
          }

          .hero-text h1 {
            font-weight: bold;
            font-size: 3rem;
          }

          .hero-text p {
            font-size: 1.2rem;
          }

          .analysis-breakdown {
            background-color: #f1f1f1;
            padding: 20px;
            border-radius: 10px;
            margin-top: 20px;
          }

          .analysis-breakdown h5 {
            color: #BE58CF;
          }

          .analysis-breakdown ul {
            list-style-type: none;
            padding-left: 0;
          }

          .analysis-breakdown li {
            font-size: 1.1rem;
            margin-bottom: 10px;
          }
        `}
      </style>

      {/* Hero Section */}
      <div style={{ position: "relative" }}>
        <img
          src={resultImage}
          alt="Results"
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            filter: "brightness(0.5)",
          }}
        />
        <div
          className="hero-text"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
          }}
        >
          <h1>Results & Feedback</h1>
          <p>Get your analysis results and share your feedback</p>
        </div>
      </div>

      <Container fluid style={{ padding: "60px 0", backgroundColor: "#f7f7f7" }}>
        {/* Results Section */}
        <Row className="text-center mb-5">
          <Col>
            <h2 style={{ color: "#BE58CF" }}>Comprehensive Results</h2>
            <p>Here are the results of your uploaded file or typed content</p>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center mb-5">
          <Col md={10}>
            <Card>
              <Card.Body>
                <h4>Uploaded File: {fileName}</h4>
                <p><strong>Analysis Result:</strong></p>
                <div className="highlight-box">
                  <p>{analysisResult}</p>
                </div>
                <Button className="btn-custom" onClick={() => setAnalysisResult("New result based on new analysis")}>
                  Re-analyze
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Analysis Breakdown Section */}
        <Row className="d-flex justify-content-center mb-5">
          <Col md={10}>
            <Card>
              <Card.Body>
                <h5>Analysis Breakdown</h5>
                <p>This section explains the key indicators used in the analysis and how they contribute to the final result.</p>
                <div className="analysis-breakdown">
                  <ul>
                    <li><strong>Indicator 1:</strong> {analysisBreakdown.indicator1}</li>
                    <li><strong>Indicator 2:</strong> {analysisBreakdown.indicator2}</li>
                    <li><strong>Indicator 3:</strong> {analysisBreakdown.indicator3}</li>
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Feedback Section */}
        <Row className="d-flex justify-content-center mb-5">
          <Col md={10}>
            <Card>
              <Card.Body>
                <h4>Your Feedback is Valuable</h4>
                <p>Let us know what you think about the results or the system itself.</p>
                <Form onSubmit={handleSubmitFeedback}>
                  <Form.Group controlId="feedback" className="mb-3">
                    <Form.Control
                      as="textarea"
                      rows={4}
                      value={feedback}
                      onChange={handleFeedbackChange}
                      placeholder="Type your feedback here..."
                    />
                  </Form.Group>
                  <Button className="btn-custom" type="submit">
                    Submit Feedback
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Call to Action */}
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h3 style={{ color: "#BE58CF" }}>Want to Learn More?</h3>
            <p>Explore how we analyze data and uncover disinformation in more detail.</p>
            <Button className="btn-custom" href="/learn-more">
              Learn More
            </Button>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default ResultAndFeedbackPage;
