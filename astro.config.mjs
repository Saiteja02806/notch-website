import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

// Change `site` when the domain is confirmed. It drives canonical URLs, the
// sitemap and the RSS feed, so it must be the real production origin.
export default defineConfig({
  site: 'https://heronotch.app',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
  build: { inlineStylesheets: 'auto' }
})
