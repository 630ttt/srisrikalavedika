import React from "react";

function Membership() {
  const styles = {
    page: {
      fontFamily: "Arial, sans-serif",
      background: "#f8f9fa",
      color: "#333",
    },

    hero: {
      background:
        "linear-gradient(rgba(123,17,19,0.85), rgba(123,17,19,0.85)), url('/membership-banner.jpg')",
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
      maxWidth: "1200px",
      margin: "70px auto",
      padding: "0 20px",
    },

    title: {
      textAlign: "center",
      color: "#7B1113",
      fontSize: "36px",
      marginBottom: "20px",
    },

    subtitle: {
      textAlign: "center",
      color: "#666",
      fontSize: "18px",
      marginBottom: "50px",
      lineHeight: "1.8",
    },

    cards: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
      gap: "25px",
      marginBottom: "60px",
    },

    card: {
      background: "#fff",
      padding: "30px",
      borderRadius: "12px",
      textAlign: "center",
      boxShadow: "0 5px 15px rgba(0,0,0,.1)",
    },

    cardTitle: {
      color: "#7B1113",
      marginBottom: "15px",
      fontSize: "24px",
    },

    form: {
      background: "#fff",
      padding: "40px",
      borderRadius: "12px",
      boxShadow: "0 5px 15px rgba(0,0,0,.1)",
    },

    input: {
      width: "100%",
      padding: "14px",
      marginBottom: "20px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      fontSize: "16px",
    },

    textarea: {
      width: "100%",
      height: "120px",
      padding: "14px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      fontSize: "16px",
      marginBottom: "20px",
      resize: "none",
    },

    button: {
      background: "#7B1113",
      color: "#fff",
      border: "none",
      padding: "15px 30px",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "16px",
      width: "100%",
    },

    benefits: {
      background: "#7B1113",
      color: "#fff",
      padding: "60px 20px",
      textAlign: "center",
      marginTop: "70px",
    },

    list: {
      maxWidth: "800px",
      margin: "30px auto",
      textAlign: "left",
      lineHeight: "2",
      fontSize: "18px",
    },
  };

  return (
    <div style={styles.page}>
      {/* Hero */}
      <section style={styles.hero}>
        <div>
          <h1 style={styles.heroTitle}>Membership</h1>
          <p>Become a Member of Sri Sri Kalavedika</p>
        </div>
      </section>

      {/* Membership Types */}
      <section style={styles.section}>
        <h2 style={styles.title}>Membership Categories</h2>

        <p style={styles.subtitle}>
          Join our literary and cultural family and contribute to preserving
          Telugu language, literature, arts and social service.
        </p>

        <div style={styles.cards}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>👤 Individual Member</h3>
            <p>Open to writers, poets, artists and literature enthusiasts.</p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>🎓 Student Member</h3>
            <p>Special membership for students interested in literature and culture.</p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>🌍 International Member</h3>
            <p>For Telugu communities and cultural supporters across the globe.</p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>🏅 Lifetime Member</h3>
            <p>Become a permanent member and support our mission for generations.</p>
          </div>
        </div>

        {/* Registration Form */}
        <div style={styles.form}>
          <h2 style={{ color: "#7B1113", marginBottom: "25px" }}>
            Membership Registration
          </h2>

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
              placeholder="Mobile Number"
              style={styles.input}
            />

            <input
              type="text"
              placeholder="City / State"
              style={styles.input}
            />

            <select style={styles.input}>
              <option>Select Membership Type</option>
              <option>Individual Member</option>
              <option>Student Member</option>
              <option>International Member</option>
              <option>Lifetime Member</option>
            </select>

            <textarea
              placeholder="Tell us about yourself..."
              style={styles.textarea}
            ></textarea>

            <button type="submit" style={styles.button}>
              Apply for Membership
            </button>
          </form>
        </div>
      </section>

      {/* Benefits */}
      <section style={styles.benefits}>
        <h2>Membership Benefits</h2>

        <div style={styles.list}>
          Participation in Literary Conferences
          <br />
          Invitations to Cultural Programs
          <br />
          Opportunity to Publish Literary Works
          <br />
          Recognition & Awards
          <br />
          Networking with Writers & Artists
          <br />
          Participation in Social Service Activities
          <br />
          Access to Workshops & Seminars
          <br />
          International Cultural Exchange Programs
        </div>
      </section>
    </div>
  );
}

export default Membership;