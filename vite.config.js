import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/Romeo-Website/', // ✅ your GitHub repo name
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        services: resolve(__dirname, 'services.html'),
        portfolio: resolve(__dirname, 'portfolio.html'),
      },
    },
  },
})
