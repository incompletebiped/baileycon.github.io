import { defineConfig } from 'astro/config';

export default defineConfig({
  // This repo (baileycon.github.io) is owned by an account whose GitHub
  // Pages username doesn't match the repo name, so it deploys as a project
  // site under a subpath rather than at a domain root. `base` must match the
  // repo name; update `site` if a dedicated custom domain is added later.
  site: 'https://incompletebiped.github.io',
  base: '/baileycon.github.io/',
  output: 'static',
});
