import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'
import tools from './src/tools.json'

const iconClass = tools.map(item => item.icon).filter(item => item)

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      mode: 'auto',
      extraProperties: {
        display: 'inline-block'
      }
    })
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup()
  ],
  safelist: [
    'i-icon-park-solid-all-application',
    'i-icon-park-outline-history',
    'i-icon-park-solid-concern',
    'i-icon-park-solid-folder-focus',
    ...iconClass
  ]
})
