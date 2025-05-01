// Key expertise areas
export const keyExpertise = [
  { name: 'Web Application Development', details: 'Java/Spring, C#/.NET Core, JavaScript' },
  { name: 'Legacy Code Replacement & Modernization', details: 'Strategizing and executing migrations' },
  { name: 'Pragmatic Agile Methodologies', details: 'Focus on effective development flow' },
  { name: 'AI in Software Development', details: 'Exploring and utilizing AI tools' }
];

// Project details
export const projects = [
  {
    title: 'Project Alpha',
    dates: '2021 - 2023',
    company: 'Example Corp',
    tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL'],
    description: 'Led the development of a major web application, focusing on backend architecture and migrating legacy components.'
  },
  {
    title: 'System Modernization Beta',
    dates: '2019 - 2021',
    company: 'Another Inc.',
    tech: ['C#', '.NET Core', 'Azure', 'Angular'],
    description: 'Key developer in a team effort to replace an outdated system with a modern, scalable solution using microservices.'
  },
  {
    title: 'Project Gamma',
    dates: '2017 - 2019',
    company: 'Previous Solutions Ltd.',
    tech: ['Java', 'JavaScript', 'SQL Server'],
    description: 'Developed and maintained features for a large-scale enterprise application, improving performance and stability.'
  }
];

// Social media links
export const socialMedia = [
  { name: 'GitHub', icon: 'github', url: 'https://github.com/yourusername' },
  { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com/in/yourusername' },
  { name: 'Twitter', icon: 'twitter', url: 'https://twitter.com/yourusername' },
  { name: 'Email', icon: 'envelope', url: 'mailto:your.email@example.com' }
];

// Career start year (constant)
export const careerStartYear = 2007;

// Testimonials data
export const testimonials = [
  {
    text: "Working with this developer was a game-changer for our legacy system. Their expertise in modernization saved us countless hours and improved our system's performance dramatically.",
    role: "Project Manager"
  },
  {
    text: "Exceptional problem-solving skills and attention to detail. They quickly identified bottlenecks in our codebase and implemented elegant solutions that stood the test of time.",
    role: "Tech Lead"
  },
  {
    text: "A true professional who delivers high-quality code consistently. Their ability to understand complex business requirements and translate them into technical solutions is remarkable.",
    role: "Product Owner"
  },
  {
    text: "Their approach to legacy code modernization was methodical and effective. They not only improved our system but also documented everything clearly for future maintenance.",
    role: "CTO"
  },
  {
    text: "An excellent communicator who keeps stakeholders informed at every stage. They have a rare combination of technical expertise and the ability to explain complex concepts in simple terms.",
    role: "Senior Manager"
  }
];

// Helper functions to calculate derived data
export const calculateYearsExperience = () => new Date().getFullYear() - careerStartYear;
export const calculatePastEmployersCount = () => [...new Set(projects.map(project => project.company))].length;
export const getAmountOfProjects = () => projects.length;

// Technology to icon mapping
const technologyIcons = {
  'Java': { name: 'java', type: 'brands' },
  'Spring Boot': { name: 'leaf', type: 'solid' },
  'React': { name: 'react', type: 'brands' },
  'PostgreSQL': { name: 'database', type: 'solid' },
  'C#': { name: 'code', type: 'solid' },
  '.NET Core': { name: 'microsoft', type: 'brands' },
  'Azure': { name: 'cloud', type: 'solid' },
  'Angular': { name: 'angular', type: 'brands' },
  'JavaScript': { name: 'js', type: 'brands' },
  'SQL Server': { name: 'database', type: 'solid' },
  // Add more mappings as needed
};

// Extract technologies from projects and order by frequency
export const getTechnologies = () => {
  return Object.entries(
    // Flatten all tech arrays into a single array and reduce to count occurrences
    projects.flatMap(project => project.tech)
      .reduce((counts, tech) => {
        counts[tech] = (counts[tech] || 0) + 1;
        return counts;
      }, {})
  )
    // Sort by count (descending)
    .sort((a, b) => b[1] - a[1])
    // Map to objects with name and icon
    .map(([tech]) => ({
      name: tech,
      icon: technologyIcons[tech]?.name || 'code', // Default to 'code' icon if not found
      iconType: technologyIcons[tech]?.type || 'solid' // Default to 'solid' type if not found
    }))
    // Limit to seven most used technologies
    .slice(0, 7);
};
