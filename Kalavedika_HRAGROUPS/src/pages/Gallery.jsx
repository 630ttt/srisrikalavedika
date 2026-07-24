import React, { useState } from "react";

import galleryHead from "../assets/galleryhead.jpg";
import galleryHEad from "../assets/gallery-head.jpg";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

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
      height: "350px",
      borderRadius: "20px",
      overflow: "hidden",
      cursor: "pointer",
      background: "#fff",
      boxShadow: "0 8px 25px rgba(80, 30, 10, 0.2)",
      transition: "transform 0.4s ease, box-shadow 0.4s ease",
    },

    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      transition: "transform 0.6s ease",
    },

    /* FOOTER */
    footer: {
      background: `
        linear-gradient(
          rgba(100, 10, 10, 0.9),
          rgba(100, 10, 10, 0.95)
        )
      `,
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

  const gallery = [
    { image: "src/gallery/Image 1.jpg" },
    { image: "src/gallery/image 2.jpg" },
    { image: "src/gallery/image 3.jpg" },
    { image: "src/gallery/image 4.jpg" },
    { image: "src/gallery/image 5.jpg" },
    { image: "src/gallery/image 6.jpg" },
    { image: "src/gallery/image 7.jpg" },
    { image: "src/gallery/image 8.jpg" },
    { image: "src/gallery/image 9.jpg" },
    { image: "src/gallery/image 10.jpg" },
    { image: "src/gallery/image 11.jpg" },
    { image: "src/gallery/image 12.jpg" },
  ];

  return (
    <div style={styles.page}>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroCard}>
          <h1 style={styles.heroTitle}>
            Our Gallery
          </h1>

          <p style={styles.heroText}>
            A glimpse into the memorable journey of
            Sri Sri Kalavedika through literature,
            culture, celebrations and service.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section style={styles.section}>

        <h2 style={styles.heading}>
          Memorable Moments
        </h2>

        <p style={styles.description}>
          Explore the memorable moments and cherished memories
          of Sri Sri Kalavedika through our collection of photographs.
          From literary conferences and cultural celebrations to
          award ceremonies, social service initiatives and special
          events, each photograph reflects our journey of promoting
          literature, preserving culture and serving society.
        </p>

        <div style={styles.gallery}>
          {gallery.map((item, index) => (
            <div
              key={index}
              style={styles.card}
              className="gallery-card"
              onClick={() => setSelectedImage(item.image)}
            >
              <img
                src={item.image}
                alt={`Sri Sri Kalavedika Gallery ${index + 1}`}
                style={styles.image}
                className="gallery-image"
              />
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <section style={styles.footer}>
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

    </div>
  );
}

export default Gallery;