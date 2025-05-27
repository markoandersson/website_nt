// Key expertise areas
export const keyExpertise = [
  { name: 'Web Application Development', details: 'Java/Spring, C#/.NET Core, JavaScript' },
  { name: 'Modern Software Development', details: 'Clean code, TDD, DevOps, CI/CD pipelines' },
  { name: 'Caring about the Legacy', details: 'Appreciating, improving, and evolving existing systems' },
  { name: 'Pragmatic Agile Methodologies', details: 'Focus on effective development flow and customer centricity' },
  { name: 'Leveling Up the Team', details: 'Mentoring, knowledge sharing, code reviews' },
  { name: 'AI in Software Development', details: 'Exploring and utilizing AI tools' }
];

// How I can help data
export const howICanHelp = [
  {
    name: 'Facing high maintenance costs and frequent bugs in your software?',
    details: 'Clean code, TDD, DevOps, CI/CD pipelines, automated testing',
    benefits: [
      'Improve maintainability and reduce long-term costs',
      'Increase development velocity through quality practices',
      'Reduce bugs and production incidents',
      'Build systems that can evolve with changing requirements'
    ]
  },
  {
    name: 'Struggling with slow development in your legacy system?', 
    details: 'Iterative improvement, strategic refactoring, safe evolution of critical systems',
    benefits: [
      'Reduce technical debt without disrupting business operations',
      'Extend the lifespan of valuable legacy systems',
      'Gradually introduce modern practices and technologies',
      'Minimize risk through incremental changes'
    ]
  },
  {
    name: 'Need to connect disparate systems that don\'t talk to each other?', 
    details: 'Designing seamless integrations between legacy and modern systems',
    benefits: [
      'Connect disparate systems to unlock new capabilities',
      'Create robust data flows between applications',
      'Design APIs that are both powerful and developer-friendly',
      'Enable digital transformation while preserving existing investments'
    ]
  },
  {
    name: 'Do your developers struggle to understand your business needs?',
    details: 'Aligning technical solutions with business domains',
    benefits: [
      'Create software that directly reflects your business processes',
      'Improve communication between developers and domain experts',
      'Build flexible systems that can adapt to business changes',
      'Reduce translation errors between requirements and implementation'
    ]
  },
  {
    name: 'Are your internal tools lagging behind your external systems?',
    details: 'Internal process automation, workflow optimization, employee experience',
    benefits: [
      'Reduce manual workload with streamlined internal tools',
      'Align internal and external systems for consistent experience',
      'Reduce cross team friction with better internal processes',
      'Improve employee productivity and satisfaction',
      'Create clear processes and automation for repetitive tasks'
    ]
  },
  {
    name: 'Is your development team lacking direction or struggling with delivery?',
    details: 'Project leadership, technical direction, scrum mastery',
    benefits: [
      'Guide teams toward effective technical solutions',
      'Mentor developers and raise overall code quality',
      'Facilitate communication between technical and business stakeholders',
      'Implement pragmatic agile practices tailored to your team'
    ]
  },
  {
    name: 'Is your infrastructure struggling to scale with growing demands?', 
    details: 'Azure, AWS, serverless architectures, scalable solutions',
    benefits: [
      'Design systems that scale with your business needs',
      'Reduce infrastructure costs through optimized cloud usage',
      'Implement resilient architectures with high availability',
      'Leverage modern cloud services to accelerate development'
    ]
  },
  {
    name: 'Is your team overwhelmed with meetings and knowledge silos?',
    details: 'Team collaboration, knowledge sharing, workflow optimization, prioritization techniques',
    benefits: [
      'Reduce meeting overload with more effective collaboration methods',
      'Break down knowledge silos through systematic documentation and pair programming',
      'Implement prioritization frameworks to focus on high-value work',
      'Create sustainable workload management to prevent burnout',
      'Establish clear communication channels that respect focus time'
    ]
  }
];

