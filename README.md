# Astro Site

A simple Astro site that can be deployed to GitHub Pages.

## Features

- Fast, static site built with [Astro](https://astro.build/)
- Responsive design
- Deployable to GitHub Pages

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm (v7 or higher recommended)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/website_nt.git
   cd website_nt
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:3000`

## Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── astro.config.mjs
├── package.json
└── README.md
```

## Deployment

### GitHub Pages

1. Update the `site` property in `astro.config.mjs` with your GitHub username:
   ```js
   site: 'https://yourusername.github.io',
   ```

2. Uncomment the `base` property in `astro.config.mjs` if your site will be hosted in a subdirectory:
   ```js
   base: '/website_nt',
   ```

3. Push your code to GitHub and enable GitHub Pages in your repository settings.

4. The GitHub Actions workflow will automatically build and deploy your site when you push to the main branch.

Alternatively, you can deploy manually:
```bash
npm run deploy:github
```

## Customization

- Update the site information in `astro.config.mjs`
- Modify the layout in `src/layouts/Layout.astro`
- Add new pages in the `src/pages` directory
- Create new components in the `src/components` directory
