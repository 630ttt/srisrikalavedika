import React, { useEffect, useRef, useState } from 'react';
import { fetchGallery, uploadImages, deleteImage } from '../../galleryService.js';
import { resolveAssetUrl } from '../../services/api.js';

function GalleryAdmin() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);

  useEffect(() => {
    loadImages();
  }, []);

  async function loadImages() {
    setLoading(true);
    setError('');
    try {
      const data = await fetchGallery();
      setImages(data);
    } catch (err) {
      setError(err.message || 'Failed to load gallery');
    } finally {
      setLoading(false);
    }
  }

  async function handleUpload(files) {
    setError('');
    setMessage('');
    if (!files.length) return;

    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    const invalid = Array.from(files).find((file) => !allowedTypes.includes(file.type));
    if (invalid) {
      setError('Only JPG, JPEG, PNG, and WEBP images are allowed.');
      return;
    }

    setUploading(true);
    try {
      await uploadImages(files);
      setMessage('Images uploaded successfully.');
      await loadImages();
    } catch (err) {
      setError(err.message || 'Upload failed');
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  }

  async function handleDelete(id) {
    const confirmed = window.confirm('Delete this image?');
    if (!confirmed) return;
    setError('');
    setMessage('');
    setUploading(true);
    try {
      await deleteImage(id);
      setMessage('Image deleted successfully.');
      await loadImages();
    } catch (err) {
      setError(err.message || 'Delete failed');
    } finally {
      setUploading(false);
    }
  }

  return (
    <div style={styles.page}>
      <div style={styles.toolbar}>
        <div>
          <h2 style={styles.heading}>Gallery Images</h2>
          <p style={styles.description}>Upload, preview and delete gallery images.</p>
        </div>
        <div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/jpg,image/png,image/webp"
            multiple
            style={{ display: 'none' }}
            onChange={(e) => handleUpload(e.target.files)}
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            style={styles.primaryButton}
            disabled={uploading}
          >
            {uploading ? 'Uploading...' : 'Upload Images'}
          </button>
        </div>
      </div>

      {message && <div style={styles.success}>{message}</div>}
      {error && <div style={styles.error}>{error}</div>}

      {loading ? (
        <div style={styles.loadingState}>Loading gallery images...</div>
      ) : images.length === 0 ? (
        <div style={styles.emptyState}>No gallery images found yet.</div>
      ) : (
        <div style={styles.grid}>
          {images.map((image) => (
            <div key={image._id} style={styles.card}>
              <img src={resolveAssetUrl(image.image_url)} alt={image.original_name} style={styles.image} />
              <div style={styles.cardBody}>
                <p style={styles.cardText}>{image.original_name}</p>
                <div>
                  <button onClick={() => handleDelete(image._id)} style={styles.deleteButton}>
                    Delete
                  </button>
                </div>
              </div>
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
  toolbar: {
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
  heading: {
    margin: 0,
    color: '#111827',
    fontSize: '24px',
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
  grid: {
    display: 'grid',
    gap: '18px',
    gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
  },
  card: {
    borderRadius: '20px',
    overflow: 'hidden',
    background: '#fff',
    border: '1px solid #e9e7ef',
    boxShadow: '0 12px 30px rgba(35, 22, 73, 0.05)',
  },
  image: {
    width: '100%',
    height: '220px',
    objectFit: 'cover',
  },
  cardBody: {
    padding: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '12px',
    flexWrap: 'wrap',
  },
  cardText: {
    margin: 0,
    color: '#334155',
    fontWeight: 600,
    overflowWrap: 'anywhere',
  },
  deleteButton: {
    background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
    color: '#fff',
    border: 'none',
    padding: '10px 14px',
    borderRadius: '999px',
    cursor: 'pointer',
    fontWeight: 600,
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

export default GalleryAdmin;
