import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Base path matches repository name for clean URLs on GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/dr-himani/',
})
