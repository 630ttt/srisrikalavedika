import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Founder from "./pages/Founder";
import ExecutiveMembers from "./pages/ExecutiveMembers";
import ChaptersPage from "./pages/ChaptersPage";
import ChapterDetails from "./pages/ChapterDetails";
import Activities from "./pages/Activities";
import Awards from "./pages/Awards";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import Publications from "./pages/Publications";
import Membership from "./pages/Membership";
import Contact from "./pages/Contact";

import AdminLogin from "./pages/AdminLogin.jsx";
import AdminLayout from "./components/AdminLayout.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Dashboard from "./pages/admin/Dashboard.jsx";
import Memberships from "./pages/admin/Memberships.jsx";
import GalleryAdmin from "./pages/admin/GalleryAdmin.jsx";
import PublicationsAdmin from "./pages/admin/PublicationsAdmin.jsx";
import EventsAdmin from "./pages/admin/EventsAdmin.jsx";
import Contacts from "./pages/admin/Contacts.jsx";
import Notifications from "./pages/admin/Notifications.jsx";
import Profile from "./pages/admin/Profile.jsx";

import "./App.css";
import "./responsive.css";

function PublicLayout() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Welcome splash — no header/footer */}
        <Route path="/" element={<Welcome />} />

        {/* Admin login */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Protected admin panel */}
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="memberships" element={<Memberships />} />
          <Route path="gallery" element={<GalleryAdmin />} />
          <Route path="publications" element={<PublicationsAdmin />} />
          <Route path="events" element={<EventsAdmin />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<Dashboard />} />
        </Route>

        {/* Public pages — all share Header + Footer via PublicLayout */}
        <Route element={<PublicLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/executive-members" element={<ExecutiveMembers />} />
          <Route path="/chapters/:stateSlug" element={<ChaptersPage />} />
          <Route path="/chapters/:stateSlug/:slug" element={<ChapterDetails />} />
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
