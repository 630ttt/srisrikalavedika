const ENV_BASE = import.meta.env.VITE_API_BASE_URL || import.meta.env.VITE_API_URL || '';
const DEFAULT_CANDIDATES = ['', ENV_BASE, 'http://localhost:5000', 'http://127.0.0.1:5000', 'http://localhost:5001', 'http://127.0.0.1:5001'].filter((base, index, values) => values.indexOf(base) === index);

// Keep a mutable base so retries can try alternatives
let API_BASE = DEFAULT_CANDIDATES[0] || '';

function normalizeBase(base) {
  if (!base) return '';
  return base === '/' ? '' : base.replace(/\/$/, '');
}

function buildUrl(base, endpoint) {
  const normalizedBase = normalizeBase(base);
  const normalizedEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  return `${normalizedBase}${normalizedEndpoint}`;
}

export function resolveAssetUrl(assetPath) {
  if (!assetPath || /^https?:\/\//i.test(assetPath)) return assetPath;
  const base = normalizeBase(API_BASE || ENV_BASE || '');
  if (!base) return assetPath.startsWith('/') ? assetPath : `/${assetPath}`;
  return `${base}${assetPath.startsWith('/') ? assetPath : `/${assetPath}`}`;
}

async function tryFetchWithBase(base, endpoint, options) {
  return fetch(buildUrl(base, endpoint), options);
}

export async function apiFetch(endpoint, options = {}) {
  const headers = options.headers ? { ...options.headers } : {};
  const token = localStorage.getItem('adminToken');
  if (token) {
    headers.Authorization = 'Bearer ' + token;
  }

  const opts = { ...options, headers };

  // Attempt fetch with current API_BASE first
  const candidates = DEFAULT_CANDIDATES.slice();
  if (API_BASE && !candidates.includes(API_BASE)) candidates.unshift(API_BASE);

  let lastErr = null;
  for (const base of candidates) {
    try {
      const response = await tryFetchWithBase(base, endpoint, opts);
      const contentType = response.headers.get('content-type') || '';
      const data = contentType.includes('application/json') ? await response.json() : null;

      if (!response.ok) {
        const error = data?.error || data?.message || `Request failed: ${response.status}`;
        throw new Error(error);
      }

      // Set the working base for future calls only after a successful response
      API_BASE = base;
      return data;
    } catch (err) {
      // If network-level error (TypeError: Failed to fetch) try next candidate
      lastErr = err;
      // continue loop to try next base
    }
  }

  // All candidates failed
  const message = lastErr?.message || 'Network request failed';
  throw new Error(message);
}
