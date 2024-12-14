import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        // This ensures assets like images retain their original filenames
        assetFileNames: 'assets/[name][ext]',
      },
    },
  },
})
