import React from "react";
import eventsHead from "../assets/eventshead.jpg";
import eventsBg from "../assets/eventsbg.jpg";
function Events() {
  const styles = {
    page: {
      fontFamily: "Arial, sans-serif",
      background: "#f8f9fa",
      color: "#333",
       backgroundImage: `
                      linear-gradient(
                        rgba(227, 157, 60, 0.23),
                        rgba(233, 156, 48, 0.5)
                      ),
                      url(${eventsBg})
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
                    url(${eventsHead})
                  `,
           backgroundSize: "cover",
         backgroundPosition: "center",
        
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
      padding: "70px 10%",
      maxWidth: "1200px",
      margin: "auto",
    },

    title: {
      textAlign: "center",
      color: "#efa51c",
      fontSize: "36px",
      marginBottom: "20px",
    },

    description: {
      textAlign: "center",
      fontSize: "18px",
      color: "#f5ebeb",
      marginBottom: "50px",
      lineHeight: "1.8",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
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
      height: "220px",
      objectFit: "cover",
    },

    content: {
      padding: "25px",
    },

    date: {
      color: "#b8860b",
      fontWeight: "bold",
      marginBottom: "10px",
    },

    eventTitle: {
      color: "#7B1113",
      marginBottom: "15px",
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
      padding: "10px 25px",
      borderRadius: "5px",
      cursor: "pointer",
    },

    footer: {
      background: "#aa7423df",
      color: "#fff",
      textAlign: "center",
      padding: "60px 10%",
      marginTop: "70px",
    },

    quote: {
      fontSize: "22px",
      lineHeight: "1.8",
      fontStyle: "italic",
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

  const events = [
    {
      image: "/events/event1.jpg",
      date: "15 August 2026",
      title: "National Literary Conference",
      description:
        "A gathering of renowned poets, writers and literary personalities to discuss Telugu literature and contemporary writing.",
    },
    {
      image: "/events/event2.jpg",
      date: "05 September 2026",
      title: "Cultural Festival",
      description:
        "Celebrating Indian culture through music, dance, drama and traditional performances by talented artists.",
    },
    {
      image: "/events/event3.jpg",
      date: "02 October 2026",
      title: "Social Service Program",
      description:
        "Community service activities including tree plantation, blood donation and educational support initiatives.",
    },
    {
      image: "/events/event4.jpg",
      date: "20 November 2026",
      title: "Award Ceremony",
      description:
        "Honouring outstanding personalities in literature, arts, education and social service with prestigious awards.",
    },
    {
      image: "/events/event5.jpg",
      date: "10 December 2026",
      title: "Book Release Event",
      description:
        "Launching new books written by distinguished authors followed by literary discussions and interactions.",
    },
    {
      image: "/events/event6.jpg",
      date: "01 January 2027",
      title: "International Cultural Meet",
      description:
        "Bringing together Telugu communities across the globe to celebrate literature, heritage and cultural unity.",
    },
  ];

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div>
          <h1 style={styles.heroTitle}>Events</h1>
          <p>Celebrating Literature, Culture & Social Service</p>
        </div>
      </section>

      {/* Events Section */}
      <section style={styles.section}>
        <div style={styles.contentCard}>
        <h2 style={styles.title}>Upcoming Events</h2>

        <p style={styles.description}>
          Sri Sri Kalavedika organizes literary conferences, award ceremonies,
          cultural festivals, educational seminars and social service
          initiatives throughout the year.
        </p>

        <div style={styles.grid}>
          {events.map((event, index) => (
            
            <div key={index} className="founder-image" style={styles.card}>
              <img
                src={event.image}
                alt={event.title}
                style={styles.image}
              />

              <div style={styles.content}>
                <p style={styles.date}>{event.date}</p>

                <h3 style={styles.eventTitle}>{event.title}</h3>

                <p style={styles.text}>{event.description}</p>

                <button style={styles.button}>Read More</button>
              </div>
            </div>
        
          ))}
        </div>
        </div>
      </section>

      {/* Closing Section */}
      <section style={styles.footer}>
        <h2>Join Our Events</h2>

        <p style={styles.quote}>
          "Every event is an opportunity to celebrate literature, preserve
          culture and strengthen our commitment to serving society."
        </p>
      </section>
    </div>
  );
}

export default Events;