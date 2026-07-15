import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/V61-tier2-team-22/',
  build: {
    outDir: 'docs',
  }
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
