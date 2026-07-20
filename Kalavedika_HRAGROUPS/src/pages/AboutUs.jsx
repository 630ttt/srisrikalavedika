import React from "react";
import aboutusBg from "../assets/aboutus-bg.jpg";

function AboutUs() {
  const styles = {
    page: {
      fontFamily: "Arial, sans-serif",
      background: "#f8f9fa",
      color: "#333",
    },

    hero: {
      backgroundImage: `linear-gradient(rgba(210, 196, 196, 0.23), rgba(27, 27, 27, 0.77)), url(${aboutusBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "45vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      textAlign: "center",
    },

    heroTitle: {
      fontSize: "48px",
      fontWeight: "bold",
    },

    section: {
      padding: "70px 10%",
      maxWidth: "1200px",
      margin: "auto",
    },

    title: {
      color: "#7B1113",
      textAlign: "center",
      fontSize: "36px",
      marginBottom: "20px",
    },

    paragraph: {
      fontSize: "18px",
      lineHeight: "1.9",
      textAlign: "justify",
      color: "#555",
    },

    cards: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
      gap: "25px",
      marginTop: "40px",
    },

    card: {
      background: "#f1e9e5fa",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0 5px 20px rgba(0,0,0,.1)",
      transition: "all 0.4s ease",
      cursor: "pointer",
  
    },
  
    cardTitle: {
      color: "#7B1113",
      marginBottom: "15px",
    },

    objectives: {
      marginTop: "30px",
      lineHeight: "2",
      fontSize: "18px",
    },

    quote: {
      background: "#7B1113",
      color: "#fff",
      padding: "50px",
      textAlign: "center",
      fontSize: "22px",
      fontStyle: "italic",
    },
  };

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div>
          <h1 style={styles.heroTitle}>About Sri Sri Kalavedika</h1>
          <p>International Literary, Cultural & Social Service Organization</p>
        </div>
      </section>

      {/* About */}
      <section style={styles.section}>
        <h2 style={styles.title}>Who We Are</h2>

        <p style={styles.paragraph}>
          Sri Sri Kalavedika is an International Literary, Cultural and Social
          Service Organization established to preserve, promote and celebrate
          Telugu language, literature, arts, culture and humanitarian values.
          The organization provides a common platform for poets, writers,
          artists, teachers, students and social activists to contribute towards
          society through literature and cultural activities.
        </p>

        <p style={{ ...styles.paragraph, marginTop: "20px" }}>
          Over the years, Sri Sri Kalavedika has organized numerous literary
          conferences, poetry gatherings, award ceremonies, cultural festivals,
          book release events, educational programs and social service
          initiatives across India and abroad.
        </p>
      </section>

      {/* Vision & Mission */}
      <section style={styles.section}>
        <div style={styles.cards}>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Vision</h2>

            <p>
              To become a globally recognized platform for promoting Telugu
              literature, culture, language and social responsibility.
            </p>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Mission</h2>

            <p>
              To encourage literary excellence, cultural heritage and community
              development through educational and social initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section style={styles.section}>
        <h2 style={styles.title}>Our Objectives</h2>

        <div style={styles.objectives}>
          Promote Telugu Language & Literature
          <br />
          Encourage Writers & Poets
          <br />
          Organize Literary Conferences
          <br />
          Conduct Cultural Festivals
          <br />
          Recognize Talent through Awards
          <br />
          Support Young Artists & Students
          <br />
          Organize Book Launches
          <br />
          Social Welfare Activities
          <br />
           Environmental Awareness Programs
          <br />
           International Cultural Exchange
        </div>
      </section>

      {/* Activities */}
      <section style={styles.section}>
        <h2 style={styles.title}>Major Activities</h2>

        <div style={styles.cards}>
          <div className="card" style={styles.card}>Literary Conferences</div>

          <div className="card" style={styles.card}>National Awards</div>

          <div className="card" style={styles.card}>Cultural Programs</div>

          <div className="card" style={styles.card}>Book Launches</div>

          <div className="card" style={styles.card}>Social Service</div>

          <div className="card" style={styles.card}>Educational Seminars</div>
        </div>
      </section>

      {/* Quote */}
      <section style={styles.quote}>
        "Literature inspires society, Culture preserves identity, and Service
        strengthens humanity."
      </section>
    </div>
  );
}

export default AboutUs;