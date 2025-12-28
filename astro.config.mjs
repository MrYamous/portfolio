// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const isDev = import.meta.env.DEV;

// https://astro.build/config
export default defineConfig({
  site: isDev ? 'http://localhost:3000' : 'https://mryamous.github.io/portfolio/',
  base: isDev ? '/' : '/portfolio/',
  vite: {
    plugins: [tailwindcss()]
  }
});