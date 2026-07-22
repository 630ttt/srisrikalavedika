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
      fontSize: "48px",
      fontWeight: "bold",
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
      title: "Literary Conferences",
      description:
        "Conducting national and international literary conferences to encourage writers, poets and scholars.",
    },
    {
      icon: "🏆",
      title: "Award Ceremonies",
      description:
        "Honouring outstanding personalities in literature, arts, education and social service.",
    },
    {
      icon: "🎭",
      title: "Cultural Programs",
      description:
        "Organizing dance, music, drama and cultural festivals to preserve Indian traditions.",
    },
    {
      icon: "📖",
      title: "Book Launches",
      description:
        "Supporting authors by organizing book release events and literary discussions.",
    },
    {
      icon: "🎓",
      title: "Educational Seminars",
      description:
        "Conducting seminars, workshops and awareness programs for students and teachers.",
    },
    {
      icon: "🌳",
      title: "Social Service",
      description:
        "Serving society through tree plantation drives, blood donation camps and community welfare activities.",
    },
    {
      icon: "👩‍🎓",
      title: "Youth Development",
      description:
        "Providing opportunities and motivation for young writers, artists and students.",
    },
    {
      icon: "🌍",
      title: "International Events",
      description:
        "Connecting Telugu communities worldwide through literary and cultural events.",
    },
     {
      icon: "✍️  ",
      title: "Supporting Writers & Poets",
      description:
        "Providing a platform for emerging and established writers, poets, and literary personalities to showcase their talent.",
    },
  ];

  return (
    <div style={styles.page}>
      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.contentCard}>

        <div>
          <h1 style={styles.heroTitle}>Our Activities</h1>
          <p>Serving Literature, Culture & Society</p>
        </div>
        </div>
        
      </section>

      <section style={styles.section}>
       <div style={styles.contentCard}>
        <h2 style={styles.title}>What We Do</h2>
            
        <p style={styles.description}>
          Sri Sri Kalavedika actively organizes literary, cultural,
          educational and social service programs across India and
          internationally to promote Telugu language, culture and community
          welfare.We provide a platform for writers, poets, artists, students
           and emerging talents to showcase their abilities and receive recognition.
            Along with cultural and literary initiatives, we actively support social welfare, 
            environmental awareness and community development programs, 
            while promoting Telugu culture and connecting literary and cultural communities 
            across India and around the world.
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
        <h2>Our Commitment</h2>

        <p style={styles.quote}>
          "Through literature, culture and social service, we strive to
          inspire individuals, strengthen communities and preserve our rich
          heritage for future generations."
        </p>
      </section>
    </div>
  );
}

export default Activities;