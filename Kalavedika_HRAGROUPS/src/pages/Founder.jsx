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
          <h1 style={styles.heroTitle}>వ్యవస్థాపకులు & అంతర్జాతీయ చైర్మన్</h1>
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
            వ్యవస్థాపకులు & అంతర్జాతీయ చైర్మన్
          </p>

          <p style={styles.paragraph}>
            తెలుగు భాష, సాహిత్యం, కళలు మరియు సంస్కృతిని పరిరక్షించడం, ప్రోత్సహించడం మరియు ఘనంగా చాటిచెప్పాలనే దృక్పథంతో శ్రీ శ్రీ కళావేదిక స్థాపించబడింది. కళారత్న కత్తిమండ ప్రతాప్ కుమార్ గారి నాయకత్వంలో, ఈ సంస్థ కవులు, రచయితలు, కళాకారులు, విద్యావేత్తలు మరియు సామాజిక సేవకులకు ఒక గౌరవనీయమైన వేదికగా అభివృద్ధి చెందింది.
          </p>

          <p style={styles.paragraph}>
            సాహిత్యం మరియు సామాజిక సేవ పట్ల ఆయనకున్న అంకితభావం భారతదేశంతో పాటు విదేశాల్లోని వేలాది మందికి స్ఫూర్తినిచ్చింది. సాహిత్య సదస్సులు, సాంస్కృతిక ఉత్సవాలు, పురస్కార ప్రదానోత్సవాలు మరియు సామాజిక సేవా కార్యక్రమాల ద్వారా సృజనాత్మకత, సాంస్కృతిక వారసత్వం మరియు మానవతా సేవా విలువలను బలోపేతం చేయడానికి ఆయన నిరంతరం కృషి చేస్తున్నారు.
          </p>

          <p style={styles.paragraph}>
            ఆయన లక్ష్యం భవిష్యత్తు తరం కోసం జ్ఞానం, సాంస్కృతిక అవగాహన మరియు సామాజిక బాధ్యతను ప్రోత్సహించడం.
          </p>
        </div>
        </div>
      </section>

      {/* Achievements */}

      <section style={styles.achievements}>
          <div style={styles.contentCard}>
        <h2 style={styles.title}>ప్రధాన కృషులు</h2>

        <div style={styles.grid}>
          <div className="card"style={styles.card}>
            <div style={styles.icon}>📚</div>
            <h3>సాహిత్య ప్రోత్సాహం</h3>
            <p>ప్రపంచవ్యాప్తంగా రచయితలు, కవులు మరియు విద్యావేత్తలను ప్రోత్సహించడం.</p>
          </div>

          <div className="card"style={styles.card}>
            <div style={styles.icon}>🏆</div>
            <h3>అవార్డు కార్యక్రమాలు</h3>
            <p>సాహిత్యం, కళలు మరియు సామాజిక సేవలో ఉన్న ప్రతిభను గుర్తించడం.</p>
          </div>

          <div className="card"style={styles.card}>
            <div style={styles.icon}>🎭</div>
            <h3>సాంస్కృతిక వారసత్వం</h3>
            <p>సాంస్కృతిక ఉత్సవాలను నిర్వహించడం మరియు భారతీయ సంప్రదాయాలను పరిరక్షించడం.</p>
          </div>

          <div className="card"style={styles.card}>
            <div style={styles.icon}>🌍</div>
            <h3>అంతర్జాతీయ పరిధి</h3>
            <p>ప్రపంచవ్యాప్తంగా తెలుగు సమాజాలను కలపడం.</p>
          </div>

          <div className="card"style={styles.card}>
            <div style={styles.icon}>🤝</div>
            <h3>సామాజిక సేవ</h3>
            <p>సమాజ సంక్షేమ మరియు మానవతా కార్యక్రమాలను నడిపించడం.</p>
          </div>

          <div className="card" style={styles.card}>
            <div style={styles.icon}>🎓</div>
            <h3>విద్యా కార్యక్రమాలు</h3>
            <p>విద్యా మరియు ప్రేరణాత్మక కార్యక్రమాల ద్వారా విద్యార్థులను మద్దతు ఇవ్వడం.</p>
          </div>
        </div>
        </div>
      </section>

      {/* Quote */}

      <section style={styles.quote}>
        <p style={styles.quoteText}>
          "సాహిత్యం మన మేధస్సును ప్రకాశింపజేస్తుంది, సంస్కృతి మన గుర్తింపును బలోపేతం చేస్తుంది,
          మరియు సేవ సమాజాన్ని మెరుగుపరుస్తుంది. కలిసి మన వారసత్వాన్ని పరిరక్షించి భవిష్యత్తు తరం కోసం ప్రేరణనిస్తాము."
        </p>
      </section>
    </div>
  );
}

export default Founder;