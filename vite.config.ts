import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/react-coursera/', // Replace 'repo-name' with your actual repository name
});
