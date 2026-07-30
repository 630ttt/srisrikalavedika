import { apiFetch } from './services/api.js';

export async function submitMembership(payload) {
  return apiFetch('/api/membership', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
}

export async function fetchMemberships() {
  const data = await apiFetch('/api/memberships');
  return data.memberships || [];
}

export async function getMembership(id) {
  const data = await apiFetch(`/api/memberships/${encodeURIComponent(id)}`);
  return data.membership;
}

export async function approveMembership(id) {
  return apiFetch(`/api/memberships/${encodeURIComponent(id)}/approve`, {
    method: 'PUT',
  });
}

export async function rejectMembership(id) {
  return apiFetch(`/api/memberships/${encodeURIComponent(id)}/reject`, {
    method: 'PUT',
  });
}

export async function deleteMembership(id) {
  return apiFetch(`/api/memberships/${encodeURIComponent(id)}`, {
    method: 'DELETE',
  });
}
