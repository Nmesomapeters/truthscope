// src/pages/FakeContentLab.jsx
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Alert,
  Spinner,
} from "react-bootstrap";
import { FaFlask, FaRobot, FaImage } from "react-icons/fa";

const FakeContentLab = () => {
  const [headlineTopic, setHeadlineTopic] = useState("");
  const [imagePrompt, setImagePrompt] = useState("");
  const [fakeHeadline, setFakeHeadline] = useState("");
  const [fakeImageUrl, setFakeImageUrl] = useState("");
  const [loadingImage, setLoadingImage] = useState(false);
  const [loadingHeadline, setLoadingHeadline] = useState(false);

  const navigate = useNavigate();

  const PresentationMode = () => {
    navigate("/presentation-mode");
  };

  const generateHeadline = async () => {
    setLoadingHeadline(true);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/generate-headline/",
        { topic: headlineTopic }
      );

      setFakeHeadline(response.data.headline);
    } catch (error) {
      console.error("Error generating headline:", error);
    } finally {
      setLoadingHeadline(false);
    }
  };

  const getFakeImage = async () => {
    setLoadingImage(true);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/fakecontentlab/generate-images/", // Django backend route
        {
          prompt: imagePrompt,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const base64 = response.data.image_base64;
      const imageUrl = `data:image/png;base64,${base64}`;
      setFakeImageUrl(imageUrl);
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setLoadingImage(false);
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4" style={{ color: "#800080" }}>
        <FaFlask className="me-2" />
        Fake Content Lab
      </h2>

      {/* Headline Generator & Image Generator */}
      <Row className="mb-5">
        <Col md={6}>
          <Card className="shadow-sm border-0">
            <Card.Header style={{ backgroundColor: "#800080", color: "#fff" }}>
              <FaRobot className="me-2" />
              AI-Fabricated Headline Generator
            </Card.Header>
            <Card.Body>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Enter a topic (e.g. elections, vaccines)"
                  value={headlineTopic}
                  onChange={(e) => setHeadlineTopic(e.target.value)}
                />
              </Form.Group>
              <Button
                className="mt-3"
                style={{ backgroundColor: "#800080", borderColor: "#800080" }}
                onClick={generateHeadline}
                disabled={loadingHeadline || !headlineTopic}
              >
                {loadingHeadline ? (
                  <Spinner animation="border" size="sm" />
                ) : (
                  "Generate Headline"
                )}
              </Button>
              {fakeHeadline && (
                <Alert variant="warning" className="mt-4">
                  <strong>AI-Generated Headline:</strong>
                  <br /> {fakeHeadline}
                </Alert>
              )}
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="shadow-sm border-0">
            <Card.Header style={{ backgroundColor: "#6a1b9a", color: "#fff" }}>
              <FaImage className="me-2" />
              AI-Generated Image Showcase
            </Card.Header>
            <Card.Body className="text-center">
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter a prompt to generate an image (e.g. robot reading news)"
                  value={imagePrompt}
                  onChange={(e) => setImagePrompt(e.target.value)}
                />
              </Form.Group>
              <Button
                style={{ backgroundColor: "#6a1b9a", borderColor: "#6a1b9a" }}
                onClick={getFakeImage}
                disabled={loadingImage || !imagePrompt}
              >
                {loadingImage ? (
                  <Spinner animation="border" size="sm" />
                ) : (
                  "Generate Image"
                )}
              </Button>
              {fakeImageUrl && (
                <div className="mt-4">
                  <img
                    src={fakeImageUrl}
                    alt="AI-generated"
                    className="img-fluid rounded border"
                    style={{ maxHeight: "250px" }}
                  />
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Real vs Fake Comparison */}
      {fakeHeadline && headlineTopic && (
        <Card className="shadow-sm mb-5 border-0">
          <Card.Header style={{ backgroundColor: "#4a0072", color: "#fff" }}>
            AI Generated Headline Comparison
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md={6}>
                <Card className="border">
                  <Card.Body>
                    <h5 className="text-success">Real Headline</h5>
                    <p>{headlineTopic}</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="border">
                  <Card.Body>
                    <h5 className="text-danger">Fake Headline</h5>
                    <p>{fakeHeadline}</p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      )}

      <button
      onClick={PresentationMode}
      style={{
        backgroundColor: '#6a1b9a',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '8px',
        marginTop: '20px',
        fontWeight: 'bold'
      }}
    >
      🎬 Launch Presentation Mode
    </button>
  
    </Container>
  );
};

export default FakeContentLab;
