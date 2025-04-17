import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Base path for GitHub Pages deployment
  // Comment this out for Netlify deployment
  // base: '/website_nt',
  
  // Output as static site for both GitHub Pages and Netlify
  output: 'static',
  
  // Site configuration
  site: 'https://yourusername.github.io', // Replace with your GitHub username or custom domain
  
  // Build options
  build: {
    // Output directory for the build
    outDir: './dist',
  },
});