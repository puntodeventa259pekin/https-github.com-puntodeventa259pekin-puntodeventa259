import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 'base' set to './' ensures assets are linked relatively, 
  // which is required for GitHub Pages repositories (e.g. user.github.io/repo-name/)
  base: './',
  build: {
    outDir: 'dist',
    sourcemap: false
  }
});