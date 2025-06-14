import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Add base path for GitHub Pages deployment
  // Replace 'your-repo-name' with your actual repository name
  base: '/gamer_platform/',
  
  // Optional: Configure build output directory
  build: {
    outDir: 'dist',
    // Uncomment to generate source maps for debugging
    // sourcemap: true,
  }
})