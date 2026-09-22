import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          video: ['poster']
        }
      }
    }),
    tailwindcss()
  ],
  server: {
    host: true
  }
})