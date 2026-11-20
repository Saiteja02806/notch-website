import { SITE_URL, SITE_EMAIL } from './origin.mjs'

export const site = {
  name: 'Hero Notch',
  wordmark: 'Hero Notch',
  tagline: 'The top of your screen, finally useful.',
  description:
    'Hero Notch folds local Markdown notes (Obsidian-ready), AI coding sessions (Claude Code, Codex, OpenCode, Anti Gravity), Google Calendar day planning, music, phone QR transfer and posture into one quiet notch for macOS and Windows.',
  url: SITE_URL,
  email: SITE_EMAIL,
  author: 'Saiteja',
  year: new Date().getFullYear()
} as const

export const nav = [
  { href: '/#setup-video', label: 'Setup Video' },
  { href: '/#details', label: 'Capabilities' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/help', label: 'Help' }
] as const

export const trustItems = [
  { label: 'macOS & Windows', detail: 'Coming soon · Prebook open' },
  { label: 'Plain .md on Disk', detail: 'No cloud database, Obsidian-ready' },
  { label: 'In-RAM Posture', detail: 'Webcam frames discarded in memory' },
  { label: 'One-Time Prebook', detail: '$3.99 Early Bird (then $9.99) · No subscription' }
] as const
