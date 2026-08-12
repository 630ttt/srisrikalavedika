import { useMemo, useState } from "react";
import memBg from "../assets/mem-bg.jpg";
import memHead from "../assets/mem-head.jpg";
import CommitteeMemberCard from "../components/CommitteeMemberCard";
import {
  ALL_DISTRICTS_OPTION,
  committeeMembers,
  districtsByState,
  stateOptions,
} from "../data/committeeData";

function CommitteeMembers() {
  const [selectedState, setSelectedState] = useState("ఆంధ్రప్రదేశ్");
  const [selectedDistrict, setSelectedDistrict] = useState(ALL_DISTRICTS_OPTION);

  const districtOptions = useMemo(
    () => [ALL_DISTRICTS_OPTION, ...(districtsByState[selectedState] || [])],
    [selectedState]
  );

  const filteredMembers = useMemo(
    () =>
      committeeMembers.filter((member) => {
        const stateMatch = member.state === selectedState;
        const districtMatch =
          selectedDistrict === ALL_DISTRICTS_OPTION ||
          member.district === selectedDistrict;
        return stateMatch && districtMatch;
      }),
    [selectedDistrict, selectedState]
  );

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedDistrict(ALL_DISTRICTS_OPTION);
  };

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
      margin: "50px auto 80px",
      padding: "0 20px",
    },
    filterWrap: {
      display: "flex",
      flexWrap: "wrap",
      gap: "16px",
      marginBottom: "32px",
      background: "rgba(255, 255, 255, 0.1)",
      borderRadius: "14px",
      padding: "18px",
      border: "1px solid rgba(255, 215, 0, 0.35)",
    },
    filterBlock: {
      flex: "1 1 260px",
      minWidth: "220px",
    },
    label: {
      display: "block",
      marginBottom: "8px",
      color: "#ffe8ae",
      fontWeight: 700,
      fontSize: "16px",
    },
    select: {
      width: "100%",
      padding: "12px 14px",
      borderRadius: "10px",
      border: "1px solid #c6a665",
      background: "#fffdf8",
      color: "#5e390a",
      fontSize: "16px",
      outline: "none",
      cursor: "pointer",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "24px",
    },
    emptyState: {
      marginTop: "30px",
      textAlign: "center",
      background: "rgba(124, 35, 18, 0.5)",
      border: "1px solid rgba(255, 215, 0, 0.4)",
      borderRadius: "16px",
      padding: "28px 20px",
      color: "#ffebc1",
      fontSize: "19px",
      lineHeight: "1.7",
    },
  };

  return (
    <div style={styles.page} className="resp-bg-fixed">
      <section style={styles.hero}>
        <div style={styles.heroCard} className="resp-content-card">
          <h1 style={styles.title} className="resp-hero-title">కమిటీ సభ్యులు</h1>
          <p style={styles.subtitle} className="resp-mobile-subtitle">శ్రీ శ్రీ కళావేదిక నాయకత్వ బృందం</p>
        </div>
      </section>

      <section style={styles.section} className="resp-section">
        <div style={styles.filterWrap} className="resp-filter-wrap">
          <div style={styles.filterBlock} className="resp-filter-block">
            <label htmlFor="committee-state" style={styles.label}>
              రాష్ట్రం
            </label>
            <select
              id="committee-state"
              value={selectedState}
              onChange={handleStateChange}
              style={styles.select}
              className="resp-select"
            >
              {stateOptions.map((stateName) => (
                <option key={stateName} value={stateName}>
                  {stateName}
                </option>
              ))}
            </select>
          </div>

          <div style={styles.filterBlock} className="resp-filter-block">
            <label htmlFor="committee-district" style={styles.label}>
              జిల్లా
            </label>
            <select
              id="committee-district"
              value={selectedDistrict}
              onChange={(event) => setSelectedDistrict(event.target.value)}
              style={styles.select}
              className="resp-select"
            >
              {districtOptions.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filteredMembers.length > 0 ? (
          <div style={styles.grid} className="resp-grid-250">
            {filteredMembers.map((member) => (
              <CommitteeMemberCard key={member.id} member={member} />
            ))}
          </div>
        ) : (
          <div style={styles.emptyState} className="resp-mobile-card">
            ఈ జిల్లాకు సంబంధించిన కమిటీ సభ్యుల వివరాలు త్వరలో అందుబాటులోకి
            వస్తాయి.
          </div>
        )}
      </section>
    </div>
  );
}

export default CommitteeMembers;
