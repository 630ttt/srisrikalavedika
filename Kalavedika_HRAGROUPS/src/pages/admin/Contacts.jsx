import React, { useEffect, useState } from 'react';
import { fetchContacts, markContactRead, deleteContact } from '../../services/contactService.js';

export default function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const [viewItem, setViewItem] = useState(null);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const rows = await fetchContacts();
      setContacts(rows);
    } catch (err) {
      console.error(err);
      setError('Failed to load contacts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const filtered = contacts.filter(c => {
    if (statusFilter !== 'All' && c.status !== statusFilter) return false;
    const q = search.trim().toLowerCase();
    if (!q) return true;
    return (
      (c.name || '').toLowerCase().includes(q) ||
      (c.email || '').toLowerCase().includes(q) ||
      (c.subject || '').toLowerCase().includes(q) ||
      (c.message || '').toLowerCase().includes(q)
    );
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageData = filtered.slice((page - 1) * pageSize, page * pageSize);

  const handleMarkRead = async (id) => {
    if (actionLoading) return;
    setActionLoading(true);
    try {
      await markContactRead(id);
      await load();
    } catch (err) {
      console.error(err);
      alert('Failed to mark read');
    } finally {
      setActionLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this message?')) return;
    setActionLoading(true);
    try {
      await deleteContact(id);
      await load();
    } catch (err) {
      console.error(err);
      alert('Failed to delete');
    } finally {
      setActionLoading(false);
    }
  };

  function getStatusBadgeStyle(status) {
    if (status === 'Read') {
      return { ...styles.statusBadge, ...styles.readBadge };
    }
    return { ...styles.statusBadge, ...styles.newBadge };
  }

  return (
    <div style={styles.page}>
      <div style={styles.headerCard}>
        <h2 style={styles.title}>Contact Messages</h2>
        <p style={styles.subtitle}>Review incoming enquiries and keep your inbox organised.</p>
      </div>

      <div style={styles.controls}>
        <input placeholder="Search messages" value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} style={styles.input} />
        <select value={statusFilter} onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }} style={styles.select}>
          <option>All</option>
          <option>New</option>
          <option>Read</option>
        </select>
        <button onClick={load} style={styles.refreshButton}>Refresh</button>
      </div>

      {loading ? (
        <div style={styles.loadingState}>Loading...</div>
      ) : error ? (
        <div style={styles.error}>{error}</div>
      ) : contacts.length === 0 ? (
        <div style={styles.emptyState}>No contact messages</div>
      ) : (
        <div style={styles.tableCard}>
          <table style={styles.table}>
            <thead>
              <tr style={styles.headRow}>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Subject</th>
                <th style={styles.th}>Submitted On</th>
                <th style={styles.th}>Status</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {pageData.map((c, index) => (
                <tr key={c._id} style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
                  <td style={styles.td}>{c.name}</td>
                  <td style={styles.td}>{c.email}</td>
                  <td style={styles.td}>{c.subject || '-'}</td>
                  <td style={styles.td}>{new Date(c.submitted_on).toLocaleString()}</td>
                  <td style={styles.td}><span style={getStatusBadgeStyle(c.status)}>{c.status}</span></td>
                  <td style={styles.td}>
                    <button onClick={() => setViewItem(c)} style={styles.secondaryButton}>View</button>
                    <button onClick={() => handleMarkRead(c._id)} disabled={actionLoading} style={styles.primaryButton}>Mark Read</button>
                    <button onClick={() => handleDelete(c._id)} disabled={actionLoading} style={styles.deleteButton}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={styles.footerRow}>
            <div style={styles.meta}>Showing {filtered.length} message(s)</div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page <= 1} style={styles.paginationButton}>Prev</button>
              <span style={styles.pageBadge}>{page} / {totalPages}</span>
              <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page >= totalPages} style={styles.paginationButton}>Next</button>
            </div>
          </div>
        </div>
      )}

      {viewItem && (
        <div style={styles.modalOverlay} onClick={() => setViewItem(null)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h3 style={styles.modalTitle}>{viewItem.name}</h3>
            <div style={styles.modalMeta}>{viewItem.email} • {viewItem.phone || '-'}</div>
            <div style={styles.modalSubject}>{viewItem.subject || 'No Subject'}</div>
            <div style={styles.modalMessage}>{viewItem.message}</div>
            <div style={styles.modalActions}>
              <button onClick={() => { handleMarkRead(viewItem._id); setViewItem(null); }} style={styles.primaryButton}>Mark Read</button>
              <button onClick={() => { handleDelete(viewItem._id); setViewItem(null); }} style={styles.deleteButton}>Delete</button>
              <button onClick={() => setViewItem(null)} style={styles.secondaryButton}>Close</button>
            </div>
          </div>
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
  headerCard: {
    background: 'linear-gradient(145deg, #ffffff 0%, #f8f7ff 100%)',
    borderRadius: '24px',
    padding: '24px 24px 20px',
    border: '1px solid #eceaf1',
    boxShadow: '0 14px 40px rgba(52, 44, 88, 0.06)',
  },
  title: {
    margin: 0,
    color: '#111827',
    fontSize: '24px',
  },
  subtitle: {
    margin: '8px 0 0',
    color: '#64748b',
  },
  controls: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    padding: '18px',
    borderRadius: '18px',
    background: '#fff',
    border: '1px solid #eceaf1',
    boxShadow: '0 12px 30px rgba(25, 23, 43, 0.04)',
  },
  input: {
    padding: '12px 14px',
    borderRadius: '12px',
    border: '1px solid #d8d7e4',
    minWidth: '240px',
    flex: 1,
    fontSize: '15px',
  },
  select: {
    padding: '12px 14px',
    borderRadius: '12px',
    border: '1px solid #d8d7e4',
    fontSize: '15px',
    background: '#fff',
  },
  refreshButton: {
    padding: '10px 16px',
    borderRadius: '12px',
    border: 'none',
    background: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: 600,
  },
  tableCard: {
    overflowX: 'auto',
    borderRadius: '20px',
    border: '1px solid #eceaf1',
    background: '#fff',
    boxShadow: '0 12px 30px rgba(25, 23, 43, 0.05)',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    minWidth: '900px',
  },
  headRow: {
    background: '#f8f7ff',
  },
  th: {
    padding: '14px 16px',
    textAlign: 'left',
    color: '#4a3e6a',
    fontWeight: 700,
    fontSize: '14px',
  },
  td: {
    padding: '14px 16px',
    color: '#475569',
    verticalAlign: 'middle',
  },
  evenRow: {
    background: '#fff',
  },
  oddRow: {
    background: '#fcfbff',
  },
  primaryButton: {
    background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
    color: '#fff',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '999px',
    cursor: 'pointer',
    fontWeight: 600,
    marginRight: '8px',
  },
  secondaryButton: {
    background: '#f4f2ff',
    color: '#312e4c',
    border: '1px solid #ded9f5',
    padding: '8px 12px',
    borderRadius: '999px',
    cursor: 'pointer',
    marginRight: '8px',
    fontWeight: 600,
  },
  deleteButton: {
    background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
    color: '#fff',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '999px',
    cursor: 'pointer',
    fontWeight: 600,
  },
  footerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '14px 16px',
    borderTop: '1px solid #f0eff7',
    flexWrap: 'wrap',
    gap: '12px',
  },
  meta: {
    color: '#64748b',
    fontSize: '14px',
  },
  paginationButton: {
    padding: '8px 12px',
    borderRadius: '999px',
    border: '1px solid #d8d7e4',
    background: '#fff',
    color: '#4a3e6a',
    cursor: 'pointer',
  },
  pageBadge: {
    padding: '8px 12px',
    borderRadius: '999px',
    border: '1px solid #e5e7eb',
    color: '#475569',
    background: '#f8fafc',
  },
  statusBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '6px 10px',
    borderRadius: '999px',
    fontSize: '12px',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
  },
  readBadge: {
    background: '#dcfce7',
    color: '#166534',
  },
  newBadge: {
    background: '#fef3c7',
    color: '#92400e',
  },
  error: {
    color: '#b91c1c',
    background: '#fee2e2',
    padding: '14px',
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
  modalOverlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(15, 23, 42, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    padding: '20px',
  },
  modal: {
    background: '#fff',
    padding: '24px',
    borderRadius: '22px',
    width: '100%',
    maxWidth: '760px',
    boxShadow: '0 24px 70px rgba(15, 23, 42, 0.2)',
  },
  modalTitle: {
    marginTop: 0,
    color: '#111827',
    marginBottom: '8px',
  },
  modalMeta: {
    color: '#64748b',
    marginBottom: '12px',
  },
  modalSubject: {
    fontWeight: 700,
    marginBottom: '10px',
    color: '#111827',
  },
  modalMessage: {
    whiteSpace: 'pre-wrap',
    marginBottom: '16px',
    color: '#334155',
    lineHeight: 1.7,
  },
  modalActions: {
    display: 'flex',
    gap: '8px',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
  },
};
