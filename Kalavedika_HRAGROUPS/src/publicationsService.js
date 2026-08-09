import { apiFetch } from './services/api.js';

export async function fetchPublications() {
  const data = await apiFetch('/api/publications');
  return data.publications || [];
}

export async function addPublication({ title, description, image }) {
  const formData = new FormData();
  formData.append('title', title);
  formData.append('description', description);
  formData.append('image', image);

  const data = await apiFetch('/api/publications', {
    method: 'POST',
    body: formData,
  });

  return data.publication;
}

export async function updatePublication(id, { title, description, image }) {
  const formData = new FormData();
  if (title) formData.append('title', title);
  if (description) formData.append('description', description);
  if (image) formData.append('image', image);

  const data = await apiFetch(`/api/publications/${encodeURIComponent(id)}`, {
    method: 'PUT',
    body: formData,
  });

  return data.publication;
}

export async function deletePublication(id) {
  return apiFetch(`/api/publications/${encodeURIComponent(id)}`, {
    method: 'DELETE',
  });
}

export async function fetchPublication(id) {
  const data = await apiFetch(`/api/publications/${encodeURIComponent(id)}`);
  return data.publication;
}
