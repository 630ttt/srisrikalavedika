import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { clearToken, getToken } from '../services/authService.js';

function AdminLayout() {
  const navigate = useNavigate();
  const token = getToken();
  const [collapsed, setCollapsed] = React.useState(false);

  const handleLogout = () => {
    clearToken();
    navigate('/admin/login');
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'linear-gradient(135deg, #f8f3ff 0%, #eef3ff 100%)', fontFamily: 'Inter, "Segoe UI", Arial, sans-serif' }}>
      <aside
        style={{
          width: collapsed ? '88px' : '280px',
          background: 'linear-gradient(180deg, #111827 0%, #1f2937 100%)',
          color: '#fff',
          padding: collapsed ? '24px 14px' : '30px 22px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          transition: 'width 0.25s ease, padding 0.25s ease',
          boxShadow: '12px 0 35px rgba(15, 23, 42, 0.16)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: collapsed ? 'center' : 'space-between', alignItems: 'center', marginBottom: '18px' }}>
          <div>
            {!collapsed && <h2 style={{ margin: 0, fontSize: '22px', color: '#FCD34D' }}>Admin Panel</h2>}
            {!collapsed && <p style={{ marginTop: '8px', color: '#cbd5e1', fontSize: '13px' }}>Manage site content & requests</p>}
          </div>
          <button
            onClick={() => setCollapsed(s => !s)}
            aria-label="Toggle sidebar"
            style={{
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.18)',
              borderRadius: '10px',
              color: '#fff',
              cursor: 'pointer',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {collapsed ? '➡️' : '⬅️'}
          </button>
        </div>

        <NavLink to="/admin" end style={(props) => navLinkStyle({ ...props, collapsed })}>
          <span style={{ marginRight: collapsed ? 0 : 10 }}>🏠</span>
          {!collapsed && 'Dashboard'}
        </NavLink>
        <NavLink to="/admin/memberships" style={(props) => navLinkStyle({ ...props, collapsed })}>
          <span style={{ marginRight: collapsed ? 0 : 10 }}>🧾</span>
          {!collapsed && 'Memberships'}
        </NavLink>
        <NavLink to="/admin/gallery" style={(props) => navLinkStyle({ ...props, collapsed })}>
          <span style={{ marginRight: collapsed ? 0 : 10 }}>🖼️</span>
          {!collapsed && 'Gallery'}
        </NavLink>
        <NavLink to="/admin/publications" style={(props) => navLinkStyle({ ...props, collapsed })}>
          <span style={{ marginRight: collapsed ? 0 : 10 }}>📚</span>
          {!collapsed && 'Publications'}
        </NavLink>
        <NavLink to="/admin/events" style={(props) => navLinkStyle({ ...props, collapsed })}>
          <span style={{ marginRight: collapsed ? 0 : 10 }}>🎪</span>
          {!collapsed && 'Events'}
        </NavLink>
        <NavLink to="/admin/contacts" style={(props) => navLinkStyle({ ...props, collapsed })}>
          <span style={{ marginRight: collapsed ? 0 : 10 }}>✉️</span>
          {!collapsed && 'Contact Messages'}
        </NavLink>
        <NavLink to="/admin/notifications" style={(props) => navLinkStyle({ ...props, collapsed })}>
          <span style={{ marginRight: collapsed ? 0 : 10 }}>🔔</span>
          {!collapsed && 'Notifications'}
        </NavLink>
        <NavLink to="/admin/profile" style={(props) => navLinkStyle({ ...props, collapsed })}>
          <span style={{ marginRight: collapsed ? 0 : 10 }}>👤</span>
          {!collapsed && 'Profile'}
        </NavLink>

        <div style={{ marginTop: 'auto' }}>
          <button
            onClick={handleLogout}
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.14)',
              background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
              color: '#fff',
              cursor: 'pointer',
              boxShadow: '0 10px 24px rgba(220, 38, 38, 0.22)',
            }}
          >
            Logout
          </button>
        </div>
      </aside>

      <main style={{ flex: 1, padding: '30px 32px', overflow: 'auto' }}>
        <div style={{ marginBottom: '24px', background: 'rgba(255,255,255,0.86)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.7)', boxShadow: '0 16px 45px rgba(15, 23, 42, 0.08)', borderRadius: '24px', padding: '24px 28px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h1 style={{ margin: 0, fontSize: '28px', color: '#111827' }}>Admin Dashboard</h1>
            <p style={{ margin: '8px 0 0', color: '#64748b' }}>
              Use the sidebar to manage memberships, gallery images, publications and enquiries.
            </p>
          </div>
          {token && (
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '10px 14px', borderRadius: '999px', background: '#f3f4f6', color: '#374151' }}>
              <span style={{ fontWeight: 600 }}>Signed in</span>
            </div>
          )}
        </div>
        <Outlet />
      </main>
    </div>
  );
}

function navLinkStyle({ isActive, collapsed }) {
  return {
    display: 'flex',
    alignItems: 'center',
    gap: isActive ? 12 : 10,
    textDecoration: 'none',
    color: isActive ? '#fef3c7' : '#e5e7eb',
    padding: collapsed ? '10px 8px' : '12px 14px',
    borderRadius: '12px',
    background: isActive ? 'linear-gradient(135deg, rgba(250, 204, 21, 0.16), rgba(245, 158, 11, 0.12))' : 'rgba(255,255,255,0.05)',
    border: isActive ? '1px solid rgba(250, 204, 21, 0.24)' : '1px solid transparent',
    transition: 'all 0.2s ease',
    boxShadow: isActive ? '0 10px 24px rgba(15, 23, 42, 0.16)' : 'none',
  };
}

export default AdminLayout;
