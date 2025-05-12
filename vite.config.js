import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import taiilwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),taiilwindcss()],
})
