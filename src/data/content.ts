import { pricing } from '@/data/pricing'

export interface TourItem {
  id: string
  label: string
  title: string
  caption: string
  notice: string
  image: string
  alt: string
}

export const tour: TourItem[] = [
  {
    id: 'notes',
    label: 'Notes',
    title: 'Your Obsidian vault or Markdown folder, rendered inline.',
    caption:
      'Point Notch at any local folder or Obsidian vault (.obsidian, .trash and .git are ignored automatically). Write with live inline - [ ] checkboxes, # headings, **bold**, `code` and > blockquotes, search files and content with Ctrl+K, or flip to clean Preview mode.',
    notice: '750ms auto-save to plain .md on disk · One-click Open in Obsidian or Explorer.',
    image: '/screenshots/notes.png',
    alt: 'The Notes workspace with folder tree, inline Markdown checklist editor, Ctrl+K search and Obsidian vault actions.'
  },
  {
    id: 'sessions',
    label: 'Sessions',
    title: 'Claude Code, Codex, OpenCode & Anti Gravity in one board.',
    caption:
      'Notch reads your local session stores to display live turns, active models, token usage and project folders across all four AI coding tools. Catch OpenCode approval alerts and send verified follow-up replies straight from the notch.',
    notice: 'Delivered reply verification · Auto-watch for locked Codex threads.',
    image: '/screenshots/sessions.png',
    alt: 'The Sessions page showing Claude Code, Codex, OpenCode and Anti Gravity sessions with token counts and reply box.'
  },
  {
    id: 'plan',
    label: 'Plan',
    title: 'Day planner, Google Calendar agenda & under-notch reminders.',
    caption:
      'Combine a month calendar, daily priorities and time blocks with your live Google Calendar agenda. When a task reminder triggers, a crisp card unfolds directly beneath the collapsed notch over whatever app has focus.',
    notice: '12-second auto-dismiss card under the notch · Never steals focus.',
    image: '/screenshots/plan.png',
    alt: 'The Plan page with month calendar, Google Calendar agenda strip, daily tasks and reminder times.'
  },
  {
    id: 'music',
    label: 'Music',
    title: 'Instant system media control, plus Spotify queue.',
    caption:
      'Hero Notch detects any playing media session on macOS and Windows automatically with native album art extraction and iTunes cover fallback. Connect an optional PKCE Spotify app to unlock the Up Next queue, volume, shuffle and repeat.',
    notice: 'Zero login needed for transport & seek · Optional PKCE Spotify Web API.',
    image: '/screenshots/music.png',
    alt: 'The Music page: album art, track title, seek bar, transport controls and the Up Next queue.'
  },
  {
    id: 'posture',
    label: 'Posture',
    title: 'An on-device posture coach that never touches disk.',
    caption:
      'Off until you turn it on. When enabled, Notch scores your alignment 0–100 from the webcam in real time, displaying a live threshold ring that chimes softly only when a person is actually in frame.',
    notice: 'Frames are scored in memory and discarded immediately. Never uploaded.',
    image: '/screenshots/posture.png',
    alt: 'The Posture page showing the on-device privacy notice and live alignment threshold ring.'
  },
  {
    id: 'styles',
    label: 'Workspace',
    title: 'Multi-monitor placement, Phone QR transfer & focus blur.',
    caption:
      'Pin the notch to any monitor with a drag-anywhere placement map, transfer files (up to 16 MB) or clipboard snippets two ways between phone and PC via local Wi-Fi QR, or enable the focus blur backdrop.',
    notice: 'Browser-aware auto-hide · Hydration glass tracker & breathing timer built in.',
    image: '/screenshots/styles.png',
    alt: 'Workspace and appearance settings with multi-monitor placement map, monochrome & accent themes, and utility controls.'
  }
]

export interface Feature {
  id: string
  kicker: string
  title: string
  body: string
  bullets: string[]
  image: string
  alt: string
}

