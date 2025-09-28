import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    proxy: {
      '/api/fun-facts': {
        target: 'https://fun-facts-api-production.up.railway.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/fun-facts/, '/v1/fun-facts'),
      },
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})
