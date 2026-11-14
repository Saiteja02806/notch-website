/**
 * Refreshes src/data/release.json from the latest GitHub release.
 *
 * Run it locally with:
 *   npm run fetch:release
 * or let .github/workflows/refresh-release.yml run it nightly and on release.
 *
 * Set GITHUB_TOKEN in CI to avoid the anonymous rate limit. The token only
 * needs public read access, so the default Actions token is enough.
 */
import { writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const REPO = 'Saiteja02806/heronotch'
const target = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../src/data/release.json'
)

const headers = {
  Accept: 'application/vnd.github+json',
  'User-Agent': 'notch-site-release-refresh',
  ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {})
}

const api = async (url) => {
  const response = await fetch(url, { headers })
  if (!response.ok) throw new Error(`${url} -> ${response.status} ${response.statusText}`)
  return response
}

const latest = await (await api(`https://api.github.com/repos/${REPO}/releases/latest`)).json()
const assets = latest.assets ?? []
const byName = (name) => assets.find((asset) => asset.name === name)

const setup = assets.find((asset) => /^Notch-Setup-\d+\.\d+\.\d+\.exe$/.test(asset.name))
const portable = assets.find((asset) => /^Notch-Portable-\d+\.\d+\.\d+\.exe$/.test(asset.name))

if (!setup || !portable) {
  throw new Error(`Latest release ${latest.tag_name} is missing the installer or portable asset.`)
}

// SHA256SUMS.txt is the source of truth for hashes: it covers both files in one
// place and is written by the build workflow, not by hand.
const sumsAsset = byName('SHA256SUMS.txt')
if (!sumsAsset) throw new Error('SHA256SUMS.txt is missing from the release.')

const sums = await (await api(sumsAsset.browser_download_url)).text()
const hashFor = (fileName) => {
  const line = sums
    .split('\n')
    .map((row) => row.trim())
    .find((row) => row.endsWith(fileName))
  if (!line) throw new Error(`No checksum for ${fileName}`)
  return line.split(/\s+/)[0]
}

const payload = {
  version: latest.tag_name.replace(/^v/, ''),
  tag: latest.tag_name,
  releasedAt: latest.published_at,
  repo: REPO,
  // True once the workflow publishes version-stripped copies; the site can
  // then link to /releases/latest/download/… permanently.
  stableAssets: Boolean(byName('Notch-Setup.exe') && byName('Notch-Portable.exe')),
  setup: {
    fileName: setup.name,
    sizeMb: Math.round((setup.size / 1024 / 1024) * 10) / 10,
    sha256: hashFor(setup.name)
  },
  portable: {
    fileName: portable.name,
    sizeMb: Math.round((portable.size / 1024 / 1024) * 10) / 10,
    sha256: hashFor(portable.name)
  }
}

await writeFile(target, `${JSON.stringify(payload, null, 2)}\n`, 'utf8')
console.log(`release.json -> v${payload.version} (${payload.setup.sizeMb} MB / ${payload.portable.sizeMb} MB)`)