export const features: Feature[] = [
  {
    id: 'notes',
    kicker: '01 — Notes · Local Markdown & Obsidian Vaults',
    title: 'A real Markdown editor that lives on your local files.',
    body:
      'Point Notch at any folder of .md files or your active Obsidian vault. There is no import step, no cloud sync account and no proprietary database — Notch edits the exact same plain text files on disk with 750ms auto-save while automatically ignoring .obsidian, .trash and .git.',
    bullets: [
      'Live inline Markdown: clickable - [ ] checkboxes, # and ## headings, **bold**, _italic_, `code`, > blockquotes and [links](url) — plus one-click rendered Preview.',
      'Full nested folder tree with note counts, Expand All, drag-and-drop file organization, and instant Ctrl+K filename + full-text search.',
      'Open the active note directly in Obsidian or reveal it in Windows Explorer whenever you want your full desktop window.'
    ],
    image: '/screenshots/notes-preview.png',
    alt: 'A Markdown note in Notch showing inline checkboxes, headings, code spans and folder tree.'
  },
  {
    id: 'sessions',
    kicker: '02 — AI Coding Sessions',
    title: 'Claude Code, Codex, OpenCode and Anti Gravity, side by side.',
    body:
      'Notch inspects local session stores across all four coding agents to show live turn state, active model, token consumption and project directory in one quiet board — so you can monitor long-running tasks without terminal-hopping.',
    bullets: [
      'Send follow-up prompts directly from the notch with Delivered verification against local session logs and auto-watch for locked Codex threads.',
      'Surface OpenCode approval alerts immediately so a waiting tool call never stalls unnoticed.',
      'Filter by provider, search across sessions, jump to the project folder, and keep noisy subagent threads hidden by default.'
    ],
    image: '/screenshots/sessions.png',
    alt: 'Sessions board with Claude Code, Codex, OpenCode and Anti Gravity coding sessions.'
  },
  {
    id: 'plan',
    kicker: '03 — Planner & Google Calendar',
    title: 'Your day plan and Google Calendar, with reminders that reach you.',
    body:
      'A focused day planner with a month calendar, priority levels, time blocks and a live Google Calendar agenda strip. When a reminder fires, a compact card unfolds right beneath the collapsed notch over whatever window has focus.',
    bullets: [
      'Sync your Google Calendar agenda alongside local tasks and daily priorities.',
      'Trigger reminders on time or 5, 10, 30 or 60 minutes early — unfolding for 12 seconds under the notch without stealing keyboard focus.',
      'Includes a Home breathing focus timer and daily glass-by-glass hydration tracker with interval nudges.'
    ],
    image: '/screenshots/plan.png',
    alt: 'Planner with the day’s tasks, Google Calendar agenda strip and a reminder attached.'
  },
  {
    id: 'music',
    kicker: '04 — Music & System Media',
    title: 'Zero-setup media control, plus PKCE Spotify queue.',
    body:
      'As soon as audio plays in Spotify Desktop or any media app on macOS or Windows, Hero Notch picks up the session automatically with native album art and iTunes cover fallback.',
    bullets: [
      'Play, pause, skip and seek from the top edge with zero login or configuration required.',
      'Connect an optional free Spotify developer Client ID (PKCE) to unlock the Up Next queue, volume control, shuffle and repeat.',
      'Collapsed bar displays live waveform, track title and progress while staying out of your editor’s way.'
    ],
    image: '/screenshots/music.png',
    alt: 'Music page with a playing track, native cover art, transport controls and the Up Next queue.'
  },
  {
    id: 'posture',
    kicker: '05 — Phone QR Transfer & On-Device Posture',
    title: 'Local Wi-Fi phone transfer and a posture coach that stays in RAM.',
    body:
      'Beam files (up to 16 MB), clipboard text or snippets two ways between your phone and PC by scanning a local Wi-Fi QR code — or enable the opt-in webcam posture coach that scores alignment 0–100 entirely on-device.',
    bullets: [
      'Two-way Phone QR transfer runs over your local network with zero cloud uploads, accounts or pairing apps.',
      'Posture webcam frames are scored in memory and discarded immediately — never saved to disk or sent over the network.',
      'Multi-monitor selector, drag-anywhere top-edge placement map, focus blur backdrop and browser-aware auto-hide.'
    ],
    image: '/screenshots/posture.png',
    alt: 'Posture and local utility view explaining on-device processing and local Wi-Fi QR transfer.'
  }
]

