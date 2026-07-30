import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAdminProfile, adminLogout } from '../../services/adminService.js';
import { clearToken } from '../../services/authService.js';

export default function Profile() {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    setLoading(true);
    setError('');
    try {
      const data = await fetchAdminProfile();
      setAdmin(data.admin || null);
    } catch (err) {
      setError(err.message || 'Failed to load profile');
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    try {
      await adminLogout();
    } catch (err) {
      // ignore logout errors, clear client state anyway
    }
    clearToken();
    navigate('/admin/login');
  }

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <div>
          <h2 style={styles.title}>Admin Profile</h2>
          <p style={styles.subtitle}>Manage your admin account and sign out securely.</p>
        </div>
        <button style={styles.logoutButton} onClick={handleLogout}>
          Logout
        </button>
      </div>

      {loading ? (
        <div style={styles.loadingState}>Loading profile...</div>
      ) : error ? (
        <div style={styles.error}>{error}</div>
      ) : admin ? (
        <div style={styles.card}>
          <div style={styles.row}>
            <span style={styles.label}>Username</span>
            <span style={styles.value}>{admin.username}</span>
          </div>
          <div style={styles.row}>
            <span style={styles.label}>Email</span>
            <span style={styles.value}>{admin.email}</span>
          </div>
          <div style={styles.row}>
            <span style={styles.label}>Session</span>
            <span style={styles.value}>Authenticated</span>
          </div>
        </div>
      ) : (
        <div style={styles.emptyState}>No profile data available.</div>
      )}
    </div>
  );
}

const styles = {
  page: {
    display: 'grid',
    gap: '18px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '22px 24px',
    borderRadius: '24px',
    background: 'linear-gradient(145deg, #ffffff 0%, #f8f7ff 100%)',
    border: '1px solid #eceaf1',
    boxShadow: '0 14px 40px rgba(52, 44, 88, 0.06)',
    flexWrap: 'wrap',
    gap: '16px',
  },
  title: {
    margin: 0,
    fontSize: '24px',
    color: '#111827',
  },
  subtitle: {
    margin: '8px 0 0',
    color: '#64748b',
  },
  logoutButton: {
    background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
    color: '#fff',
    border: 'none',
    padding: '12px 20px',
    borderRadius: '12px',
    cursor: 'pointer',
    fontWeight: 600,
  },
  card: {
    background: 'linear-gradient(145deg, #ffffff 0%, #fdfdff 100%)',
    borderRadius: '24px',
    padding: '24px',
    border: '1px solid #eceaf1',
    boxShadow: '0 14px 40px rgba(25, 23, 43, 0.05)',
    maxWidth: '700px',
  },
  row: {
    display: 'grid',
    gridTemplateColumns: '180px 1fr',
    gap: '12px',
    alignItems: 'center',
    padding: '14px 0',
    borderBottom: '1px solid #f0eff7',
  },
  label: {
    fontWeight: 700,
    color: '#4f4d63',
  },
  value: {
    color: '#111827',
  },
  error: {
    marginBottom: '18px',
    padding: '14px',
    background: '#fee2e2',
    color: '#b91c1c',
    borderRadius: '12px',
  },
  loadingState: {
    padding: '18px',
    color: '#475569',
    background: 'rgba(255,255,255,0.7)',
    borderRadius: '14px',
    border: '1px solid #e5e7eb',
  },
  emptyState: {
    padding: '24px',
    borderRadius: '16px',
    background: '#fafafa',
    border: '1px dashed #d8d8d8',
    color: '#555',
  },
};
