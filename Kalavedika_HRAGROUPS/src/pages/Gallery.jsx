import React, { useState, useEffect, useRef } from "react";

import galleryHead from "../assets/galleryhead.jpg";
import galleryHEad from "../assets/gallery-head.jpg";
import { fetchGallery } from "../galleryService";
import { resolveAssetUrl } from "../services/api.js";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);

  const styles = {
    page: {
      fontFamily: "'Noto Serif Telugu', Arial, sans-serif",
      backgroundColor: "#f8f3ed",
      color: "#333",
      minHeight: "100vh",
      backgroundImage: `
        linear-gradient(
          rgba(255, 248, 235, 0.88),
          rgba(255, 248, 235, 0.88)
        ),
        url(${galleryHead})
      `,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
    },

    /* HERO */
    hero: {
      backgroundImage: `
        linear-gradient(
          rgba(60, 10, 10, 0.55),
          rgba(60, 10, 10, 0.75)
        ),
        url(${galleryHEad})
      `,
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "48vh",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      textAlign: "center",
      padding: "40px 20px",
      boxSizing: "border-box",
    },

    heroCard: {
      background: "rgba(0, 0, 0, 0.35)",
      padding: "45px 60px",
      borderRadius: "25px",
      backdropFilter: "blur(6px)",
      WebkitBackdropFilter: "blur(6px)",
      border: "1px solid rgba(255,255,255,0.25)",
      boxShadow: "0 10px 40px rgba(0,0,0,0.35)",
      maxWidth: "850px",
    },

    heroTitle: {
      fontSize: "clamp(38px, 6vw, 65px)",
      fontWeight: "bold",
      margin: "0 0 15px",
      color: "#FFD700",
      letterSpacing: "2px",
    },

    heroText: {
      fontSize: "clamp(16px, 2vw, 21px)",
      lineHeight: "1.8",
      margin: 0,
    },

    /* GALLERY SECTION */
    section: {
      maxWidth: "1300px",
      margin: "0 auto",
      padding: "80px 25px",
      position: "relative",
    },

    heading: {
      textAlign: "center",
      color: "#7B1113",
      fontSize: "clamp(30px, 4vw, 44px)",
      marginBottom: "20px",
      fontWeight: "bold",
    },

    description: {
      textAlign: "center",
      color: "#555",
      fontSize: "18px",
      maxWidth: "900px",
      margin: "0 auto 55px",
      lineHeight: "1.9",
    },

    gallery: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "28px",
    },

    card: {
      position: "relative",
      borderRadius: "12px",
      overflow: "hidden",
      cursor: "pointer",
      background: "#fff",
      boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
      transition: "transform 0.25s ease, box-shadow 0.25s ease",
      aspectRatio: '4 / 3',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      transition: "transform 0.6s ease",
    },


    addButton: {
      position: "absolute",
      right: "20px",
      bottom: "-20px",
      width: "56px",
      height: "56px",
      borderRadius: "50%",
      background: "#7B1113",
      color: "#fff",
      border: "none",
      fontSize: "30px",
      cursor: "pointer",
      boxShadow: "0 6px 18px rgba(0,0,0,0.3)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    message: {
      position: "fixed",
      right: "20px",
      top: "20px",
      padding: "12px 16px",
      borderRadius: "8px",
      color: "#fff",
      zIndex: 10000,
    },

    /* FOOTER */
    footer: {
      background: "#aa7423df",
      color: "#fff",
      textAlign: "center",
      padding: "70px 20px",
      marginTop: "20px",
    },

    footerTitle: {
      fontSize: "32px",
      color: "#FFD700",
      marginBottom: "15px",
    },

    quote: {
      fontSize: "20px",
      lineHeight: "1.8",
      fontStyle: "italic",
      maxWidth: "900px",
      margin: "20px auto 0",
    },

    /* LIGHTBOX */
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.9)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999,
      padding: "30px",
      boxSizing: "border-box",
    },

    largeImage: {
      maxWidth: "90%",
      maxHeight: "85%",
      objectFit: "contain",
      borderRadius: "15px",
      boxShadow: "0 10px 50px rgba(0,0,0,0.7)",
    },

    closeButton: {
      position: "absolute",
      top: "25px",
      right: "35px",
      background: "rgba(255,255,255,0.15)",
      border: "none",
      color: "#fff",
      fontSize: "35px",
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      cursor: "pointer",
    },
  };

  useEffect(() => {
    let mounted = true;
    async function load() {
      setLoading(true);
      try {
        const imgs = await fetchGallery();
        if (mounted) setImages(imgs);
      } catch (err) {
        console.error(err);
        setMessage('Failed to load gallery');
        setMessageType('error');
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => { mounted = false };
  }, []);


  return (
    <div style={styles.page} className="resp-bg-fixed">

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroCard} className="resp-gallery-hero-card">
          <h1 style={styles.heroTitle} className="resp-hero-title">
           మా చిత్రాల గ్యాలరీ
          </h1>

          <p style={styles.heroText}>
           శ్రీ శ్రీ కళావేదిక సాహిత్యం, సంస్కృతి, వేడుకలు మరియు సేవా కార్యక్రమాల ద్వారా సాగించిన స్ఫూర్తిదాయక ప్రయాణంలోని కొన్ని జ్ఞాపకాలు.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section style={styles.section} className="resp-section">

        <h2 style={styles.heading}>
          స్మరణీయ క్షణాలు
        </h2>

        <p style={styles.description}>
          శ్రీ శ్రీ కళావేదిక ద్వారా సాహిత్యం, సంస్కృతి మరియు సేవా కార్యక్రమాలలోని స్మరణీయ క్షణాలు మరియు cherished జ్ఞాపకాలను మా ఫోటోలు ద్వారా అన్వేషించండి.
          సాహిత్య సదస్సులు మరియు సాంస్కృతిక వేడుకల నుండి
          పురస్కార సమారోహాలు, సామాజిక సేవా కార్యక్రమాలు మరియు ప్రత్యేక
          ఈవెంట్ల వరకు, ప్రతి ఫోటో మా సాహిత్యాన్ని ప్రోత్సహించే
          ప్రయాణాన్ని, సంస్కృతిని పరిరక్షించడం మరియు సమాజానికి సేవ చేయడం ప్రతిబింబిస్తుంది.
        </p>

        <div style={styles.gallery} className="resp-grid-280">
          {loading ? (
            <div>Loading images...</div>
          ) : (
            images.map((item, index) => {
              const imageUrl = resolveAssetUrl(typeof item === 'string' ? item : item.image_url);
              const filename = imageUrl.split('/').pop();
              return (
                <div
                  key={index}
                  style={styles.card}
                  className="gallery-card"
                  onClick={() => setSelectedImage(imageUrl)}
                >
                  <img
                    src={imageUrl}
                    alt={`Sri Sri Kalavedika Gallery ${index + 1}`}
                    style={styles.image}
                    className="gallery-image"
                  />
                </div>
              );
            })
          )}
        </div>

      </section>

      {/* FOOTER */}
      <section style={styles.footer} className="resp-highlight">
        <h2 style={styles.footerTitle}>
          Our Memories
        </h2>

        <p style={styles.quote}>
          "Every photograph tells a story of our commitment
          to literature, culture and social service.
          Together, we continue creating memories that
          inspire future generations."
        </p>
      </section>

      {/* IMAGE LIGHTBOX */}
      {selectedImage && (
        <div
          style={styles.overlay}
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="resp-close-btn"
            style={styles.closeButton}
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="Large Gallery"
            style={styles.largeImage}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Messages */}
      {message && (
        <div
          style={{
            ...styles.message,
            background: messageType === 'success' ? 'rgba(40,167,69,0.95)' : 'rgba(220,53,69,0.95)'
          }}
        >
          {message}
        </div>
      )}

    </div>
  );
}

export default Gallery;