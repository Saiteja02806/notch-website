import data from './release.json'

/**
 * Release links are built in one place so no page ever hard-codes a version.
 *
 * `stableAssets` is flipped to true by scripts/fetch-release.mjs once the
 * release publishes version-stripped copies (Notch-Setup.exe, Notch-Portable.exe).
 * From then on the site links to /releases/latest/download/… and keeps working
 * across versions. Until then it links to the versioned asset.
 */
const base = `https://github.com/${data.repo}/releases`
const versioned = (fileName: string): string => `${base}/download/${data.tag}/${fileName}`
const stable = (fileName: string): string => `${base}/latest/download/${fileName}`

const pick = (fileName: string, stableName: string): string =>
  data.stableAssets ? stable(stableName) : versioned(fileName)

export const release = {
  version: data.version,
  tag: data.tag,
  releasedAt: new Date(data.releasedAt),
  repo: data.repo,
  setup: {
    ...data.setup,
    url: pick(data.setup.fileName, 'Notch-Setup.exe')
  },
  portable: {
    ...data.portable,
    url: pick(data.portable.fileName, 'Notch-Portable.exe')
  },
  sumsUrl: `${base}/download/${data.tag}/SHA256SUMS.txt`,
  notesUrl: `${base}/tag/${data.tag}`,
  allReleasesUrl: `${base}`
}

export const formattedReleaseDate = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
}).format(release.releasedAt)
