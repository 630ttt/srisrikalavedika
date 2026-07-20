import React from "react";
import memBg from "../assets/mem-bg.jpg";
import exeCom from "../assets/exe-com.jpg";
function ExecutiveMembers() {
  const styles = {
    page: {
     fontFamily: "'Poppins', sans-serif",
      backgroundImage: `linear-gradient(
     rgba(8, 5, 5, 0.74),
     rgba(22, 10, 10, 0.77)
     ), url(${memBg})`,
     backgroundSize: "cover",
     backgroundPosition: "center",
     backgroundAttachment: "fixed",
     backgroundRepeat: "no-repeat",
     color: "#333",
     minHeight: "100vh",
   },

    hero: {
  backgroundImage: `linear-gradient(
    rgba(48, 7, 8, 0.75),
    rgba(27, 27, 27, 0.38)
  ), url(${exeCom})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
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
      maxWidth: "1300px",
      margin: "60px auto",
      padding: "0 20px",
      
    },

    heading: {
      textAlign: "center",
      color: "#c60003",
      fontSize: "36px",
      marginBottom: "15px",
    },

    subHeading: {
      textAlign: "center",
      color: "#fff8f8",
      marginBottom: "50px",
      fontSize: "18px",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
      gap: "30px",
    },

    card: {
      background: "#ffffff",
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
      image: "/Executivemembers/founder.png",
    },
    {
      name: "శ్రీహరి కోటి",
      designation: "National President",
      image: "/Executivemembers/శ్రీహరి కోటి.png",
    },
    {
      name: "గుండాల రాకేష్",
      designation: "National Organizing Secretary",
      image: "/Executivemembers/గుండాల రాకేష్ .png",
    },
    {
      name: "ఈశ్వరి భూషణం",
      designation: "General Secretary",
      image: "/Executivemembers/జి. ఈశ్వరీ భూషణం.png",
    },
    {
      name: "గరిమెళ్ల రాజేంద్ర ప్రసాద్",
      designation: "Youth Wing President",
      image: "/Executivemembers/గరిమెళ్ల రాజేంద్ర ప్రసాద్.png",
    },
    {
      name: "చిట్టే లలిత",
      designation: "Women's Wing President",
      image: "/members/women.jpg",
    },
    {
      name: "గుత్తా హరిసర్వోత్తమ నాయుడు",
      designation: "State President",
      image: "/Executivemembers/గుత్తా హరి సర్వోత్తమ నాయుడు.png",
    },
    {
      name: "ఓ కోయిలా నవీన్",
      designation: "State President1",
      image: "/Executivemembers/ఓ కోయిలా నవీన్ .png",
    },
    {
      name: "కట్ల భాగ్యలక్ష్మి",
      designation: "State President1",
      image: "/Executivemembers/కట్ల భాగ్యలక్ష్మి.png",
    },
    {
      name: "కేతా శ్రీనివాస రావు",
      designation: "State President1",
      image: "/Executivemembers/కేతా శ్రీనివాస రావు.png",
    },
    {
      name: "కొలిచిన రామ  జగన్నాథ్",
      designation: "State President1",
      image: "/Executivemembers/కొలిచిన రామ  జగన్నాథ్.png",
    },
    {
      name: "చప్పిడి రాజశేఖర్",
      designation: "State President1",
      image: "/Executivemembers/చప్పిడి రాజశేఖర్.png",
    },
    {
      name: "చిందం  సునీత",
      designation: "State President1",
      image: "/Executivemembers/చిందం  సునీత .png",
    },
    {
      name: "జి. రామమూర్తి",
      designation: "State President1",
      image: "/Executivemembers/జి. రామమూర్తి.png",
    },
    {
      name: "డా. ఎర్ర సతీష్",
      designation: "State President1",
      image: "/Executivemembers/డా. ఎర్ర సతీష్.png",
    },
    {
      name: "డా. కావూరి శ్రీనివాస శర్మ",
      designation: "State President1",
      image: "/Executivemembers/డా. కావూరి శ్రీనివాస శర్మ.png",
    },
    {
      name: "డా. టి. పార్ధ సారధి",
      designation: "State President1",
      image: "/Executivemembers/డా. టి. పార్ధ సారధి.png",
    },
    {
      name: "డా. గుగాంపు",
      designation: "State President1",
      image: "/Executivemembers/డా. గుగాంపు.png",
    },
    {
      name: "డా. పుల్లేటికుర్తి ఎస్. వి. శ్రీనుబాబు",
      designation: "State President1",
      image: "/Executivemembers/డా. పుల్లేటికుర్తి ఎస్. వి. శ్రీనుబాబు.png",
    },
     {
      name: "డా. శ్రీనివాస్ వాసుదేవ్",
      designation: "State President1",
      image: "/Executivemembers/డా. శ్రీనివాస్ వాసుదేవ్.png",
    },
     {
      name: "డాక్టర్ బాల చంద్ర సాదే ",
      designation: "State President1",
      image: "/Executivemembers/డాక్టర్ బాల చంద్ర సాదే .png",
    },
     {
      name: "డేబా విజయ్ కుమార్",
      designation: "State President1",
      image: "/Executivemembers/డేబా విజయ్ కుమార్.png",
    },
    {
      name: "దీపక్ న్యాతి",
      designation: "State President1",
      image: "/Executivemembers/దీపక్ న్యాతి  .png",
    },
    {
      name: "నల్లా భాగ్యలక్ష్మి",
      designation: "State President1",
      image: "/Executivemembers/నల్లా భాగ్యలక్ష్మి .png",
    },
    {
      name: "నూక సంపత్ కుమార్",
      designation: "State President1",
      image: "/Executivemembers/నూక సంపత్ కుమార్.png",
    },
    {
      name: "నూకల అశోక్ యాదవ్",
      designation: "State President1",
      image: "/Executivemembers/నూకల అశోక్ యాదవ్.png",
    },
    {
      name: "నూలి అనుపమ ప్రియదర్శిని",
      designation: "State President1",
      image: "/Executivemembers/నూలి అనుపమ ప్రియదర్శిని.png",
    },
    {
      name: "ఫిజిక్స్ అరుణ్ కుమార్",
      designation: "State President1",
      image: "/Executivemembers/ఫిజిక్స్ అరుణ్ కుమార్.png",
    },
    {
      name: "బాలార్జున సత్యనారాయణ మాకే",
      designation: "State President1",
      image: "/Executivemembers/బాలార్జున సత్యనారాయణ  మాకే.png",
    },
    {
      name: "వి.వరలక్ష్మి",
      designation: "State President1",
      image: "/Executivemembers/వి . వరలక్ష్మి .png",
    },
    {
      name: "వై. కరుణాకర రావు",
      designation: "State President1",
      image: "/Executivemembers/వై. కరుణాకర రావు.png",
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