/**
 * Universal Asset URL Resolver for Vite / GitHub Pages / Custom Domains
 * 
 * Automatically resolves image paths regardless of deployment subpaths:
 * - Direct imported assets (`import img from './assets/...'`) -> returns as-is
 * - Public string paths (`'/images/projects/p1.png'` or `'images/...'`) -> safely prefixed with `import.meta.env.BASE_URL`
 * - External URLs (`'https://...'`, `'data:...'`) -> returns as-is
 */
export function getAssetUrl(path?: string | null): string {
  if (!path) return '';

  // 1. If it's already an external URL, data URI, blob URI, or relative path
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path;
  }

  // 2. If it's an imported asset resolved by Vite (e.g. contains /assets/ or ./assets/)
  if (path.includes('assets/')) {
    return path;
  }

  // 3. For public assets, resolve against Vite's BASE_URL (e.g. '/Abdlhamed-profil/' on GitHub Pages)
  const baseUrl = import.meta.env.BASE_URL || './';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

  return `${normalizedBase}${cleanPath}`;
}
