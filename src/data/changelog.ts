export interface ChangeEntry {
  version: string
  date: string
  title: string
  bullets: string[]
}

/**
 * Curated highlights for the public changelog. Full notes and every asset live
 * on GitHub; this list only explains what a user would notice.
 */
export const changelog: ChangeEntry[] = [
  {
    version: '1.0.22',
    date: '2026-11-14',
    title: 'Reminders and posture alerts surface under the notch.',
    bullets: [
      'Reminder and posture notices unfold a card beneath the collapsed tab, over other apps.',
      'Friendly reminder copy (“Today at 2:51 PM”) with a 12-second auto-dismiss.',
      'The Music page no longer looks like setup when credentials are already saved.'
    ]
  },
  {
    version: '1.0.21',
    date: '2026-11-13',
    title: 'A threshold ring replaces the posture graph.',
    bullets: [
      'A small live ring shows the current score against your threshold.',
      'A soft two-note chime plays below the threshold, only when someone is in frame.',
      'Posture keeps running while the notch is collapsed.'
    ]
  },
  {
    version: '1.0.20',
    date: '2026-11-13',
    title: 'The panel scales with the screen.',
    bullets: ['Sizes follow the display, so 14-inch laptops keep their desktop.']
  },
  {
    version: '1.0.19',
    date: '2026-11-13',
    title: 'The notch stays on top.',
    bullets: ['A watchdog keeps the window above other always-on-top apps without stealing focus.']
  },
  {
    version: '1.0.18',
    date: '2026-11-13',
    title: 'Notes render Markdown as you type.',
    bullets: [
      'A live editor: headings, checkboxes, bold, code and lists render inline.',
      'Checklist boxes are clickable; clicking a heading renames it.'
    ]
  },
  {
    version: '1.0.17',
    date: '2026-11-13',
    title: 'Cleaner Windows branding.',
    bullets: ['Start-menu and taskbar entries show the Notch name and icon, never Electron.']
  },
  {
    version: '1.0.16',
    date: '2026-11-13',
    title: 'Checklists behave like checklists.',
    bullets: ['Enter on a checklist line continues the list instead of splitting the note.']
  }
]
