import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!formData.username.trim() || !formData.password.trim()) {
      setError("Please enter Username and Password.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/admin/login",
        {
          username: formData.username.trim(),
          password: formData.password,
        }
      );

      console.log("Login Response:", response.data);

      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", response.data.username);

        alert("Login Successful");

        navigate("/admin-dashboard");
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      console.error("Login Error:", err);

      if (err.response) {
        console.log("Server Error:", err.response.data);
        setError(err.response.data.message || "Login Failed");
      } else if (err.request) {
        setError("Cannot connect to backend server.");
      } else {
        setError("Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f5f5",
      }}
    >
      <div
        style={{
          width: "400px",
          background: "#fff",
          padding: "35px",
          borderRadius: "10px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#7B1113",
            marginBottom: "25px",
          }}
        >
          Admin Login
        </h2>

        {error && (
          <div
            style={{
              background: "#ffe6e6",
              color: "#d8000c",
              padding: "10px",
              marginBottom: "15px",
              borderRadius: "5px",
            }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={formData.username}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "15px",
            }}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "20px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "15px",
            }}
          />

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "12px",
              background: "#7B1113",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p
          style={{
            marginTop: "20px",
            textAlign: "center",
            color: "#666",
            fontSize: "14px",
          }}
        >
          Sri Sri Kalavedika Admin Panel
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;