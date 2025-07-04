import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { fileURLToPath, URL } from 'url'

export default defineConfig({
  plugins: [react()],
  base: '/RajaAwais/', // Set to your GitHub repo name
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
})
