import React from "react";

function Gallery() {
  const styles = {
    page: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f8f9fa",
      color: "#333",
    },

    hero: {
      background:
        "linear-gradient(rgba(123,17,19,0.85), rgba(123,17,19,0.85)), url('/gallery-banner.jpg')",
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
      fontSize: "48px",
      fontWeight: "bold",
    },

    section: {
      maxWidth: "1300px",
      margin: "70px auto",
      padding: "0 20px",
    },

    heading: {
      textAlign: "center",
      color: "#7B1113",
      fontSize: "36px",
      marginBottom: "15px",
    },

    description: {
      textAlign: "center",
      color: "#666",
      fontSize: "18px",
      marginBottom: "50px",
      lineHeight: "1.8",
    },

    gallery: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
      gap: "25px",
    },

    card: {
      background: "#fff",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 5px 15px rgba(0,0,0,.1)",
      transition: "0.3s",
    },

    image: {
      width: "100%",
      height: "250px",
      objectFit: "cover",
    },

    caption: {
      padding: "18px",
      textAlign: "center",
      fontWeight: "bold",
      color: "#7B1113",
    },

    footer: {
      background: "#7B1113",
      color: "#fff",
      textAlign: "center",
      padding: "60px 20px",
      marginTop: "70px",
    },

    quote: {
      fontSize: "22px",
      lineHeight: "1.8",
      fontStyle: "italic",
      maxWidth: "900px",
      margin: "20px auto",
    },
  };

  const gallery = [
    { image: "/gallery/gallery1.jpg", title: "Literary Conference" },
    { image: "/gallery/gallery2.jpg", title: "Award Ceremony" },
    { image: "/gallery/gallery3.jpg", title: "Cultural Program" },
    { image: "/gallery/gallery4.jpg", title: "Book Release" },
    { image: "/gallery/gallery5.jpg", title: "Women's Conference" },
    { image: "/gallery/gallery6.jpg", title: "Youth Program" },
    { image: "/gallery/gallery7.jpg", title: "Poetry Meet" },
    { image: "/gallery/gallery8.jpg", title: "Social Service" },
    { image: "/gallery/gallery9.jpg", title: "Educational Seminar" },
    { image: "/gallery/gallery10.jpg", title: "International Event" },
    { image: "/gallery/gallery11.jpg", title: "Annual Celebration" },
    { image: "/gallery/gallery12.jpg", title: "Community Gathering" },
  ];

  return (
    <div style={styles.page}>
      {/* Hero */}

      <section style={styles.hero}>
        <div>
          <h1 style={styles.heroTitle}>Gallery</h1>
          <p>Moments That Inspire Generations</p>
        </div>
      </section>

      {/* Gallery */}

      <section style={styles.section}>
        <h2 style={styles.heading}>Photo Gallery</h2>

        <p style={styles.description}>
          Explore memorable moments from literary conferences, cultural
          festivals, award ceremonies, educational programs and social service
          activities organized by Sri Sri Kalavedika.
        </p>

        <div style={styles.gallery}>
          {gallery.map((item, index) => (
            <div key={index} style={styles.card}>
              <img
                src={item.image}
                alt={item.title}
                style={styles.image}
              />

              <div style={styles.caption}>
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing */}

      <section style={styles.footer}>
        <h2>Our Memories</h2>

        <p style={styles.quote}>
          "Every photograph tells the story of our commitment to literature,
          culture and social service. Together we continue creating memories
          that inspire future generations."
        </p>
      </section>
    </div>
  );
}

export default Gallery;