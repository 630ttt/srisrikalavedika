import React from "react";
import activityBg from "../assets/activitybg.jpg";
function Activities() {
  const styles = {
    page: {
      fontFamily: "'Poppins', sans-serif",
      color: "#333",
      minHeight: "100vh",
    
      backgroundImage: `
        linear-gradient(
          rgba(255, 255, 255, 0.04),
          rgba(65, 64, 63, 0.49)
        ),
        url(${activityBg})
      `,
    
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      backgroundRepeat: "no-repeat",
    },
    hero: {
      background:
      "linear-gradient(rgba(6, 4, 3, 0.56), rgba(23, 9, 9, 0.63)), url('/activities-banner.jpg')",
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
       fontSize: "clamp(38px, 6vw, 65px)",
      fontWeight: "bold",
      margin: "0 0 15px",
      color: "#FFD700",
      letterSpacing: "2px",
    },

    section: {
      padding: "70px 10%",
      maxWidth: "1200px",
      margin: "auto",
    },

    title: {
      textAlign: "center",
      color: "#e6a422",
      fontSize: "36px",
      marginBottom: "20px",
    },

    description: {
      textAlign: "center",
      color: "#eee4e4",
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
      background: "#e3d2d2",
      borderRadius: "12px",
      padding: "30px",
      boxShadow: "0 5px 15px rgba(0,0,0,.1)",
      textAlign: "center",
      transition: "0.3s",
      margin:"20px",
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
  padding: "40px",
  borderRadius: "20px",
  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)",
  backdropFilter: "blur(5px)",
  border: "1px solid rgba(255, 255, 255, 0.15)",
},
  };

  const activities = [
    {
      icon: "📚",
      title: "సాహిత్య సదస్సులు",
      description:
        "రచయితలు, కవులు మరియు పండితులను ప్రోత్సహించడానికి జాతీయ మరియు అంతర్జాతీయ సాహిత్య సదస్సులను నిర్వహించడం.",
    },
    {
      icon: "🏆",
      title: "పురస్కార సమారోహాలు",
      description:
        "సాహిత్యం, కళలు, విద్య మరియు సామాజిక సేవలో ఉన్నత వ్యక్తిత్వాలను గౌరవించడం.",
    },
    {
      icon: "🎭",
      title: "సాంస్కృతిక కార్యక్రమాలు",
      description:
        "భారతీయ సంప్రదాయాలను పరిరక్షించడానికి నృత్యం, సంగీతం, నాటక మరియు సాంస్కృతిక ఉత్సవాలను నిర్వహించడం.",
    },
    {
      icon: "📖",
      title: "పుస్తక ప్రారంభాలు",
      description:
        "రచయితలను ప్రోత్సహించడానికి పుస్తక విడుదల కార్యక్రమాలు మరియు సాహిత్య చర్చలను నిర్వహించడం.",
    },
    {
      icon: "🎓",
      title: "విద్యా సదస్సులు",
      description:
        "విద్యార్థులు మరియు ఉపాధ్యాయుల కోసం సదస్సులు, వర్క్‌షాప్‌లు మరియు అవగాహన కార్యక్రమాలను నిర్వహించడం.",
    },
    {
      icon: "🌳",
      title: "సామాజిక సేవ",
      description:
        "చెట్టు నాటడం, రక్తదానం శిబిరాలు మరియు సమాజ సంక్షేమ కార్యక్రమాల ద్వారా సమాజానికి సేవ చేయడం.",
    },
    {
      icon: "👩‍🎓",
      title: "యువత అభివృద్ధి",
      description:
        "యువ రచయితలు, కళాకారులు మరియు విద్యార్థులకు అవకాశాలు మరియు ప్రేరణను అందించడం.",
    },
    {
      icon: "🌍",
      title: "అంతర్జాతీయ కార్యక్రమాలు",
      description:
        "ప్రపంచవ్యాప్తంగా తెలుగు సమాజాలను సాహిత్య మరియు సాంస్కృతిక కార్యక్రమాల ద్వారా అనుసంధానించడం.",
    },
     {
      icon: "✍️  ",
      title: "రచయితలు & కవులను మద్దతు ఇవ్వడం",
      description:
        "ఉదయించే మరియు స్థాపిత రచయితలు, కవులు మరియు సాహిత్య వ్యక్తిత్వాలను తమ ప్రతిభను ప్రదర్శించడానికి వేదికను అందించడం.",
    },
  ];

  return (
    <div style={styles.page}>
      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.contentCard}>

        <div>
          <h1 style={styles.heroTitle}>మా కార్యక్రమాలు</h1>
          <p>సాహిత్యం, సంస్కృతి & సమాజానికి సేవ</p>
        </div>
        </div>
        
      </section>

      <section style={styles.section}>
       <div style={styles.contentCard}>
        <h2 style={styles.title}>మేము ఏమి చేస్తాము</h2>
            
        <p style={styles.description}>
          శ్రీ శ్రీ కళావేదిక తెలుగు భాష, సంస్కృతి మరియు సమాజ సంక్షేమాన్ని ప్రోత్సహించేందుకు భారతదేశ వ్యాప్తంగా మరియు అంతర్జాతీయ స్థాయిలో సాహిత్య, సాంస్కృతిక, విద్యా మరియు సామాజిక సేవా కార్యక్రమాలను చురుకుగా నిర్వహిస్తోంది.

రచయితలు, కవులు, కళాకారులు, విద్యార్థులు మరియు అభివృద్ధి చెందుతున్న ప్రతిభావంతులు తమ సామర్థ్యాలను ప్రదర్శించి గుర్తింపు పొందేందుకు మేము ఒక వేదికను అందిస్తున్నాము. సాహిత్య మరియు సాంస్కృతిక కార్యక్రమాలతో పాటు, సామాజిక సంక్షేమం, పర్యావరణ పరిరక్షణపై అవగాహన మరియు సమాజ అభివృద్ధి కార్యక్రమాలకు కూడా మేము చురుకుగా మద్దతు అందిస్తున్నాము. భారతదేశంతో పాటు ప్రపంచవ్యాప్తంగా తెలుగు సంస్కృతిని ప్రోత్సహిస్తూ, సాహిత్య మరియు సాంస్కృతిక సమాజాలను అనుసంధానించేందుకు కృషి చేస్తున్నాము.
        </p>
           </div>

        <div style={styles.grid}>
          {activities.map((activity, index) => (
            <div key={index} className="card" style={styles.card}>
              <div style={styles.icon}>{activity.icon}</div>

              <h3 style={styles.cardTitle}>{activity.title}</h3>

              <p style={styles.cardText}>{activity.description}</p>
            </div>
            
          ))}
        </div>
      </section>

      
      <section style={styles.highlight}>
        <h2>మా కట్టుబాటు</h2>

        <p style={styles.quote}>
          “సాహిత్యం, సంస్కృతి మరియు సామాజిక సేవ ద్వారా వ్యక్తులకు స్ఫూర్తినిస్తూ, సమాజాలను బలోపేతం చేస్తూ, మన గొప్ప సాంస్కృతిక వారసత్వాన్ని భవిష్యత్ తరాల కోసం పరిరక్షించేందుకు మేము కృషి చేస్తున్నాము.”
        </p>
      </section>
    </div>
  );
}

export default Activities;