import React from "react";

function Contact() {
  const styles = {
    page: {
      fontFamily: "Arial, sans-serif",
      background: "#f8f9fa",
      color: "#333",
    },

    hero: {
      background:
        "linear-gradient(rgba(123,17,19,0.85), rgba(123,17,19,0.85)), url('/contact-banner.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "40vh",
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
      margin: "60px auto",
      padding: "0 20px",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
      gap: "40px",
    },

    card: {
      background: "#fff",
      padding: "35px",
      borderRadius: "12px",
      boxShadow: "0 5px 15px rgba(0,0,0,.1)",
    },

    heading: {
      color: "#7B1113",
      marginBottom: "20px",
      fontSize: "30px",
    },

    text: {
      fontSize: "17px",
      lineHeight: "1.9",
      marginBottom: "15px",
    },

    input: {
      width: "100%",
      padding: "12px",
      marginBottom: "15px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      fontSize: "16px",
    },

    textarea: {
      width: "100%",
      padding: "12px",
      height: "150px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      resize: "none",
      fontSize: "16px",
      marginBottom: "15px",
    },

    button: {
      background: "#7B1113",
      color: "#fff",
      border: "none",
      padding: "14px 30px",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "16px",
      width: "100%",
    },

    map: {
      width: "100%",
      height: "350px",
      border: "0",
      borderRadius: "10px",
      marginTop: "20px",
    },

    social: {
      display: "flex",
      gap: "15px",
      marginTop: "20px",
      fontSize: "28px",
    },
  };

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div>
          <h1 style={styles.heroTitle}>Contact Us</h1>
          <p>We'd love to hear from you</p>
        </div>
      </section>

      <div style={styles.container}>
        {/* Contact Information */}
        <div style={styles.card}>
          <h2 style={styles.heading}>Get in Touch</h2>

          <p style={styles.text}>
            📍 <strong>Address:</strong>
            <br />
            Sri Sri Kalavedika
            <br />
            Andhra Pradesh, India
          </p>

          <p style={styles.text}>
            📞 <strong>Phone:</strong>
            <br />
            +91 98765 43210
          </p>

          <p style={styles.text}>
            ✉ <strong>Email:</strong>
            <br />
            info@srisrikalavedika.org
          </p>

          <p style={styles.text}>
            🌐 <strong>Website:</strong>
            <br />
            www.srisrikalavedika.org
          </p>

          <div style={styles.social}>
            <span>📘</span>
            <span>📷</span>
            <span>▶️</span>
            <span>💼</span>
          </div>

          <iframe
            title="Google Map"
            style={styles.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.550503262482!2d78.486671!3d17.385044"
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div style={styles.card}>
          <h2 style={styles.heading}>Send a Message</h2>

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
              placeholder="Your Message"
              style={styles.textarea}
            ></textarea>

            <button style={styles.button}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;