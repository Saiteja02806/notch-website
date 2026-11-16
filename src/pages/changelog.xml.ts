import rss from '@astrojs/rss'
import type { APIContext } from 'astro'
import { changelog } from '@/data/changelog'
import { site } from '@/data/site'

export async function GET(context: APIContext) {
  return rss({
    title: 'Notch changelog',
    description: 'Release highlights for Notch, a Windows notch app.',
    site: context.site ?? site.url,
    items: changelog.map((entry) => ({
      title: `v${entry.version} — ${entry.title}`,
      pubDate: new Date(entry.date),
      link: `/changelog#v${entry.version}`,
      description: entry.bullets.join(' ')
    }))
  })
}
