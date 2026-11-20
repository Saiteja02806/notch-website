import data from './release.json'

const releaseDownloadBase = `https://github.com/${data.repo}/releases/download/${data.tag}`

/**
 * Release metadata built in one place so pages never hard-code a version.
 * Direct installer binaries are delivered upon license purchase.
 */
export const release = {
  version: data.version,
  tag: data.tag,
  repo: data.repo,
  releasedAt: new Date(data.releasedAt),
  setup: {
    fileName: data.setup.fileName,
    sizeMb: data.setup.sizeMb,
    sha256: data.setup.sha256,
    url: `${releaseDownloadBase}/${data.setup.fileName}`
  },
  portable: {
    fileName: data.portable.fileName,
    sizeMb: data.portable.sizeMb,
    sha256: data.portable.sha256,
    url: `${releaseDownloadBase}/${data.portable.fileName}`
  }
}

export const formattedReleaseDate = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
}).format(release.releasedAt)
