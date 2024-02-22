import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
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
    }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        main: [
          {
            name: 'Lora',
            weights: ['400', '700'],
            italic: true
          },
          {
            name: 'Noto Serif SC',
            weights: ['300', '400', '700']
          },
          {
            name: 'PingFang SC',
            provider: 'none'
          },
          {
            name: 'Microsoft YaHei',
            provider: 'none'
          },
          {
            name: 'sans-serif',
            provider: 'none'
          }
        ],
        mono: 'JetBrains Mono:300,400,700'
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
