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
    id: 'music',
    label: 'Music',
    title: 'Music, without leaving the work.',
    caption:
      'If Spotify Desktop is running, Notch picks it up by itself. The collapsed tab shows the track and its progress; open it for transport, queue, shuffle and volume.',
    notice: 'Basic control needs no login. A free developer app adds the queue.',
    image: '/screenshots/music.png',
    alt: 'The Music page: album art, track title, seek bar, transport controls and the Up Next queue.'
  },
  {
    id: 'notes',
    label: 'Notes',
    title: 'Your folder of Markdown, rendered.',
    caption:
      'Point Notch at any folder of .md files. It never imports them. The editor applies formatting as you type, and Preview gives you the clean read.',
    notice: 'Checklist boxes are clickable. Your files stay plain Markdown.',
    image: '/screenshots/notes.png',
    alt: 'The Notes editor with a Markdown checklist rendered inline, toolbar above and note list at left.'
  },
  {
    id: 'plan',
    label: 'Plan',
    title: 'The day, with reminders that reach you.',
    caption:
      'A month calendar, priorities and times. Give a task a reminder and a card unfolds under the collapsed notch when it fires, over whatever app has focus.',
    notice: 'No extra window, nothing to dismiss mid-flow.',
    image: '/screenshots/plan.png',
    alt: 'The Plan page: November calendar, the day’s tasks with times, and a reminders panel.'
  },
  {
    id: 'posture',
    label: 'Posture',
    title: 'A posture coach that stays on-device.',
    caption:
      'Off until you turn it on. When it runs, Notch scores your alignment 0–100 from the webcam, and a small ring reacts when you drop below your threshold.',
    notice: 'Frames are scored in memory and discarded. Never uploaded.',
    image: '/screenshots/posture.png',
    alt: 'The Posture page in its off state, with a local-camera note and a turn-on button.'
  },
  {
    id: 'sessions',
    label: 'Sessions',
    title: 'Your AI work, in one place.',
    caption:
      'Codex, OpenCode and Anti Gravity sessions with live turns, models, tokens and the project folder. Reply from the notch without switching windows.',
    notice: 'Read from local session files. Subagent noise is hidden by default.',
    image: '/screenshots/sessions.png',
    alt: 'The Sessions page: running tools on the left, live and recent coding sessions on the right.'
  },
  {
    id: 'styles',
    label: 'Appearance',
    title: 'Make it yours.',
    caption:
      'Five accents applied across the whole panel, seven notch shapes, and a placement map that puts it anywhere along the top edge.',
    notice: 'It stays flush with the edge, the way a notch should.',
    image: '/screenshots/styles.png',
    alt: 'Appearance settings with five accent colours, a live notch preview and a name field.'
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
    id: 'music',
    kicker: '01 — Music',
    title: 'Your music, at the top of the screen.',
    body:
      'If Spotify Desktop is open, Notch picks up the session automatically. The collapsed bar shows what is playing and how far along it is. Open it for play, pause, skip, seek and the queue.',
    bullets: [
      'No login required for basic control.',
      'An optional free developer app adds queue, volume, shuffle and repeat.',
      'Works alongside your code, not on top of it.'
    ],
    image: '/screenshots/music.png',
    alt: 'Music page with a playing track, cover art, controls and the queue.'
  },
  {
    id: 'notes',
    kicker: '02 — Notes',
    title: 'A real Markdown editor, in a notch.',
    body:
      'Point Notch at any folder of Markdown files. It reads the same files you already have — no import, no sync, no proprietary format. Formatting applies while you type, and Preview shows the finished page.',
    bullets: [
      'Headings, checkboxes, bold, code and lists, with the syntax kept visible while you edit.',
      'Create notes and folders inline. Drag to move.',
      'Autosave to disk. Your files stay plain .md.'
    ],
    image: '/screenshots/notes-preview.png',
    alt: 'A note in Preview mode: a rendered heading, a checklist and a code chip.'
  },
  {
    id: 'plan',
    kicker: '03 — Plan',
    title: 'Reminders that actually reach you.',
    body:
      'A day planner with a month calendar, priorities and times. Set a reminder and it fires while you are in another app: a small card unfolds under the collapsed notch with the title and time.',
    bullets: [
      'Reminders at the time, or 5/10/30/60 minutes before.',
      'A card under the notch, plus a system notification where Windows allows it.',
      'Nothing to dismiss mid-flow — it folds away on its own.'
    ],
    image: '/screenshots/plan.png',
    alt: 'Planner with the day’s tasks and a reminder attached to one of them.'
  },
  {
    id: 'posture',
    kicker: '04 — Posture',
    title: 'A posture coach that never leaves your PC.',
    body:
      'Enable the camera and Notch scores your posture from 0 to 100 in real time. Set a threshold and it plays a soft two-note chime when you drop below it — only when someone is actually in frame.',
    bullets: [
      'Frames are processed on-device. Nothing stored, nothing uploaded.',
      'It will not ring at an empty chair.',
      'Daily totals, plus a one-time setup fitted to your camera and chair.'
    ],
    image: '/screenshots/posture.png',
    alt: 'Posture page in its off state, explaining the local camera and privacy.'
  },
  {
    id: 'sessions',
    kicker: '05 — Sessions',
    title: 'Codex, OpenCode and Anti Gravity, side by side.',
    body:
      'Notch reads the local session state of each tool and shows live turns, models, tokens and the project folder. Open a session directory, or send a follow-up message from the notch.',
    bullets: [
      'One board for every agent you are running.',
      'Search, and hide subagent noise by default.',
      'Sending starts the provider’s own CLI — your approval rules still apply.'
    ],
    image: '/screenshots/sessions.png',
    alt: 'Sessions board with running tools and coding sessions.'
  }
]

