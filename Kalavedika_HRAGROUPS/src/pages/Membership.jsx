import React, { useState } from "react";
import memHead from "../assets/mem-head.jpg";
import { submitMembership } from "../membershipService";

function Membership() {
  const styles = {
    page: {
      fontFamily: "Arial, sans-serif",
      background:
        "linear-gradient(rgba(255,255,255,0.92), rgba(248,239,226,0.95))",
      color: "#333",
      minHeight: "100vh",
    },

    /* HERO */

    hero: {
      backgroundImage: `
        linear-gradient(
          rgba(50, 8, 8, 0.55),
          rgba(70, 15, 15, 0.8)
        ),
        url(${memHead})
      `,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: "45vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      textAlign: "center",
      padding: "40px 20px",
    },

    heroContent: {
      padding: "45px 60px",
      background: "rgba(0, 0, 0, 0.25)",
      border: "1px solid rgba(255, 215, 0, 0.4)",
      borderRadius: "20px",
      backdropFilter: "blur(5px)",
      boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    },

    heroTitle: {
      fontSize: "clamp(2.5rem, 6vw, 4rem)",
      fontWeight: "bold",
      color: "#FFD700",
      marginBottom: "15px",
      textShadow: "0 3px 10px rgba(0,0,0,0.5)",
    },

    heroText: {
      fontSize: "20px",
      color: "#fff",
      margin: "0",
    },

    /* MAIN SECTION */

    section: {
      maxWidth: "1200px",
      margin: "70px auto",
      padding: "0 25px",
    },

    title: {
      textAlign: "center",
      color: "#7B1113",
      fontSize: "clamp(2rem, 5vw, 2.5rem)",
      marginBottom: "15px",
      fontWeight: "700",
    },

    subtitle: {
      textAlign: "center",
      color: "#666",
      fontSize: "18px",
      maxWidth: "850px",
      margin: "0 auto 50px",
      lineHeight: "1.8",
    },

    /* MEMBERSHIP CARDS */

    cards: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "25px",
      marginBottom: "70px",
    },

    card: {
      background: "rgba(255, 255, 255, 0.85)",
      padding: "35px 25px",
      borderRadius: "15px",
      textAlign: "center",
      border: "1px solid rgba(123, 17, 19, 0.15)",
      boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
      transition: "all 0.3s ease",
      cursor: "pointer",
    },

    cardIcon: {
      fontSize: "42px",
      marginBottom: "15px",
    },

    cardTitle: {
      color: "#7B1113",
      marginBottom: "15px",
      fontSize: "22px",
    },

    cardText: {
      color: "#666",
      lineHeight: "1.7",
      fontSize: "16px",
    },

    /* REGISTRATION FORM */

    formWrapper: {
      background: "rgba(255, 255, 255, 0.9)",
      padding: "50px",
      borderRadius: "20px",
      boxShadow: "0 10px 35px rgba(0,0,0,0.12)",
      border: "1px solid rgba(123,17,19,0.15)",
    },

    formTitle: {
      textAlign: "center",
      color: "#7B1113",
      fontSize: "30px",
      marginBottom: "10px",
    },

    formSubtitle: {
      textAlign: "center",
      color: "#777",
      marginBottom: "35px",
    },

    formGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "20px",
    },

    input: {
      width: "100%",
      padding: "15px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      fontSize: "16px",
      outline: "none",
      boxSizing: "border-box",
      background: "#fff",
    },

    textarea: {
      width: "100%",
      height: "130px",
      padding: "15px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      fontSize: "16px",
      resize: "vertical",
      outline: "none",
      boxSizing: "border-box",
      background: "#fff",
    },

    fullWidth: {
      gridColumn: "1 / -1",
    },

    button: {
      background: "#7B1113",
      color: "#fff",
      border: "none",
      padding: "15px 35px",
      borderRadius: "30px",
      cursor: "pointer",
      fontSize: "17px",
      fontWeight: "600",
      display: "block",
      margin: "25px auto 0",
      transition: "all 0.3s ease",
      boxShadow: "0 5px 15px rgba(123,17,19,0.25)",
    },

    /* BENEFITS */

    benefits: {
      background:
        "linear-gradient(135deg, #e7b72596, #7B1113, #4e0809)",
      color: "#fff",
      padding: "70px 25px",
      textAlign: "center",
      marginTop: "80px",
      borderTop: "4px solid #D4AF37",
    },

    benefitsTitle: {
      fontSize: "34px",
      color: "#FFD700",
      marginBottom: "15px",
    },

    benefitsSubtitle: {
      color: "#f1f1f1",
      fontSize: "17px",
      marginBottom: "40px",
    },

    list: {
      maxWidth: "900px",
      margin: "auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "15px",
      textAlign: "left",
    },

    benefitItem: {
      background: "rgba(255,255,255,0.08)",
      padding: "15px 20px",
      borderRadius: "8px",
      borderLeft: "3px solid #D4AF37",
      fontSize: "16px",
    },
  };

  const membershipTypes = [
    {
      icon: "👤",
      title: "Individual Member",
      text: "Open to writers, poets, artists and literature enthusiasts who wish to support and participate in our activities.",
    },
    {
      icon: "🎓",
      title: "Student Member",
      text: "Special membership for students interested in literature, arts, culture and creative activities.",
    },
    {
      icon: "🌍",
      title: "International Member",
      text: "For Telugu communities and cultural supporters across the globe who wish to connect with our mission.",
    },
    {
      icon: "🏅",
      title: "Lifetime Member",
      text: "Become a permanent member and contribute to preserving literature, culture and social values for generations.",
    },
  ];

  const benefits = [
    "📚 Participation in Literary Conferences",
    "🎭 Invitations to Cultural Programs",
    "🖋️ Opportunity to Publish Literary Works",
    "🏆 Recognition & Awards",
    "🤝 Networking with Writers & Artists",
    "🌱 Participation in Social Service Activities",
    "🎓 Access to Workshops & Seminars",
    "🌍 International Cultural Exchange Programs",
  ];

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cityState, setCityState] = useState('');
  const [membershipType, setMembershipType] = useState('');
  const [occupation, setOccupation] = useState('');
  const [about, setAbout] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);

  const resetForm = () => {
    setName(''); setEmail(''); setPhone(''); setCityState(''); setMembershipType(''); setOccupation(''); setAbout('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);

    // basic validation
    if (!name.trim() || !email.trim() || !phone.trim() || !membershipType.trim()) {
      setMessage('Please fill in all required fields (Name, Email, Phone, Membership Type).');
      setMessageType('error');
      return;
    }

    setLoading(true);
    try {
      const payload = {
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        city_state: cityState.trim(),
        membership_type: membershipType.trim(),
        occupation: occupation.trim(),
        about: about.trim(),
      };

      const res = await submitMembership(payload);
      setMessage(res.message || 'Application submitted successfully');
      setMessageType('success');
      resetForm();
    } catch (err) {
      console.error(err);
      setMessage(err.message || 'Submission failed');
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>

      {/* HERO */}

      <section style={styles.hero}>
        <div style={styles.heroContent} className="resp-hero-content">
          <h1 style={styles.heroTitle} className="resp-hero-title">
            Membership
          </h1>

          <p style={styles.heroText}>
            Become a Member of Sri Sri Kalavedika
          </p>
        </div>
      </section>


      {/* MEMBERSHIP SECTION */}

      <section style={styles.section} className="resp-section">

        <h2 style={styles.title}>
          Join Our Literary & Cultural Family
        </h2>

        <p style={styles.subtitle}>
          Become a part of Sri Sri Kalavedika and contribute to the
          preservation and promotion of Telugu language, literature,
          arts, culture and social service.
        </p>


        {/* MEMBERSHIP CARDS */}

        <div style={styles.cards} className="resp-grid-250">

          {membershipTypes.map((member, index) => (

            <div
              key={index}
              style={styles.card}
              className="resp-mobile-card"

              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 15px 30px rgba(123,17,19,0.2)";
                e.currentTarget.style.borderColor =
                  "#D4AF37";
              }}

              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 8px 25px rgba(0,0,0,0.08)";
                e.currentTarget.style.borderColor =
                  "rgba(123, 17, 19, 0.15)";
              }}
            >

              <div style={styles.cardIcon}>
                {member.icon}
              </div>

              <h3 style={styles.cardTitle}>
                {member.title}
              </h3>

              <p style={styles.cardText}>
                {member.text}
              </p>

            </div>

          ))}

        </div>


        {/* REGISTRATION FORM */}

        <div style={styles.formWrapper} className="resp-form-wrapper">

          <h2 style={styles.formTitle}>
            Membership Registration
          </h2>

          <p style={styles.formSubtitle}>
            Fill in your details below to express your interest in membership.
          </p>

          <form onSubmit={handleSubmit}>

            <div style={styles.formGrid} className="resp-grid-280">

              <input
                type="text"
                placeholder="Full Name"
                style={styles.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                style={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                style={styles.input}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />

              <input
                type="text"
                placeholder="City / State"
                style={styles.input}
                value={cityState}
                onChange={(e) => setCityState(e.target.value)}
              />

              <select style={styles.input} value={membershipType} onChange={(e) => setMembershipType(e.target.value)} required>
                <option value="">Select Membership Type</option>
                <option>Individual Member</option>
                <option>Student Member</option>
                <option>International Member</option>
                <option>Lifetime Member</option>
              </select>

              <input
                type="text"
                placeholder="Profession / Occupation"
                style={styles.input}
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
              />

              <textarea
                placeholder="Tell us about yourself..."
                style={{
                  ...styles.textarea,
                  ...styles.fullWidth,
                }}
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              ></textarea>

            </div>

            <button
              type="submit"
              style={styles.button}
              className="resp-touch-btn"
              disabled={loading}

              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "#A52A2A";
                e.currentTarget.style.transform =
                  "translateY(-3px)";
              }}

              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  "#7B1113";
                e.currentTarget.style.transform =
                  "translateY(0)";
              }}
            >
              {loading ? 'Submitting...' : 'Apply for Membership'}
            </button>
            {message && (
              <div style={{
                marginTop: 12,
                textAlign: 'center',
                color: messageType === 'success' ? 'green' : 'red'
              }}>{message}</div>
            )}

          </form>

        </div>

      </section>


      {/* BENEFITS */}

      <section style={styles.benefits} className="resp-highlight">

        <h2 style={styles.benefitsTitle}>
          Membership Benefits
        </h2>

        <p style={styles.benefitsSubtitle}>
          As a member, become an active part of our literary,
          cultural and social initiatives.
        </p>

        <div style={styles.list} className="resp-grid-280">

          {benefits.map((benefit, index) => (

            <div
              key={index}
              style={styles.benefitItem}
            >
              {benefit}
            </div>

          ))}

        </div>

      </section>

    </div>
  );
}

export default Membership;