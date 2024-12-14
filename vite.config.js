import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name][extname]', // Preserve original filenames and extensions
      },
    },
  },
  css: {
    preprocessorOptions: {
      css: {
        additionalData: '@import "./src/assets/main.css";', // Ensure Tailwind is included
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src', // Optional: Allows you to use '@' as a shortcut for the src folder
    },
  },
});
