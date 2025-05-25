import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Base path for GitHub Pages deployment
  base: '/website_nt',

  // Output as static site for both GitHub Pages and Netlify
  output: 'static',

  // Site configuration
  site: 'https://markoandersson.info', // Replace with your GitHub username or custom domain

  // Build options
  build: {
    // Output directory for the build
    outDir: './dist',
  },

  // Add integrations
  integrations: [tailwind()],
});
