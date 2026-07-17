import React from "react";

function Home() {
  const styles = {
    hero: {
      backgroundImage: "url('/hero.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "90vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      textAlign: "center",
      position: "relative",
    },

    overlay: {
      background: "rgba(0,0,0,0.6)",
      padding: "50px",
      borderRadius: "15px",
      width: "80%",
      maxWidth: "800px",
    },

    heading: {
      fontSize: "50px",
      marginBottom: "10px",
      color: "#FFD700",
    },

    subHeading: {
      fontSize: "24px",
      marginBottom: "20px",
    },

    button: {
      background: "#7B1113",
      color: "#fff",
      border: "none",
      padding: "15px 35px",
      fontSize: "18px",
      borderRadius: "30px",
      cursor: "pointer",
      marginTop: "20px",
    },

    section: {
      padding: "70px 10%",
      textAlign: "center",
    },

    title: {
      fontSize: "36px",
      color: "#7B1113",
      marginBottom: "20px",
    },

    paragraph: {
      fontSize: "18px",
      lineHeight: "1.8",
      color: "#555",
    },

    cards: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
      gap: "25px",
      marginTop: "40px",
    },

    card: {
      background: "#fff",
      padding: "30px",
      borderRadius: "15px",
      boxShadow: "0 5px 20px rgba(0,0,0,.1)",
    },

    founder: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      gap: "40px",
      padding: "80px 10%",
      background: "#fafafa",
    },

    founderImage: {
      width: "320px",
      borderRadius: "12px",
    },

    founderContent: {
      maxWidth: "600px",
    },

    gallery: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
      gap: "20px",
      marginTop: "40px",
    },

    image: {
      width: "100%",
      height: "250px",
      objectFit: "cover",
      borderRadius: "10px",
    },
  };

  return (
    <div>

      {/* Hero */}

      <section style={styles.hero}>
        <div style={styles.overlay}>
          <h1 style={styles.heading}>శ్రీ శ్రీ కళావేదిక</h1>

          <h2 style={styles.subHeading}>
            Sri Sri Kalavedika
          </h2>

          <p>
            International Literary, Cultural &
            Social Service Organization
          </p>

          <button style={styles.button}>
            Become a Member
          </button>
        </div>
      </section>

      {/* About */}

      <section style={styles.section}>
        <h2 style={styles.title}>About Us</h2>

        <p style={styles.paragraph}>
          Sri Sri Kalavedika is a renowned literary,
          cultural and social service organization
          dedicated to promoting Telugu language,
          literature, arts, culture and humanitarian
          values through various national and
          international programs.
        </p>
      </section>

      {/* Vision Mission */}

      <section style={styles.section}>

        <div style={styles.cards}>

          <div style={styles.card}>
            <h2>Vision</h2>

            <p>
              To preserve and promote Telugu
              literature, language, arts and culture
              across the world.
            </p>
          </div>

          <div style={styles.card}>
            <h2>Mission</h2>

            <p>
              To encourage writers, poets, artists,
              students and social workers through
              events, awards and community service.
            </p>
          </div>

        </div>

      </section>

      {/* Founder */}

      <section style={styles.founder}>

        <img
          src="/founder.jpg"
          alt="Founder"
          style={styles.founderImage}
        />

        <div style={styles.founderContent}>
          <h2 style={styles.title}>
            Founder & Chairman
          </h2>

          <h3>
            కళారత్న కత్తిమండ ప్రతాప్ కుమార్
          </h3>

          <p style={styles.paragraph}>
            Founder and Chairman of Sri Sri
            Kalavedika, working tirelessly for the
            development of literature, culture and
            social welfare.
          </p>
        </div>

      </section>

      {/* Activities */}

      <section style={styles.section}>

        <h2 style={styles.title}>Our Activities</h2>

        <div style={styles.cards}>

          <div style={styles.card}>📚 Literary Conferences</div>

          <div style={styles.card}>🏆 Award Ceremonies</div>

          <div style={styles.card}>🎭 Cultural Programs</div>

          <div style={styles.card}>🌳 Social Service</div>

          <div style={styles.card}>🎓 Educational Programs</div>

          <div style={styles.card}>🌍 International Events</div>

        </div>

      </section>

      {/* Gallery */}

      <section style={styles.section}>

        <h2 style={styles.title}>Gallery</h2>

        <div style={styles.gallery}>

          <img src="/gallery/1.jpg" alt="" style={styles.image} />

          <img src="/gallery/2.jpg" alt="" style={styles.image} />

          <img src="/gallery/3.jpg" alt="" style={styles.image} />

        </div>

      </section>

      {/* Contact */}

      <section style={styles.section}>

        <h2 style={styles.title}>Contact Us</h2>

        <p style={styles.paragraph}>
          📍 Andhra Pradesh, India
        </p>

        <p style={styles.paragraph}>
          📞 +91 XXXXX XXXXX
        </p>

        <p style={styles.paragraph}>
          ✉ info@srisrikalavedika.org
        </p>

      </section>

    </div>
  );
}

export default Home;