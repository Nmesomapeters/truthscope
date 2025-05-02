import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form, Tab, Nav } from "react-bootstrap";
import { FaImage, FaFileAlt, FaVideo } from "react-icons/fa";
import Footer from "../components/Footer";
import heroImage from "../assets/images/heroImage2.png"; // Import the image

import { Link } from "react-router-dom";


const InteractiveDetectionPage = () => {
  const [file, setFile] = useState(null);
  const [fileType, setFileType] = useState("");
  const [typedText, setTypedText] = useState("");
  const [resultDisplayed, setResultDisplayed] = useState(false); // Track whether result is displayed

  

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFileType(selectedFile ? selectedFile.type.split("/")[0] : "");
  };

  const handleTextChange = (e) => {
    setTypedText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file || typedText) {
      console.log("File submitted:", file, "Type:", fileType);
      console.log("Typed Text submitted:", typedText);
      setResultDisplayed(true); // Show the result after submission
    } else {
      alert("Please provide either a file or typed text for analysis.");
    }
  };

  

  return (
    <>
      {/* Hero Image Section */}
      <div style={{ position: "relative" }}>
        <img
          src={heroImage} // Use the imported image
          alt="Hero"
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            filter: "brightness(0.5)",
            position: "relative",
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
          <h1 style={{ fontWeight: "bold", fontSize: "3rem" }}>Interactive Detection</h1>
          <p style={{ fontSize: "1.2rem" }}>Choose a file or type text to analyze and detect disinformation</p>
        </div>
      </div>

      <Container fluid style={{ padding: "50px 0", backgroundColor: "#f7f7f7" }}>
        <style>
          {`
            .nav-pills .nav-link {
              color: #BE58CF;
              background-color: white;
              border: 1px solid #BE58CF;
              font-weight: bold;
              margin: 0 5px;
            }

            .nav-pills .nav-link.active {
              background-color: #BE58CF !important;
              color: white !important;
            }

            .btn-custom {
              background-color: white !important;
              color: #BE58CF !important;
              border: 2px solid #BE58CF !important;
              font-weight: bold;
              transition: 0.3s;
              padding: 10px 20px;
              border-radius: 5px;
            }

            .btn-custom:hover {
              background-color: #BE58CF !important;
              color: white !important;
            }

            .btn-custom:focus,
            .btn-custom:active,
            .btn-custom:focus:active {
              background-color: #BE58CF !important;
              color: white !important;
              border-color: #BE58CF !important;
              box-shadow: none !important;
            }
          `}
        </style>

        <Row>
          <Col md={12} className="text-center mb-5">
            <h2 style={{ color: "#BE58CF" }}>Interactive Detection</h2>
            <p>Choose a file or type text to analyze and detect disinformation</p>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center">
          <Col md={12}>
            <Tab.Container id="interactive-detection-tabs" defaultActiveKey="text">
              <Nav variant="pills" className="justify-content-center mb-4">
                <Nav.Item>
                  <Nav.Link eventKey="text">Text Analysis</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="image">Image Analysis</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="video">Video Analysis</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                {/* Text Analysis */}
                <Tab.Pane eventKey="text">
                  <Card className="text-center">
                    <Card.Body>
                      <FaFileAlt size={40} color="#BE58CF" />
                      <h5 className="mt-3">Text Analysis</h5>
                      <p>Upload a text file or type the text to detect disinformation.</p>

                      <Form.Group controlId="typedText" className="mb-3">
                        <Form.Label>Or Type Text Here</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={4}
                          value={typedText}
                          onChange={handleTextChange}
                          placeholder="Type or paste text here..."
                        />
                      </Form.Group>

                      <Form.Group controlId="formFileText" className="mb-3">
                        <Form.Control type="file" onChange={handleFileChange} />
                      </Form.Group>

                      <Button className="btn-custom" onClick={handleSubmit}>
                        Analyze
                      </Button>
                    </Card.Body>
                  </Card>
                </Tab.Pane>

                {/* Image Analysis */}
                <Tab.Pane eventKey="image">
                  <Card className="text-center">
                    <Card.Body>
                      <FaImage size={40} color="#BE58CF" />
                      <h5 className="mt-3">Image Analysis</h5>
                      <p>Upload an image to detect fake content.</p>
                      <Form.Group controlId="formFileImage" className="mb-3">
                        <Form.Control type="file" onChange={handleFileChange} />
                      </Form.Group>
                      <Button className="btn-custom" onClick={handleSubmit}>
                        Analyze
                      </Button>
                    </Card.Body>
                  </Card>
                </Tab.Pane>

                {/* Video Analysis */}
                <Tab.Pane eventKey="video">
                  <Card className="text-center">
                    <Card.Body>
                      <FaVideo size={40} color="#BE58CF" />
                      <h5 className="mt-3">Video Analysis</h5>
                      <p>Upload a video to detect deepfakes or altered content.</p>
                      <Form.Group controlId="formFileVideo" className="mb-3">
                        <Form.Control type="file" onChange={handleFileChange} />
                      </Form.Group>
                      <Button className="btn-custom" onClick={handleSubmit}>
                        Analyze
                      </Button>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>

        {/* Results Display */}
        {resultDisplayed && (
          <Row className="mt-5 text-center">
            <Col md={12}>
              <h3>Analysis Result</h3>
              <p>Your uploaded file: {file ? file.name : typedText}</p>
              <p>Analysis Type: {file ? fileType : "Text"}</p>
              <p>Results will be displayed here after processing the file.</p>
              {/* Correct closing of Link */}
              <Link to="/results-feedback">
                <Button className="btn-custom">
                  Go to Results
                </Button>
              </Link>
            </Col>
          </Row>
        )}
        {/* Mark Twain Quote */}
        <Row className="justify-content-center my-5">
          <Col md={10}>
            <blockquote
              style={{
                fontStyle: "italic",
                textAlign: "center",
                color: "#BE58CF",
                fontSize: "20px",
                borderLeft: "5px solid #BE58CF",
                paddingLeft: "15px",
              }}
            >
              “A lie can travel halfway around the world while the truth is still putting on its shoes.”
              <footer style={{ marginTop: "10px", fontSize: "16px", color: "#555" }}>
                ~ Mark Twain
              </footer>
            </blockquote>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default InteractiveDetectionPage;
