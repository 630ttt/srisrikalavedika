import React from "react";
import aboutusBg from "../assets/aboutus-bg.jpg";

function AboutUs() {
  const styles = {
    page: {
  fontFamily: "'Poppins', sans-serif",
  color: "#333",
  minHeight: "100vh",

  backgroundImage: `
    linear-gradient(
      rgba(255, 255, 255, 0.37),
      rgba(255, 255, 255, 0.07)
    ),
    url(${aboutusBg})
  `,

  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  backgroundRepeat: "no-repeat",
},
contentCard: {
  background: "rgba(0, 0, 0, 0.33)",
  padding: "40px",
  borderRadius: "20px",
  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)",
  backdropFilter: "blur(5px)",
  border: "1px solid rgba(255, 255, 255, 0.15)",
},

    hero: {
  background: "rgba(0, 0, 0, 0.33)",
  backgroundSize: "cover",
  backgroundPosition: "center",
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

    section: {
  padding: "70px 10%",
  maxWidth: "1200px",
  margin: "auto",
  background: "transparent",
},

    title: {
      color: "#dcae25",
      textAlign: "center",
      fontSize: "36px",
      marginBottom: "20px",
    },

    paragraph: {
      fontSize: "18px",
      lineHeight: "1.9",
      textAlign: "justify",
      color: "#f0e7e7",
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
  
    cardTitle: {
      color: "#dcae25",
      marginBottom: "15px",
    },

    objectives: {
      marginTop: "30px",
      lineHeight: "2",
      fontSize: "18px",
       color: "#fff",
    },

    quote: {
      background: "#aa7423df",
      color: "#fff",
      padding: "50px",
      textAlign: "center",
      fontSize: "22px",
      fontStyle: "italic",
    },
  };

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.contentCard} className="resp-content-card">
        <div>
          <h1 style={styles.heroTitle}>శ్రీ శ్రీ కళావేదిక గురించి</h1>
          <p style={styles.paragraph}>అంతర్జాతీయ సాహిత్య, సాంస్కృతిక మరియు సామాజిక సేవా సంస్థ</p>
        </div>
        </div>
      </section>

      {/* About */}
      <section style={styles.section} className="resp-section">
         <div style={styles.contentCard} className="resp-content-card">
        <h2 style={styles.title}>మేము ఎవరు</h2>

        <p style={styles.paragraph}>
          శ్రీ శ్రీ కళావేదిక అంతర్జాతీయ సాహిత్య, సాంస్కృతిక మరియు సామాజిక
          సేవా సంస్థగా స్థాపించబడింది, ఇది తెలుగు భాష, సాహిత్యం, కళలు,
          సంస్కృతి మరియు మానవతా విలువలను పరిరక్షించడానికి, ప్రోత్సహించడానికి
          మరియు జరుపుకోవడానికి కృషి చేస్తుంది. ఈ సంస్థ కవులు, రచయితలు,
          కళాకారులు, ఉపాధ్యాయులు, విద్యార్థులు మరియు సామాజిక కార్యకర్తలకు
          సాహిత్యం మరియు సాంస్కృతిక కార్యకలాపాల ద్వారా సమాజానికి
          సహకరించడానికి ఒక సాధారణ వేదికను అందిస్తుంది.
        </p>

        <p style={{ ...styles.paragraph, marginTop: "20px" }}>
          సంవత్సరాలుగా, శ్రీ శ్రీ కళావేదిక అనేక సాహిత్య సదస్సులు,
          కవితా సమ్మేళనాలు, అవార్డు కార్యక్రమాలు, సాంస్కృతిక ఉత్సవాలు,
          పుస్తక విడుదల కార్యక్రమాలు, విద్యా కార్యక్రమాలు మరియు సామాజిక సేవా
          కార్యక్రమాలను భారతదేశంలో మరియు విదేశాలలో నిర్వహించింది.
        </p>
        </div>
      </section>
      

      {/* Vision & Mission */}
      <section style={styles.section} className="resp-section">
        <div style={styles.cards}>
          <div className="card" style={styles.card}>
            <h2 style={styles.cardTitle}>దార్శనికత</h2>

            <p>
             తెలుగు సాహిత్యం, సంస్కృతి, భాష మరియు సామాజిక బాధ్యతను ప్రోత్సహించే ప్రపంచవ్యాప్తంగా గుర్తింపు పొందిన వేదికగా ఎదగడం.
            </p>
          </div>

          <div className="card" style={styles.card}>
            <h2 style={styles.cardTitle}>మిషన్</h2>

            <p>
              సాహిత్య ప్రావీణ్యం, సాంస్కృతిక వారసత్వం మరియు సమాజ అభివృద్ధిని విద్యా మరియు సామాజిక కార్యక్రమాల ద్వారా ప్రోత్సహించడం.
            </p>
          </div>
        </div>
        
        
      </section>

      {/* Objectives */}
      <section style={styles.section} className="resp-section">
        <div style={styles.contentCard} className="resp-content-card">
        <h2 style={styles.title}>మా లక్ష్యాలు</h2>

        <div style={styles.objectives}>
          తెలుగు భాష మరియు సాహిత్యాన్ని ప్రోత్సహించడం
          <br />
          రచయితలు మరియు కవులను ప్రోత్సహించడం
          <br />
          సాహిత్య సదస్సులను నిర్వహించడం
          <br />
          సాంస్కృతిక ఉత్సవాలను నిర్వహించడం
          <br />
          ప్రతిభను అవార్డుల ద్వారా గుర్తించడం
          <br />
          యువ కళాకారులు మరియు విద్యార్థులను మద్దతు ఇవ్వడం
          <br />
          పుస్తక విడుదల కార్యక్రమాలను నిర్వహించడం
          <br />
          సామాజిక సేవా కార్యక్రమాలు
          <br />
          పర్యావరణ అవగాహన కార్యక్రమాలు
          <br />
          అంతర్జాతీయ సాంస్కృతిక మార్పిడి
        </div>
        </div>
      </section>

      {/* Activities */}
      <section style={styles.section} className="resp-section">
         <div style={styles.contentCard} className="resp-content-card">
        <h2 style={styles.title}>ప్రధాన కార్యక్రమాలు</h2>
        </div>
        <div style={styles.cards}>
          <div className="card" style={styles.card}>సాహిత్య సదస్సులు</div>

          <div className="card" style={styles.card}>జాతీయ అవార్డులు</div>

          <div className="card" style={styles.card}>సాంస్కృతిక కార్యక్రమాలు</div>

          <div className="card" style={styles.card}>పుస్తక విడుదల కార్యక్రమాలు</div>

          <div className="card" style={styles.card}>సామాజిక సేవా కార్యక్రమాలు</div>

          <div className="card" style={styles.card}>విద్యా కార్యక్రమాలు</div>
        </div>
      </section>

      {/* Quote */}
      <section style={styles.quote} className="resp-highlight">
        “సాహిత్యం సమాజానికి స్ఫూర్తినిస్తుంది, సంస్కృతి మన గుర్తింపును కాపాడుతుంది, సేవ మానవత్వాన్ని బలోపేతం చేస్తుంది.”
      </section>
    </div>
  );
}

export default AboutUs;