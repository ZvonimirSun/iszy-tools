'use strict'
import type { UserConfig } from 'vite'
import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { AntDesignVueResolver, ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import { VitePWA } from 'vite-plugin-pwa'
import vueDevTools from 'vite-plugin-vue-devtools'
import { defineConfig } from 'vitest/config'
import config from './src/config'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const viteConfig: UserConfig = {
    server: {
      port: 3000,
      strictPort: true,
      hmr: {
        port: 3000,
      },
    },
    plugins: [
      vue(),
      vueJsx(),
      vueDevTools(),
      AutoImport({
        resolvers: [
          ElementPlusResolver(),
        ],
        imports: [
          'vue',
          'vue-router',
          'pinia',
          '@vueuse/core',
        ],
        eslintrc: {
          enabled: true,
        },
        dirs: ['src/composables', 'src/stores'],
        vueTemplate: true,
        dts: 'src/types/auto-imports.d.ts',
      }),
      Unocss(),
      Components({
        include: [/\.vue$/, /\.vue\?vue/],
        dirs: ['src/components'],
        extensions: ['vue'],
        dts: 'src/types/components.d.ts',
        resolvers: [
          ElementPlusResolver(),
          AntDesignVueResolver({
            importStyle: false,
          }),
        ],
      }),
      VitePWA({
        base: '/',
        strategies: 'generateSW',
        registerType: 'prompt',
        manifest: {
          id: config.name,
          name: config.zhName,
          short_name: config.alias,
          theme_color: '#ffffff',
        },
        pwaAssets: {
          config: true,
          overrideManifestIcons: true,
        },
        workbox: {
          runtimeCaching: [
            // api
            {
              urlPattern: ({ url }) => url.origin === 'https://api.iszy.xyz',
              handler: 'NetworkFirst',
              options: {
                cacheName: `${config.key}-api`,
                cacheableResponse: {
                  statuses: [200],
                },
              },
            },
            // cdn
            {
              urlPattern: /^https:\/\/.*cdn\.iszy\.xyz/,
              handler: 'CacheFirst',
              options: {
                cacheName: `${config.key}-cdn`,
                expiration: {
                  maxEntries: 30,
                  maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
            // cdn
            {
              urlPattern: /^https:\/\/.*cdn\.iszy\.cc/,
              handler: 'CacheFirst',
              options: {
                cacheName: `${config.key}-cdn`,
                expiration: {
                  maxEntries: 30,
                  maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
          ],
        },
      }),
    ],
    optimizeDeps: {
      include: ['vue', 'element-plus'],
    },
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          charset: false,
        },
        less: {
          javascriptEnabled: true,
        },
      },
    },
    build: {
      rollupOptions: {
        onwarn(warning, warn) {
          // Suppress "Module level directives cause errors when bundled" warnings
          if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
            return
          }
          warn(warning)
        },
      },
    },
    worker: {
      format: 'es',
    },
    test: {
      environment: 'jsdom',
    },
  }
  if (command === 'build') {
    viteConfig.plugins?.push(createHtmlPlugin({
      inject: {
        tags: [
          {
            injectTo: 'head',
            tag: 'title',
            children: config.zhName,
          },
          {
            injectTo: 'head',
            tag: 'meta',
            attrs: {
              name: 'baidu-site-verification',
              content: 'code-tvQG0Qro0b',
            },
          },
          {
            injectTo: 'head',
            tag: 'link',
            attrs: {
              rel: 'preconnect',
              href: config.cdnOrigin,
              crossorigin: 'anonymous',
            },
          },
          {
            injectTo: 'body',
            tag: 'script',
            attrs: {
              'defer': true,
              'src': 'https://static.cloudflareinsights.com/beacon.min.js',
              'data-cf-beacon': '{"token": "0b723291f221420b8daf80c0611f7bc7"}',
            },
          },
        ],
      },
    }))
  }
  return viteConfig
})
