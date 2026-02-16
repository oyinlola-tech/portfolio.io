export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Freelance' | 'Founder';
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'ZudoMart',
    role: 'Founder & Lead Engineer',
    period: '2023 - Present',
    location: 'Okitipupa, Ondo State, Nigeria',
    type: 'Founder',
    description: 'Founded and built a multi-vendor e-commerce marketplace platform from the ground up. Leading all technical decisions, architecture, and implementation while growing the platform to serve thousands of users.',
    responsibilities: [
      'Architected and developed entire marketplace platform',
      'Led technical strategy and roadmap planning',
      'Implemented scalable infrastructure handling 10,000+ concurrent users',
      'Built and optimized CI/CD pipelines',
      'Established engineering best practices and documentation',
      'Managed cloud infrastructure and DevOps operations',
      'Integrated payment gateways and third-party services',
      'Developed comprehensive monitoring and alerting systems'
    ],
    achievements: [
      'Scaled platform from 0 to 25,000+ registered users',
      'Processed over $2M in transactions with 99.87% success rate',
      'Achieved 99.9% uptime during Black Friday sales',
      'Reduced response times by 93% (3s → 200ms)',
      'Built and deployed 12+ major features',
      'Reduced infrastructure costs by 35% through optimization',
      'Zero security breaches since launch'
    ],
    technologies: ['Node.js', 'Express.js', 'React', 'PostgreSQL', 'Redis', 'Docker', 'GitHub Actions', 'Nginx', 'Prometheus', 'Grafana'],
    metrics: [
      { label: 'Users', value: '25,000+' },
      { label: 'Revenue Processed', value: '$2M+' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'Response Time', value: '200ms avg' }
    ]
  },
  {
    id: '2',
    company: 'TechVenture Solutions',
    role: 'Senior Full Stack Engineer',
    period: '2022 - 2023',
    location: 'Lagos, Nigeria (Remote)',
    type: 'Full-time',
    description: 'Senior engineer responsible for architecting and implementing complex features, mentoring junior developers, and establishing engineering best practices across the organization.',
    responsibilities: [
      'Designed and implemented scalable backend systems',
      'Mentored 3 junior engineers to senior-level capabilities',
      'Led code review culture transformation',
      'Implemented comprehensive testing strategy (0% → 85% coverage)',
      'Built CI/CD pipelines reducing deployment time by 83%',
      'Architected microservices communication patterns',
      'Conducted technical interviews and hiring',
      'Established API security best practices'
    ],
    achievements: [
      'Reduced production bugs by 76% through testing culture',
      'Improved deployment frequency from monthly to 3x per week',
      'Scaled application to handle 5x traffic without infrastructure increase',
      'Mentored 3 junior engineers promoted to mid-level',
      'Reduced mean time to recovery (MTTR) by 91%',
      'Implemented observability stack preventing 23 outages',
      'Led security hardening fixing 23 vulnerabilities'
    ],
    technologies: ['Node.js', 'React', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Kubernetes', 'Jest', 'AWS'],
    metrics: [
      { label: 'Test Coverage', value: '0% → 85%' },
      { label: 'Production Bugs', value: '76% reduction' },
      { label: 'MTTR', value: '91% faster' },
      { label: 'Team Growth', value: '3 engineers mentored' }
    ]
  },
  {
    id: '3',
    company: 'Digital Innovations Ltd',
    role: 'Full Stack Developer',
    period: '2021 - 2022',
    location: 'Akure, Ondo State, Nigeria',
    type: 'Full-time',
    description: 'Full stack developer building customer-facing applications and internal tools. Worked across the entire stack from database design to frontend implementation.',
    responsibilities: [
      'Developed full-stack web applications using Node.js and React',
      'Designed and implemented RESTful APIs',
      'Built responsive user interfaces',
      'Optimized database queries and schema design',
      'Integrated third-party APIs and services',
      'Implemented user authentication and authorization',
      'Participated in agile development processes',
      'Provided production support and bug fixes'
    ],
    achievements: [
      'Built e-commerce platform handling 2,000+ daily transactions',
      'Reduced page load times by 60% through optimization',
      'Implemented payment gateway integration processing $500K+',
      'Developed logistics tracking system for 500+ daily shipments',
      'Created admin dashboard managing 50,000+ inventory items',
      'Improved database query performance by 85%'
    ],
    technologies: ['Node.js', 'Express.js', 'React', 'PostgreSQL', 'MongoDB', 'Redis', 'Git', 'Material-UI'],
    metrics: [
      { label: 'Page Load Time', value: '60% faster' },
      { label: 'Query Performance', value: '85% improvement' },
      { label: 'Features Delivered', value: '25+' }
    ]
  },
  {
    id: '4',
    company: 'WebCraft Agency',
    role: 'Junior Full Stack Developer',
    period: '2020 - 2021',
    location: 'Okitipupa, Ondo State, Nigeria',
    type: 'Full-time',
    description: 'Junior developer working on client projects, building web applications, and learning software engineering best practices.',
    responsibilities: [
      'Developed websites and web applications for clients',
      'Implemented responsive frontend designs',
      'Built backend APIs with Node.js',
      'Wrote and maintained documentation',
      'Fixed bugs and implemented feature requests',
      'Collaborated with designers and project managers',
      'Participated in code reviews',
      'Learned and adopted best practices'
    ],
    achievements: [
      'Delivered 15+ client projects successfully',
      'Built real-time chat application used by 1,000+ users',
      'Developed business management dashboard',
      'Learned React, Node.js, and modern web development',
      'Improved code quality through peer learning',
      'Reduced development time by creating reusable components'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'React', 'MongoDB', 'Git'],
    metrics: [
      { label: 'Projects Delivered', value: '15+' },
      { label: 'Client Satisfaction', value: '4.8/5' },
      { label: 'Skills Acquired', value: '10+ technologies' }
    ]
  },
  {
    id: '5',
    company: 'Freelance',
    role: 'Freelance Developer',
    period: '2020 - Present',
    location: 'Remote',
    type: 'Freelance',
    description: 'Providing freelance development services to clients across various industries, building custom web applications, and solving technical challenges.',
    responsibilities: [
      'Client consultation and requirement gathering',
      'Full-stack web application development',
      'API development and integration',
      'Database design and optimization',
      'Deployment and maintenance',
      'Technical documentation',
      'Client training and support',
      'Project management and delivery'
    ],
    achievements: [
      'Completed 30+ freelance projects',
      'Maintained 5-star rating on platforms',
      'Built solutions for clients in 5+ countries',
      'Developed automation scripts saving clients 100+ hours/month',
      'Created custom POS systems for local businesses',
      'Integrated payment solutions for Nigerian merchants',
      '100% client satisfaction and repeat business'
    ],
    technologies: ['JavaScript', 'Node.js', 'React', 'Python', 'PostgreSQL', 'MongoDB', 'Git', 'Various APIs'],
    metrics: [
      { label: 'Projects Completed', value: '30+' },
      { label: 'Client Rating', value: '5.0/5.0' },
      { label: 'Repeat Clients', value: '70%' },
      { label: 'Time Saved for Clients', value: '100+ hrs/month' }
    ]
  }
];

export function getAllExperiences(): Experience[] {
  return experiences;
}

export function getExperienceById(id: string): Experience | undefined {
  return experiences.find(exp => exp.id === id);
}

export function getTotalYearsOfExperience(): number {
  // Calculate from 2020 to present (2026)
  return 4;
}

export function getTotalCompanies(): number {
  // Excluding freelance
  return experiences.filter(exp => exp.type !== 'Freelance').length;
}
