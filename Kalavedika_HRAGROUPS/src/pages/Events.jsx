import React, { useEffect, useState } from "react";
import eventsHead from "../assets/eventshead.jpg";
import eventsBg from "../assets/eventsbg.jpg";
import { fetchEvents } from "../eventsService.js";
import { resolveAssetUrl } from "../services/api.js";

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    fetchEvents()
      .then((data) => setEvents(data))
      .catch((err) => console.error('Failed to load events:', err))
      .finally(() => setLoading(false));
  }, []);

  function formatDate(dateStr) {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
  }

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

  return (
    <div style={styles.page} className="resp-bg-fixed">
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.contentCard} className="resp-content-card">
          <h1 style={styles.heroTitle} className="resp-hero-title">కార్యక్రమాలు</h1>
          <p>సాహిత్యం, సంస్కృతి మరియు సామాజిక సేవను ఘనంగా జరుపుకుందాం</p>
        </div>
      </section>

      {/* Events Section */}
      <section style={styles.section} className="resp-section">
        <div style={styles.contentCard} className="resp-content-card">
          <h2 style={styles.title}>రాబోయే కార్యక్రమాలు</h2>
          <p style={styles.description}>
            శ్రీ శ్రీ కళావేదిక సాహిత్య సదస్సులు, అవార్డు కార్యక్రమాలు,
            సాంస్కృతిక ఉత్సవాలు, విద్యా సదస్సులు మరియు సామాజిక సేవా
            కార్యక్రమాలను సంవత్సరాంతం నిర్వహిస్తుంది.
          </p>

          {loading ? (
            <p style={{ textAlign: 'center', color: '#f5ebeb' }}>Loading events...</p>
          ) : events.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#f5ebeb' }}>No events available at this time.</p>
          ) : (
            <div style={styles.grid} className="resp-grid-320">
              {events.map((event) => (
                <div key={event._id} className="founder-image resp-card-reset-margin" style={styles.card}>
                  <img
                    src={resolveAssetUrl(event.image_url)}
                    alt={event.title}
                    style={styles.image}
                  />
                  <div style={styles.content}>
                    <p style={styles.date}>{formatDate(event.date)}</p>
                    <h3 style={styles.eventTitle}>{event.title}</h3>
                    <p style={styles.text}>
                      {event.description.length > 150
                        ? `${event.description.slice(0, 150).trim()}...`
                        : event.description}
                    </p>
                    <button style={styles.button} className="resp-touch-btn" onClick={() => setSelectedEvent(event)}>
                      మరిన్ని వివరాలు
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Closing Section */}
      <section style={styles.footer} className="resp-highlight">
        <h2>మా కార్యక్రమాలలో చేరండి</h2>
        <p style={styles.quote}>
          "ప్రతి కార్యక్రమం సాహిత్యాన్ని ఘనంగా జరుపుకునే, సంస్కృతిని పరిరక్షించే
          మరియు సమాజానికి సేవ చేయడానికి మన కట్టుబాటును బలోపేతం చేసే అవకాశం."
        </p>
      </section>

      {/* Read More Modal */}
      {selectedEvent && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.65)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            padding: '24px',
          }}
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="resp-modal"
            style={{
              background: '#fff',
              borderRadius: '16px',
              maxWidth: '640px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '32px',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="resp-close-btn"
              onClick={() => setSelectedEvent(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'transparent',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#555',
              }}
            >
              ×
            </button>
            <img
              src={resolveAssetUrl(selectedEvent.image_url)}
              alt={selectedEvent.title}
              className="resp-modal-image"
              style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '10px', marginBottom: '20px' }}
            />
            <p style={{ color: '#b8860b', fontWeight: 'bold', marginBottom: '8px' }}>
              {formatDate(selectedEvent.date)}
            </p>
            <h2 style={{ color: '#7B1113', marginBottom: '16px' }}>{selectedEvent.title}</h2>
            <p style={{ color: '#444', lineHeight: 1.8, whiteSpace: 'pre-wrap' }}>
              {selectedEvent.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Events;