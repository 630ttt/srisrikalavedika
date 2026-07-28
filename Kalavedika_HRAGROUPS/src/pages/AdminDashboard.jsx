function AdminDashboard() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Admin Dashboard</h1>

      <hr />

      <h3>Welcome Admin</h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <div style={card}>Executive Members</div>
        <div style={card}>Founder</div>
        <div style={card}>Activities</div>
        <div style={card}>Awards</div>
        <div style={card}>Gallery</div>
        <div style={card}>Events</div>
        <div style={card}>Membership</div>
        <div style={card}>Publications</div>
        <div style={card}>Contact Messages</div>
      </div>
    </div>
  );
}

const card = {
  background: "#7B1113",
  color: "#fff",
  padding: "25px",
  borderRadius: "10px",
  textAlign: "center",
  fontSize: "20px",
};

export default AdminDashboard;