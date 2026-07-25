import React from "react";
import contactHead from "../assets/contacthead.jpg";

function Contact() {
  const styles = {
    page: {
      fontFamily: "Arial, sans-serif",
      background: "#98c4f08f",
      color: "#333",
      minHeight: "100vh",
    },

    hero: {
      backgroundImage: `
              linear-gradient(
                rgba(32, 70, 104, 0.55),
                rgba(70, 15, 15, 0.8)
              ),
              url(${contactHead})
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "45vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            textAlign: "center",
            padding: "40px 20px",
    },

    heroContent: {
      background: "rgba(0, 0, 0, 0.25)",
      padding: "35px 50px",
      borderRadius: "20px",
      backdropFilter: "blur(4px)",
      WebkitBackdropFilter: "blur(4px)",
      border: "1px solid rgba(255,255,255,0.2)",
      maxWidth: "800px",
      width: "90%",
      boxSizing: "border-box",
    },

    heroTitle: {
      fontSize: "clamp(32px, 6vw, 52px)",
      fontWeight: "bold",
      margin: "0 0 15px",
    },

    heroText: {
      fontSize: "clamp(16px, 2vw, 20px)",
      margin: 0,
      lineHeight: "1.7",
    },

    container: {
      maxWidth: "1200px",
      margin: "70px auto",
      padding: "0 20px",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "35px",
      boxSizing: "border-box",
    },

    card: {
      background: "rgba(255,255,255,0.96)",
      padding: "35px",
      borderRadius: "18px",
      boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
      border: "1px solid rgba(123,17,19,0.08)",
      boxSizing: "border-box",
    },

    heading: {
      color: "#7B1113",
      marginBottom: "25px",
      fontSize: "30px",
      fontWeight: "bold",
    },

    text: {
      fontSize: "17px",
      lineHeight: "1.8",
      marginBottom: "20px",
      color: "#555",
    },

    contactItem: {
      padding: "15px",
      marginBottom: "12px",
      background: "#fff8f0",
      borderRadius: "10px",
      borderLeft: "4px solid #7B1113",
    },

    label: {
      color: "#7B1113",
      fontWeight: "bold",
    },

    input: {
      width: "100%",
      padding: "14px 16px",
      marginBottom: "18px",
      borderRadius: "8px",
      border: "1px solid #ddd",
      fontSize: "16px",
      outline: "none",
      boxSizing: "border-box",
      background: "#fafafa",
    },

    textarea: {
      width: "100%",
      padding: "14px 16px",
      height: "150px",
      borderRadius: "8px",
      border: "1px solid #ddd",
      resize: "vertical",
      fontSize: "16px",
      marginBottom: "18px",
      boxSizing: "border-box",
      background: "#fafafa",
      outline: "none",
    },

    button: {
      background: "#7B1113",
      color: "#fff",
      border: "none",
      padding: "15px 30px",
      borderRadius: "30px",
      cursor: "pointer",
      fontSize: "17px",
      fontWeight: "bold",
      width: "100%",
      transition: "all 0.3s ease",
    },

    map: {
      width: "100%",
      height: "300px",
      border: "0",
      borderRadius: "12px",
      marginTop: "20px",
    },

    social: {
      display: "flex",
      gap: "15px",
      marginTop: "25px",
      flexWrap: "wrap",
    },

    socialIcon: {
      width: "45px",
      height: "45px",
      borderRadius: "50%",
      background: "#7B1113",
      color: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "21px",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },

    bottomSection: {
      background: "#aa7423df",
      color: "#fff",
      textAlign: "center",
      padding: "50px 20px",
      marginTop: "30px",
    },

    bottomTitle: {
      fontSize: "28px",
      marginBottom: "15px",
    },

    bottomText: {
      maxWidth: "800px",
      margin: "auto",
      fontSize: "17px",
      lineHeight: "1.8",
    },
  };

  return (
    <div style={styles.page}>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Contact Us</h1>

          <p style={styles.heroText}>
            We'd love to hear from you. Connect with Sri Sri Kalavedika
            and be a part of our literary, cultural and social journey.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <div style={styles.container}>

        {/* Contact Information */}
        <div style={styles.card}>

          <h2 style={styles.heading}>
            Get in Touch
          </h2>

          <div style={styles.contactItem}>
            <p style={styles.text}>
              📍 <span style={styles.label}>Address</span>
              <br />
              Sri Sri Kalavedika
              <br />
              Andhra Pradesh, India
            </p>
          </div>

          <div style={styles.contactItem}>
            <p style={styles.text}>
              📞 <span style={styles.label}>Phone</span>
              <br />
              +91 98765 43210
            </p>
          </div>

          <div style={styles.contactItem}>
            <p style={styles.text}>
              ✉️ <span style={styles.label}>Email</span>
              <br />
              info@srisrikalavedika.org
            </p>
          </div>

          <div style={styles.contactItem}>
            <p style={styles.text}>
              🌐 <span style={styles.label}>Website</span>
              <br />
              www.srisrikalavedika.org
            </p>
          </div>

          {/* Social Media */}
          <div style={styles.social}>
            <div style={styles.socialIcon}>📘</div>
            <div style={styles.socialIcon}>📷</div>
            <div style={styles.socialIcon}>▶️</div>
            <div style={styles.socialIcon}>💼</div>
          </div>

          {/* Google Map */}
          <iframe
            title="Google Map"
            style={styles.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.550503262482!2d78.486671!3d17.385044"
            loading="lazy"
          ></iframe>

        </div>

        {/* Contact Form */}
        <div style={styles.card}>

          <h2 style={styles.heading}>
            Send a Message
          </h2>

          <p style={styles.text}>
            Have a question, suggestion or want to know more about
            Sri Sri Kalavedika? Send us a message and our team will
            get back to you.
          </p>

          <form>

            <input
              type="text"
              placeholder="Full Name"
              style={styles.input}
            />

            <input
              type="email"
              placeholder="Email Address"
              style={styles.input}
            />

            <input
              type="tel"
              placeholder="Phone Number"
              style={styles.input}
            />

            <input
              type="text"
              placeholder="Subject"
              style={styles.input}
            />

            <textarea
              placeholder="Write your message here..."
              style={styles.textarea}
            ></textarea>

            <button
              type="submit"
              style={styles.button}
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

      {/* Bottom Section */}
      <section style={styles.bottomSection}>

        <h2 style={styles.bottomTitle}>
          Connect With Sri Sri Kalavedika
        </h2>

        <p style={styles.bottomText}>
          Whether you are a writer, poet, artist, student or cultural
          enthusiast, we welcome you to connect with us and join our
          journey of preserving literature, celebrating culture and
          serving society.
        </p>

      </section>

    </div>
  );
}

export default Contact;