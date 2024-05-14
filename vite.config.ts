import react from '@vitejs/plugin-react-swc'
import { ConfigEnv, loadEnv, UserConfig } from 'vite'
import path from 'path'
import legacy from '@vitejs/plugin-legacy'

const CWD = process.cwd()

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  // 环境变量
  const { VITE_APP_SRC } = loadEnv(mode, CWD)
  return {
    define: {
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'true'
    },
    assetsInclude: ['**/*.md'],
    plugins: [
      react(),
      legacy({
        targets: ['ie >= 11']
      }),
    ],
    base: VITE_APP_SRC,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      }
    },
    build: {
      outDir: 'react-admin',
    },
    server: {
      port: 9527,
      open: true
    }
  }
}