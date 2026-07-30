import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

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

function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />

        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/executive-members" element={<ExecutiveMembers />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;