export function saveToken(token) {
  localStorage.setItem('adminToken', token);
}

export function getToken() {
  return localStorage.getItem('adminToken');
}

export function clearToken() {
  localStorage.removeItem('adminToken');
}

export function isAdminAuthenticated() {
  return Boolean(getToken());
}
