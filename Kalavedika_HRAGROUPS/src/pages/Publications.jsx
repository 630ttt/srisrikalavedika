import React, { useEffect, useState } from "react";
import publicationsBg from "../assets/publicationsbg.jpg";
import pbHead from "../assets/pbhead.jpg";
import { fetchPublications } from "../publicationsService";
import { resolveAssetUrl } from "../services/api.js";

function Publications() {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [viewPublication, setViewPublication] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newImage, setNewImage] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState("");

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

    headingRow: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "15px",
      marginBottom: "20px",
    },

    heading: {
      color: "#7B1113",
      fontSize: "clamp(30px, 4vw, 44px)",
      fontWeight: "bold",
      margin: 0,
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
      margin: "20px",
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

    secondaryButton: {
      background: "transparent",
      color: "#7B1113",
      border: "1px solid #7B1113",
      padding: "10px 22px",
      borderRadius: "5px",
      cursor: "pointer",
      marginLeft: "12px",
    },

    addButton: {
      background: "#7B1113",
      color: "#fff",
      border: "none",
      padding: "12px 24px",
      borderRadius: "30px",
      cursor: "pointer",
      fontWeight: "bold",
      boxShadow: "0 10px 20px rgba(0,0,0,0.12)",
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

    message: {
      textAlign: "center",
      marginBottom: "24px",
      color: error ? "#A22" : "#19692C",
      fontWeight: 600,
    },

    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 50,
      padding: "20px",
    },

    modal: {
      background: "#fff",
      borderRadius: "20px",
      maxWidth: "700px",
      width: "100%",
      padding: "30px",
      boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
      position: "relative",
      maxHeight: "90vh",
      overflowY: "auto",
    },

    modalTitle: {
      marginBottom: "18px",
      color: "#7B1113",
    },

    field: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      marginBottom: "18px",
    },

    input: {
      padding: "14px 16px",
      borderRadius: "10px",
      border: "1px solid #ccc",
      fontSize: "16px",
    },

    textarea: {
      minHeight: "120px",
      resize: "vertical",
      padding: "14px 16px",
      borderRadius: "10px",
      border: "1px solid #ccc",
      fontSize: "16px",
    },

    closeButton: {
      position: "absolute",
      right: "18px",
      top: "18px",
      background: "transparent",
      border: "none",
      color: "#7B1113",
      fontSize: "24px",
      cursor: "pointer",
    },
  };

  useEffect(() => {
    loadPublications();
  }, []);

  async function loadPublications() {
    setLoading(true);
    setError("");
    try {
      const data = await fetchPublications();
      setPublications(data);
    } catch (err) {
      setError(err.message || "Unable to load publications");
    } finally {
      setLoading(false);
    }
  }

  function openAddModal() {
    // Admin-only action. Public site cannot open add modal.
    alert('Adding publications is restricted to admins. Please use the Admin Panel.');
  }

  function closeAddModal() {
    setViewPublication(null);
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    setFormError("");
    if (!file) {
      setNewImage(null);
      return;
    }
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      setFormError("Only JPG, PNG, JPEG, and WEBP image formats are allowed.");
      setNewImage(null);
      return;
    }
    setNewImage(file);
  }

  async function handleSubmitPublication(event) {
    event.preventDefault();
    setFormError("");
    setMessage("");

    if (!newTitle.trim() || !newDescription.trim() || !newImage) {
      setFormError("Please provide a title, description, and publication image.");
      return;
    }

    // Add is admin-only; public site should not support creating publications
    setFormError('Adding publications is restricted to admins.');
    setFormLoading(false);
  }

  async function handleDeletePublication(id) {
    // Delete is admin-only; public site cannot delete publications
    alert('Deleting publications is restricted to admins. Please use the Admin Panel.');
  }

  function showPublication(publication) {
    setViewPublication(publication);
  }

  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.contentCard} className="resp-publications-hero-card resp-content-card">
          <div>
            <h1 style={styles.heroTitle}>ప్రచురణలు</h1>
            <p>పుస్తకాలు • మాగజైన్లు • పరిశోధనలు • సాహిత్య సేకరణలు</p>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.headingRow}>
          <h2 style={styles.heading}>మా ప్రచురణలు</h2>
        </div>

        <p style={styles.description}>
          శ్రీ శ్రీ కళావేదిక పుస్తకాలు, మాగజైన్లు, కవితా సేకరణలు,
          పరిశోధన వ్యాసాలు మరియు సాహిత్య జర్నల్స్ ప్రచురిస్తుంది, రచయితలు,
          కవులు మరియు సాహిత్య అభిరుచిగలవారిని ప్రోత్సహించడానికి.
        </p>

        {error && <div style={styles.message}>{error}</div>}
        {message && <div style={styles.message}>{message}</div>}

        {loading ? (
          <p style={{ textAlign: "center", marginBottom: "30px" }}>Loading publications...</p>
        ) : publications.length === 0 ? (
          <p style={{ textAlign: "center", marginBottom: "30px" }}>
            ఇంకా ప్రచురణలు అందుబాటులో లేవు. ఒకటి సృష్టించడానికి ప్రచురణను జోడించండి.
          </p>
        ) : (
          <div style={styles.grid}>
            {publications.map(publication => (
              <div key={publication.id} className="founder-image" style={styles.card}>
                <img
                  src={resolveAssetUrl(publication.image_url)}
                  alt={publication.title}
                  style={styles.image}
                />
                <div style={styles.content}>
                  <h3 style={styles.title}>{publication.title}</h3>
                  <p style={styles.text}>
                    {publication.description.length > 120
                      ? `${publication.description.slice(0, 120).trim()}...`
                      : publication.description}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                    <button style={styles.button} onClick={() => showPublication(publication)}>
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section style={styles.footer} className="resp-highlight">
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


      {viewPublication && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <button style={styles.closeButton} onClick={closeAddModal}>
              ×
            </button>
            <h3 style={styles.modalTitle}>{viewPublication.title}</h3>
            <img
              src={resolveAssetUrl(viewPublication.image_url)}
              alt={viewPublication.title}
              style={{ width: "100%", borderRadius: "18px", marginBottom: "20px" }}
            />
            <p style={{ color: "#444", lineHeight: "1.8", marginBottom: "25px" }}>
              {viewPublication.description}
            </p>
            <button style={styles.button} onClick={closeAddModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Publications;