// Project details
export const projects = [
  {
    title: 'Digital Media Platform Modernization',
    duration: 3,
    client: 'Media company',
    tech: ['C#', '.NET Core', 'JavaScript', 'SQL Server'],
    teamSize: 10,
    description: [
      `I participated in the modernization of a legacy self-service platform in the media industry, implementing CI/CD pipelines and 
      establishing domain-aligned architecture principles. Designed and implemented integration between the legacy database 
      system and a modern third-party SaaS service platform, enabling new capabilities while maintaining system stability. 
      Created robust test harnesses that enabled confident feature development in a complex environment where multiple 
      applications shared a single database.`,

      `Implemented the automated CI/CD pipelines for the legacy application using Azure DevOps, transforming 
      from manual to automated deployments and enabling more frequent, smaller releases. Suggesting practical 
      improvements to team dynamics, including establishing shared sprint goals and limiting work-in-progress 
      within my areas of influence.`,

      `Facilitated planning sessions with stakeholders to better align priorities before development began when 
      possible. Provided technical guidance to team members, demonstrating clean code practices and domain-driven 
      design principles through practical examples in my contributions.`,

      `Focused on understanding the business domain deeply to ensure my technical solutions aligned with real user 
      needs and business objectives. Balanced addressing technical debt with new feature development in my 
      work areas, ensuring continuous delivery of business value despite the challenges of a large-scale rewrite. 
      This project reflects my commitment to creating sustainable value through quality engineering practices, 
      even when working within constraints of broader project decisions.`,

      `Created a robust synchronization mechanism that allowed bidirectional data flow, effectively extending the legacy 
      system's functionality without compromising its core operations. This integration opened up new possibilities for feature 
      development while working within the constraints of the existing architecture.`
    ]
  },
  {
    title: 'Product Lifecycle Management System',
    duration: 1,
    client: 'Multinational electric engineering company',
    tech: ['Java', 'Spring', 'Mobile', 'Azure SQL'],
    teamSize: 4,
    description: [
      `Developed a comprehensive product lifecycle management system that streamlined the entire process of product changes, 
      including Bill of Materials (BOM) management and structured review workflows. Created a robust Java/Spring backend 
      and intuitive web UI, while also developing a companion mobile client that enabled field technicians to document 
      investigations of damaged products with photos and evidence, significantly improving report quality and completeness.`,

      `Implemented a detailed investigation module for damaged or malfunctioning products, allowing engineers to document 
      findings and track resolution progress. The mobile client significantly improved the quality and completeness of field reports 
      by providing real-time data collection capabilities.`,

      `Designed an intuitive web UI for the main system that streamlined the review and approval workflows, making it easier 
      for stakeholders to collaborate on product changes. Integrated document management capabilities to ensure all product 
      specifications and change documentation were properly versioned and accessible.`,

      `Mentored junior developers on the project, providing guidance on best practices in software development, code reviews, 
      and architectural decisions. Established coding standards and documentation practices that improved overall code quality 
      and team productivity.`
    ]
  },
  {
    title: 'High Security Government Project',
    duration: 0.5,
    client: 'Finnish government',
    tech: ['Java', 'Spring', 'Python'],
    teamSize: 5,
    description: [
      `Enhanced a high-security system for the Finnish government that involved complex integrations with various 
      government systems and third-party platforms. Established a more effective workflow for demoing the software 
      directly to end-customers, which significantly improved feedback cycles and stakeholder satisfaction. Contributed 
      innovative approaches for feature design and UI mocking while maintaining the paramount security and reliability 
      requirements essential for government operations.`,
    ]
  },
  {
    title: 'Sharepoint Application Modernization',
    duration: 1,
    client: 'Multinational electric engineering company',
    tech: ['C#', '.NET Core', 'React', 'Sharepoint'],
    teamSize: 3,
    description: [
      `Led the successful modernization of a legacy Sharepoint application by reimplementing outdated views with modern 
      React components while porting selected C# code to .NET Core. This transformation significantly improved user experience, 
      application responsiveness, and overall performance. Designed a clean architecture that separated frontend and backend 
      concerns, making the system more maintainable and easier to extend while establishing automated testing practices to 
      ensure feature parity.`,

      `Carefully analyzed the existing codebase to identify components that could be reused and those that needed to be rebuilt, 
      ensuring an efficient modernization process that preserved valuable legacy functionality while eliminating technical debt.`,

      `Completely reimplemented the outdated Sharepoint views with modern React components, significantly improving 
      the user experience and application responsiveness. The new architecture made the system more maintainable and easier to extend.`,

      `Established automated testing practices that ensured the modernized application maintained feature parity with 
      the legacy system while enabling safer future enhancements. Worked closely with the client to prioritize features 
      and deliver incremental value throughout the modernization process.`
    ]
  },
  {
    title: 'Order Tracking System',
    duration: 2.5,
    client: 'Multinational electric engineering company',
    tech: ['Java', 'Spring', 'Azure SQL', 'Azure'],
    teamSize: 3,
    description: [
      `Led the end-to-end development of a cloud-native order tracking system with worldwide usage, from initial sales 
      and requirements gathering to final delivery. The system allowed customers to track orders in real-time and receive 
      status notifications through a responsive UI. As scrum master, implemented an innovative approach where customers 
      directly tried the software in test environments during weekly demos, creating high trust and earning recognition 
      from the client.`,

      `Created a robust integration layer to pull data from the legacy internal order management system that previously 
      couldn't provide data to external users. Architected the solution to run entirely in Azure, leveraging cloud services 
      for scalability, reliability, and global accessibility.`,

      `Implemented a secure data synchronization mechanism that protected sensitive information while providing customers 
      with the details they needed. Advocated for and implemented DevOps practices, setting up continuous integration and 
      delivery pipelines that enabled frequent, reliable deployments.`,

      `Collaborated with UX designers to create an intuitive interface that received positive feedback from international users. 
      The weekly demo approach where customers directly tried the software in the test environment, instead of us presenting 
      finished features, created high trust between the client and the team and resulted in recognition for this innovative 
      project management approach.`
    ]
  },
  {
    title: 'PIM to Webshop Integration',
    duration: 0.5,
    client: 'Finnish retail company',
    tech: ['JavaScript', 'AWS Lambda', 'Node.js', 'Cloud'],
    teamSize: 9,
    description: [
      `Designed and implemented a serverless, cloud-native integration between a legacy Product Information Management (PIM) 
      system and a new webshop frontend using JavaScript and AWS Lambda. Created robust data transformation services that 
      normalized and enriched product data while implementing optimized caching strategies to ensure fast response times 
      and efficient resource utilization in the cloud environment.`,

      `Developed a seamless data flow between the systems that enabled the modern webshop to access and display product 
      information from the legacy PIM system without requiring major changes to either system. The serverless architecture 
      provided cost-effective scaling to handle varying loads.`,

      `Collaborated closely with both the PIM team and frontend developers to ensure the integration met all requirements 
      and provided a consistent user experience. Established monitoring and alerting for the serverless functions to ensure 
      reliability and quick response to any issues in the production environment.`
    ]
  },
  {
    title: 'Transportation Management System',
    dates: '2014 - 2018',
    duration: 3.5,
    client: 'Technology and services company',
    tech: ['Java', 'Spring', 'JavaScript', 'SQL Server'],
    teamSize: 8,
    description: [
      `Participated in the development and improvement of established transportation management system. Successfully established API 
      specifications and coordinated 
      development efforts between two companies, ensuring seamless integration and data flow while maintaining data integrity 
      and functionality. Implemented highly praised features that significantly improved user experience and operational 
      efficiency in the logistics domain.`,

      `Applied clean code practices and test-driven development to ensure high-quality, maintainable code. Collaborated closely 
      with stakeholders to understand business requirements and translate them into technical solutions that addressed real 
      user needs in the logistics domain.`,

      `Participated in planning steps to modernize and simplify the existing system that had become too complex over time. 
      The system had accumulated numerous features over the years without removing unused ones, leading to maintenance challenges 
      and decreased development velocity. Our team analyzed usage patterns, identified obsolete features, and created a phased 
      approach to streamline the system while maintaining critical functionality. This modernization initiative improved system 
      performance, reduced maintenance costs, and enhanced the overall user experience.`
    ]
  },
  {
    title: 'Multiplayer Game Communication Servers',
    duration: 2.5,
    client: 'Finnish game studio',
    tech: ['Java','Spring', 'JMS', 'Cassandra', 'Vaadin', 'REST'],
    teamSize: 3,
    description: [
      `Participated architecting and building pioneering high-performance communication servers for multiplayer mobile games that enabled 
      real-time interaction between millions of game clients. This custom solution, developed before such functionality 
      became commonplace via Unity and cloud services, included a complete ecosystem with CMS for game developers, 
      JMS-based messaging, clustered Cassandra databases for scalability, and comprehensive monitoring systems that 
      maintained 99.9% uptime for mission-critical gaming infrastructure.`,

      `Created a CMS system for game developers to modify, synchronize, and publish game-related data to test and 
      production databases. This significantly streamlined the game development workflow and reduced time-to-market 
      for new game features and updates.`,

      `Implemented an enterprise communication system based on JMS (Java Message Service) to ensure reliable message 
      delivery between system components. Developed server monitoring and controlling systems to maintain high 
      availability and performance.`,

      `Built data collection mechanisms and visualization tools to present historical performance data, enabling proactive 
      system optimization. Designed and implemented various REST interfaces for client applications, optimizing data 
      access with clustered Cassandra databases for high scalability.`,

      `Created user interfaces using Vaadin framework for internal tools and administration panels. Introduced strong 
      unit and integration testing practices to the team, significantly improving code quality and reducing errors in 
      the mission-critical back-end servers. Led project teams and mentored other developers in best practices for 
      high-performance server development.`
    ]
  },
  {
    title: 'Test Data Generation Utility',
    duration: 1.25,
    client: 'Finnish energy meter manufacturer',
    tech: ['SQL'],
    teamSize: 1,
    description: [
      `Developed a sophisticated test data generation framework for energy meter systems that significantly reduced 
      test setup time and improved test coverage by simulating diverse energy consumption patterns, meter readings, 
      and customer scenarios. As the first consultant on the project, delivered such exceptional value that the client 
      expanded their consulting engagement. The solution maintained complex referential integrity and business rules 
      while creating realistic test scenarios that helped identify critical issues before production deployment.`,

      `Designed the framework with flexibility in mind, allowing testers to easily configure different test scenarios 
      without requiring deep technical knowledge of the underlying database structure. This democratized testing and 
      enabled more thorough validation of system behavior under diverse conditions.`,

      `Developed utilities to clean up generated test data after test execution, ensuring the test environment 
      remained in a consistent state between test runs. Created documentation and training materials to help the 
      testing team effectively utilize the data generation tools.`,

      `Worked closely with quality assurance teams to understand their testing requirements and continuously 
      improved the data generation utility based on their feedback. The solution significantly reduced the time 
      required to set up test scenarios and improved test coverage across the application.`
    ]
  },
  {
    title: 'Certificate Management System',
    duration: 4.5,
    client: 'Finnish telecom company',
    tech: ['Java', 'Spring', 'Microsoft Active Directory'],
    teamSize: 4,
    description: [
      `Participated of developing a secure certificate management system for a Finnish telecom company that simplified 
      complex PKI operations while maintaining security standards. The system handled the complete lifecycle 
      of CA certificates—managing, signing, revoking, and listing—with Microsoft Active Directory integration 
      and comprehensive audit logging for compliance. Created intuitive interfaces that made certificate 
      management accessible to non-technical users while automating workflows to reduce manual errors.`,

      `Enhanced an existing custom configuration management system before participating in creating a completely new 
      system based on the existing platform. The new system significantly improved security compliance and operational 
      efficiency for the telecom company's certificate management processes.`,

      `Developed robust integration with Microsoft Active Directory for secure user authentication and authorization, 
      ensuring that only authorized personnel could access sensitive certificate operations. Implemented comprehensive 
      logging and audit trails to maintain security compliance and traceability of all certificate-related actions.`,

      `Collaborated closely with security experts to ensure the system adhered to industry standards and best 
      practices for public key infrastructure (PKI). Participated in code reviews and security audits to maintain 
      the highest level of security throughout the development lifecycle.`
    ]
  },
];

