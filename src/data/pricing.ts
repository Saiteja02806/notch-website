/**
 * Single source of truth for the pricing page. Update the numbers here and
 * both the page copy and the schema.org markup follow along.
 */
export const pricing = {
  currency: 'USD',
  earlyBird: {
    price: 3.99,
    label: 'Early bird',
    seats: 50
  },
  standard: {
    price: 9.99,
    label: 'Standard'
  },
  /**
   * How many early-bird licenses have been claimed so far. Shown as a
   * progress meter only when greater than 0, so the page never fakes
   * scarcity out of the box.
   */
  seatsClaimed: 0
} as const

export const seatsLeft = Math.max(pricing.earlyBird.seats - pricing.seatsClaimed, 0)

export function formatPrice(value: number): string {
  return `$${value.toFixed(2)}`
}

/**
 * Checkout always goes through `/api/checkout`, which reads the Dodo product ID
 * and API key from server-side env vars (HERONOTCH_PRODUCTID, DODO_APIKEY) and
 * builds the return URL from the canonical origin. Nothing secret or
 * environment-specific is baked into the static build.
 */
export function resolveCheckoutUrl(os?: 'mac' | 'win'): string {
  return os ? `/api/checkout?os=${os}` : '/api/checkout'
}

export interface ValueMatrixRow {
  module: string
  category: string
  detail: string
  typicalSaasCost: string
  notchIncluded: string
}

export const licenseCheckpoints = [
  'Live Obsidian & Markdown Notes Vault (inline editor, 750ms auto-save, drag-and-drop tree)',
  'Native Spotify & System Media Control (macOS & Windows media sessions + optional PKCE queue)',
  'Multi-Agent Coding Sessions Board (Claude Code, Codex, OpenCode & Anti Gravity with live reply)',
  'Google Calendar Agenda & Day Planner with under-notch reminder cards',
  'On-Device AI Webcam Posture Coach (local MediaPipe 0–100 alignment scoring)',
  'Local Wi-Fi Phone QR File & Text Transfer (16 MB LAN drop, zero cloud relay)',
  'Hydration Tracker & Breathing Focus Timer with persistent session logs',
  'Lifetime Hero Notch v1 license — use across your MacBook & Windows machines'
] as const

export const valueMatrix: readonly ValueMatrixRow[] = [
  {
    module: 'Live Markdown & Obsidian Vault',
    category: 'Notes',
    detail:
      'Point directly at any local folder or Obsidian vault. Live inline rendering (**bold**, - [ ] checklists, code blocks), Ctrl+K instant search, drag-and-drop folders, and 750ms auto-save.',
    typicalSaasCost: '$8–$10 / mo sync & cloud note apps',
    notchIncluded: 'Included · 100% local files'
  },
  {
    module: 'Multi-Agent Coding Sessions Board',
    category: 'Sessions',
    detail:
      'Reads local SQLite & JSONL state for Codex, OpenCode, Anti Gravity, and Claude Code in read-only mode. Watch live turns, token usage, and send follow-up replies from the top edge.',
    typicalSaasCost: 'Fragmented across 4 terminal windows',
    notchIncluded: 'Included · Unified top-edge board'
  },
  {
    module: 'Spotify & System Media Deck',
    category: 'Music',
    detail:
      'Instant play/pause, seek, and cover art via Windows GSMTC with zero sign-in. Optional OAuth PKCE unlocks Up Next queue, shuffle, repeat, and volume.',
    typicalSaasCost: '$3–$5 / mo mini-player widgets',
    notchIncluded: 'Included · Native DLL + PKCE'
  },
  {
    module: 'Google Calendar & Day Planner',
    category: 'Plan',
    detail:
      'Month calendar, timed tasks, priority tags, and optional Google Calendar loopback sync. Reminders unfold directly beneath the collapsed notch so you never miss a meeting.',
    typicalSaasCost: '$6–$12 / mo daily planner SaaS',
    notchIncluded: 'Included · Native notch alerts'
  },
  {
    module: 'On-Device AI Webcam Posture Coach',
    category: 'Posture',
    detail:
      '8-second best-frame calibration and continuous 0–100 alignment scoring (forward-head depth, shoulder level, torso lean). Frames are scored in memory and discarded immediately.',
    typicalSaasCost: '$5–$9 / mo posture & wellness apps',
    notchIncluded: 'Included · Zero video stored'
  },
  {
    module: 'Local Wi-Fi Phone QR Transfer',
    category: 'Transfer',
    detail:
      'Scan a one-time QR code on the same Wi-Fi network to beam text snippets or files (up to 16 MB) between your phone and PC without logging into email or cloud drives.',
    typicalSaasCost: '$4 / mo cross-device clipboard tools',
    notchIncluded: 'Included · Ephemeral LAN server'
  },
  {
    module: 'Focus Timer & Hydration Tracker',
    category: 'Focus & Water',
    detail:
      'Customizable Focus / Short / Long intervals that survive restarts, paired with daily ml/glass hydration logging and gentle interval reminders.',
    typicalSaasCost: '$3 / mo Pomodoro & habit timers',
    notchIncluded: 'Included · Built into the shell'
  }
] as const
