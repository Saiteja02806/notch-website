/**
 * Single source of truth for the site's canonical origin. Imported by
 * astro.config.mjs, src/data/site.ts and the Vercel functions in /api, so the
 * domain only ever needs to change here (and in vercel.json's legacy redirects).
 */
export const SITE_URL = 'https://heronotch.app'
export const SITE_HOST = new URL(SITE_URL).host
export const SITE_EMAIL = `hello@${SITE_HOST}`

/** Hosts that must 301 to SITE_URL. Mirrored in vercel.json "redirects". */
export const LEGACY_HOSTS = ['buildnotch.app', 'www.buildnotch.app', `www.${SITE_HOST}`]
