import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import heroImage from '../assets/images/aboutus.png';
import favImage from '../assets/images/impact.png';
import estherImage from '../assets/images/entertainment news pic.png';
import Footer from '../components/Footer';

function AboutUsPage() {
    return (
        <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
            {/* ========== Hero Section ========== */}
            <section
                style={{
                    backgroundImage: `url(${heroImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    color: '#fff',
                    padding: '140px 0',
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
                        backgroundColor: 'rgba(0, 0, 0, 0.65)',
                        zIndex: 1,
                    }}
                />
                <Container className="text-center" style={{ position: 'relative', zIndex: 2 }}>
                    <h1 className="fw-bold display-4">TruthScope: Shaping a Future Where Facts Matter</h1>
                    <p className="lead mt-3">
                        In a world flooded with misinformation, TruthScope stands as a beacon of clarity, trust, and truth. Learn how we’re transforming digital awareness—one fact at a time.
                    </p>
                    <Button
                        href="#about-details"
                        variant="outline-light"
                        style={{ borderRadius: '30px', padding: '12px 40px', fontSize: '1.1rem' }}
                    >
                        Discover Our Vision
                    </Button>
                </Container>
            </section>

            {/* ========== Problem We’re Solving ========== */}
            <section style={{ padding: '70px 0', backgroundColor: '#fff' }}>
                <Container>
                    <h2 className="display-5 fw-bold text-center text-dark">The Problem We’re Solving</h2>
                    <p className="text-center" style={{ maxWidth: '850px', margin: 'auto', fontSize: '1.1rem' }}>
                        Every day, millions are misled by manipulated images, deepfake videos, and false headlines.
                        The consequences? Misinformed decisions, broken trust, and even threats to democracy. TruthScope was born to fight back—with the power of artificial intelligence, education, and transparency.
                    </p>
                </Container>
            </section>

            {/* ========== Our Mission ========== */}
            <section id="about-details" style={{ padding: '80px 0', backgroundColor: '#f0f0f5' }}>
                <Container>
                    <h2 className="display-5 fw-bold text-center" style={{ color: '#4B0082' }}>
                        Our Mission: Empowering the World with Truth
                    </h2>
                    <Row className="mt-4">
                        <Col md={12}>
                            <p style={{ textAlign: 'justify', fontSize: '1.1rem', lineHeight: '1.6' }}>
                                TruthScope is not just a platform—it’s a movement. We empower users to question what they consume online, equipping them with cutting-edge AI tools and learning resources to identify disinformation. From text to images to videos, our mission is clear: detect, educate, and protect.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ========== Meet the Founders ========== */}
            <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
                <Container>
                    <h2 className="display-5 fw-bold text-center" style={{ color: '#4B0082' }}>Meet the Founders</h2>
                    <Row className="mt-5">
                        <Col md={6} className="text-center">
                            <Image src={favImage} roundedCircle style={{ width: '200px', height: '200px' }} />
                            <h4 className="mt-3" style={{ color: '#4B0082' }}>Okeke Favour Nmesoma</h4>
                            <p className="text-muted">Visionary Leader</p>
                            <p>
                                Okeke Favour dreamed of a world where facts prevail over fiction. Her passion for justice and digital ethics sparked the creation of TruthScope—a tool to expose lies and empower minds.
                            </p>
                        </Col>
                        <Col md={6} className="text-center">
                            <Image src={estherImage} roundedCircle style={{ width: '200px', height: '200px' }} />
                            <h4 className="mt-3" style={{ color: '#4B0082' }}>Divine Esther Gogoe</h4>
                            <p className="text-muted">Technology Innovator</p>
                            <p>
                                Esther brings the brainpower behind TruthScope’s AI. She believes technology should serve the truth—and she’s building the algorithms to make that belief a global reality.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ========== What Makes Us Different ========== */}
            <section style={{ padding: '60px 0', backgroundColor: '#eae6f7' }}>
                <Container>
                    <h2 className="display-5 fw-bold text-center text-dark">What Makes Us Different</h2>
                    <Row className="mt-4 text-center">
                        <Col md={4}>
                            <h5>Multi-Modal AI</h5>
                            <p>We analyze not just words, but images, videos, and even audio for authenticity.</p>
                        </Col>
                        <Col md={4}>
                            <h5>Educational First</h5>
                            <p>We go beyond detection—our platform teaches users how disinformation works.</p>
                        </Col>
                        <Col md={4}>
                            <h5>Human + Machine</h5>
                            <p>AI flags content, but human insight refines it. Together, they form the truth engine.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ========== Timeline ========== */}
            <section style={{ padding: '60px 0', backgroundColor: '#fff' }}>
                <Container>
                    <h2 className="display-5 fw-bold text-center" style={{ color: '#4B0082' }}>Our Journey</h2>
                    <ul className="list-unstyled" style={{ maxWidth: '800px', margin: 'auto', fontSize: '1.1rem' }}>
                        <li><strong>2023:</strong> Born as a hackathon idea in response to election misinformation.</li>
                        <li><strong>2024:</strong> MVP released with real-time text and image verification tools.</li>
                        <li><strong>2025:</strong> Public launch with full video deepfake analysis and learning modules.</li>
                        <li><strong>Next:</strong> Expanding globally, integrating with journalists and educators worldwide.</li>
                    </ul>
                </Container>
            </section>

            {/* ========== Global Impact ========== */}
            <section style={{ padding: '60px 0', backgroundColor: '#f8f9fa' }}>
                <Container>
                    <h2 className="display-5 fw-bold text-center text-dark">Global Impact & Partnerships</h2>
                    <p className="text-center" style={{ maxWidth: '850px', margin: 'auto', fontSize: '1.1rem' }}>
                        We are collaborating with universities, media outlets, and tech leaders to create a global network against disinformation. From classrooms to newsrooms, TruthScope is making waves where it matters most.
                    </p>
                </Container>
            </section>

            {/* ========== Vision Ahead ========== */}
            <section style={{ padding: '60px 0', backgroundColor: '#f0f0f5' }}>
                <Container>
                    <h2 className="display-5 fw-bold text-center text-dark">Looking Ahead</h2>
                    <p className="text-center" style={{ maxWidth: '850px', margin: 'auto', fontSize: '1.1rem' }}>
                        Our dream is big—and we’re just getting started. We envision TruthScope embedded into daily digital life:
                        browser extensions, newsroom integrations, school curriculums, and beyond. Wherever lies try to hide, TruthScope will be there.
                    </p>
                </Container>
            </section>

            {/* ========== Call to Action ========== */}
            <section style={{ padding: '70px 0', background: 'linear-gradient(to bottom, #4B0082, #16001f)' }}>
                <Container className="text-center text-white">
                    <h2 className="fw-bold">Ready to Change the World?</h2>
                    <p className="lead">Be part of the truth revolution. Join our community and help us build a better digital future—together.</p>
                    <Button
                        href="/learn-more"
                        variant="light"
                        style={{ borderRadius: '30px', padding: '12px 40px', fontSize: '1.1rem' }}
                    >
                        Learn More
                    </Button>
                </Container>
            </section>

            <Footer />
        </div>
    );
}

export default AboutUsPage;
