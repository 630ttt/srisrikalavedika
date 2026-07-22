import React from "react";
import awardsPic from "../assets/awards.jpg";
function Awards() {
  const styles = {
    page: {
      fontFamily: "Arial, sans-serif",
      background: "#f8f9fa",
      color: "#333",
        backgroundImage: `
             linear-gradient(
               rgba(200, 35, 35, 0.04),
               rgba(255, 255, 255, 0.07)
             ),
             url(${awardsPic})
           `,
           backgroundSize: "cover",
     backgroundPosition: "center",
     backgroundAttachment: "fixed",
     backgroundRepeat: "no-repeat",  
       },
    hero: {
      background:
        "linear-gradient(rgba(26, 23, 23, 0.69), rgba(21, 18, 18, 0.6)), url('/awards-banner.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "45vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#f7d232",
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
      fontFamily:"Georgia",
      textAlign: "center",
      color: "#ebeae8",
      fontSize: "36px",
      marginBottom: "20px",
    },

    description: {
      textAlign: "center",
      fontSize: "18px",
      color: "#f7d232",
      lineHeight: "1.8",
      marginBottom: "50px",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
      gap: "25px",
    },

    card: {
      background:
        "linear-gradient(145deg, rgba(255,255,255,0.97),  rgba(244, 167, 24, 0.98))",
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
      border: "1px solid rgba(212,175,55,0.4)",
    },

    icon: {
      fontSize: "50px",
      marginBottom: "15px",
    },

    cardTitle: {
      color: "#7B1113",
      marginBottom: "15px",
    },

    cardText: {
      color: "#666",
      lineHeight: "1.8",
    },

    highlight: {
      background: "#aa7423df",
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
    contentCard: {
  background: "rgba(0, 0, 0, 0.33)",
  padding: "100px",
  borderRadius: "35px",
  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)",
  backdropFilter: "blur(5px)",
  border: "1px solid rgba(255, 255, 255, 0.15)",
},
  };

  const awards = [
    {
      icon: "🏆",
      title: "Kala Ratna Award",
      description:
        "Presented to individuals for their outstanding contribution to literature, arts and culture.",
    },
    {
      icon: "📚",
      title: "Sahiti Ratna Award",
      description:
        "Recognizes eminent poets, writers and literary personalities for their remarkable achievements.",
    },
    {
      icon: "🎭",
      title: "Cultural Excellence Award",
      description:
        "Honours artists who have significantly contributed to music, dance, theatre and folk arts.",
    },
    {
      icon: "🌍",
      title: "International Excellence Award",
      description:
        "Presented to distinguished personalities promoting Telugu language and culture worldwide.",
    },
    {
      icon: "🎓",
      title: "Education Excellence Award",
      description:
        "Recognizes educators and institutions for their valuable contribution to education.",
    },
    {
      icon: "🤝",
      title: "Social Service Award",
      description:
        "Presented to individuals and organizations making an exceptional impact through community service.",
    },
    {
      icon: "🖋️",
      title: "Young Writer Award",
      description:
        "Encourages emerging writers, poets and authors with outstanding literary talent.",
    },
    {
      icon: "🌟",
      title: "Lifetime Achievement Award",
      description:
        "The highest honour recognizing a lifetime of dedication to literature, culture and society.",
    },
  ];

  return (
    <div style={styles.page}>
      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.contentCard}>
        <div>
          <h1 style={styles.heroTitle}>Awards & Recognitions</h1>
          <p>Honouring Excellence in Literature, Culture & Social Service</p>
        </div>
        </div>
      </section>

      {/* Awards Section */}
      <section style={styles.section}>
        <div style={styles.contentCard}>
        <h2 style={styles.title}>Our Prestigious Awards</h2>

        <p style={styles.description}>
          Sri Sri Kalavedika proudly recognizes outstanding personalities for
          their remarkable contributions in literature, arts, education,
          culture and social service through various prestigious awards.
        </p>

        <div style={styles.grid}>
          {awards.map((award, index) => (
            <div key={index}  className="award-card"style={styles.card}>
              <div style={styles.icon}>{award.icon}</div>

              <h3 style={styles.cardTitle}>{award.title}</h3>

              <p style={styles.cardText}>{award.description}</p>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Closing Section */}
      <section style={styles.highlight}>
        <h2>Celebrating Excellence</h2>

        <p style={styles.quote}>
          "Every award celebrates dedication, creativity, leadership and
          service, inspiring future generations to contribute to literature,
          culture and society."
        </p>
      </section>
    </div>
  );
}

export default Awards;