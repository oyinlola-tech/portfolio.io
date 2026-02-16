export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  author: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'scaling-ecommerce-10000-concurrent-users',
    title: 'Scaling E-commerce to Handle 10,000+ Concurrent Users: A Technical Deep Dive',
    excerpt: 'How I architected and scaled ZudoMart to handle Black Friday traffic spikes, reducing response times from 3s to 200ms while maintaining 99.9% uptime.',
    date: '2024-12-08',
    readTime: '12 min read',
    category: 'Architecture & Scale',
    tags: ['Scalability', 'Performance', 'Node.js', 'Redis', 'Load Balancing'],
    author: 'Oluwayemi Oyinlola Michael',
    metrics: [
      { label: 'Response Time', value: '93% faster' },
      { label: 'Concurrent Users', value: '10,000+' },
      { label: 'Uptime', value: '99.9%' }
    ],
    content: 'Comprehensive scaling article content...'
  },
  {
    id: '2',
    slug: 'testing-culture-zero-to-hero',
    title: 'Building a Testing Culture: From 0% to 85% Code Coverage',
    excerpt: 'How I introduced comprehensive testing practices across a 5-person team, establishing automated testing pipelines that caught 127 bugs before production.',
    date: '2024-11-20',
    readTime: '10 min read',
    category: 'Testing & Quality',
    tags: ['Testing', 'TDD', 'Jest', 'CI/CD', 'Quality'],
    author: 'Oluwayemi Oyinlola Michael',
    metrics: [
      { label: 'Code Coverage', value: '0% → 85%' },
      { label: 'Production Bugs', value: '76% reduction' },
      { label: 'Bugs Caught', value: '127' }
    ],
    content: 'Detailed testing culture transformation...'
  },
  {
    id: '3',
    slug: 'ci-cd-pipeline-from-scratch',
    title: 'Building Production-Grade CI/CD Pipelines: A DevOps Journey',
    excerpt: 'From manual deployments to fully automated CI/CD with zero-downtime deployments, automated rollbacks, and infrastructure as code.',
    date: '2024-10-28',
    readTime: '11 min read',
    category: 'DevOps & Infrastructure',
    tags: ['CI/CD', 'GitHub Actions', 'Docker', 'DevOps', 'Automation'],
    author: 'Oluwayemi Oyinlola Michael',
    metrics: [
      { label: 'Deploy Time', value: '45min → 8min' },
      { label: 'Frequency', value: '12/week' },
      { label: 'Failures', value: '92% fewer' }
    ],
    content: 'Complete CI/CD implementation guide...'
  },
  {
    id: '4',
    slug: 'real-time-websocket-chat-system',
    title: 'Building a Real-Time Chat System: WebSocket Architecture at Scale',
    excerpt: 'Designing and implementing a production-ready real-time chat system handling 5,000+ concurrent connections with message delivery guarantees.',
    date: '2024-09-15',
    readTime: '13 min read',
    category: 'Real-Time Systems',
    tags: ['WebSocket', 'Socket.io', 'Real-time', 'Node.js', 'Redis'],
    author: 'Oluwayemi Oyinlola Michael',
    metrics: [
      { label: 'Concurrent Connections', value: '5,000+' },
      { label: 'Message Latency', value: '<50ms' },
      { label: 'Delivery Rate', value: '99.98%' }
    ],
    content: 'Real-time chat implementation details...'
  },
  {
    id: '5',
    slug: 'api-security-hardening-production',
    title: 'API Security Hardening: From Vulnerable to Production-Ready',
    excerpt: 'Comprehensive security audit and hardening process that identified and fixed 23 vulnerabilities, implementing defense-in-depth strategies.',
    date: '2024-08-10',
    readTime: '14 min read',
    category: 'Security & Risk',
    tags: ['Security', 'API', 'Authentication', 'Encryption', 'Best Practices'],
    author: 'Oluwayemi Oyinlola Michael',
    metrics: [
      { label: 'Vulnerabilities Fixed', value: '23' },
      { label: 'Security Score', value: 'A+' },
      { label: 'Attack Prevention', value: '100%' }
    ],
    content: 'API security hardening guide...'
  },
  {
    id: '6',
    slug: 'code-review-culture-mentorship',
    title: 'Code Review as Mentorship: Building Teams Through Better Reviews',
    excerpt: 'How I transformed code reviews from gatekeeping to growth opportunities, reducing review time by 60% while improving code quality and team skills.',
    date: '2024-07-18',
    readTime: '10 min read',
    category: 'Leadership & Collaboration',
    tags: ['Code Review', 'Mentorship', 'Team Culture', 'Collaboration'],
    author: 'Oluwayemi Oyinlola Michael',
    metrics: [
      { label: 'Review Time', value: '60% faster' },
      { label: 'Team Satisfaction', value: '+47%' },
      { label: 'Code Quality', value: '8.7/10' }
    ],
    content: 'Code review culture transformation...'
  },
  {
    id: '7',
    slug: 'observability-monitoring-production',
    title: 'Observability in Production: From Blind to 20/20 Vision',
    excerpt: 'Building comprehensive monitoring, logging, and alerting systems that reduced MTTR by 91% and prevented 23 outages through proactive detection.',
    date: '2024-06-25',
    readTime: '11 min read',
    category: 'Operations & SRE',
    tags: ['Monitoring', 'Observability', 'Logging', 'Prometheus', 'Grafana'],
    author: 'Oluwayemi Oyinlola Michael',
    metrics: [
      { label: 'MTTR Reduction', value: '91%' },
      { label: 'Outages Prevented', value: '23' },
      { label: 'Alert Noise', value: '78% less' }
    ],
    content: 'Observability implementation guide...'
  },
  {
    id: '8',
    slug: 'payment-gateway-integration-lessons',
    title: 'Payment Gateway Integration: Lessons from Processing $2M in Transactions',
    excerpt: 'Deep dive into payment integration challenges, handling webhooks reliability, idempotency, and building resilient payment systems.',
    date: '2024-05-12',
    readTime: '12 min read',
    category: 'Payments & Fintech',
    tags: ['Payments', 'Webhooks', 'Fintech', 'Integration', 'Reliability'],
    author: 'Oluwayemi Oyinlola Michael',
    metrics: [
      { label: 'Transactions Processed', value: '$2M+' },
      { label: 'Success Rate', value: '99.87%' },
      { label: 'Failed Payments', value: '0.13%' }
    ],
    content: 'Payment integration best practices...'
  },
  {
    id: '9',
    slug: 'database-optimization-query-performance',
    title: 'Database Optimization: Reducing Query Times from 8s to 80ms',
    excerpt: 'Systematic approach to database performance optimization through indexing strategies, query analysis, and connection pooling.',
    date: '2024-04-08',
    readTime: '9 min read',
    category: 'Database & Performance',
    tags: ['Database', 'PostgreSQL', 'Performance', 'Optimization', 'Indexing'],
    author: 'Oluwayemi Oyinlola Michael',
    metrics: [
      { label: 'Query Time', value: '99% faster' },
      { label: 'Database Load', value: '73% reduction' },
      { label: 'Throughput', value: '5x increase' }
    ],
    content: 'Database optimization techniques...'
  },
  {
    id: '10',
    slug: 'technical-leadership-junior-to-senior',
    title: 'Technical Leadership: Mentoring Juniors to Senior Engineers',
    excerpt: 'My framework for growing junior engineers into confident senior contributors through structured mentorship, project ownership, and skill development.',
    date: '2024-03-15',
    readTime: '10 min read',
    category: 'Leadership & Growth',
    tags: ['Leadership', 'Mentorship', 'Career Growth', 'Team Building'],
    author: 'Oluwayemi Oyinlola Michael',
    metrics: [
      { label: 'Engineers Mentored', value: '7' },
      { label: 'Promoted to Senior', value: '3' },
      { label: 'Retention Rate', value: '100%' }
    ],
    content: 'Technical mentorship framework...'
  }
];

// Function to get all blog posts
export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Function to get blog post by slug
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

// Function to get blog posts by category
export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

// Function to get recent blog posts
export function getRecentBlogPosts(count: number = 3): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

// Get all unique categories
export function getAllCategories(): string[] {
  return Array.from(new Set(blogPosts.map(post => post.category)));
}

// Get all unique tags
export function getAllTags(): string[] {
  const allTags = blogPosts.flatMap(post => post.tags);
  return Array.from(new Set(allTags));
}
