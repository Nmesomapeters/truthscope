import React, { useEffect } from 'react';
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Assets
import heroImage from '../assets/images/Image1.png';
import Footer from '../components/Footer';
import disinfoImg from '../assets/images/disinformation.png';
import typesImg from '../assets/images/types.png';
import spreadImg from '../assets/images/spread.png';
import detectionImg from '../assets/images/detection.png';
import impactImg from '../assets/images/impact.png';
import socialMediaImg from '../assets/images/socialmedia.png';

// Learning module data
const educationModules = [
    {
        title: 'What is Disinformation?',
        description: 'Understand the definition of disinformation...',
        buttonLabel: 'Learn More',
        link: '/learn/disinformation',
        image: disinfoImg,
    },
    {
        title: 'Types of Fake News',
        description: 'Explore the various forms of fake news...',
        buttonLabel: 'Explore Types',
        link: '/learn/types',
        image: typesImg,
    },
    {
        title: 'How it Spreads',
        description: 'Discover how fake news propagates...',
        buttonLabel: 'Learn More',
        link: '/learn/spread',
        image: spreadImg,
    },
    {
        title: 'Detection Techniques',
        description: 'Dive into the technologies and strategies...',
        buttonLabel: 'See Techniques',
        link: '/learn/detection',
        image: detectionImg,
    },
    {
        title: 'Real-World Impact',
        description: 'Analyze real-world cases...',
        buttonLabel: 'Read Cases',
        link: '/learn/impact',
        image: impactImg,
    },
    {
        title: 'Disinformation in Social Media',
        description: 'Learn how social media platforms amplify...',
        buttonLabel: 'See Case Studies',
        link: '/learn/social-media',
        image: socialMediaImg,
    },
];

function EducationPage() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);

    return (
        <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
            {/* Hero Section */}
            <section
                style={{
                    backgroundImage: `url(${heroImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    color: '#fff',
                    padding: '100px 0',
                    position: 'relative',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(75, 0, 130, 0.6)',
                        zIndex: 1,
                    }}
                />
                <Container className="text-center" style={{ position: 'relative', zIndex: 2 }}>
                    <h1 className="fw-bold display-4">Understanding Disinformation</h1>
                    <p className="lead">
                        Learn about the origin, forms, spread, and detection of fake news through our interactive modules.
                    </p>
                    <Button
                        href="#education-modules"
                        variant="outline-light"
                        style={{ borderRadius: '30px', padding: '12px 40px', fontSize: '1.1rem' }}
                    >
                        Start Learning
                    </Button>
                </Container>
            </section>

            {/* Key Statistics Section */}
            <section id="key-stats" style={{ backgroundColor: '#fff', padding: '60px 0', textAlign: 'center' }}>
                <Container>
                    <h2 className="display-5 fw-bold" style={{ color: '#4B0082' }}>
                        Key Statistics on Disinformation
                    </h2>
                    <Row className="mt-4" data-aos="fade-up">
                        <Col md={4}>
                            <h3>2.5 Billion</h3>
                            <p>Pieces of disinformation are shared daily across social media.</p>
                        </Col>
                        <Col md={4}>
                            <h3>70%</h3>
                            <p>Of people believe fake news is as harmful as real news.</p>
                        </Col>
                        <Col md={4}>
                            <h3>90%</h3>
                            <p>Of users can't distinguish fake news from real news.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Education Modules Section */}
            <section id="education-modules" style={{ padding: '60px 0', backgroundColor: '#f1f1f1' }}>
                <Container>
                    <h2 className="display-4 fw-bold text-center" style={{ color: '#4B0082' }}>
                        Interactive Learning Modules
                    </h2>
                    <Row className="g-4 mt-4">
                        {educationModules.map((mod, index) => (
                            <Col key={index} md={6} lg={4} data-aos="zoom-in" data-aos-delay={index * 100}>
                                <Card
                                    className="h-100 shadow-lg rounded-4"
                                    style={{
                                        border: '2px solid #4b0082',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                        overflow: 'hidden',
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.transform = 'scale(1.03)';
                                        e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
                                    }}
                                >
                                    <Card.Img
                                        variant="top"
                                        src={mod.image}
                                        style={{
                                            height: '220px',
                                            objectFit: 'cover',
                                            width: '100%',
                                            borderTopLeftRadius: '1rem',
                                            borderTopRightRadius: '1rem',
                                        }}
                                    />
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title className="fw-bold">{mod.title}</Card.Title>
                                        <Card.Text>{mod.description}</Card.Text>
                                        <Link to="/learn-more" className="mt-auto text-decoration-none">
                                            <Button
                                                variant="outline-light"
                                                style={{
                                                    borderRadius: '20px',
                                                    borderColor: '#4b0082',
                                                    color: '#4b0082',
                                                    backgroundColor: 'transparent',
                                                    width: '100%',
                                                }}
                                            >
                                                {mod.buttonLabel}
                                            </Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Carousel Interactive Section */}
            <section style={{ backgroundColor: '#fff', padding: '60px 0' }}>
                <Container data-aos="fade-up">
                    <h2 className="display-4 fw-bold text-center mb-5" style={{ color: '#4B0082' }}>
                        Learn Through Interaction
                    </h2>
                    <Carousel>
                        <Carousel.Item>
                            <h3 className="text-center">Quiz: Can You Spot the Fake News?</h3>
                            <p className="text-center">Test your knowledge with our interactive quiz.</p>
                            <Button
                                variant="outline-light"
                                href="/quiz" // This links to the QuizPage
                                className="d-block mx-auto mt-3"
                                style={{
                                    borderRadius: "30px",
                                    padding: "12px 40px",
                                    color: "#4B0082",
                                    borderColor: "#4B0082",
                                }}
                            >
                                Take the Quiz
                            </Button>
                        </Carousel.Item>

                        <Carousel.Item>
                            <h3 className="text-center">Interactive Diagram</h3>
                            <p className="text-center">Learn how fake news spreads with our interactive diagram.</p>
                            <Button
                                variant="light"
                                href="/interactive-diagram"
                                className="d-block mx-auto mt-3"
                                style={{
                                    borderRadius: '30px',
                                    padding: '12px 40px',
                                    backgroundColor: '#4B0082',
                                    color: '#fff',
                                    borderColor: '#4B0082',
                                }}
                            >
                                Explore the Diagram
                            </Button>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </section>

            {/* Call to Action */}
            <section style={{ padding: '60px 0', background: 'linear-gradient(to bottom, #4B0082, #16001f)' }}>
                <Container className="text-center text-white" data-aos="fade-in">
                    <h2 className="fw-bold">Join Us in the Fight Against Disinformation</h2>
                    <p>Become part of the solution by learning how to spot and prevent fake news.</p>
                    <Button
                        href="#education-modules"
                        variant="outline-light"
                        style={{ borderRadius: '30px', padding: '12px 40px', fontSize: '1.1rem' }}
                    >
                        Get Involved
                    </Button>
                </Container>
            </section>

            <Footer />
        </div>
    );
}

export default EducationPage;
