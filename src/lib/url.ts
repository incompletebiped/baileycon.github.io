/**
 * Prefixes an absolute app path with Astro's configured `base` so links and
 * asset URLs work whether the site is deployed at a domain root or under a
 * subpath (e.g. a GitHub Pages project site like `/baileycon.github.io/`).
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
}
