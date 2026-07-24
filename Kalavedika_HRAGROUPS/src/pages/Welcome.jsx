import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  const styles = {
    welcomePage: {
      width: "100%",
      height: "100vh",
      minHeight: "600px",
      background:
        "linear-gradient(135deg, #e4d1268e 0%, #1a1a1a 50%, #631515 100%)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      color: "#fff",
      overflow: "hidden",
      position: "relative",
      fontFamily: "Arial, sans-serif",
    },

    circle1: {
      position: "absolute",
      width: "400px",
      height: "400px",
      borderRadius: "50%",
      border: "1px solid rgba(212, 175, 55, 0.2)",
      top: "-200px",
      right: "-100px",
      animation: "floatCircle 8s ease-in-out infinite",
    },

    circle2: {
      position: "absolute",
      width: "300px",
      height: "300px",
      borderRadius: "50%",
      border: "1px solid rgba(238, 198, 19, 0.55)",
      bottom: "-150px",
      left: "-100px",
      animation: "floatCircleReverse 10s ease-in-out infinite",
    },

    welcomeOverlay: {
      width: "90%",
      maxWidth: "850px",
      padding: "60px 40px",
      position: "relative",
      zIndex: 2,
      background: "rgba(255, 255, 255, 0.05)",
      border: "1px solid rgba(212, 175, 55, 0.35)",
      borderRadius: "20px",
      backdropFilter: "blur(8px)",
      boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5)",
      animation: "fadeIn 1.5s ease forwards",
    },

    welcomeText: {
      fontSize: "15px",
      color: "#D4AF37",
      letterSpacing: "4px",
      marginBottom: "20px",
      textTransform: "uppercase",
      fontWeight: "500",
      animation: "fadeDown 1s ease 0.3s both",
    },

    title: {
      fontFamily: "'Noto Serif Telugu', serif",
      fontSize: "clamp(2.5rem, 7vw, 5rem)",
      color: "#FFD700",
      margin: "0",
      fontWeight: "bold",
      textShadow: "0 3px 15px rgba(255, 215, 0, 0.2)",
      animation: "titleReveal 1.2s ease 0.5s both",
    },

    line: {
      width: "100px",
      height: "2px",
      background: "#D4AF37",
      margin: "25px auto",
      borderRadius: "5px",
      animation: "lineGrow 1s ease 1s both",
    },

    subTitle: {
      fontFamily: "Georgia, serif",
      fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
      color: "#fff",
      margin: "0 0 20px",
      letterSpacing: "2px",
      fontWeight: "500",
      animation: "slideUp 1s ease 1.1s both",
    },

    description: {
      fontSize: "18px",
      lineHeight: "1.8",
      color: "#ddd",
      margin: "0 auto",
      maxWidth: "650px",
      animation: "fadeIn 1s ease 1.4s both",
    },

    button: {
      marginTop: "35px",
      padding: "15px 40px",
      background: "#7B1113",
      color: "#fff",
      border: "1px solid #D4AF37",
      borderRadius: "30px",
      fontSize: "17px",
      fontWeight: "600",
      letterSpacing: "1px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 5px 20px rgba(123, 17, 19, 0.4)",
      animation: "buttonAppear 1s ease 1.7s both",
    },

    bottomText: {
      position: "absolute",
      bottom: "25px",
      left: "0",
      right: "0",
      fontSize: "12px",
      color: "rgba(255, 255, 255, 0.5)",
      letterSpacing: "3px",
      zIndex: 2,
      animation: "fadeIn 2s ease 2s both",
    },
  };

  return (
    <div style={styles.welcomePage}>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes fadeDown {
            from {
              opacity: 0;
              transform: translateY(-25px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes titleReveal {
            from {
              opacity: 0;
              transform: scale(0.8);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes lineGrow {
            from {
              width: 0;
              opacity: 0;
            }
            to {
              width: 100px;
              opacity: 1;
            }
          }

          @keyframes buttonAppear {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes floatCircle {
            0%, 100% {
              transform: translate(0, 0);
            }
            50% {
              transform: translate(-30px, 30px);
            }
          }

          @keyframes floatCircleReverse {
            0%, 100% {
              transform: translate(0, 0);
            }
            50% {
              transform: translate(30px, -30px);
            }
          }
        `}
      </style>

      {/* Decorative Circles */}
      <div style={styles.circle1}></div>
      <div style={styles.circle2}></div>

      {/* Main Content */}
      <div style={styles.welcomeOverlay}>

        <p style={styles.welcomeText}>
          Welcome To
        </p>

        <h1 style={styles.title}>
          శ్రీ శ్రీ కళావేదిక
        </h1>

        <div style={styles.line}></div>

        

        <Link
          to="/home"
          style={{ textDecoration: "none" }}
        >
          <button
            style={styles.button}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#A52A2A";
              e.currentTarget.style.transform = "translateY(-4px) scale(1.03)";
              e.currentTarget.style.boxShadow =
                "0 10px 30px rgba(212, 175, 55, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#7B1113";
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow =
                "0 5px 20px rgba(123, 17, 19, 0.4)";
            }}
          >
            Explore More
          </button>
        </Link>

      </div>

      {/* Bottom Text */}
      <div style={styles.bottomText}>
        LITERATURE • CULTURE • SERVICE
      </div>

    </div>
  );
}

export default Welcome;