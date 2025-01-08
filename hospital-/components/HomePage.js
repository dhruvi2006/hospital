import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      {/* Welcome Section */}
      <header className="hero-section">
        <h1>Welcome to Our Hospital Management System</h1>
        <p>
          Providing seamless care and efficient management for better health.
        </p>
      </header>

      {/* Navigation Section */}
      <section className="navigation-section">
        <h2>Get Started</h2>
        <div className="buttons-container">
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/signup")}>Sign Up</button>
        </div>
      </section>

      {/* Departments Overview */}
      <section className="departments-section">
        <h2>Our Departments</h2>
        <div className="departments-container">
          <div className="department-card">
            <h3>Cardiology</h3>
            <p>Heart health specialists.</p>
            <button onClick={() => alert("More details for Cardiology")}>
              View Details
            </button>
          </div>
          <div className="department-card">
            <h3>Orthopedics</h3>
            <p>Bone and joint care.</p>
            <button onClick={() => alert("More details for Orthopedics")}>
              View Details
            </button>
          </div>
          <div className="department-card">
            <h3>Emergency</h3>
            <p>24/7 critical care services.</p>
            <button onClick={() => alert("Contact Emergency")}>
              Contact Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Hospital Management System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
