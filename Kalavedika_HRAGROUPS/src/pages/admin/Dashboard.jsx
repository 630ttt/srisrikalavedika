import React, { useEffect, useState } from 'react';
import { fetchDashboardStats, fetchNotifications } from '../../services/adminService.js';

function Dashboard() {
  const [stats, setStats] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function load() {
      setLoading(true);
      setError('');
      try {
        const data = await fetchDashboardStats();
        setStats(data);
        const noteData = await fetchNotifications();
        setNotifications(noteData.notifications.slice(0, 4));
      } catch (err) {
        setError(err.message || 'Failed to load dashboard');
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const cards = [
    { label: 'Total Applications', value: stats?.totalMemberships ?? 0 },
    { label: 'Pending Requests', value: stats?.pendingMemberships ?? 0 },
    { label: 'Approved Members', value: stats?.approvedMemberships ?? 0 },
    { label: 'Rejected Applications', value: stats?.rejectedMemberships ?? 0 },
    { label: 'Gallery Images', value: stats?.galleryCount ?? 0 },
    { label: 'Publications', value: stats?.publicationCount ?? 0 },
    { label: 'Contact Messages', value: stats?.contactCount ?? 0 },
    { label: 'Unread Notifications', value: stats?.unreadNotifications ?? 0 },
  ];

  return (
    <div style={styles.page}>
      {loading && <div style={styles.loadingState}>Loading dashboard...</div>}
      {error && <div style={styles.error}>{error}</div>}
      {!loading && !error && (
        <>
          <div style={styles.cardGrid}>
            {cards.map((card) => (
              <div key={card.label} style={styles.statsCard}>
                <span style={styles.statsValue}>{card.value}</span>
                <span style={styles.statsLabel}>{card.label}</span>
              </div>
            ))}
          </div>

          <section style={styles.section}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.heading}>Recent Notifications</h2>
            </div>
            {notifications.length === 0 ? (
              <div style={styles.emptyState}>No notifications yet.</div>
            ) : (
              <div style={styles.notificationList}>
                {notifications.map((note) => (
                  <div key={note._id} style={styles.notificationCard}>
                    <div style={styles.noteType}>{note.type}</div>
                    <div>
                      <strong>{note.title}</strong>
                      <p style={styles.noteMessage}>{note.message}</p>
                    </div>
                    <div style={styles.noteDate}>{new Date(note.created_on).toLocaleString()}</div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </>
      )}
    </div>
  );
}

const styles = {
  page: {
    display: 'grid',
    gap: '20px',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
    gap: '18px',
  },
  statsCard: {
    padding: '26px 24px',
    borderRadius: '22px',
    background: 'linear-gradient(145deg, #ffffff 0%, #f8f7ff 100%)',
    border: '1px solid #eceaf1',
    boxShadow: '0 14px 40px rgba(52, 44, 88, 0.08)',
    minHeight: '136px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  statsValue: {
    fontSize: '34px',
    fontWeight: '800',
    color: '#111827',
    letterSpacing: '-0.02em',
  },
  statsLabel: {
    color: '#64748b',
    marginTop: '8px',
    fontSize: '15px',
    fontWeight: 600,
  },
  section: {
    background: 'linear-gradient(145deg, #ffffff 0%, #fdfdff 100%)',
    borderRadius: '24px',
    padding: '24px',
    border: '1px solid #eceaf1',
    boxShadow: '0 14px 40px rgba(52, 44, 88, 0.06)',
  },
  sectionHeader: {
    marginBottom: '18px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    margin: 0,
    fontSize: '22px',
    color: '#111827',
  },
  notificationList: {
    display: 'grid',
    gap: '14px',
  },
  notificationCard: {
    padding: '18px',
    borderRadius: '18px',
    border: '1px solid #f0eff7',
    background: '#fcfcfe',
    display: 'grid',
    gap: '8px',
    boxShadow: '0 10px 24px rgba(15, 23, 42, 0.04)',
  },
  noteType: {
    fontSize: '13px',
    color: '#7c3aed',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
  },
  noteMessage: {
    margin: '6px 0 0',
    color: '#4f4d63',
    lineHeight: '1.6',
  },
  noteDate: {
    fontSize: '13px',
    color: '#94a3b8',
  },
  emptyState: {
    padding: '18px',
    color: '#64748b',
    background: '#f8f7ff',
    borderRadius: '14px',
    border: '1px dashed #d8d8e6',
  },
  error: {
    color: '#b91c1c',
    background: '#fee2e2',
    borderRadius: '12px',
    padding: '14px',
    marginBottom: '18px',
  },
  loadingState: {
    padding: '18px',
    color: '#475569',
    background: 'rgba(255,255,255,0.7)',
    borderRadius: '14px',
    border: '1px solid #e5e7eb',
  },
};

export default Dashboard;
