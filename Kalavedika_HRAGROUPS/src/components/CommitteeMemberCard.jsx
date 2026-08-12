import { useEffect, useState } from "react";
import memberPlaceholder from "../assets/committee/member-placeholder.svg";

function CommitteeMemberCard({ member }) {
  const [imageSrc, setImageSrc] = useState(member.image || memberPlaceholder);

  useEffect(() => {
    setImageSrc(member.image || memberPlaceholder);
  }, [member.image]);

  const styles = {
    card: {
      background: "linear-gradient(145deg, #fff9ef, #f6e6c8)",
      borderRadius: "16px",
      overflow: "hidden",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
      border: "1px solid rgba(123, 17, 19, 0.18)",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      minHeight: "100%",
    },
    image: {
      width: "100%",
      height: "280px",
      objectFit: "cover",
      background: "#f9efe0",
    },
    content: {
      padding: "20px 18px 24px",
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    },
    name: {
      fontSize: "24px",
      color: "#7B1113",
      fontWeight: "700",
      margin: 0,
    },
    designation: {
      fontSize: "18px",
      color: "#b8860b",
      fontWeight: "700",
      margin: 0,
    },
    district: {
      fontSize: "17px",
      color: "#3f2a11",
      margin: "6px 0 0",
      fontWeight: "600",
    },
    state: {
      fontSize: "16px",
      color: "#5c4a2a",
      margin: 0,
      fontWeight: "500",
    },
  };

  return (
    <article className="card resp-committee-card" style={styles.card}>
      <img
        src={imageSrc}
        alt={member.name}
        style={styles.image}
        className="resp-committee-image"
        loading="lazy"
        onError={() => setImageSrc(memberPlaceholder)}
      />
      <div style={styles.content} className="resp-mobile-card">
        <h3 style={styles.name} className="resp-break-anywhere">{member.name}</h3>
        <p style={styles.designation} className="resp-break-anywhere">{member.designation}</p>
        <p style={styles.district} className="resp-break-anywhere">{member.district}</p>
        <p style={styles.state} className="resp-break-anywhere">{member.state}</p>
      </div>
    </article>
  );
}

export default CommitteeMemberCard;
