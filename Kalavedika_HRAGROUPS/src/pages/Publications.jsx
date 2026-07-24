import React from "react";
import publicationsBg from "../assets/publicationsbg.jpg";
import pbHead from "../assets/pbhead.jpg";
function Publications() {
  const styles = {
    page: {
      fontFamily: "Arial, sans-serif",
            background: "#f8f9fa",
            color: "#333",
             backgroundImage: `
                            linear-gradient(
                              rgba(227, 157, 60, 0.23),
                              rgba(235, 230, 223, 0.73)
                            ),
                            url(${publicationsBg})
                          `,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                    backgroundRepeat: "no-repeat",  
    },

    hero: {
      backgroundImage: `
                          linear-gradient(
                            rgba(200, 131, 35, 0),
                            rgba(255, 255, 255, 0.07)
                          ),
                          url(${pbHead})
                        `,
                 backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "45vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#eeeeee",
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
      color: "#060606",
      fontSize: "18px",
      maxWidth: "900px",
      margin: "0 auto 55px",
      lineHeight: "1.9",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
      gap: "30px",
    },

    card: {
      background:
        "linear-gradient(145deg, rgba(255,255,255,0.97),  rgba(241, 229, 192, 0.55))",
      borderRadius: "20px",
      overflow: "hidden",
      boxShadow: "0 5px 15px rgba(0,0,0,.1)",
      margin:"20px",
      
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
      background: "#aa7423df",
      color: "#fff",
      textAlign: "center",
      padding: "60px 20px",
      marginTop: "70px",
    },
    contentCard: {
  background: "rgba(0, 0, 0, 0.35)",
      padding: "45px 60px",
      borderRadius: "25px",
      backdropFilter: "blur(6px)",
      WebkitBackdropFilter: "blur(6px)",
      border: "1px solid rgba(255,255,255,0.25)",
      boxShadow: "0 10px 40px rgba(0,0,0,0.35)",
      maxWidth: "850px",
},
  };

  const books = [
    {
       
      image: "/src/publications/Telugu Literary Collection.jpg",
      title: "Telugu Literary Collection",
      description:
        "A collection of inspiring Telugu poems, essays and literary works published by Sri Sri Kalavedika.",
    },
    {
      image: "/src/publications/Cultural Heritage.jpg",
      title: "Cultural Heritage",
      description:
        "A publication highlighting Indian traditions, Telugu culture and historical heritage.",
    },
    {
      image: "/src/publications/Poetry Anthology.jpg",
      title: "Poetry Anthology",
      description:
        "An anthology featuring poems written by emerging and renowned poets from across the world.",
    },
    {
      image:"/src/publications/Research Articles.jpg",
      title: "Research Articles",
      description:
        "Academic articles and literary research papers promoting Telugu literature and language.",
    },
    {
      image: "/src/publications/Annual Magazine.jpg",
      title: "Annual Magazine",
      description:
        "A yearly publication featuring organizational achievements, events and member contributions.",
    },
    {
      image: "/src/publications/Special Editions.jpg",
      title: "Special Editions",
      description:
        "Commemorative publications released during national and international literary conferences.",
    },
  ];

  return (
    <div style={styles.page}>
      {/* Hero */}

      <section style={styles.hero}>
         <div style={styles.contentCard}>
        <div>
          <h1 style={styles.heroTitle}>Publications</h1>
          <p>Books • Magazines • Research • Literary Collections</p>
        </div>
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
            <div key={index} className="founder-image" style={styles.card}>
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