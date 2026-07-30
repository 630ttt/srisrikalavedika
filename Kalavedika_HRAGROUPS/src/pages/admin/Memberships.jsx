import React, { useEffect, useMemo, useState } from 'react';
import {
  fetchMemberships,
  approveMembership,
  rejectMembership,
  deleteMembership,
} from '../../membershipService.js';

const statusOptions = ['All', 'Pending', 'Approved', 'Rejected'];

function Memberships() {
  const [members, setMembers] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    loadMembers();
  }, []);

  async function loadMembers() {
    setLoading(true);
    setError('');
    try {
      const data = await fetchMemberships();
      setMembers(data);
    } catch (err) {
      setError(err.message || 'Failed to load membership applications');
    } finally {
      setLoading(false);
    }
  }

  const filteredMembers = useMemo(() => {
    return members.filter((member) => {
      if (statusFilter !== 'All' && member.status !== statusFilter) return false;
      const query = searchText.toLowerCase();
      return (
        member.name.toLowerCase().includes(query) ||
        member.email.toLowerCase().includes(query) ||
        member.phone.toLowerCase().includes(query) ||
        member.membership_type.toLowerCase().includes(query)
      );
    });
  }, [members, searchText, statusFilter]);

  async function handleAction(id, action) {
    setError('');
    setSuccess('');
    try {
      if (action === 'approve') {
        await approveMembership(id);
        setSuccess('Membership approved');
      } else if (action === 'reject') {
        await rejectMembership(id);
        setSuccess('Membership rejected');
      } else if (action === 'delete') {
        const confirmed = window.confirm('Delete this application permanently?');
        if (!confirmed) return;
        await deleteMembership(id);
        setSuccess('Application deleted');
      }
      await loadMembers();
    } catch (err) {
      setError(err.message || 'Action failed');
    }
  }

  function getStatusBadgeStyle(status) {
    if (status === 'Approved') {
      return { ...styles.statusBadge, ...styles.approvedBadge };
    }
    if (status === 'Rejected') {
      return { ...styles.statusBadge, ...styles.rejectedBadge };
    }
    return { ...styles.statusBadge, ...styles.pendingBadge };
  }

  return (
    <div style={styles.page}>
      <div style={styles.controls}>
        <div style={styles.controlGroup}>
          <label style={styles.label}>Search</label>
          <input
            placeholder="Search name, email, phone or type"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.controlGroup}>
          <label style={styles.label}>Status</label>
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} style={styles.select}>
            {statusOptions.map((option) => (
              <option value={option} key={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>
      {loading && <div style={styles.loadingState}>Loading applications...</div>}
      {error && <div style={styles.error}>{error}</div>}
      {success && <div style={styles.success}>{success}</div>}
      {!loading && filteredMembers.length === 0 && (
        <div style={styles.emptyState}>No applications match the current search and filter.</div>
      )}
      {!loading && filteredMembers.length > 0 && (
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr style={styles.headRow}>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Phone</th>
                <th style={styles.th}>Type</th>
                <th style={styles.th}>Status</th>
                <th style={styles.th}>Submitted On</th>
                <th style={styles.actionHeader}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredMembers.map((member, index) => (
                <tr key={member._id} style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
                  <td style={styles.td}>{member.name}</td>
                  <td style={styles.td}>{member.email}</td>
                  <td style={styles.td}>{member.phone}</td>
                  <td style={styles.td}>{member.membership_type}</td>
                  <td style={styles.td}><span style={getStatusBadgeStyle(member.status)}>{member.status}</span></td>
                  <td style={styles.td}>{new Date(member.submitted_on).toLocaleDateString()}</td>
                  <td style={styles.td}>
                    <button onClick={() => handleAction(member._id, 'approve')} style={styles.approveButton}>
                      Approve
                    </button>
                    <button onClick={() => handleAction(member._id, 'reject')} style={styles.rejectButton}>
                      Reject
                    </button>
                    <button onClick={() => handleAction(member._id, 'delete')} style={styles.deleteButton}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
  controls: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    padding: '20px 22px',
    borderRadius: '20px',
    background: 'linear-gradient(145deg, #ffffff 0%, #f8f7ff 100%)',
    border: '1px solid #eceaf1',
    boxShadow: '0 12px 30px rgba(25, 23, 43, 0.05)',
  },
  controlGroup: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '240px',
    flex: 1,
  },
  label: {
    marginBottom: '8px',
    color: '#475569',
    fontWeight: 700,
    fontSize: '14px',
  },
  input: {
    width: '100%',
    padding: '12px 14px',
    borderRadius: '12px',
    border: '1px solid #d8d7e4',
    fontSize: '15px',
    background: '#fff',
  },
  select: {
    width: '100%',
    padding: '12px 14px',
    borderRadius: '12px',
    border: '1px solid #d8d7e4',
    fontSize: '15px',
    background: '#fff',
  },
  tableContainer: {
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
  actionHeader: {
    minWidth: '220px',
    padding: '14px 16px',
    textAlign: 'left',
    color: '#4a3e6a',
    fontWeight: 700,
    fontSize: '14px',
  },
  approveButton: {
    marginRight: '8px',
    background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
    color: '#fff',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '999px',
    cursor: 'pointer',
    fontWeight: 600,
  },
  rejectButton: {
    marginRight: '8px',
    background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    color: '#fff',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '999px',
    cursor: 'pointer',
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
  approvedBadge: {
    background: '#dcfce7',
    color: '#166534',
  },
  rejectedBadge: {
    background: '#fee2e2',
    color: '#991b1b',
  },
  pendingBadge: {
    background: '#fef3c7',
    color: '#92400e',
  },
  success: {
    color: '#166534',
    background: '#dcfce7',
    padding: '14px',
    marginBottom: '18px',
    borderRadius: '12px',
  },
  error: {
    color: '#991b1b',
    background: '#fee2e2',
    padding: '14px',
    marginBottom: '18px',
    borderRadius: '12px',
  },
  emptyState: {
    padding: '24px',
    borderRadius: '16px',
    background: '#fafafa',
    border: '1px dashed #d8d8d8',
    color: '#5d5d5d',
  },
  loadingState: {
    padding: '18px',
    color: '#475569',
    background: 'rgba(255,255,255,0.7)',
    borderRadius: '14px',
    border: '1px solid #e5e7eb',
  },
};

export default Memberships;
