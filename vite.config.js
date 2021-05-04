import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import { VitePWA } from 'vite-plugin-pwa'
import styleImport from 'vite-plugin-style-import'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: { port: 3000, https: false },
  plugins: [
    vue(),
    legacy(),
    VitePWA({
      registerType: 'autoUpdate',
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
            src: '/images/android-chrome-384x384.png',
            sizes: '384x384',
            type: 'image/png'
          }
        ],
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone'
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
    })
  ],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, '.', 'src') }
    ]
  },
  optimizeDeps: {
    include: ['@ant-design/icons-vue']
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
