import { Link, useParams } from "react-router-dom";
import memBg from "../assets/mem-bg.jpg";
import memHead from "../assets/mem-head.jpg";
import ChapterCard from "../components/ChapterCard";
import { chapterStateMeta, getChaptersByState } from "../data/chaptersData";

function ChaptersPage() {
  const { stateSlug } = useParams();
  const meta = chapterStateMeta[stateSlug] || chapterStateMeta["andhra-pradesh"];
  const chapters = getChaptersByState(stateSlug || "andhra-pradesh");

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
      minHeight: "40vh",
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
      padding: "32px 24px",
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
      maxWidth: "1300px",
      margin: "40px auto 0",
      padding: "0 20px",
    },
    nav: {
      display: "flex",
      flexWrap: "wrap",
      gap: "12px",
      marginBottom: "26px",
      justifyContent: "center",
    },
    navLink: {
      textDecoration: "none",
      color: "#fff",
      background: "rgba(123, 17, 19, 0.85)",
      padding: "10px 16px",
      borderRadius: "999px",
      fontWeight: "700",
      border: "1px solid rgba(255, 215, 0, 0.3)",
    },
    activeNavLink: {
      background: "#b8860b",
      color: "#fff8e6",
    },
    intro: {
      textAlign: "center",
      marginBottom: "24px",
      padding: "20px",
      background: "rgba(255, 255, 255, 0.08)",
      borderRadius: "16px",
      border: "1px solid rgba(255, 215, 0, 0.2)",
    },
    introTitle: {
      fontSize: "28px",
      marginBottom: "10px",
      color: "#ffe8ae",
    },
    introText: {
      fontSize: "17px",
      lineHeight: "1.7",
      color: "#f9efdb",
      maxWidth: "860px",
      margin: "0 auto",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "24px",
    },
  };

  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.heroCard}>
          <h1 style={styles.title} > Committee Members </h1>
          <p style={styles.subtitle}>{meta.englishTitle}</p>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.nav}>
          <Link
            to="/chapters/andhra-pradesh"
            style={{
              ...styles.navLink,
              ...(stateSlug === "andhra-pradesh" ? styles.activeNavLink : {}),
            }}
          >
            Andhra Pradesh
          </Link>
          <Link
            to="/chapters/telangana"
            style={{
              ...styles.navLink,
              ...(stateSlug === "telangana" ? styles.activeNavLink : {}),
            }}
          >
            Telangana
          </Link>
          <Link
            to="/chapters/international"
            style={{
              ...styles.navLink,
              ...(stateSlug === "international" ? styles.activeNavLink : {}),
            }}
          >
            International
          </Link>
        </div>

        <div style={styles.intro}>
          <h2 style={styles.introTitle}>{meta.countLabel}</h2>
          <p style={styles.introText}>{meta.description}</p>
        </div>

        <div style={styles.grid}>
          {chapters.map((chapter) => (
            <ChapterCard key={chapter.id} chapter={chapter} stateSlug={stateSlug || "andhra-pradesh"} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default ChaptersPage;


