import React from "react";
import founder from "../assets/founder.png";
function Founder() {
  const styles = {
    page: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f8f9fa",
      color: "#333",
    },

    hero: {
      background:
        "linear-gradient(rgba(123,17,19,0.85), rgba(123,17,19,0.85)), url('/founder-banner.jpg')",
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

    container: {
      maxWidth: "1200px",
      margin: "70px auto",
      padding: "0 20px",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "50px",
    },

    image: {
      width: "380px",
      borderRadius: "15px",
      boxShadow: "0 8px 20px rgba(0,0,0,.2)",
    },

    content: {
      flex: "1",
      minWidth: "300px",
    },

    name: {
      color: "#7B1113",
      fontSize: "40px",
      marginBottom: "10px",
    },

    designation: {
      color: "#b8860b",
      fontSize: "22px",
      fontWeight: "bold",
      marginBottom: "25px",
    },

    paragraph: {
      fontSize: "18px",
      lineHeight: "1.9",
      color: "#555",
      marginBottom: "20px",
      textAlign: "justify",
    },

    achievements: {
      background: "#fff",
      padding: "50px 10%",
      marginTop: "50px",
    },

    title: {
      textAlign: "center",
      color: "#7B1113",
      fontSize: "36px",
      marginBottom: "40px",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
      gap: "25px",
    },

    card: {
      background: "#fff8f0",
      padding: "30px",
      borderRadius: "12px",
      textAlign: "center",
      boxShadow: "0 5px 15px rgba(0,0,0,.1)",
    },

    icon: {
      fontSize: "45px",
      marginBottom: "15px",
    },

    quote: {
      background: "#7B1113",
      color: "#fff",
      padding: "60px 10%",
      textAlign: "center",
      marginTop: "60px",
    },

    quoteText: {
      fontSize: "26px",
      fontStyle: "italic",
      lineHeight: "1.8",
      maxWidth: "900px",
      margin: "auto",
    },
  };

  return (
    <div style={styles.page}>
      {/* Hero Section */}

      <section style={styles.hero}>
        <div>
          <h1 style={styles.heroTitle}>Founder & Chairman</h1>
          <p>Visionary Leader of Sri Sri Kalavedika</p>
        </div>
      </section>

      {/* Founder Profile */}

      <section style={styles.container}>
        <img
        src={founder}
        alt="Founder"
        style={styles.founderImage}
      />

        <div style={styles.content}>
          <h2 style={styles.name}>
            కళారత్న కత్తిమండ ప్రతాప్ కుమార్
          </h2>

          <p style={styles.designation}>
            Founder & International Chairman
          </p>

          <p style={styles.paragraph}>
            Sri Sri Kalavedika was established with a vision to preserve,
            promote and celebrate Telugu language, literature, arts and culture.
            Under the leadership of Kala Ratna Katthimanda Pratap Kumar,
            the organization has become a respected platform for poets,
            writers, artists, educators and social workers.
          </p>

          <p style={styles.paragraph}>
            His dedication to literature and community service has inspired
            thousands of people across India and abroad. Through literary
            conferences, cultural festivals, award ceremonies and social
            initiatives, he continues to strengthen the values of creativity,
            heritage and humanitarian service.
          </p>

          <p style={styles.paragraph}>
            His mission is to empower future generations by encouraging
            knowledge, cultural awareness and social responsibility.
          </p>
        </div>
      </section>

      {/* Achievements */}

      <section style={styles.achievements}>
        <h2 style={styles.title}>Major Contributions</h2>

        <div style={styles.grid}>
          <div style={styles.card}>
            <div style={styles.icon}>📚</div>
            <h3>Literary Promotion</h3>
            <p>Encouraging writers, poets and scholars across the world.</p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>🏆</div>
            <h3>Award Programs</h3>
            <p>Recognizing excellence in literature, arts and social service.</p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>🎭</div>
            <h3>Cultural Heritage</h3>
            <p>Organizing cultural festivals and preserving Indian traditions.</p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>🌍</div>
            <h3>International Reach</h3>
            <p>Connecting Telugu communities across the globe.</p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>🤝</div>
            <h3>Social Service</h3>
            <p>Leading community welfare and humanitarian initiatives.</p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>🎓</div>
            <h3>Education</h3>
            <p>Supporting students through educational and motivational programs.</p>
          </div>
        </div>
      </section>

      {/* Quote */}

      <section style={styles.quote}>
        <p style={styles.quoteText}>
          "Literature enlightens minds, culture strengthens identity,
          and service builds a better society. Together we preserve our
          heritage and inspire future generations."
        </p>
      </section>
    </div>
  );
}

export default Founder;