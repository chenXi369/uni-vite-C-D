import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
// https://vitejs.dev/config/

export default ({ command, mode }) => {
  // const env = loadEnv(mode, path.resolve(process.cwd()))
  // const { VITE_APP_API_BASEURL, VITE_APP_PROXY, VITE_APP_PROXY_PREFIX } = env

  return defineConfig({
    plugins: [
      uni(),
      AutoImport({
        imports: ['vue', 'uni-app', 'pinia',
          {
            '@/api': ['useRequest']
          }
        ],
        eslintrc: { enabled: true }
      })
    ],
    build: {
      minify: 'terser',
      // 删除 console.log 日志
      // terserOptions: {
      //   compress: {
      //     drop_console: true,
      //   }
      // }
    },
    server: {
      port: 5173,
      host: true,
      open: true,
      proxy: {
        '/dev-api': {
          target: 'https://markettest.gree.com',
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/dev-api/, '')
        }
      }
    },
    resolve: {
      // https://cn.vitejs.dev/config/#resolve-alias
      alias: {
        // 设置别名
        '@': path.resolve(__dirname, './src')
      },
      // https://cn.vitejs.dev/config/#resolve-extensions
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    }
  })
}
