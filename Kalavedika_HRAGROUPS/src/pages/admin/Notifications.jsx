import React, { useEffect, useState } from 'react';
import { fetchNotifications, markNotificationRead } from '../../services/adminService.js';

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    loadNotifications();
  }, []);

  async function loadNotifications() {
    setLoading(true);
    setError('');
    try {
      const data = await fetchNotifications();
      setNotifications(data.notifications || []);
    } catch (err) {
      setError(err.message || 'Failed to load notifications');
    } finally {
      setLoading(false);
    }
  }

  async function handleMarkRead(id) {
    try {
      await markNotificationRead(id);
      await loadNotifications();
    } catch (err) {
      setError(err.message || 'Unable to mark notification as read');
    }
  }

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <div>
          <h2 style={styles.title}>Notifications</h2>
          <p style={styles.subtitle}>Recent activity and alerts for your admin panel.</p>
        </div>
        <button style={styles.refreshButton} onClick={loadNotifications} disabled={loading}>
          {loading ? 'Refreshing...' : 'Refresh'}
        </button>
      </div>

      {error && <div style={styles.error}>{error}</div>}

      {loading ? (
        <div style={styles.loadingState}>Loading notifications...</div>
      ) : notifications.length === 0 ? (
        <div style={styles.emptyState}>No notifications available.</div>
      ) : (
        <div style={styles.list}>
          {notifications.map((notification) => (
            <div key={notification._id || notification.id} style={styles.card}>
              <div style={styles.cardHeader}>
                <span style={styles.type}>{notification.type || 'Update'}</span>
                <button style={styles.smallButton} onClick={() => handleMarkRead(notification._id || notification.id)}>
                  Mark read
                </button>
              </div>
              <div>
                <strong>{notification.title || 'Notification'}</strong>
                <p style={styles.message}>{notification.message || 'No details available.'}</p>
              </div>
              <div style={styles.date}>{notification.created_on ? new Date(notification.created_on).toLocaleString() : ''}</div>
            </div>
          ))}
        </div>
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
    gap: '16px',
    padding: '22px 24px',
    borderRadius: '24px',
    background: 'linear-gradient(145deg, #ffffff 0%, #f8f7ff 100%)',
    border: '1px solid #eceaf1',
    boxShadow: '0 14px 40px rgba(52, 44, 88, 0.06)',
    flexWrap: 'wrap',
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
  refreshButton: {
    background: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)',
    color: '#fff',
    border: 'none',
    padding: '12px 20px',
    borderRadius: '12px',
    cursor: 'pointer',
    fontWeight: 600,
  },
  list: {
    display: 'grid',
    gap: '18px',
  },
  card: {
    background: 'linear-gradient(145deg, #ffffff 0%, #fcfcff 100%)',
    borderRadius: '20px',
    padding: '20px',
    border: '1px solid #eceaf1',
    boxShadow: '0 12px 30px rgba(25, 23, 43, 0.05)',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '12px',
    alignItems: 'center',
    marginBottom: '12px',
  },
  type: {
    color: '#7c3aed',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    fontSize: '13px',
  },
  smallButton: {
    background: '#f4f2ff',
    color: '#312e4c',
    border: '1px solid #ded9f5',
    padding: '8px 12px',
    borderRadius: '999px',
    cursor: 'pointer',
    fontWeight: 600,
  },
  message: {
    color: '#56515f',
    marginTop: '8px',
    lineHeight: 1.7,
  },
  date: {
    marginTop: '14px',
    color: '#94a3b8',
    fontSize: '14px',
  },
  error: {
    marginBottom: '18px',
    padding: '14px',
    borderRadius: '12px',
    background: '#fee2e2',
    color: '#b91c1c',
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
