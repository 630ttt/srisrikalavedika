import { Link, useParams } from "react-router-dom";
import memBg from "../assets/mem-bg.jpg";
import memHead from "../assets/mem-head.jpg";
import { chapterStateMeta, getChapterBySlug } from "../data/chaptersData";

function ChapterDetails() {
  const { stateSlug, slug } = useParams();
  const chapter = getChapterBySlug(stateSlug, slug);
  const meta = chapterStateMeta[stateSlug] || chapterStateMeta["andhra-pradesh"];

  const styles = {
    page: {
      minHeight: "100vh",
      fontFamily: "'Poppins', Arial, sans-serif",
      backgroundImage: `linear-gradient(rgba(8, 5, 5, 0.78), rgba(22, 10, 10, 0.8)), url(${memBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      backgroundRepeat: "no-repeat",
      color: "#fff",
      paddingBottom: "60px",
    },
    hero: {
      minHeight: "35vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "40px 20px",
      backgroundImage: `linear-gradient(rgba(48, 7, 8, 0.72), rgba(27, 27, 27, 0.42)), url(${memHead})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    heroCard: {
      background: "rgba(0, 0, 0, 0.35)",
      padding: "30px 24px",
      borderRadius: "18px",
      boxShadow: "0 8px 30px rgba(0, 0, 0, 0.35)",
      border: "1px solid rgba(255, 255, 255, 0.16)",
      width: "min(900px, 100%)",
    },
    title: {
      fontSize: "clamp(34px, 5vw, 48px)",
      margin: 0,
      color: "#ffd87a",
    },
    subtitle: {
      marginTop: "10px",
      fontSize: "clamp(17px, 2.4vw, 22px)",
      color: "#f9efdb",
    },
    section: {
      maxWidth: "1100px",
      margin: "40px auto 0",
      padding: "0 20px",
    },
    backLink: {
      display: "inline-flex",
      alignItems: "center",
      textDecoration: "none",
      color: "#ffe8ae",
      fontWeight: "700",
      marginBottom: "22px",
      gap: "6px",
    },
    card: {
      background: "rgba(255, 255, 255, 0.12)",
      borderRadius: "18px",
      border: "1px solid rgba(255, 215, 0, 0.2)",
      padding: "28px",
      boxShadow: "0 12px 30px rgba(0, 0, 0, 0.2)",
    },
    heading: {
      fontSize: "30px",
      color: "#ffd87a",
      marginBottom: "10px",
    },
    label: {
      fontSize: "15px",
      color: "#ffe8ae",
      fontWeight: "700",
      marginBottom: "12px",
    },
    statsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "18px",
      marginTop: "22px",
      marginBottom: "22px",
    },
    statCard: {
      background: "rgba(123, 17, 19, 0.82)",
      borderRadius: "14px",
      padding: "16px",
      border: "1px solid rgba(255, 215, 0, 0.25)",
    },
    statValue: {
      fontSize: "28px",
      fontWeight: "700",
      color: "#fff2c9",
      marginBottom: "4px",
    },
    statLabel: {
      fontSize: "14px",
      color: "#ffe8ae",
      textTransform: "uppercase",
      letterSpacing: "0.08em",
    },
    sectionTitle: {
      fontSize: "22px",
      color: "#ffd87a",
      marginBottom: "10px",
      marginTop: "20px",
    },
    bodyText: {
      fontSize: "17px",
      lineHeight: "1.8",
      color: "#f9efdb",
      marginBottom: "10px",
    },
    contactLink: {
      color: "#ffe8ae",
      fontWeight: "700",
      textDecoration: "none",
    },
    list: {
      paddingLeft: "20px",
      color: "#f9efdb",
      lineHeight: "1.8",
      margin: 0,
    },
    eventCard: {
      background: "rgba(255, 255, 255, 0.08)",
      padding: "16px",
      borderRadius: "12px",
      marginBottom: "12px",
      border: "1px solid rgba(255, 215, 0, 0.16)",
    },
  };

  if (!chapter) {
    return (
      <div style={styles.page}>
        <section style={styles.hero}>
          <div style={styles.heroCard}>
            <h1 style={styles.title}>Chapter Details</h1>
            <p style={styles.subtitle}>Details coming soon</p>
          </div>
        </section>
        <section style={styles.section}>
          <Link to={meta.route} style={styles.backLink}>
            ← {meta.backLabel}
          </Link>
          <div style={styles.card}>
            <p style={styles.bodyText}>ఈ శాఖకు సంబంధించిన వివరాలు త్వరలో అందుబాటులోకి వస్తాయి.</p>
            <p style={styles.bodyText}>Chapter details coming soon.</p>
          </div>
        </section>
      </div>
    );
  }

  if (chapter.detailsAvailable === false) {
    return (
      <div style={styles.page}>
        <section style={styles.hero}>
          <div style={styles.heroCard}>
            <h1 style={styles.title}>{chapter.name}</h1>
            <p style={styles.subtitle}>{chapter.state} Chapter</p>
          </div>
        </section>
        <section style={styles.section}>
          <Link to={meta.route} style={styles.backLink}>
            ← {meta.backLabel}
          </Link>
          <div style={styles.card}>
            <p style={styles.bodyText}>ఈ శాఖకు సంబంధించిన వివరాలు త్వరలో అందుబాటులోకి వస్తాయి.</p>
            <p style={styles.bodyText}>{chapter.comingSoonMessage || "Chapter details coming soon."}</p>
          </div>
        </section>
      </div>
    );
  }

  const hasContact = Boolean(chapter.email || chapter.phone);
  const hasAchievements = Array.isArray(chapter.achievements) && chapter.achievements.length > 0;
  const hasEvents = Array.isArray(chapter.events) && chapter.events.length > 0;

  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.heroCard}>
          <h1 style={styles.title}>{chapter.name}</h1>
          <p style={styles.subtitle}>{chapter.state} Chapter</p>
        </div>
      </section>

      <section style={styles.section}>
        <Link to={meta.route} style={styles.backLink}>
          ← {meta.backLabel}
        </Link>

        <div style={styles.card}>
          <div style={styles.label}>{chapter.state}</div>
          <h2 style={styles.heading}>{chapter.name}</h2>

          <div style={styles.statsGrid}>
            <div style={styles.statCard}>
              <div style={styles.statValue}>{chapter.members}</div>
              <div style={styles.statLabel}>Members</div>
            </div>
            {chapter.email ? (
              <div style={styles.statCard}>
                <div style={styles.statValue}>
                  <a href={`mailto:${chapter.email}`} style={styles.contactLink}>
                    {chapter.email}
                  </a>
                </div>
                <div style={styles.statLabel}>Email</div>
              </div>
            ) : null}
            {chapter.phone ? (
              <div style={styles.statCard}>
                <div style={styles.statValue}>
                  <a href={`tel:${chapter.phone}`} style={styles.contactLink}>
                    {chapter.phone}
                  </a>
                </div>
                <div style={styles.statLabel}>Phone</div>
              </div>
            ) : null}
          </div>

          <h3 style={styles.sectionTitle}>Message from the President</h3>
          <p style={styles.bodyText}>{chapter.president || "Details coming soon"}</p>
          <p style={styles.bodyText}>
            {chapter.presidentMessage || chapter.description || "Details coming soon."}
          </p>

          <h3 style={styles.sectionTitle}>Achievements</h3>
          {hasAchievements ? (
            <ul style={styles.list}>
              {chapter.achievements.map((achievement) => (
                <li key={achievement}>✦ {achievement}</li>
              ))}
            </ul>
          ) : (
            <p style={styles.bodyText}>Achievements coming soon.</p>
          )}

          <h3 style={styles.sectionTitle}>Chapter Events</h3>
          {hasEvents ? (
            chapter.events.map((event) => (
              <div key={`${event.name}-${event.date}`} style={styles.eventCard}>
                <p style={{ ...styles.bodyText, marginBottom: "4px", fontWeight: "700" }}>
                  {event.name}
                </p>
                <p style={{ ...styles.bodyText, marginBottom: "4px" }}>{event.date}</p>
                <p style={styles.bodyText}>{event.description}</p>
              </div>
            ))
          ) : (
            <p style={styles.bodyText}>No chapter events available.</p>
          )}

          {!hasContact ? (
            <div style={{ marginTop: "18px" }}>
              <p style={styles.bodyText}>Contact details coming soon.</p>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}

export default ChapterDetails;
