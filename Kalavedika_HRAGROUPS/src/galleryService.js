import { apiFetch } from './services/api.js';

export async function fetchGallery() {
  const data = await apiFetch('/api/gallery');
  return data.images || [];
}

export async function uploadImages(files) {
  const formData = new FormData();
  for (const file of files) {
    formData.append('images', file);
  }

  const data = await apiFetch('/api/gallery/upload', {
    method: 'POST',
    body: formData,
  });

  return data.uploaded || [];
}

export async function deleteImage(id) {
  return apiFetch(`/api/gallery/${encodeURIComponent(id)}`, {
    method: 'DELETE',
  });
}
