import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL,
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});


