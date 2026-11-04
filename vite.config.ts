import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler' // Usa a API moderna do Dart Sass e elimina o aviso do legacy-js-api
      }
    }
  },
});