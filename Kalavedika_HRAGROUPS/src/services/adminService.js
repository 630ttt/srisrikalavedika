import { apiFetch } from './api.js';

export async function adminLogin(username, password) {
  return apiFetch('/api/admin/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
}

export async function adminLogout() {
  return apiFetch('/api/admin/logout', { method: 'POST' });
}

export async function fetchAdminProfile() {
  return apiFetch('/api/admin/profile');
}

export async function updateAdminProfile(payload) {
  return apiFetch('/api/admin/profile', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
}

export async function fetchDashboardStats() {
  return apiFetch('/api/admin/stats');
}

export async function fetchNotifications() {
  return apiFetch('/api/notifications');
}

export async function markNotificationRead(id) {
  return apiFetch(`/api/notifications/read/${encodeURIComponent(id)}`, {
    method: 'PUT',
  });
}
