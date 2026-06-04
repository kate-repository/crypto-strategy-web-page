import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/crypto-strategy-web-page/' : '/',
  plugins: [react()],
});
