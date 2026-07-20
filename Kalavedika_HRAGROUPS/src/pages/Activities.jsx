import React from "react";

function Activities() {
  const styles = {
    page: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f6f9fc",
      color: "#333",
    },

    hero: {
      background:
        "linear-gradient(rgba(123,17,19,0.85), rgba(123,17,19,0.85)), url('/activities-banner.jpg')",
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
      textAlign: "center",
      color: "#7B1113",
      fontSize: "36px",
      marginBottom: "20px",
    },

    description: {
      textAlign: "center",
      color: "#555",
      lineHeight: "1.8",
      fontSize: "18px",
      marginBottom: "50px",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
      gap: "25px",
    },

    card: {
      background: "#c10b0b",
      borderRadius: "12px",
      padding: "30px",
      boxShadow: "0 5px 15px rgba(0,0,0,.1)",
      textAlign: "center",
      transition: "0.3s",
    },

    icon: {
      fontSize: "45px",
      marginBottom: "15px",
    },

    cardTitle: {
      color: "#7B1113",
      marginBottom: "15px",
    },

    cardText: {
      color: "#666",
      lineHeight: "1.7",
    },

    highlight: {
      background: "#7B1113",
      color: "#fff",
      padding: "60px 10%",
      textAlign: "center",
      marginTop: "60px",
    },

    quote: {
      fontSize: "24px",
      fontStyle: "italic",
      lineHeight: "1.8",
    },
  };

  const activities = [
    {
      icon: "📚",
      title: "Literary Conferences",
      description:
        "Conducting national and international literary conferences to encourage writers, poets and scholars.",
    },
    {
      icon: "🏆",
      title: "Award Ceremonies",
      description:
        "Honouring outstanding personalities in literature, arts, education and social service.",
    },
    {
      icon: "🎭",
      title: "Cultural Programs",
      description:
        "Organizing dance, music, drama and cultural festivals to preserve Indian traditions.",
    },
    {
      icon: "📖",
      title: "Book Launches",
      description:
        "Supporting authors by organizing book release events and literary discussions.",
    },
    {
      icon: "🎓",
      title: "Educational Seminars",
      description:
        "Conducting seminars, workshops and awareness programs for students and teachers.",
    },
    {
      icon: "🌳",
      title: "Social Service",
      description:
        "Serving society through tree plantation drives, blood donation camps and community welfare activities.",
    },
    {
      icon: "👩‍🎓",
      title: "Youth Development",
      description:
        "Providing opportunities and motivation for young writers, artists and students.",
    },
    {
      icon: "🌍",
      title: "International Events",
      description:
        "Connecting Telugu communities worldwide through literary and cultural events.",
    },
  ];

  return (
    <div style={styles.page}>
      {/* Hero */}
      <section style={styles.hero}>
        <div>
          <h1 style={styles.heroTitle}>Our Activities</h1>
          <p>Serving Literature, Culture & Society</p>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.title}>What We Do</h2>

        <p style={styles.description}>
          Sri Sri Kalavedika actively organizes literary, cultural,
          educational and social service programs across India and
          internationally to promote Telugu language, culture and community
          welfare.
        </p>

        <div style={styles.grid}>
          {activities.map((activity, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.icon}>{activity.icon}</div>

              <h3 style={styles.cardTitle}>{activity.title}</h3>

              <p style={styles.cardText}>{activity.description}</p>
            </div>
          ))}
        </div>
      </section>

      
      <section style={styles.highlight}>
        <h2>Our Commitment</h2>

        <p style={styles.quote}>
          "Through literature, culture and social service, we strive to
          inspire individuals, strengthen communities and preserve our rich
          heritage for future generations."
        </p>
      </section>
    </div>
  );
}

export default Activities;