import { apiFetch } from './api.js';

export async function submitContact(payload) {
  return apiFetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
}

export async function fetchContacts() {
  const data = await apiFetch('/api/contact');
  return data.contacts || [];
}

export async function markContactRead(id) {
  return apiFetch(`/api/contact/${encodeURIComponent(id)}/read`, {
    method: 'PUT',
  });
}

export async function deleteContact(id) {
  return apiFetch(`/api/contact/${encodeURIComponent(id)}`, {
    method: 'DELETE',
  });
}
