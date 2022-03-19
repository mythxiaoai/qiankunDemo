import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun';
import path from 'path'

const useDevMode = true

// https://vitejs.dev/config/
export default defineConfig({
  base:"http://127.0.0.1:5000/",
  plugins: [vue(),qiankun('vitevue', {
    useDevMode
  })],
  server: {
    port: 5000,
    cors: true,
  },
})
