export const site = {
  name: 'Notch',
  wordmark: 'notch',
  tagline: 'The top of your screen, finally useful.',
  description:
    'Notch folds music, Markdown notes, plans, posture and AI sessions into one quiet Windows notch at the top of your screen. One-time license, local, unsigned.',
  url: 'https://heronotch.app',
  repoUrl: 'https://github.com/Saiteja02806/heronotch',
  releasesUrl: 'https://github.com/Saiteja02806/heronotch/releases',
  issuesUrl: 'https://github.com/Saiteja02806/heronotch/issues',
  email: 'hello@heronotch.app',
  author: 'Saiteja',
  year: new Date().getFullYear()
} as const

export const nav = [
  { href: '/#tour', label: 'Tour' },
  { href: '/#features', label: 'Features' },
  { href: '/#install', label: 'Install' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/changelog', label: 'Changelog' },
  { href: '/help', label: 'Help' }
] as const

export const trustItems = [
  { label: 'One price', detail: 'Pay once, no subscription' },
  { label: 'Local', detail: 'Your files stay on your PC' },
  { label: 'Quiet', detail: 'Never on the taskbar' },
  { label: 'Open', detail: 'Public GitHub releases' }
] as const
