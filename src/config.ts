const config = {
  name: 'iszy_tools',
  alias: 'ISZY TOOLS',
  zhName: 'ISZY工具集合',

  key: 'iszy',

  siteOrigin: 'https://tools.iszy.xyz',
  cdnOrigin: 'https://cdn.iszy.cc',
  apiOrigin: 'https://api.iszy.cc',
  apiPath: '',

  whiteList: ['/login', '/logout'],

  get apiBaseUrl() {
    return `${this.apiOrigin}${this.apiPath}`
  },
}

export default config
