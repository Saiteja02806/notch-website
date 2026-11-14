# Notch website

Static marketing and download site for the Notch Windows app.

- Stack: Astro 5 + Tailwind v4 + Cloudflare Pages (static output).
- Source: `src/`. Built output: `dist/` (git-ignored).
- Local dev: `npm run dev` → http://localhost:4321
- Build: `npm run build`
- Preview: `npm run preview`
- Refresh release data: `npm run fetch:release`

See `../docs/website/BUILD.md` for the full development walkthrough.

## Conventions

- Release links are derived from `src/data/release.json`. Never hard-code a
  version or hash; run `npm run fetch:release` instead.
- Screenshots in `public/screenshots/` are real captures of the app taken with
  a demo notes folder. Do not ship personal vaults or account names.
- The app is unsigned. Keep the SmartScreen / Smart App Control copy honest.
