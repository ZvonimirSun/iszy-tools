import axios from 'axios'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind3,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import config from './src/config'
import tools from './src/tools'

const iconClass = tools.map(item => item.icon).filter(item => item)

export default defineConfig({
  presets: [
    presetWind3(),
    presetAttributify(),
    presetIcons({
      mode: 'auto',
      extraProperties: {
        display: 'inline-block',
      },
    }),
    presetWebFonts({
      provider: 'google',
      customFetch(url) {
        url = url.replace('https://fonts.googleapis.com', `${config.cdnOrigin}/fonts`)
        return axios.get(url).then(res => res.data)
      },
      fonts: {
        mono: 'JetBrains Mono:300,400,700',
        inter: 'Inter:500,700',
      },
      timeouts: {
        warning: 5000,
        failure: 10000,
      },
    }),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: [
    'i-icon-park-solid-all-application',
    'i-icon-park-outline-history',
    'i-icon-park-solid-concern',
    'i-icon-park-solid-folder-focus',
    ...iconClass,
  ],
})
