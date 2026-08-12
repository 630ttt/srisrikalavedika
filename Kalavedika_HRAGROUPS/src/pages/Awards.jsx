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
      title: "కళా రత్న అవార్డు",
      description:
        "సాహిత్యం, కళలు మరియు సంస్కృతికి వారి అసాధారణ కృషికి వ్యక్తులకు అందించబడింది.",
    },
    {
      icon: "📚",
      title: "సాహితీ రత్న అవార్డు",
      description:
        "ప్రఖ్యాత కవులు, రచయితలు మరియు సాహిత్య వ్యక్తిత్వాలను వారి విశిష్టమైన సాధనల కోసం గుర్తిస్తుంది.",
    },
    {
      icon: "🎭",
      title: "సాంస్కృతిక ఉత్తమత అవార్డు",
      description:
        "సంగీతం, నృత్యం, నాటక మరియు ప్రజా కళలకు గణనీయమైన కృషి చేసిన కళాకారులను గౌరవిస్తుంది.",
    },
    {
      icon: "🌍",
      title: "అంతర్జాతీయ ఉత్తమత అవార్డు",
      description:
        "ప్రపంచవ్యాప్తంగా తెలుగు భాష మరియు సంస్కృతిని ప్రోత్సహిస్తున్న ప్రతిష్టాత్మక వ్యక్తిత్వాలకు అందించబడింది.",
    },
    {
      icon: "🎓",
      title: "విద్యా ఉత్తమత అవార్డు",
      description:
        "విద్యకు వారి విలువైన కృషికి విద్యావేత్తలు మరియు సంస్థలను గుర్తిస్తుంది.",
    },
    {
      icon: "🤝",
      title: "సామాజిక సేవ అవార్డు",
      description:
        "సామాజిక సేవ ద్వారా అసాధారణ ప్రభావం చూపుతున్న వ్యక్తులు మరియు సంస్థలకు అందించబడింది.",
    },
    {
      icon: "🖋️",
      title: "యంగ్ రైటర్ అవార్డు",
      description:
        "అసాధారణ సాహిత్య ప్రతిభ కలిగిన కొత్త రచయితలు, కవులు మరియు రచయితలను ప్రోత్సహిస్తుంది.",
    },
    {
      icon: "🌟",
      title: "లైఫ్‌టైమ్ అచీవ్‌మెంట్ అవార్డు",
      description:
        "సాహిత్యం, సంస్కృతి మరియు సమాజానికి జీవితకాల కట్టుబాటును గుర్తించే అత్యున్నత గౌరవం.",
    },
  ];

  return (
    <div style={styles.page} className="resp-bg-fixed">
      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.contentCard} className="resp-awards-card resp-content-card">
        <div>
          <h1 style={styles.heroTitle} className="resp-hero-title">పురస్కారాలు & గుర్తింపులు</h1>
          <p>సాహిత్యం, సంస్కృతి & సామాజిక సేవలో ఉన్నతతను గౌరవించడం</p>
        </div>
        </div>
      </section>

      {/* Awards Section */}
      <section style={styles.section} className="resp-section">
        <div style={styles.contentCard} className="resp-awards-card resp-content-card">
        <h2 style={styles.title}>మా ప్రతిష్ఠాత్మక పురస్కారాలు</h2>

        <p style={styles.description}>
          శ్రీ శ్రీ కళావేదిక సాహిత్య, కళలు, విద్య, సంస్కృతి మరియు సామాజిక సేవలో
          ఉన్నతమైన వ్యక్తిత్వాలను వివిధ ప్రతిష్ఠాత్మక పురస్కారాల ద్వారా ఘనంగా గుర్తిస్తుంది.
        </p>

        <div style={styles.grid} className="resp-grid-280">
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
      <section style={styles.highlight} className="resp-highlight">
        <h2>ఉన్నతతను ఘనంగా జరుపుకుంటూ</h2>

        <p style={styles.quote}>
          "ప్రతి పురస్కారం కట్టుబాటు, సృజనాత్మకత, నాయకత్వం మరియు
          సేవను ఘనంగా జరుపుకుంటుంది, భవిష్యత్తు తరం సాహిత్యం,
          సంస్కృతి మరియు సమాజానికి సేవ చేయడానికి ప్రేరణనిస్తుంది."
        </p>
      </section>
    </div>
  );
}

export default Awards;