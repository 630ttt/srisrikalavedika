import React from "react";
import founder from "../assets/founder.png";
import aboutBg from "../assets/about-bg.jpg";
import founderBg from "../assets/founder-bg.jpg";
import imagePic1 from "../gallery/image 8.jpg";
import imagePic2 from "../gallery/image 3.jpg";
import imagePic3 from "../gallery/image 4.jpg";

import { Link } from "react-router-dom";

function Home() {
  const styles = {
   hero: {
     backgroundImage: `linear-gradient(
     rgba(0, 0, 0, 0.22),
     rgba(0, 0, 0, 0.24)
     ), url('https://media.craiyon.com/2025-09-12/YbwIl4IsQeCtLwSSQEHJxw.webp')`,
     backgroundSize: "cover",
     backgroundPosition: "center center",
     backgroundRepeat: "no-repeat",
     minHeight: "90vh",
     width: "100%",
     display: "flex",
     justifyContent: "center",
     alignItems: "center",
     color: "#fff",
     textAlign: "center",
     position: "relative",
     boxSizing: "border-box",
   },

    overlay: {
     background: "rgba(171, 174, 26, 0.01)",
     padding: "50px",
     borderRadius: "15px",
     width: "80%",
     maxWidth: "800px",
     boxSizing: "border-box",
  },

    heading: {
    fontFamily: "'Noto Serif Telugu', serif",
    fontSize: "clamp(2rem, 5vw, 3.8rem)",
    color: "#FFD700",
    marginBottom: "15px",
    fontWeight: "600",
    },
    subHeading: {
      fontFamily: "'Noto Serif Telugu', serif",
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
      padding: "20px 10%",
      textAlign: "center",
      backgroundImage: `linear-gradient(rgba(210, 196, 196, 0.23), rgba(27, 27, 27, 0.77)), url(${aboutBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      
      
},
    title: {
      fontFamily: "'Noto Serif Telugu', serif",
      fontSize: "40px",
      color: "#eabe0f",
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
      background:
        "linear-gradient(145deg, rgba(255,255,255,0.97),  rgba(244, 167, 24, 0.98))",
      borderRadius: "10px",
      padding: "35px 25px",
      textAlign: "center",
      minHeight: "100px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
      transition: "all 0.4s ease",
      cursor: "pointer",
      border: "1px solid rgba(212,175,55,0.4)",
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
      height: "400px",
      objectFit: "cover",
      borderRadius: "10px",
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
     const galleryImages = [
       {
         image: imagePic1,
        alt: "Image 1",
       }, 
       {
         image: imagePic2,
         alt: "Image 2",
       },
       {
        image: imagePic3,
        alt: "Image 3",
      },
  ];
  return (
    <div>

      {/* Hero */}

      <section style={styles.hero}>
        <div style={styles.overlay} className="resp-hero-content">
          <h1 className="hero-title resp-hero-title" style={styles.heading}>శ్రీ శ్రీ కళావేదిక</h1>

          <h2 className="hero-subtitle" style={styles.subHeading}>
            Sri Sri Kalavedika
          </h2>

          <p className="hero-description">
            International Literary, Cultural &
            Social Service Organization
          </p>

          <Link to="/membership">
           <button style={styles.button} className="resp-touch-btn">
            Become a Member
           </button>
          </Link>
        </div>
      </section>

      {/* About */}
       
      <section style={styles.aboutSection} className="resp-section resp-bg-fixed">
        <div style={styles.contentCard} className="resp-content-card">
        <h2 className="about-title" style={styles.title}>మా గురించి</h2>

        <p className="about-text" style={styles.paragraph}>
          శ్రీ శ్రీ కళావేదిక తెలుగు భాష, సాహిత్యం, కళలు, సంస్కృతి మరియు మానవతా విలువలను ప్రోత్సహించేందుకు కృషి చేస్తున్న ప్రముఖ సాహిత్య, సాంస్కృతిక మరియు సామాజిక సేవా సంస్థ.

సృజనాత్మకతను పెంపొందించడం, సాంస్కృతిక విలువలను బలోపేతం చేయడం అనే లక్ష్యంతో స్థాపించబడిన శ్రీ శ్రీ కళావేదిక జాతీయ మరియు అంతర్జాతీయ స్థాయిలో సాహిత్య సదస్సులు, కవితా సమ్మేళనాలు, సాంస్కృతిక ఉత్సవాలు, పురస్కార ప్రదానోత్సవాలు, విద్యా కార్యక్రమాలు మరియు సామాజిక సంక్షేమ కార్యక్రమాలను నిర్వహిస్తోంది.

ఈ కార్యక్రమాల ద్వారా ప్రతిభను గుర్తించి సత్కరించడం, అభివృద్ధి చెందుతున్న కొత్త ప్రతిభను ప్రోత్సహించడం మరియు ప్రపంచవ్యాప్తంగా ఉన్న తెలుగు మాట్లాడే సమాజాల మధ్య ఐక్యతను పెంపొందించడం కోసం శ్రీ శ్రీ కళావేదిక నిరంతరం కృషి చేస్తోంది.
        </p>
        </div>
        
      </section>

      {/* Vision Mission */}

      <section  style={styles.aboutSection} className="resp-section resp-bg-fixed">
         
       <div style={styles.cards} className="resp-grid-280">

        <div  style={styles.card}>
            <h2 >దార్శనికత</h2>

            <p className="about-section1">
              ప్రపంచవ్యాప్తంగా తెలుగు సాహిత్యం, భాష, కళలు మరియు సంస్కృతిని పరిరక్షించి, ప్రోత్సహించడం.
            </p>
          </div>

         <div  style={styles.card}>
            <h2>మిషన్</h2>

            <p className="about-section1">
              రచయితలు, కవులు, కళాకారులు,
              విద్యార్థులు మరియు సామాజిక కార్యకర్తలను
              కార్యక్రమాలు, అవార్డులు మరియు సామాజిక సేవ ద్వారా ప్రోత్సహించడం.
            </p>
          </div>

        </div>

      </section>

      {/* Founder */}

      <section style={styles.found} className="resp-found resp-bg-fixed">

        <img
         className="founder-image" 
          src={founder}
          alt="Founder"
          style={styles.founderImage}
        />

        <div style={styles.founderContent}>
          <h2 style={styles.title}>
           వ్యవస్థాపకులు మరియు చైర్మన్
          </h2>

          <h3>
            కళారత్న కత్తిమండ ప్రతాప్ కుమార్
          </h3>

          <p style={styles.paragraph}>
            శ్రీ శ్రీ కళావేదిక వ్యవస్థాపకులు మరియు చైర్మన్‌గా సాహిత్యం, సంస్కృతి మరియు సామాజిక సంక్షేమ అభివృద్ధి కోసం నిరంతరం కృషి చేస్తున్నారు. సృజనాత్మకతను ప్రోత్సహించడం, ప్రతిభావంతులను ఒకే వేదికపైకి తీసుకురావడం పట్ల ఉన్న లోతైన ఆసక్తితో, కళాత్మక ప్రతిభను గౌరవించి, ప్రోత్సహించి, అభివృద్ధి చేసే వేదికగా శ్రీ శ్రీ కళావేదికను స్థాపించారు.
          </p>
        </div>

      </section>

      {/* Activities */}

       <section style={styles.aboutSection} className="resp-section resp-bg-fixed">
       <div style={styles.contentCard} className="resp-content-card">

        <h2 style={styles.title}>Our Activities</h2>

        <div  className="activitycard resp-grid-280" style={styles.cards}>

          <div style={styles.card}>📚 సాహిత్య సదస్సులు</div>

           <div  style={styles.card}>🏆 అవార్డు కార్యక్రమాలు</div>

          <div  style={styles.card}>🎭 సాంస్కృతిక కార్యక్రమాలు</div>

           <div  style={styles.card}>🌳 సామాజిక సేవ</div>

           <div  style={styles.card}>🎓 విద్యా కార్యక్రమాలు</div>

           <div  style={styles.card}>🌍 అంతర్జాతీయ కార్యక్రమాలు</div>

        </div>
        </div>

      </section>

      {/* Gallery */}
    <section style={styles.aboutSection} className="resp-section resp-bg-fixed">
      <h2 style={styles.title} className="resp-hero-title">Gallery</h2>

      <div style={styles.gallery} className="resp-grid-250">
      {galleryImages.map((item, index) => (
      <div key={index} >
        <img
          src={item.image}
          alt={item.alt}
          style={styles.image}
          className="resp-gallery-image"
        />
     </div>
  ))}
       </div>
   </section>

    </div>
  );
}

export default Home;