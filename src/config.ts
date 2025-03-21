let devApiOrigin = ''
let devApiPath = ''

const config: {
  readonly name: string
  readonly alias: string
  readonly zhName: string

  readonly key: string

  readonly domain: string
  readonly cdnDomain: string
  readonly site: string
  readonly api: string
  readonly cdn: string

  readonly schema: string

  readonly whiteList: string[]

  readonly siteHost: string
  readonly apiHost: string
  readonly cdnHost: string

  readonly siteOrigin: string
  apiOrigin: string
  apiPath: string
  readonly apiBaseUrl: string
  readonly cdnOrigin: string
} = {
  name: 'iszy_tools',
  alias: 'ISZY TOOLS',
  zhName: 'ISZY工具集合',

  key: 'iszy',

  domain: 'iszy.xyz',
  cdnDomain: 'iszy.cc',
  site: 'tools',
  api: 'api',
  cdn: 'cdn',

  schema: 'https',

  whiteList: ['/login', '/logout'],

  get siteHost() {
    return `${this.site}.${this.domain}`
  },
  get apiHost() {
    return `${this.api}.${this.domain}`
  },
  get cdnHost() {
    return `${this.cdn}.${this.cdnDomain || this.domain}`
  },

  get siteOrigin() {
    return `${this.schema}://${this.siteHost}`
  },
  get apiOrigin() {
    return devApiOrigin || `${this.schema}://${this.apiHost}`
  },
  set apiOrigin(value: string) {
    devApiOrigin = value
  },
  get apiPath() {
    return devApiPath || ''
  },
  set apiPath(value: string) {
    devApiPath = value
  },
  get apiBaseUrl() {
    return `${this.apiOrigin}${this.apiPath}`
  },
  get cdnOrigin() {
    return `${this.schema}://${this.cdnHost}`
  },
}

export default config
