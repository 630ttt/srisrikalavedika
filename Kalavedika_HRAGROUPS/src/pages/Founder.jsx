import React from "react";
import founderPic1 from "../assets/founderpic1.png";
import founderPic2 from "../assets/founderpic2.png";
import founder from "../assets/founder.png";
import founderPage from "../assets/founderpage.jpg";
import headFounder from "../assets/headfounder.jpg";
function Founder() {
  const styles = {
    page: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f8f9fa",
      color: "#333",
      backgroundImage: `
          linear-gradient(
            rgba(200, 131, 35, 0),
            rgba(255, 255, 255, 0.07)
          ),
          url(${headFounder})
        `,
        backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  backgroundRepeat: "no-repeat",  
    },

    hero: {
  backgroundImage: `
          linear-gradient(
            rgba(200, 35, 35, 0.04),
            rgba(255, 255, 255, 0.07)
          ),
          url(${headFounder})
        `,
  backgroundSize: "cover",
  backgroundPosition: "center",
   backgroundAttachment: "fixed",
  backgroundRepeat: "no-repeat",
  minHeight: "45vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#eba901",
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

    founderImage: {
      width: "320px",
      borderRadius: "12px",
    },

    content: {
      flex: "1",
      minWidth: "300px",
    },

    name: {
      color: "#faf8f8",
      fontSize: "40px",
      marginBottom: "10px",
    },

    designation: {
      color: "#f7d47b",
      fontSize: "22px",
      fontWeight: "bold",
      marginBottom: "25px",
    },

    paragraph: {
      fontSize: "18px",
      lineHeight: "1.9",
      color: "#dbd108",
      marginBottom: "20px",
      textAlign: "justify",
    },

    achievements: {
      background: "#ffffff0a",
      padding: "50px 10%",
      marginTop: "50px",
    },

    title: {
      textAlign: "center",
      color: "#ebe8e8",
      fontSize: "36px",
      marginBottom: "40px",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
      gap: "25px",
    },

    card: {
      background:
        "linear-gradient(145deg, rgba(255,255,255,0.97), rgba(244, 167, 24, 0.98))",
      borderRadius: "18px",
      padding: "35px 25px",
      textAlign: "center",
      minHeight: "280px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
      transition: "all 0.4s ease",
      cursor: "pointer",
      border: "1px solid rgba(212, 55, 55, 0.4)",
    },


    icon: {
      fontSize: "45px",
      marginBottom: "15px",
    },

    quote: {
      background: "#aa7423df",
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
    contentCard: {
  background: "rgba(0, 0, 0, 0.33)",
  padding: "40px",
  borderRadius: "20px",
  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)",
  backdropFilter: "blur(5px)",
  border: "1px solid rgba(255, 255, 255, 0.15)",
},
  };

  return (
    <div style={styles.page}>
      {/* Hero Section */}

      <section style={styles.hero}>
        <div style={styles.contentCard}>
        <div>
          <h1 style={styles.heroTitle}>Founder & Chairman</h1>
          <p>Visionary Leader of Sri Sri Kalavedika</p>
        </div>
        </div>
      </section>

      {/* Founder Profile */}

      <section style={styles.container}>
        <img
      className="founder-image"
        src={founderPic1}
        alt="Founder"
        style={styles.founderImage}
      />
      <img
      className="founder-image"
        src={founder}
        alt="Founder"
        style={styles.founderImage}
      />
      <img
      className="founder-image"
        src={founderPic2}
        alt="Founder"
        style={styles.founderImage}
      />

        <div style={styles.content}>
          <div style={styles.contentCard}>
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
        </div>
      </section>

      {/* Achievements */}

      <section style={styles.achievements}>
          <div style={styles.contentCard}>
        <h2 style={styles.title}>Major Contributions</h2>

        <div style={styles.grid}>
          <div className="card"style={styles.card}>
            <div style={styles.icon}>📚</div>
            <h3>Literary Promotion</h3>
            <p>Encouraging writers, poets and scholars across the world.</p>
          </div>

          <div className="card"style={styles.card}>
            <div style={styles.icon}>🏆</div>
            <h3>Award Programs</h3>
            <p>Recognizing excellence in literature, arts and social service.</p>
          </div>

          <div className="card"style={styles.card}>
            <div style={styles.icon}>🎭</div>
            <h3>Cultural Heritage</h3>
            <p>Organizing cultural festivals and preserving Indian traditions.</p>
          </div>

          <div className="card"style={styles.card}>
            <div style={styles.icon}>🌍</div>
            <h3>International Reach</h3>
            <p>Connecting Telugu communities across the globe.</p>
          </div>

          <div className="card"style={styles.card}>
            <div style={styles.icon}>🤝</div>
            <h3>Social Service</h3>
            <p>Leading community welfare and humanitarian initiatives.</p>
          </div>

          <div className="card" style={styles.card}>
            <div style={styles.icon}>🎓</div>
            <h3>Education</h3>
            <p>Supporting students through educational and motivational programs.</p>
          </div>
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