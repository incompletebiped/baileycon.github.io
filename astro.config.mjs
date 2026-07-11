import { defineConfig } from 'astro/config';

export default defineConfig({
  // Served at the baileycon.com custom domain (see public/CNAME), so no
  // subpath `base` is needed — the site lives at the domain root.
  site: 'https://baileycon.com',
  output: 'static',
});
