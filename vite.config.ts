import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import devtools from 'solid-devtools/vite';

export default defineConfig({
  // GitHub Pages serves project sites from /<repo>/. CI sets BASE_PATH; local
  // dev and preview stay at the root.
  base: process.env.BASE_PATH ?? '/',
  plugins: [devtools(), solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
