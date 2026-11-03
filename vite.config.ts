import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/econverse-api': {
        target: 'https://app.econverse.com.br',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/econverse-api/, ''),
      },
    },
  },
})
