const config = {
  name: 'iszy_tools',
  alias: 'ISZY TOOLS',
  zhName: 'ISZY工具集合',

  key: 'iszy',

  domain: 'iszy.xyz',
  site: 'tools',
  api: 'api',
  cdn: 'cdn',

  schema: 'https',

  get siteHost () {
    return `${this.site}.${this.domain}`
  },
  get apiHost () {
    return `${this.api}.${this.domain}`
  },
  get cdnHost () {
    return `${this.cdn}.${this.domain}`
  },

  get siteOrigin () {
    return `${this.schema}://${this.siteHost}`
  },
  get apiOrigin () {
    return `${this.schema}://${this.apiHost}`
  },
  get cdnOrigin () {
    return `${this.schema}://${this.cdnHost}`
  }
} as const

export default config
