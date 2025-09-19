import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "./Layerflex5.0",   // 👈 case-sensitive repo name
})


