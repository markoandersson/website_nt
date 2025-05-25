# Marko Andersson Portfolio Website

This repository contains the source code for Marko Andersson's personal portfolio website, built with [Astro](https://astro.build/). The website showcases professional experience, projects, expertise, testimonials, and other personal information.

## Project Overview

This is a static website built with Astro that serves as a professional portfolio. The site includes:

- Personal introduction and expertise areas
- Featured professional projects
- Testimonials from colleagues
- Books that have influenced professional development
- Personal manifesto and principles
- Contact information and social media links

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
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   ├── data/            # Data files for the website
│   ├── layouts/         # Page layouts
│   ├── pages/           # Page components
│   └── styles/          # CSS styles
├── .github/workflows/   # GitHub Actions workflows
├── astro.config.mjs     # Astro configuration
└── package.json         # Project dependencies
```

## Updating Website Data

All the content for the website is stored in the `src/data/portfolioData.js` file. This makes it easy to update the website without changing the code.

### How to Update Data

1. Open the `src/data/portfolioData.js` file
2. Find the section you want to update:
   - `keyExpertise`: Areas of professional expertise
   - `howICanHelp`: Services offered
   - `projects`: Professional project details
   - `books`: Influential books
   - `socialMedia`: Social media links
   - `testimonials`: Testimonials from colleagues
   - `manifesto` and `principles`: Personal professional philosophy
   - Other variables like `location`, `careerStartYear`, etc.

3. Make your changes following the existing data structure
4. Save the file and commit your changes

### Adding a New Project

To add a new project to the portfolio:

1. Open `src/data/portfolioData.js`
2. Find the `projects` array
3. Add a new project object following this structure:
   ```javascript
   {
     title: 'Project Title',
     duration: 1.5, // Duration in years
     client: 'Client Name',
     tech: ['Technology1', 'Technology2'],
     teamSize: 5,
     description: [
       `First paragraph of project description.`,
       `Second paragraph of project description.`
     ]
   }
   ```
4. Save the file and commit your changes

## Deployment

The website is automatically deployed to GitHub Pages using GitHub Actions.

### Automatic Deployment

1. The site is automatically built and deployed whenever changes are pushed to the `main` branch
2. The GitHub Actions workflow in `.github/workflows/deploy.yml` handles the build and deployment process
3. No manual steps are required for deployment

### Manual Deployment

If you need to trigger a deployment manually:

1. Go to the GitHub repository
2. Navigate to the "Actions" tab
3. Select the "Deploy to GitHub Pages" workflow
4. Click "Run workflow" and select the branch to deploy

## Customization

- Update the site information in `astro.config.mjs`
- Modify the layout in `src/layouts/Layout.astro`
- Add new pages in the `src/pages` directory
- Create new components in the `src/components` directory
- Update styles in the `src/styles` directory

## License

This project is licensed under the MIT License - see the LICENSE file for details.
