import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

const ProfilePage = () => {
  const [userData, setUserData] = useState({
    name: "User",
    email: "",
    joined: "",
    recentActivity: [],
  });

  const defaultAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(userData.name)}&background=800080&color=fff&size=128`;

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    fetch("http://localhost:8000/api/profile/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error("Unauthorized or error fetching profile");
        return response.json();
      })
      .then((data) => {
        setUserData({
          name: data.full_name || data.username || "User",
          email: data.email,
          joined: new Date(data.date_joined).toLocaleDateString(),
          recentActivity: ["Logged in", "Analyzed a news article", "Checked profile"],
        });
      })
      .catch((error) => {
        console.error("Failed to fetch user profile:", error);
      });
  }, []);
  if (!userData.name || !userData.email) {
    return <p>Loading profile...</p>;
  }
  

  return (
    <Container className="mt-4">
      <Card className="p-4 shadow-sm">
        <Row>
          <Col md={3} className="text-center">
            <img
              src={defaultAvatar}
              alt="Avatar"
              className="img-fluid rounded-circle mb-3"
              style={{ width: "120px", height: "120px" }}
            />
            <h5>{userData.name}</h5>
            <p className="text-muted">{userData.email}</p>
          </Col>
          <Col md={9}>
            <h4>Profile Details</h4>
            <hr />
            <p><strong>Full Name:</strong> {userData.name}</p>
            <p><strong>Email:</strong> {userData.email}</p>
            <p><strong>Member Since:</strong> {userData.joined}</p>

            <h5 className="mt-4">Recent Activity</h5>
            <ul>
              {userData.recentActivity.map((activity, idx) => (
                <li key={idx}>{activity}</li>
              ))}
            </ul>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default ProfilePage;