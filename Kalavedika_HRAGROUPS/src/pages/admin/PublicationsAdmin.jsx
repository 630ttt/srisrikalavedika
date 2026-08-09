import React, { useEffect, useMemo, useState } from 'react';
import {
  fetchPublications,
  addPublication,
  deletePublication,
  updatePublication,
} from '../../publicationsService.js';
import { resolveAssetUrl } from '../../services/api.js';

function PublicationsAdmin() {
  const [publications, setPublications] = useState([]);
  const [filteredPublications, setFilteredPublications] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [form, setForm] = useState({ title: '', description: '', image: null });
  const [statusMessage, setStatusMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    loadPublications();
  }, []);

  useEffect(() => {
    const query = searchText.toLowerCase();
    setFilteredPublications(
      publications.filter((item) =>
        item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query)
      )
    );
  }, [searchText, publications]);

  async function loadPublications() {
    setLoading(true);
    setError('');
    try {
      const data = await fetchPublications();
      setPublications(data);
    } catch (err) {
      setError(err.message || 'Failed to load publications');
    } finally {
      setLoading(false);
    }
  }

  function openNewModal() {
    setEditItem(null);
    setForm({ title: '', description: '', image: null });
    setStatusMessage('');
    setError('');
    setModalOpen(true);
  }

  function openEditModal(item) {
    setEditItem(item);
    setForm({ title: item.title, description: item.description, image: null });
    setStatusMessage('');
    setError('');
    setModalOpen(true);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setStatusMessage('');
    if (!form.title.trim() || !form.description.trim() || (!form.image && !editItem)) {
      setError('Title, description and image are required.');
      return;
    }

    try {
      if (editItem) {
        await updatePublication(editItem._id, {
          title: form.title.trim(),
          description: form.description.trim(),
          image: form.image,
        });
        setStatusMessage('Publication updated successfully.');
      } else {
        await addPublication({
          title: form.title.trim(),
          description: form.description.trim(),
          image: form.image,
        });
        setStatusMessage('Publication added successfully.');
      }
      setModalOpen(false);
      await loadPublications();
    } catch (err) {
      setError(err.message || 'Failed to save publication');
    }
  }

  async function handleDelete(id) {
    const confirmed = window.confirm('Delete this publication?');
    if (!confirmed) return;
    setError('');
    setStatusMessage('');
    try {
      await deletePublication(id);
      setStatusMessage('Publication deleted successfully.');
      await loadPublications();
    } catch (err) {
      setError(err.message || 'Delete failed');
    }
  }

  const publicationList = filteredPublications.length ? filteredPublications : publications;

  return (
    <div style={styles.page}>
      <div style={styles.topBar}>
        <div>
          <h2 style={styles.heading}>Publications</h2>
          <p style={styles.description}>Manage publications displayed on the public website.</p>
        </div>
        <button onClick={openNewModal} style={styles.primaryButton}>Add Publication</button>
      </div>

      <div style={styles.subHeader}>
        <input
          placeholder="Search publications..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={styles.searchInput}
        />
      </div>

      {error && <div style={styles.error}>{error}</div>}
      {statusMessage && <div style={styles.success}>{statusMessage}</div>}

      {loading ? (
        <div style={styles.loadingState}>Loading publications...</div>
      ) : publicationList.length === 0 ? (
        <div style={styles.emptyState}>No publications found.</div>
      ) : (
        <div style={styles.cardsGrid}>
          {publicationList.map((publication) => (
            <div key={publication._id} style={styles.card}>
              <img src={resolveAssetUrl(publication.image_url)} alt={publication.title} style={styles.image} />
              <div style={styles.content}>
                <h3 style={styles.cardTitle}>{publication.title}</h3>
                <p style={styles.cardText}>
                  {publication.description.length > 120
                    ? `${publication.description.slice(0, 120).trim()}...`
                    : publication.description}
                </p>
                <div style={styles.cardActions}>
                  <button style={styles.secondaryButton} onClick={() => openEditModal(publication)}>
                    Edit
                  </button>
                  <button style={styles.deleteButton} onClick={() => handleDelete(publication._id)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {modalOpen && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <button style={styles.closeButton} onClick={() => setModalOpen(false)}>
              ×
            </button>
            <h3 style={styles.modalTitle}>{editItem ? 'Edit Publication' : 'Add Publication'}</h3>
            {error && <div style={styles.error}>{error}</div>}
            <form onSubmit={handleSubmit}>
              <label style={styles.label}>Title</label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                style={styles.input}
              />
              <label style={styles.label}>Description</label>
              <textarea
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                style={styles.textarea}
              />
              <label style={styles.label}>Image</label>
              <input
                type="file"
                accept="image/jpeg,image/jpg,image/png,image/webp"
                onChange={(e) => setForm({ ...form, image: e.target.files?.[0] || null })}
                style={styles.input}
              />
              <button type="submit" style={styles.primaryButton}>
                {editItem ? 'Save Changes' : 'Create Publication'}
              </button>
            </form>
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
  topBar: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '18px',
    padding: '22px 24px',
    borderRadius: '24px',
    background: 'linear-gradient(145deg, #ffffff 0%, #f8f7ff 100%)',
    border: '1px solid #eceaf1',
    boxShadow: '0 14px 40px rgba(52, 44, 88, 0.06)',
  },
  heading: {
    margin: 0,
    fontSize: '24px',
    color: '#111827',
  },
  description: {
    margin: '8px 0 0',
    color: '#64748b',
  },
  primaryButton: {
    background: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)',
    color: '#fff',
    padding: '12px 22px',
    borderRadius: '12px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 600,
  },
  subHeader: {
    marginBottom: '4px',
  },
  searchInput: {
    width: '100%',
    maxWidth: '420px',
    padding: '12px 14px',
    borderRadius: '12px',
    border: '1px solid #dcdce8',
    fontSize: '15px',
    boxShadow: '0 8px 20px rgba(25, 23, 43, 0.03)',
  },
  cardsGrid: {
    display: 'grid',
    gap: '18px',
    gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
  },
  card: {
    background: 'linear-gradient(145deg, #ffffff 0%, #fcfcff 100%)',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 16px 40px rgba(25, 23, 43, 0.08)',
    border: '1px solid #eceaf1',
  },
  image: {
    width: '100%',
    height: '210px',
    objectFit: 'cover',
  },
  content: {
    padding: '18px',
  },
  cardTitle: {
    margin: 0,
    color: '#111827',
    fontSize: '20px',
  },
  cardText: {
    margin: '12px 0 16px',
    color: '#5e5d6a',
    lineHeight: 1.6,
  },
  cardActions: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
  },
  secondaryButton: {
    background: '#f4f2ff',
    color: '#312e4c',
    border: '1px solid #ded9f5',
    padding: '10px 16px',
    borderRadius: '999px',
    cursor: 'pointer',
    fontWeight: 600,
  },
  deleteButton: {
    background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
    color: '#fff',
    border: 'none',
    padding: '10px 16px',
    borderRadius: '999px',
    cursor: 'pointer',
    fontWeight: 600,
  },
  modalOverlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(23, 18, 47, 0.55)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
    padding: '24px',
  },
  modal: {
    width: '100%',
    maxWidth: '600px',
    background: '#fff',
    borderRadius: '24px',
    padding: '30px',
    position: 'relative',
    boxShadow: '0 24px 80px rgba(34, 24, 78, 0.16)',
  },
  closeButton: {
    position: 'absolute',
    top: '18px',
    right: '18px',
    border: 'none',
    background: 'transparent',
    fontSize: '24px',
    cursor: 'pointer',
    color: '#444',
  },
  modalTitle: {
    marginTop: 0,
    fontSize: '24px',
    color: '#111827',
    marginBottom: '18px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    color: '#4d4a6a',
    fontWeight: 600,
  },
  input: {
    width: '100%',
    padding: '12px 14px',
    borderRadius: '12px',
    border: '1px solid #dcdce8',
    fontSize: '15px',
    marginBottom: '16px',
  },
  textarea: {
    width: '100%',
    minHeight: '110px',
    padding: '12px 14px',
    borderRadius: '12px',
    border: '1px solid #dcdce8',
    fontSize: '15px',
    marginBottom: '16px',
    resize: 'vertical',
  },
  success: {
    marginBottom: '16px',
    padding: '14px',
    borderRadius: '12px',
    background: '#dcfce7',
    color: '#166534',
  },
  error: {
    marginBottom: '16px',
    padding: '14px',
    borderRadius: '12px',
    background: '#fee2e2',
    color: '#b91c1b',
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

export default PublicationsAdmin;
