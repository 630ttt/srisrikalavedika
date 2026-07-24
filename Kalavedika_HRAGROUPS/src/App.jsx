import { BrowserRouter, Routes, Route } from "react-router-dom";

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
import Welcome from "./pages/Welcome";

import "./App.css";

function MainLayout({ children }) {
  return (
    <div className="app-container">
      <Header />

      <main className="main-content">
        {children}
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* WELCOME / LANDING PAGE */}
        {/* Header and Footer will NOT appear here */}
        <Route path="/" element={<Welcome />} />

        {/* HOME PAGE */}
        <Route
          path="/home"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />

        {/* ABOUT US */}
        <Route
          path="/about"
          element={
            <MainLayout>
              <AboutUs />
            </MainLayout>
          }
        />

        {/* FOUNDER */}
        <Route
          path="/founder"
          element={
            <MainLayout>
              <Founder />
            </MainLayout>
          }
        />

        {/* EXECUTIVE MEMBERS */}
        <Route
          path="/executive-members"
          element={
            <MainLayout>
              <ExecutiveMembers />
            </MainLayout>
          }
        />

        {/* ACTIVITIES */}
        <Route
          path="/activities"
          element={
            <MainLayout>
              <Activities />
            </MainLayout>
          }
        />

        {/* AWARDS */}
        <Route
          path="/awards"
          element={
            <MainLayout>
              <Awards />
            </MainLayout>
          }
        />

        {/* GALLERY */}
        <Route
          path="/gallery"
          element={
            <MainLayout>
              <Gallery />
            </MainLayout>
          }
        />

        {/* EVENTS */}
        <Route
          path="/events"
          element={
            <MainLayout>
              <Events />
            </MainLayout>
          }
        />

        {/* PUBLICATIONS */}
        <Route
          path="/publications"
          element={
            <MainLayout>
              <Publications />
            </MainLayout>
          }
        />

        {/* MEMBERSHIP */}
        <Route
          path="/membership"
          element={
            <MainLayout>
              <Membership />
            </MainLayout>
          }
        />

        {/* CONTACT */}
        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;