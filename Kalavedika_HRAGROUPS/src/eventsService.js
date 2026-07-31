import { apiFetch } from './services/api.js';

export async function fetchEvents() {
  const data = await apiFetch('/api/events');
  return data.events || [];
}

export async function fetchEvent(id) {
  const data = await apiFetch(`/api/events/${encodeURIComponent(id)}`);
  return data.event;
}

export async function addEvent({ title, date, description, image }) {
  const formData = new FormData();
  formData.append('title', title);
  formData.append('date', date);
  formData.append('description', description);
  formData.append('image', image);

  const data = await apiFetch('/api/events', { method: 'POST', body: formData });
  return data.event;
}

export async function updateEvent(id, { title, date, description, image }) {
  const formData = new FormData();
  if (title) formData.append('title', title);
  if (date) formData.append('date', date);
  if (description) formData.append('description', description);
  if (image) formData.append('image', image);

  const data = await apiFetch(`/api/events/${encodeURIComponent(id)}`, { method: 'PUT', body: formData });
  return data.event;
}

export async function deleteEvent(id) {
  return apiFetch(`/api/events/${encodeURIComponent(id)}`, { method: 'DELETE' });
}
