import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts
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
      fonts: {
        sans: 'Lora:300,400,700',
        serif: 'Noto Serif SC:300,400,700',
        mono: 'JetBrains Mono:300,400,700'
      }
    })
  ],
  safelist: [
    'i-icon-park-solid-all-application',
    'i-icon-park-outline-history',
    'i-icon-park-solid-concern',
    'i-icon-park-solid-folder-focus',
    ...iconClass
  ]
})
