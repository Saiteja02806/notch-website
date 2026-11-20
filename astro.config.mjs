import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { SITE_URL } from './src/data/origin.mjs'

// `site` drives canonical URLs and the sitemap. It comes from src/data/origin.mjs,
// the single source of truth for the production origin.
export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
  build: { inlineStylesheets: 'auto' }
})
