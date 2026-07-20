import React from "react";
import founder from "../assets/founder.png";
import aboutBg from "../assets/about-bg.jpg";
import founderBg from "../assets/founder-bg.jpg";
function Home() {
  const styles = {
    hero: {
      backgroundImage: "url('https://media.craiyon.com/2025-09-12/YbwIl4IsQeCtLwSSQEHJxw.webp')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "90vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fffdfd",
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
    fontSize: "clamp(2rem, 5vw, 3.8rem)",
    color: "#FFD700",
    marginBottom: "15px",
    fontWeight: "700",
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

    aboutSection: {
      padding: "80px 10%",
      textAlign: "center",
      backgroundImage: `linear-gradient(rgba(210, 196, 196, 0.23), rgba(27, 27, 27, 0.77)), url(${aboutBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      
      
},
    title: {
      fontSize: "40px",
      color: "#fcfcfc",
      marginBottom: "10px",
    },

    paragraph: {
      fontSize: "20px",
      lineHeight: "1.8",
      color: "#ffffff",
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
  

    found: {
      padding: "80px 10%",
      textAlign: "center",
      backgroundImage:`linear-gradient(rgba(207, 204, 204, 0), rgba(27, 27, 27, 0.77)), url(${founderBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      gap: "40px",
      padding: "80px 10%",
      
      
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

      <section style={styles.aboutSection}>
        <h2 style={styles.title}>About Us</h2>

        <p style={styles.paragraph}>
          Sri Sri Kalavedika is a renowned literary,
          cultural and social service organization
          dedicated to promoting Telugu language,
          literature, arts, culture and humanitarian
          values through various national and
          international programs.

          Established with the vision of nurturing creativity and strengthening cultural values, 
          Sri Sri Kalavedika organizes literary conferences, poetry gatherings, cultural festivals, 
          award ceremonies, educational initiatives, and social welfare activities at both national and international levels. 
          Through these programs, the organization recognizes excellence, encourages emerging talent, 
          and fosters unity among Telugu-speaking communities across the world.
        </p>
      </section>

      {/* Vision Mission */}

      <section style={styles.aboutSection}>

       <div style={styles.cards}>

        <div className="card" style={styles.card}>
            <h2>Vision</h2>

            <p>
              To preserve and promote Telugu
              literature, language, arts and culture
              across the world.
            </p>
          </div>

         <div className="card" style={styles.card}>
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

      <section style={styles.found}>

        <img
          src={founder}
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
 <section style={styles.aboutSection}>

        <h2 style={styles.title}>Our Activities</h2>

        <div style={styles.cards}>

          <div className="card" style={styles.card}>📚 Literary Conferences</div>

           <div className="card" style={styles.card}>🏆 Award Ceremonies</div>

          <div className="card" style={styles.card}>🎭 Cultural Programs</div>

           <div className="card" style={styles.card}>🌳 Social Service</div>

           <div className="card" style={styles.card}>🎓 Educational Programs</div>

           <div className="card" style={styles.card}>🌍 International Events</div>

        </div>

      </section>

      {/* Gallery */}

  <section style={styles.aboutSection}>

        <h2 style={styles.title}>Gallery</h2>

        <div style={styles.gallery}>

          <img src="/gallery/1.jpg" alt="" style={styles.image} />

          <img src="/gallery/2.jpg" alt="" style={styles.image} />

          <img src="/gallery/3.jpg" alt="" style={styles.image} />

        </div>

      </section>

      {/* Contact */}

   <section style={styles.aboutSection}>

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