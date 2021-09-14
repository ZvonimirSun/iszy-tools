'use strict'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import cesium from 'vite-plugin-cesium'
import styleImport from 'vite-plugin-style-import'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: { port: 3000, https: false },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag === 'iconpark-icon'
        }
      }
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
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.iszy\.xyz/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'iszy-google-fonts-webfonts',
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
            urlPattern: /^https:\/\/tools\.iszy\.xyz/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'tools-iszy-xyz'
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
    cesium()
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
    sourcemap: false,
    terserOptions: {
      compress: {
        drop_console: true,
        dead_code: false,
        drop_debugger: true,
        keep_classnames: false,
        keep_fnames: false,
        module: false
      },
      keep_classnames: false,
      keep_fnames: false,
      module: false
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
})
