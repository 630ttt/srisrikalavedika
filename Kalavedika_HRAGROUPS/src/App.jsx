import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Founder from "./pages/Founder";
import ExecutiveMembers from "./pages/ExecutiveMembers";
import Activities from "./pages/Activities";
import Awards from "./pages/Awards";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import Publications from "./pages/Publications";
import Membership from "./pages/Membership";
import Contact from "./pages/Contact";

import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

import "./App.css";

function Layout() {
  const location = useLocation();

  const isAdminPage =
    location.pathname === "/admin-login" ||
    location.pathname === "/admin-dashboard";

  return (
    <div className="app-container">
      {!isAdminPage && <Header />}

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/founder" element={<Founder />} />
          <Route
            path="/executive-members"
            element={<ExecutiveMembers />}
          />
          <Route path="/activities" element={<Activities />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/contact" element={<Contact />} />

          {/* Admin Routes */}
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </main>

      {!isAdminPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;