export const booksRead = 80

// Books that have influenced me
export const books = [
  {
    title: 'Clean Code',
    authors: ['Robert C. Martin'],
    coverImage: 'https://covers.openlibrary.org/b/isbn/0132350882-M.jpg',
    description: 'A handbook of agile software craftsmanship that has helped me write better, more maintainable code.'
  },
  {
    title: 'The Pragmatic Programmer',
    authors: ['Andrew Hunt', 'David Thomas'],
    coverImage: 'https://m.media-amazon.com/images/I/51W1sBPO7tL._SX380_BO1,204,203,200_.jpg',
    description: 'From journeyman to master - a book that shaped my approach to software development.'
  },
  {
    title: 'Design Patterns',
    authors: ['Erich Gamma', 'Richard Helm', 'Ralph Johnson', 'John Vlissides'],
    coverImage: 'https://m.media-amazon.com/images/I/51szD9HC9pL._SX395_BO1,204,203,200_.jpg',
    description: 'Elements of Reusable Object-Oriented Software - fundamental patterns I use regularly.'
  },
  {
    title: 'Refactoring',
    authors: ['Martin Fowler'],
    coverImage: 'https://covers.openlibrary.org/b/id/8507565-M.jpg',
    description: 'Improving the design of existing code - essential techniques for maintaining software.'
  },
  {
    title: 'Domain-Driven Design',
    authors: ['Eric Evans'],
    coverImage: 'https://m.media-amazon.com/images/I/51sZW87slRL._SX375_BO1,204,203,200_.jpg',
    description: 'Tackling complexity in the heart of software - changed how I approach complex business domains.'
  },
  {
    title: 'Fixing your Scrum',
    authors: ['Ryan Ripley', 'Todd Miller'],
    coverImage: 'https://m.media-amazon.com/images/I/81uzgGwB4IL._SY385_.jpg',
    description: 'Practical solutions to common Scrum problems - helps teams improve their Scrum implementation.'
  },
  {
    title: 'The Phoenix Project',
    authors: ['Gene Kim'],
    coverImage: 'https://covers.openlibrary.org/b/id/8090274-M.jpg',
    description: 'A novel about IT, DevOps, and helping your business win - illustrates the principles of DevOps through storytelling.'
  },
  {
    title: 'The Unicorn Project',
    authors: ['Gene Kim'],
    coverImage: 'https://m.media-amazon.com/images/I/81+LIauOzgL._SL1500_.jpg',
    description: 'A novel about developers, digital disruption, and thriving in the age of data - explores the DevOps movement from a developer perspective.'
  },
  {
    title: 'Accelerate',
    authors: ['Nicole Forsgren'],
    coverImage: 'https://m.media-amazon.com/images/I/71AQO6nzuNL._AC_UY218_.jpg',
    description: 'The science of lean software and DevOps - building and scaling high performing technology organizations.'
  },
  {
    title: 'User Story Mapping',
    authors: ['Jeff Patton'],
    coverImage: 'https://m.media-amazon.com/images/I/91al9Hr4eML._AC_UY218_.jpg',
    description: 'Discover the whole story, build the right product - a practical guide to user story mapping for better product development.'
  },
  {
    title: 'Working Effectively with Unit Tests',
    authors: ['Jay Fields'],
    coverImage: 'https://m.media-amazon.com/images/I/71BPywSSN4L._AC_UY218_.jpg',
    description: 'A guide to writing maintainable and effective unit tests that improve code quality.'
  },
  {
    title: 'Working Effectively with Legacy Code',
    authors: ['Michael C. Feathers'],
    coverImage: 'https://m.media-amazon.com/images/I/51EgCCLOWxL._SX376_BO1,204,203,200_.jpg',
    description: 'Strategies and techniques for dealing with large, untested legacy code bases and bringing them under test.'
  },
  {
    title: 'Clean Coder',
    authors: ['Robert C. Martin'],
    coverImage: 'https://m.media-amazon.com/images/I/51uO-K+V5dL._SX381_BO1,204,203,200_.jpg',
    description: 'A code of conduct for professional programmers - focuses on the disciplines, techniques, and practices of professional software developers.'
  },
  {
    title: 'Team Topologies',
    authors: ['Matthew Skelton'],
    coverImage: 'https://m.media-amazon.com/images/I/71rXZdLZunL._AC_UY218_.jpg',
    description: 'Organizing business and technology teams for fast flow - a practical guide to designing team structures for effective software delivery.'
  }
];

