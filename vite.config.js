import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), 'index.html'),
        privacyPolicy: resolve(process.cwd(), 'privacy-policy/index.html'),
        refundPolicy: resolve(process.cwd(), 'refund-policy/index.html'),
      },
    },
  },
});
