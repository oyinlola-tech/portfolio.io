import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'figma:asset/f4d7792241ade353515843fc44bf4f33ac8d48cd.png': path.resolve(
        __dirname,
        './src/assets/f4d7792241ade353515843fc44bf4f33ac8d48cd.png'
      ),
      'figma:asset/54460c6b07a60652048526012507cff338176e45.png': path.resolve(
        __dirname,
        './src/assets/54460c6b07a60652048526012507cff338176e45.png'
      ),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
  },
  server: {
    port: 3000,
    open: true,
  },
});
