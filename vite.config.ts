'use strict'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
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
        'pinia',
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
      dts: false,
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
            urlPattern: /^https:\/\/.*cdn\.iszy\.cc/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'iszycc-cdn',
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
            urlPattern: /^https:\/\/lib\.iszy\.xyz/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'iszylib-cdn',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 7 // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    }),
    Sitemap({ tools, hostname: 'https://tools.iszy.xyz' })
  ],
  optimizeDeps: {
    include: ['vue', 'ant-design-vue']
  },
  resolve: {
    alias: {
      '@': resolve('src')
    }
  },
  build: {
    target: 'esnext'
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
