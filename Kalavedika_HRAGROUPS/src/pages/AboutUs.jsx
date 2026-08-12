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
      minHeight: "45vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#eba901",
      textAlign: "center",
      padding: "30px 20px",
    },

    heroTitle: {
      fontSize: "48px",
      fontWeight: "bold",
      lineHeight: "1.3",
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
      lineHeight: "1.4",
    },

    paragraph: {
      fontSize: "18px",
      lineHeight: "1.9",
      textAlign: "justify",
      color: "#f0e7e7",
    },

    cards: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
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
      lineHeight: "1.8",
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
      lineHeight: "1.8",
    },
  };

  return (
    <>
      {/* Responsive styles ONLY for About Us page */}
      <style>{`
        * {
          box-sizing: border-box;
        }

        .about-page {
          width: 100%;
          overflow-x: hidden;
        }

        .about-page .resp-content-card {
          width: 100%;
        }

        .about-page .resp-section {
          width: 100%;
        }

        .about-page .resp-bg-fixed {
          width: 100%;
        }

        /* Tablet */
        @media (max-width: 992px) {
          .about-page .resp-hero-title {
            font-size: 40px !important;
          }

          .about-page .resp-section {
            padding: 50px 6% !important;
          }

          .about-page .resp-content-card {
            padding: 30px !important;
          }

          .about-page .resp-title {
            font-size: 32px !important;
          }

          .about-page .resp-paragraph {
            font-size: 17px !important;
          }
        }

        /* Mobile */
        @media (max-width: 600px) {

          .about-page {
            width: 100%;
            overflow-x: hidden;
          }

          /* Background */
          .about-page .resp-bg-fixed {
            background-size: cover !important;
            background-position: center top !important;
            background-attachment: scroll !important;
            background-repeat: no-repeat !important;
          }

          /* Hero */
          .about-page .resp-hero {
            min-height: 30vh !important;
            padding: 25px 12px !important;
          }

          .about-page .resp-hero-title {
            font-size: 28px !important;
            line-height: 1.35 !important;
          }

          /* Cards */
          .about-page .resp-content-card {
            padding: 20px !important;
            border-radius: 14px !important;
          }

          /* Sections */
          .about-page .resp-section {
            padding: 35px 15px !important;
            width: 100% !important;
          }

          /* Section headings */
          .about-page .resp-title {
            font-size: 25px !important;
            line-height: 1.4 !important;
            margin-bottom: 15px !important;
          }

          /* Paragraphs */
          .about-page .resp-paragraph {
            font-size: 15px !important;
            line-height: 1.8 !important;
            text-align: left !important;
            
          }

          /* Grid becomes one column */
          .about-page .resp-cards {
            grid-template-columns: 1fr !important;
            gap: 18px !important;
            margin-top: 25px !important;
          }

          /* Individual cards */
          .about-page .resp-card {
            padding: 20px !important;
            font-size: 15px !important;
          }

          .about-page .resp-card-title {
            font-size: 22px !important;
          }

          /* Objectives */
          .about-page .resp-objectives {
            font-size: 15px !important;
            line-height: 1.9 !important;
          }

          /* Quote */
          .about-page .resp-highlight {
            padding: 30px 18px !important;
            font-size: 17px !important;
            line-height: 1.8 !important;
          }
        }

        /* Very small phones */
        @media (max-width: 400px) {

          .about-page .resp-hero-title {
            font-size: 24px !important;
          }

          .about-page .resp-section {
            padding: 28px 12px !important;
          }

          .about-page .resp-content-card {
            padding: 16px !important;
          }

          .about-page .resp-title {
            font-size: 22px !important;
          }

          .about-page .resp-paragraph {
            font-size: 14px !important;
          }

          .about-page .resp-objectives {
            font-size: 14px !important;
          }

          .about-page .resp-highlight {
            font-size: 15px !important;
            padding: 25px 15px !important;
          }
        }
      `}</style>

      <div className="about-page">

        <div style={styles.page} className="resp-bg-fixed">

          {/* Hero Section */}
          <section style={styles.hero} className="resp-hero">
            <div
              style={styles.contentCard}
              className="resp-content-card"
            >
              <h1
                style={styles.heroTitle}
                className="resp-hero-title"
              >
                శ్రీ శ్రీ కళావేదిక గురించి
              </h1>

             
            </div>
          </section>


          {/* About */}
          <section
            style={styles.section}
            className="resp-section"
          >
            <div
              style={styles.contentCard}
              className="resp-content-card"
            >
              <h2
                style={styles.title}
                className="resp-title"
              >
                మేము ఎవరు
              </h2>

              <p
                style={styles.paragraph}
                className="resp-paragraph"
              >
                శ్రీ శ్రీ కళావేదిక అంతర్జాతీయ సాహిత్య, సాంస్కృతిక మరియు
                సామాజిక సేవా సంస్థగా స్థాపించబడింది, ఇది తెలుగు భాష,
                సాహిత్యం, కళలు, సంస్కృతి మరియు మానవతా విలువలను
                పరిరక్షించడానికి, ప్రోత్సహించడానికి మరియు జరుపుకోవడానికి
                కృషి చేస్తుంది. ఈ సంస్థ కవులు, రచయితలు, కళాకారులు,
                ఉపాధ్యాయులు, విద్యార్థులు మరియు సామాజిక కార్యకర్తలకు
                సాహిత్యం మరియు సాంస్కృతిక కార్యకలాపాల ద్వారా సమాజానికి
                సహకరించడానికి ఒక సాధారణ వేదికను అందిస్తుంది.
              </p>

              <p
                style={{
                  ...styles.paragraph,
                  marginTop: "20px",
                }}
                className="resp-paragraph"
              >
                సంవత్సరాలుగా, శ్రీ శ్రీ కళావేదిక అనేక సాహిత్య సదస్సులు,
                కవితా సమ్మేళనాలు, అవార్డు కార్యక్రమాలు, సాంస్కృతిక ఉత్సవాలు,
                పుస్తక విడుదల కార్యక్రమాలు, విద్యా కార్యక్రమాలు మరియు
                సామాజిక సేవా కార్యక్రమాలను భారతదేశంలో మరియు విదేశాలలో
                నిర్వహించింది.
              </p>
            </div>
          </section>


          {/* Vision & Mission */}
          <section
            style={styles.section}
            className="resp-section"
          >
            <div
              style={styles.cards}
              className="resp-cards"
            >

              <div
                className="card resp-card"
                style={styles.card}
              >
                <h2
                  style={styles.cardTitle}
                  className="resp-card-title"
                >
                  దార్శనికత
                </h2>

                <p className="resp-paragraph">
                  తెలుగు సాహిత్యం, సంస్కృతి, భాష మరియు సామాజిక బాధ్యతను
                  ప్రోత్సహించే ప్రపంచవ్యాప్తంగా గుర్తింపు పొందిన వేదికగా
                  ఎదగడం.
                </p>
              </div>


              <div
                className="card resp-card"
                style={styles.card}
              >
                <h2
                  style={styles.cardTitle}
                  className="resp-card-title"
                >
                  మిషన్
                </h2>

                <p className="resp-paragraph">
                  సాహిత్య ప్రావీణ్యం, సాంస్కృతిక వారసత్వం మరియు సమాజ
                  అభివృద్ధిని విద్యా మరియు సామాజిక కార్యక్రమాల ద్వారా
                  ప్రోత్సహించడం.
                </p>
              </div>

            </div>
          </section>


          {/* Objectives */}
          <section
            style={styles.section}
            className="resp-section"
          >
            <div
              style={styles.contentCard}
              className="resp-content-card"
            >

              <h2
                style={styles.title}
                className="resp-title"
              >
                మా లక్ష్యాలు
              </h2>

              <div
                style={styles.objectives}
                className="resp-objectives"
              >
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
          <section
            style={styles.section}
            className="resp-section"
          >

            <div
              style={styles.contentCard}
              className="resp-content-card"
            >
              <h2
                style={styles.title}
                className="resp-title"
              >
                ప్రధాన కార్యక్రమాలు
              </h2>
            </div>


            <div
              style={styles.cards}
              className="resp-cards"
            >

              <div
                className="card resp-card"
                style={styles.card}
              >
                సాహిత్య సదస్సులు
              </div>

              <div
                className="card resp-card"
                style={styles.card}
              >
                జాతీయ అవార్డులు
              </div>

              <div
                className="card resp-card"
                style={styles.card}
              >
                సాంస్కృతిక కార్యక్రమాలు
              </div>

              <div
                className="card resp-card"
                style={styles.card}
              >
                పుస్తక విడుదల కార్యక్రమాలు
              </div>

              <div
                className="card resp-card"
                style={styles.card}
              >
                సామాజిక సేవా కార్యక్రమాలు
              </div>

              <div
                className="card resp-card"
                style={styles.card}
              >
                విద్యా కార్యక్రమాలు
              </div>

            </div>
          </section>


          {/* Quote */}
          <section
            style={styles.quote}
            className="resp-highlight"
          >
            “సాహిత్యం సమాజానికి స్ఫూర్తినిస్తుంది, సంస్కృతి మన గుర్తింపును
            కాపాడుతుంది, సేవ మానవత్వాన్ని బలోపేతం చేస్తుంది.”
          </section>

        </div>
      </div>
    </>
  );
}

export default AboutUs;