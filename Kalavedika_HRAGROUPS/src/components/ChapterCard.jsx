import { Link } from "react-router-dom";

function ChapterCard({ chapter, stateSlug }) {
  const detailsPath = `/chapters/${stateSlug}/${chapter.slug}`;

  const styles = {
    card: {
      background: "linear-gradient(145deg, #fff9ef, #f6e6c8)",
      borderRadius: "16px",
      padding: "24px",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.16)",
      border: "1px solid rgba(123, 17, 19, 0.18)",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      minHeight: "100%",
    },
    title: {
      fontSize: "24px",
      color: "#7B1113",
      margin: 0,
      fontWeight: "700",
    },
    meta: {
      fontSize: "16px",
      color: "#8a5d16",
      fontWeight: "700",
      margin: 0,
    },
    label: {
      fontSize: "15px",
      color: "#5e390a",
      fontWeight: "700",
      margin: 0,
    },
    description: {
      fontSize: "15px",
      lineHeight: "1.7",
      color: "#4b3420",
      margin: 0,
      flex: 1,
    },
    link: {
      textDecoration: "none",
      color: "#7B1113",
      fontWeight: "700",
      marginTop: "8px",
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
    },
  };

  return (
    <article style={styles.card}>
      <h3 style={styles.title}>{chapter.name}</h3>
      <p style={styles.meta}>{chapter.members} Members</p>
      <p style={styles.label}>President: {chapter.president || "Details coming soon"}</p>
      <p style={styles.description}>{chapter.description}</p>
      <Link to={detailsPath} style={styles.link}>
        View Details 
      </Link>
    </article>
  );
}

export default ChapterCard;


