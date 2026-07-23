import React from "react";
import galleryHEad from "../assets/gallery-head.jpg";
import galleryHead from "../assets/galleryhead.jpg";

function Gallery() {
  const styles = {
    page: {
       fontFamily: "Arial, sans-serif",
            backgroundColor: "#f8f9fa",
            color: "#333",
            backgroundImage: `
                linear-gradient(
                  rgba(227, 157, 60, 0.8),
                  rgba(247, 239, 228, 0.69)
                ),
                url(${galleryHead})
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
                url(${galleryHEad})
              `,
       backgroundSize: "cover",
     backgroundPosition: "center",
     backgroundRepeat: "no-repeat",
      minHeight: "45vh",
      width: "100%",
      display: "flex",
     justifyContent: "center",
     alignItems: "center",
     color: "#fff",
     textAlign: "center",
     padding: "40px 20px",
     boxSizing: "border-box",
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
      borderRadius: "40px",
      overflow: "hidden",
      
    },

    image: {
      width: "100%",
      height: "350px",
      objectFit: "cover",
    },

   

    footer: {
      background: "#aa7423df",
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
     contentCard: {
  background: "rgba(235, 169, 37, 0.11)",
  padding: "100px",
  borderRadius: "50px",
  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)",
  backdropFilter: "blur(5px)",
  border: "1px solid rgba(235, 0, 0, 0.92)",
  height:"250px",
  width:"700px",
},

    
  };

  const gallery = [
    { 
      image: "/src/gallery/Image 1.jpg", 
       
    },
    { image: "/src/gallery/image 2.jpg", },
    { image: "/src/gallery/image 3.jpg", },
    { image: "/src/gallery/image 4.jpg", },
    { image: "/src/gallery/image 5.jpg",  },
    { image: "/src/gallery/image 6.jpg",  },
    { image: "/src/gallery/image 7.jpg",  },
    { image: "/src/gallery/image 8.jpg", },
    { image: "/src/gallery/image 9.jpg",  },
    { image: "/src/gallery/image 10.jpg", },
    { image: "/src/gallery/image 11.jpg",  },
    { image: "/src/gallery/image 12.jpg",  },
  ];

  return (
    <div style={styles.page}>
      {/* Hero */}
        
      <section style={styles.hero}>
         <div style={styles.contentCard}>
        <div>
          <h1 style={styles.heroTitle}>Gallery</h1>
          <p>Moments That Inspire Generations</p>
        </div></div>
      </section>

      {/* Gallery */}

      <section style={styles.section}>
        
        
           
        <div style={styles.gallery}>
          {gallery.map((item, index) => (
            <div key={index} className="award-card" style={styles.card}>
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