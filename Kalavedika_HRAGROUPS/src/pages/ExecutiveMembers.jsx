import React from "react";

function ExecutiveMembers() {
  const styles = {
    page: {
      fontFamily: "Arial, sans-serif",
      background: "#f8f9fa",
      color: "#333",
    },

    hero: {
      background:
        "linear-gradient(rgba(123,17,19,0.85), rgba(123,17,19,0.85)), url('/executive-banner.jpg')",
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
      maxWidth: "1300px",
      margin: "60px auto",
      padding: "0 20px",
    },

    heading: {
      textAlign: "center",
      color: "#7B1113",
      fontSize: "36px",
      marginBottom: "15px",
    },

    subHeading: {
      textAlign: "center",
      color: "#666",
      marginBottom: "50px",
      fontSize: "18px",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
      gap: "30px",
    },

    card: {
      background: "#fff",
      borderRadius: "15px",
      overflow: "hidden",
      boxShadow: "0 5px 20px rgba(0,0,0,.1)",
      transition: "0.3s",
      textAlign: "center",
    },

    image: {
      width: "100%",
      height: "300px",
      objectFit: "cover",
    },

    content: {
      padding: "25px",
    },

    name: {
      color: "#7B1113",
      fontSize: "22px",
      marginBottom: "8px",
    },

    designation: {
      color: "#b8860b",
      fontWeight: "bold",
      marginBottom: "15px",
    },

    description: {
      color: "#666",
      lineHeight: "1.7",
      fontSize: "15px",
    },

    footer: {
      background: "#7B1113",
      color: "#fff",
      textAlign: "center",
      padding: "60px 20px",
      marginTop: "70px",
    },
  };

  const members = [
    {
      name: "కళారత్న కత్తిమండ ప్రతాప్ కుమార్",
      designation: "Founder & International Chairman",
      image: "/members/founder.jpg",
    },
    {
      name: "శ్రీహరి కోటి",
      designation: "National President",
      image: "/members/president.jpg",
    },
    {
      name: "గుండాల రాకేష్",
      designation: "National Organizing Secretary",
      image: "/members/rakesh.jpg",
    },
    {
      name: "ఈశ్వరి భూషణం",
      designation: "General Secretary",
      image: "/members/general-secretary.jpg",
    },
    {
      name: "గరిమెళ్ల రాజేంద్ర ప్రసాద్",
      designation: "Youth Wing President",
      image: "/members/youth.jpg",
    },
    {
      name: "చిట్టే లలిత",
      designation: "Women's Wing President",
      image: "/members/women.jpg",
    },
    {
      name: "గుత్తా హరిసర్వోత్తమ నాయుడు",
      designation: "State President",
      image: "/members/state-president.jpg",
    },
    {
      name: "International Coordinator",
      designation: "International Committee",
      image: "/members/international.jpg",
    },
  ];

  return (
    <div style={styles.page}>
      {/* Hero */}
      <section style={styles.hero}>
        <div>
          <h1 style={styles.heroTitle}>Executive Members</h1>
          <p>Leadership Team of Sri Sri Kalavedika</p>
        </div>
      </section>

      {/* Members */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Executive Committee</h2>

        <p style={styles.subHeading}>
          Our organization is led by experienced literary personalities,
          cultural leaders and social service professionals dedicated to
          preserving and promoting Telugu language, literature and culture.
        </p>

        <div style={styles.grid}>
          {members.map((member, index) => (
            <div key={index} style={styles.card}>
              <img
                src={member.image}
                alt={member.name}
                style={styles.image}
              />

              <div style={styles.content}>
                <h3 style={styles.name}>{member.name}</h3>

                <p style={styles.designation}>{member.designation}</p>

                <p style={styles.description}>
                  Working towards the growth of literature, culture and social
                  service through Sri Sri Kalavedika's national and
                  international initiatives.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section style={styles.footer}>
        <h2>Our Leadership</h2>

        <p style={{ maxWidth: "900px", margin: "20px auto", lineHeight: "1.8" }}>
          "Strong leadership inspires creativity, preserves culture and builds
          a better society. Together our executive committee continues the
          vision of Sri Sri Kalavedika across India and around the world."
        </p>
      </section>
    </div>
  );
}

export default ExecutiveMembers;