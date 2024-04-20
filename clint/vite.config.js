import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    // proxy: {
    //   '/api': {
    //     target: 'https://car-rental-kappa-hazel.vercel.app',
    //     changeOrigin: true,
    //     secure: false
    //   },
    // },
  },
  plugins: [react()],
})
//https://car-rental-kappa-hazel.vercel.app
// https://carrental-tafi.onrender.com
// http://localhost:8000