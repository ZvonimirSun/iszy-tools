import { createWriteStream } from 'fs'
import { SitemapStream } from 'sitemap'

export default function VitePluginSiteMap ({ hostname, tools } = {}) {
  let outDir = 'dist'
  let base = '/'

  return {
    name: 'vite-plugin-sitemap',
    apply: 'build',
    configResolved (c) {
      base = c.base
      outDir = c.build.outDir
    },
    async closeBundle () {
      const sitemap = new SitemapStream({ hostname })
      const writeStream = createWriteStream(`./${outDir}/sitemap.xml`)
      sitemap.pipe(writeStream)
      sitemap.write(`${base}/`.replace(/\/\//g, '/'))
      for (const tmp of tools) {
        if (Array.isArray(tmp.children) && tmp.children.length > 0) {
          for (const tool of tmp.children) {
            if (!/^(http(s)?:\/\/)\w+[^\s]+(\.[^\s]+)+$/.test(tool.link)) {
              sitemap.write(`${base}${tmp.link || ''}${tool.link || ''}`.replace(/\/\//g, '/'))
            }
          }
        }
      }
      sitemap.end()
    }
  }
}
