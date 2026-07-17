import React from "react";

function Publications() {
  const styles = {
    page: {
      fontFamily: "Arial, sans-serif",
      background: "#f8f9fa",
      color: "#333",
    },

    hero: {
      background:
        "linear-gradient(rgba(123,17,19,0.85), rgba(123,17,19,0.85)), url('/publications-banner.jpg')",
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
      maxWidth: "1200px",
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

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
      gap: "30px",
    },

    card: {
      background: "#fff",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 5px 15px rgba(0,0,0,.1)",
    },

    image: {
      width: "100%",
      height: "250px",
      objectFit: "cover",
    },

    content: {
      padding: "25px",
    },

    title: {
      color: "#7B1113",
      marginBottom: "12px",
    },

    text: {
      color: "#666",
      lineHeight: "1.7",
      marginBottom: "20px",
    },

    button: {
      background: "#7B1113",
      color: "#fff",
      border: "none",
      padding: "10px 22px",
      borderRadius: "5px",
      cursor: "pointer",
    },

    footer: {
      background: "#7B1113",
      color: "#fff",
      textAlign: "center",
      padding: "60px 20px",
      marginTop: "70px",
    },
  };

  const books = [
    {
      image: "/publications/book1.jpg",
      title: "Telugu Literary Collection",
      description:
        "A collection of inspiring Telugu poems, essays and literary works published by Sri Sri Kalavedika.",
    },
    {
      image: "/publications/book2.jpg",
      title: "Cultural Heritage",
      description:
        "A publication highlighting Indian traditions, Telugu culture and historical heritage.",
    },
    {
      image: "/publications/book3.jpg",
      title: "Poetry Anthology",
      description:
        "An anthology featuring poems written by emerging and renowned poets from across the world.",
    },
    {
      image: "/publications/book4.jpg",
      title: "Research Articles",
      description:
        "Academic articles and literary research papers promoting Telugu literature and language.",
    },
    {
      image: "/publications/book5.jpg",
      title: "Annual Magazine",
      description:
        "A yearly publication featuring organizational achievements, events and member contributions.",
    },
    {
      image: "/publications/book6.jpg",
      title: "Special Editions",
      description:
        "Commemorative publications released during national and international literary conferences.",
    },
  ];

  return (
    <div style={styles.page}>
      {/* Hero */}

      <section style={styles.hero}>
        <div>
          <h1 style={styles.heroTitle}>Publications</h1>
          <p>Books • Magazines • Research • Literary Collections</p>
        </div>
      </section>

      {/* Publications */}

      <section style={styles.section}>
        <h2 style={styles.heading}>Our Publications</h2>

        <p style={styles.description}>
          Sri Sri Kalavedika publishes books, magazines, poetry collections,
          research articles and literary journals to encourage writers,
          poets and literature enthusiasts.
        </p>

        <div style={styles.grid}>
          {books.map((book, index) => (
            <div key={index} style={styles.card}>
              <img
                src={book.image}
                alt={book.title}
                style={styles.image}
              />

              <div style={styles.content}>
                <h3 style={styles.title}>{book.title}</h3>

                <p style={styles.text}>{book.description}</p>

                <button style={styles.button}>
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing */}

      <section style={styles.footer}>
        <h2>Knowledge Through Literature</h2>

        <p
          style={{
            maxWidth: "900px",
            margin: "20px auto",
            lineHeight: "1.8",
            fontSize: "20px",
          }}
        >
          "Books preserve culture, literature inspires generations and
          publications become the voice of society."
        </p>
      </section>
    </div>
  );
}

export default Publications;