export interface BentoItem {
  icon: 'taskbar' | 'palette' | 'move' | 'pointer' | 'file' | 'camera'
  title: string
  body: string
}

export const bento: BentoItem[] = [
  {
    icon: 'taskbar',
    title: 'Off the taskbar',
    body:
      'Notch lives in the tray and the top edge only. No taskbar button, no Alt-Tab entry, no Task View tile.'
  },
  {
    icon: 'palette',
    title: 'Five accents',
    body: 'Coral, mint, violet, ice and gold — applied across the whole panel.'
  },
  {
    icon: 'move',
    title: 'Drag to place',
    body: 'Drop the notch anywhere along the top edge with a live placement map.'
  },
  {
    icon: 'pointer',
    title: 'Hover or click',
    body: 'Open on hover with a delay you choose, or click to pin it open.'
  },
  {
    icon: 'file',
    title: 'Your files',
    body: 'Notes are plain Markdown in your folder. State is a JSON file you can read.'
  },
  {
    icon: 'camera',
    title: 'Camera off by default',
    body: 'Posture is opt-in. The camera is only requested when you enable it.'
  }
]

export const limits: { title: string; body: string }[] = [
  { title: 'Unsigned.', body: 'Windows may warn, and Smart App Control may block it.' },
  { title: 'No auto-update.', body: 'Updating means downloading the next release.' },
  { title: 'Windows only.', body: 'Built and tested on Windows 10 and 11, 64-bit.' },
  {
    title: 'Electron.',
    body: 'About 128 MB for the installer, 113 MB portable — the trade for one app instead of six.'
  },
  {
    title: 'Spotify queue needs setup.',
    body: 'Basic control works out of the box; queue, volume and shuffle need a free Spotify developer app.'
  }
]

export const faq: { q: string; a: string }[] = [
  {
    q: 'Is it really free?',
    a: 'Yes. No account, no trial, no license key, no paid tier.'
  },
  {
    q: 'Where does my data go?',
    a: 'Nowhere. Notes are files in a folder you choose. Settings live in a JSON file on your PC. Posture frames are processed in memory and discarded. Spotify tokens stay on the machine.'
  },
  {
    q: 'Does it need the camera?',
    a: 'Only if you turn posture on. The camera is not requested at startup, and the Windows camera light stays on while it is in use — that is your confirmation nothing is hidden.'
  },
  {
    q: 'Will it slow my PC down?',
    a: 'It idles quietly with the panel collapsed. Posture is the only continuously active feature, and it is off by default. There is no claim of “0% CPU” here — measure it on your own machine.'
  },
  {
    q: 'Can I use my existing notes folder?',
    a: 'Yes. Point it at the folder. Notch reads and writes plain Markdown, so nothing is converted or locked in.'
  },
  {
    q: 'Which AI tools are supported?',
    a: 'Codex, OpenCode and Anti Gravity today. Discovery relies on their local session data, so a provider update can temporarily hide sessions.'
  },
  {
    q: 'Does it show up in Alt-Tab?',
    a: 'No. It is a tool window: no taskbar button, no Alt-Tab entry, no Task View tile.'
  },
  {
    q: 'How do I uninstall it?',
    a: 'Settings → Apps → Notch. Your notes are untouched. To remove settings and logs as well, delete %APPDATA%\\notch.'
  }
]
