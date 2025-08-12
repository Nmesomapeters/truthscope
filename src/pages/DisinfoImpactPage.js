import React from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";

const purple = "#6f42c1"; // Bootstrap purple
const lightPurple = "#f5f0fa"; // Very light purple background

const caseStudies = [
  {
    title: "COVID-19 Disinformation",
    summary: "False cures and conspiracy theories worsened the pandemic.",
    image: "https://images.theconversation.com/files/332857/original/file-20200505-83721-8pm9vj.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip",
  },
  {
    title: "Election Misinformation",
    summary: "Fake news swayed public opinion during major elections.",
    image: "https://statetechmagazine.com/sites/statetechmagazine.com/files/styles/cdw_hero/public/articles/%5Bcdw_tech_site%3Afield_site_shortname%5D/202105/GettyImages-1285544686.jpeg.jpg?itok=tzJpAcGj",
  },
  {
    title: "War Propaganda",
    summary: "Manipulated media spread rapidly during armed conflicts.",
    image: "https://ww1.nam.ac.uk/wp-content/uploads/2014/07/1015646-e1405340634200.jpg",
  },
];

const testimonials = [
  {
    quote: "I lost a loved one due to COVID misinformation.",
    author: "– Maria, Italy",
  },
  {
    quote: "My voting decision was influenced by fake headlines.",
    author: "– James, USA",
  },
  {
    quote: "A deepfake nearly ruined my career.",
    author: "– Aisha, Nigeria",
  },
];

const DisinfoImpactPage = () => {
  return (
    <Container style={{ background: "#fff", padding: "2rem 0" }}>
      {/* Intro */}
      <section style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h2 style={{ color: purple, fontWeight: "bold" }}>🛑 Disinfo Impact Zone</h2>
        <p style={{ fontSize: "1.2rem", maxWidth: "700px", margin: "0 auto", color: "#444" }}>
          Disinformation isn't just online noise — it causes real harm. Explore the human and
          societal consequences below.
        </p>
      </section>

      {/* Case Studies */}
      <section style={{ marginBottom: "4rem" }}>
        <h4 style={{ color: purple, fontWeight: "bold", marginBottom: "1.5rem" }}>🧾 Case Studies</h4>
        <Row>
          {caseStudies.map((item, idx) => (
            <Col md={4} className="mb-4" key={idx}>
              <Card style={{ border: `1px solid ${purple}`, height: "100%" }}>
                <Card.Img
                  variant="top"
                  src={item.image}
                  alt={item.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body style={{ backgroundColor: lightPurple }}>
                  <Card.Title style={{ color: purple }}>{item.title}</Card.Title>
                  <Card.Text>{item.summary}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Testimonials */}
      <section style={{ marginBottom: "4rem" }}>
        <h4 style={{ color: purple, fontWeight: "bold", marginBottom: "1.5rem" }}>🗣️ First-Hand Testimonials</h4>
        <Carousel interval={5000} fade indicators={false}>
          {testimonials.map((item, idx) => (
            <Carousel.Item key={idx}>
              <div
                style={{
                  backgroundColor: lightPurple,
                  padding: "2rem",
                  borderRadius: "10px",
                  textAlign: "center",
                  minHeight: "180px",
                }}
              >
                <p style={{ fontStyle: "italic", fontSize: "1.2rem", color: "#333" }}>
                  “{item.quote}”
                </p>
                <footer style={{ fontWeight: "bold", color: purple }}>{item.author}</footer>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      {/* Map Placeholder */}
      <section style={{ marginBottom: "4rem" }}>
        <h4 style={{ color: purple, fontWeight: "bold", marginBottom: "1rem" }}>
          🗺️ Map of Global Disinfo Cases
        </h4>
        <div
          style={{
            border: `2px dashed ${purple}`,
            padding: "2rem",
            borderRadius: "10px",
            textAlign: "center",
            color: "#555",
            backgroundColor: "#fdfdff",
          }}
        >
          <p>Interactive world map coming soon...</p>
        </div>
      </section>

      {/* Timeline Placeholder */}
      <section style={{ marginBottom: "4rem" }}>
        <h4 style={{ color: purple, fontWeight: "bold", marginBottom: "1rem" }}>
          📆 Timeline of Disinfo Impact
        </h4>
        <div
          style={{
            border: `2px dashed ${purple}`,
            padding: "2rem",
            borderRadius: "10px",
            textAlign: "center",
            color: "#555",
            backgroundColor: "#fdfdff",
          }}
        >
          <p>Interactive timeline will be added here.</p>
        </div>
      </section>
    </Container>
  );
};

export default DisinfoImpactPage;
