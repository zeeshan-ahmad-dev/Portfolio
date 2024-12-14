import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name][extname]', // Preserve filenames and extensions
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
  },
  css: {
    preprocessorOptions: {
      css: {
        // Import your main CSS file here
        additionalData: '@import "./src/assets/main.css";',
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src', // Shortcut for source folder
    },
  },
  base: './', // Important for relative paths in Netlify deployment
});
