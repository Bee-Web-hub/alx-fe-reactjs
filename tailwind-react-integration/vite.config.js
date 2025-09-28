// vite.config.js (ESM)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // first-party plugin

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
