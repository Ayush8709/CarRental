import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://carrental-90ih.onrender.com/',
        changeOrigin: true,
        secure: false
      },
    },
  },
  plugins: [react()],
})