// Social media links
export const socialMedia = [
  { name: 'GitHub', icon: 'github', url: 'https://github.com/markoandersson' },
  { name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/markoandersson' },
  { name: 'Twitter', icon: 'twitter', url: 'https://x.com/marko_andersson' },
  { name: 'Email', icon: 'envelope', url: 'mailto:marko.andersson@gmail.com' }
];

// Location information
export const location = {
  city: 'Jyväskylä',
  country: 'Finland',
  mapUrl: 'https://maps.google.com/?q=Jyväskylä,Finland'
};

// Career start year (constant)
export const careerStartYear = 2007;

// Testimonials data
export const testimonials = [
  {
    text: [
        "He understand context, technical limitations and weaknesses well. He fixes or mitigates problems proactively and helps make a plans for better implementations.",
        "He helps the whole team to work better with professional attitude and skills.",
        "He is not afraid to raise issues and has logical and pragmatic approach to solving issues or designing new developments."
        ],
    role: "Lead Developer"
  },
  {
    text: "Responsible and proactive. Competent in the field. Good communicator and team player.",
    role: "Senior Developer"
  },
  {
    text: "Skilled, self-directed, helpful, execution and also great design skills.",
    role: "Technology Director"
  },
  {
    text: "With great cooperation, you have struggled through difficulties to implement a new solution. Good work!",
    role: "Director"
  },
  {
    text: "Marko Andersson has been adopting great to the stream and way-of-working from Nortal team and he has been also developing further the working models incl. scrum mastership role for the technical development.",
    role: "Technology Director"
  },
  {
    text: [
        "Marko just might be the cleanest coder I have ever had the pleasure of knowing. Having worked with him for about a year, I have learned to really appreciate his drive to improving the maintainability and elegance of the code around and ahead of him. And: his approach is practical and supportive of others.",
        "However, to me the greatest thing about him is that he is a team-first -kind of guy. He will accept responsibility of the team’s deliverables, can do any role (architect, coder, tester, scrum master) and do it well, will strive for perfecting the processes and Is always ready to help a team member in need. He is the kind of guy you really want in your team."
      ],
    role: "Entrepreneur"
  },
  {
    text: "If you want an experienced software development professional in your team, look for guys like Marko. He is equipped with excellent technical skills and can handle any technical problem. Every team also needs members who want to create solutions with excellent quality and push team's technical standards forward. That's why me and other Marko's team members greatly appreciate his attitude of not being satisfied with mediocre results. Marko also is one the guys who is not only familiar with agile and lean ways of working but knows how to do it in practice. ",
    role: "Product Manager"
  },
  {
    text: "Marko's enthusiasm to clean code is unparalleled. But more importantly, Markos aura generates clean code around him. I owe him a great thanks for teaching me how to imagine code. It is not the syntax or the functions, but a poem which describes your intentions. With this in mind, I can write readable and robust code that every developer after me will understand. ",
    role: "Senior Software Developer"
  },
  {
    text: [
        "Marko is a wonder-boy on what comes to Java and especially Spring! I had the honor to work with him for a year, and learned soooo much about the good practices what comes to keeping code in order and patterns in place.",
        "Marko is an avid learner who manages to inspire others as well, as teach ways to become a better programmer. +10 would work with him again!"
        ],
    role: "CO-Founder"
  },
  {
    text: "Marko is a hard working, analytical professional, and a pleasure to work with. His contribution to server system design and development has been invaluable. I will gladly recommend Marko for his software design, development, and communcational skills.",
    role: "Founder"
  }
];

// Manifesto and principles data
export const manifesto = [
  { id: 1, boldText: "Sustainable solutions", regularText: "over quick fixes" },
  { id: 2, boldText: "Understanding root causes", regularText: "over treating symptoms" },
  { id: 3, boldText: "System thinking", regularText: "over isolated optimizations" },
  { id: 4, boldText: "People collaboration", regularText: "over siloed expertise" },
  { id: 5, boldText: "Adapting to new insights", regularText: "over following the initial plan" },
  { id: 6, boldText: "Iterative evolution of legacy systems", regularText: "over immediate, high-risk rewrites" },
  { id: 7, boldText: "Customer-centric problem solving", regularText: "over blindly implementing feature lists" },
];

export const principles = [
  "I aim to create code that is not only technically sound but also readable and maintainable for the long term." ,
  "I write code for humans first, computers second. Clarity and maintainability outweigh clever optimizations." ,
  "I believe in \"leaving the campground cleaner than you found it,\" consistently producing clean, well-tested code." ,
  "I understand knowledge sharing multiplies the impact of good solutions. Documentation and mentoring are essential parts of the process.",
  "I understand that technical challenges are often symptoms of underlying organizational patterns." ,
  "I focus on investigating the underlying needs and the \"why\" behind the \"what\" when solving problems." ,
  "I aim to create a shared understanding between developers and business stakeholders where the code reflects real-world actions and concepts." ,
  "I understand that each system and its organizational context is unique, and \"ready recipes\" for improvement rarely succeed." ,
  "I recognize that significant change is a team effort requiring buy-in and collaboration from other developers, business stakeholders, and those skilled in navigating organizational dynamics." ,
  "I view TDD primarily as a tool for designing software that precisely meets requirements and exhibits good internal structure." ,
  "I prioritize a pragmatic approach to delivering working software that truly meets user needs." ,
  "I recognize the inherent business value in systems that have served their purpose over years instead of calling them legacy." ,
  "I focus on strategic, iterative evolution rather than immediate, high-risk rewrites." ,
  "I leverage techniques for safely refactoring and introducing tests into systems lacking adequate test harnesses." ,
  "I believe that true value comes from deeply understanding the problems customers are trying to solve.",
  "I think business value is the ultimate measure of technical success. Technology serves people, not the other way around."
];

// Helper functions to calculate derived data
export const calculateYearsExperience = () => new Date().getFullYear() - careerStartYear;
export const getAmountOfProjects = () => projects.length;

// Technology to icon mapping
const technologyIcons = {
  'Java': { name: 'java', type: 'brands' },
  'Spring': { name: 'leaf', type: 'solid' },
  'Spring Boot': { name: 'leaf', type: 'solid' },
  'React': { name: 'react', type: 'brands' },
  'PostgreSQL': { name: 'database', type: 'solid' },
  'C#': { name: 'code', type: 'solid' },
  '.NET Core': { name: 'microsoft', type: 'brands' },
  'Azure': { name: 'cloud', type: 'solid' },
  'Azure SQL': { name: 'database', type: 'solid' },
  'Angular': { name: 'angular', type: 'brands' },
  'JavaScript': { name: 'js', type: 'brands' },
  'SQL Server': { name: 'database', type: 'solid' },
  'Sharepoint': { name: 'file-alt', type: 'solid' },
  'Python': { name: 'python', type: 'brands' },
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
