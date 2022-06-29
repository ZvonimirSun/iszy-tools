'use strict'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import styleImport from 'vite-plugin-style-import'
import { resolve } from 'path'
import Sitemap from './src/plugins/Sitemap.js'
import tools from './src/views/tools.json'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import Unocss from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'
import AutoImport from 'unplugin-auto-import/vite'

const iconClass = tools.map(item => item.icon).filter(item => item)

// https://vitejs.dev/config/
export default defineConfig({
  server: { port: 3000, https: false },
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vuex',
        '@vueuse/core'
      ],
      eslintrc: {
        enabled: true
      },
      dts: './src/auto-imports.d.ts'
    }),
    Unocss({
      mode: 'vue-scoped',
      presets: [presetUno(), presetAttributify(), presetIcons({
        mode: 'auto',
        extraProperties: {
          display: 'inline-block'
        }
      })],
      safelist: [...iconClass]
    }),
    Components({
      dirs: ['src/components'],
      extensions: ['vue'],
      dts: './src/components.d.ts',
      resolvers: [
        AntDesignVueResolver()
      ]
    }),
    VitePWA({
      scope: '/',
      manifest: {
        name: 'ISZY工具集合',
        short_name: 'ISZY TOOLS',
        icons: [
          {
            src: '/images/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/images/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ],
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone'
      },
      workbox: {
        globPatterns: ['**/*'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/.*cdn\.iszy\.xyz/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'iszy-cdn',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /^https:\/\/cdn\.jsdelivr\.net/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'jsdelivr-cdn'
            }
          },
          {
            urlPattern: /^https:\/\/at\.alicdn\.com/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'iconfont',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /^https:\/\/lf1-cdn-tos\.bytegoofy\.com/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'bytegoofy',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    }),
    styleImport({
      libs: [
        {
          libraryName: 'ant-design-vue',
          esModule: true,
          resolveStyle: name => `ant-design-vue/es/${name}/style/index`
        }
      ]
    }),
    Sitemap({ tools, hostname: 'https://tools.iszy.xyz' })
  ],
  resolve: {
    alias: {
      '@': resolve('src')
    }
  },
  optimizeDeps: {
    include: ['@icon-park/vue-next']
  },
  build: {
  },
  css: {
    preprocessorOptions: {
      scss: { charset: false },
      less: {
        javascriptEnabled: true
      }
    }
  }
})