export interface BentoItem {
  icon: 'taskbar' | 'palette' | 'move' | 'pointer' | 'file' | 'camera'
  title: string
  body: string
}

export const bento: BentoItem[] = [
  {
    icon: 'file',
    title: 'Obsidian & plain .md vaults',
    body: 'Edit live - [ ] checkboxes, headings and [[wiki-links]] in place with 750ms auto-save while .obsidian, .trash and .git stay ignored.'
  },
  {
    icon: 'taskbar',
    title: 'AI Coding Sessions board',
    body: 'Monitor live turns, models and tokens across Claude Code, Codex, OpenCode and Anti Gravity without hopping terminal tabs.'
  },
  {
    icon: 'move',
    title: 'Google Calendar & 12s alerts',
    body: 'Keep your day plan and live calendar agenda at the top edge with quiet 12-second under-notch reminders that never steal focus.'
  },
  {
    icon: 'palette',
    title: 'MacBook & Windows media',
    body: 'Control Spotify Desktop or system audio out of the box with native album art, plus optional PKCE Up Next queue and volume.'
  },
  {
    icon: 'pointer',
    title: 'Local Wi-Fi Phone QR',
    body: 'Scan a temporary LAN QR code to beam files up to 16 MB or clipboard snippets between phone and computer with zero cloud relay.'
  },
  {
    icon: 'camera',
    title: 'Multi-monitor, hydration & focus blur',
    body: 'Pin the notch to any display with drag placement, log daily water glasses, blur background clutter, and keep zero Dock or taskbar icons.'
  }
]

export const limits: { title: string; body: string }[] = [
  { title: 'macOS & Windows.', body: 'Built for MacBook (Apple Silicon & Intel) and Windows 10/11 (64-bit), including multi-monitor setups.' },
  { title: 'No silent background updater.', body: 'Updating uses the private installer link from your license receipt when you choose.' },
  {
    title: 'Spotify queue is optional.',
    body: 'Native system media control works out of the box; Up Next queue, volume and shuffle use a free Spotify developer Client ID.'
  },
  {
    title: 'Local LAN for Phone QR.',
    body: 'Phone file and clipboard transfer works when your phone and laptop are on the same local Wi-Fi network (up to 16 MB per file).'
  }
]

export const faq: { q: string; a: string }[] = [
  {
    q: 'Can I point Notes at my existing Obsidian vault or Markdown folder?',
    a: 'Yes. Point Hero Notch at any local folder or Obsidian vault. It edits your plain .md files in place with 750ms auto-save, ignores .obsidian, .trash and .git folders automatically, supports Ctrl/Cmd+K full-text search, and lets you open any note in Obsidian with one click.'
  },
  {
    q: 'Does one license cover both MacBook and Windows?',
    a: `Yes. One payment (${`$${pricing.earlyBird.price.toFixed(2)}`} Early Bird, then ${`$${pricing.standard.price.toFixed(2)}`} at launch) unlocks Hero Notch for both your MacBook (macOS) and Windows 10/11 machines with zero recurring fees.`
  },
  {
    q: 'How do I get the app after prebooking?',
    a: 'Both MacBook (macOS) and Windows builds are currently coming soon. Right after prebooking you receive your lifetime Early Bird license key immediately, and your macOS and Windows builds will unlock with that key as soon as downloads open.'
  },
  {
    q: 'Which AI coding tools are supported in Sessions?',
    a: 'Claude Code, Codex, OpenCode and Anti Gravity. Hero Notch reads their local session stores to show live turns, models, token usage and approval alerts so you can follow progress right from the top bar.'
  },
  {
    q: 'Where does my data go?',
    a: 'Nowhere. Notes remain plain .md files in your local folder, app state stays locally on your Mac or PC, posture webcam frames are scored in RAM and discarded immediately, and local Wi-Fi Phone QR never touches external servers.'
  }
]
