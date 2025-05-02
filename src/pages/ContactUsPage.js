import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import contactImage from '../assets/images/contact.png'; // Adjust path if necessary
import Footer from '../components/Footer';

function ContactUsPage() {
    return (
        <div style={{ backgroundColor: '#f9f9f9' }}>
            {/* Hero Section with Image */}
            <section
                style={{
                    position: 'relative',
                    color: '#fff',
                    height: '450px',
                    backgroundImage: `url(${contactImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                }}
            >
                <div
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark overlay
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                    }}
                ></div>
                <Container style={{ position: 'relative', zIndex: 2 }}>
                    <h1 className="display-4 fw-bold">Get in Touch with Us</h1>
                    <p>We'd love to hear from you! Reach out with any questions or feedback.</p>
                </Container>
            </section>

            {/* Contact Form Section */}
            <Container className="py-5">
                <Row>
                    <Col md={6}>
                        <h2 className="fw-bold text-purple">Contact Form</h2>
                        <p>If you have any questions, feel free to send us a message.</p>
                        <Form>
                            <Form.Group controlId="formName" className="mb-4">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" />
                            </Form.Group>

                            <Form.Group controlId="formEmail" className="mb-4">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>

                            <Form.Group controlId="formMessage" className="mb-4">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={4} placeholder="Your message" />
                            </Form.Group>

                            <Button
                                variant="outline-light"
                                type="submit"
                                style={{
                                    width: '100%',
                                    backgroundColor: '#4B0082', // Purple background
                                    color: '#fff', // White text color
                                    borderColor: '#4B0082', // Purple border
                                    borderRadius: '20px', // Optional, rounded corners
                                }}
                            >
                                Send Message
                            </Button>

                        </Form>
                    </Col>
                    <Col md={6}>
                        <h2 className="fw-bold text-purple">Our Location</h2>
                        <p>We are based in a digital world, but if you'd like to visit us:</p>
                        <p><strong>123 TruthScope Avenue</strong><br />Somewhere, in the world</p>
                        <p>Email: support@truthscope.com</p>
                        <p>Phone: +1 234 567 890</p>
                    </Col>
                </Row>
            </Container>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default ContactUsPage;
