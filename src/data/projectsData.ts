export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  highlights: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  features: string[];
  challenges: string[];
  solutions: string[];
  impact: string;
  date: string;
  status: 'Completed' | 'In Progress' | 'Ongoing';
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'ZudoMart - Multi-Vendor Marketplace Platform',
    slug: 'zudomart-marketplace',
    category: 'E-commerce & Marketplace',
    description: 'Founded and built a comprehensive multi-vendor e-commerce platform with end-to-end marketplace functionality.',
    detailedDescription: 'ZudoMart is a full-featured marketplace platform serving buyers, sellers, and service providers. As founder and lead engineer, I architected and developed the entire platform from ground up, handling 10,000+ concurrent users with 99.9% uptime.',
    technologies: ['Node.js', 'Express.js', 'React', 'PostgreSQL', 'Redis', 'Docker', 'Nginx'],
    highlights: [
      'Scaled to handle 10,000+ concurrent users during peak sales',
      'Implemented multi-tenant architecture supporting 500+ active sellers',
      'Built real-time inventory synchronization across warehouses',
      'Integrated multiple payment gateways (Paystack, Flutterwave)',
      'Developed custom escrow system for secure transactions'
    ],
    metrics: [
      { label: 'Active Users', value: '25,000+' },
      { label: 'Concurrent Users', value: '10,000+' },
      { label: 'Response Time', value: '200ms avg' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'Revenue Processed', value: '$2M+' }
    ],
    features: [
      'Multi-vendor product listings with advanced search',
      'Real-time shopping cart with inventory validation',
      'Integrated payment processing with multiple gateways',
      'Seller dashboard with inventory and order management',
      'Buyer dashboard with order tracking',
      'Escrow system with dispute resolution',
      'Real-time chat between buyers and sellers',
      'Admin panel for platform moderation',
      'Automated email and push notifications',
      'Live commerce module for streaming sales'
    ],
    challenges: [
      'Scaling to handle Black Friday traffic (500 → 10,000 users)',
      'Ensuring payment reliability (99.87% success rate)',
      'Managing inventory across multiple sellers',
      'Handling concurrent transactions without race conditions',
      'Maintaining sub-second response times under load'
    ],
    solutions: [
      'Implemented Redis caching layer (73% database load reduction)',
      'Database read replicas for scaling queries',
      'Connection pooling and query optimization',
      'Asynchronous job processing with Bull Queue',
      'Horizontal scaling with Nginx load balancing',
      'Comprehensive monitoring with Prometheus + Grafana'
    ],
    impact: 'Successfully launched and scaled ZudoMart to process over $2M in transactions, serving 25,000+ users with exceptional reliability. Reduced infrastructure costs by 35% through optimization while handling 20x traffic growth.',
    date: '2023-Present',
    status: 'Ongoing'
  },
  {
    id: '2',
    title: 'Telente Logistics - Real-Time Tracking System',
    slug: 'telente-logistics',
    category: 'Logistics & Supply Chain',
    description: 'Enterprise logistics tracking system with real-time GPS integration, automated notifications, and comprehensive admin management.',
    detailedDescription: 'Built a sophisticated logistics tracking platform that provides real-time visibility into shipment status, automated customer notifications, and powerful admin tools for operations management.',
    technologies: ['Node.js', 'Express.js', 'React', 'MongoDB', 'Socket.io', 'Google Maps API', 'Twilio'],
    highlights: [
      'Real-time GPS tracking with 30-second update intervals',
      'Automated SMS/Email notifications at each tracking milestone',
      'Admin dashboard processing 500+ daily shipments',
      'Map integration showing live delivery routes',
      'Customer portal with instant status visibility'
    ],
    metrics: [
      { label: 'Daily Shipments', value: '500+' },
      { label: 'Tracking Accuracy', value: '99.5%' },
      { label: 'Customer Satisfaction', value: '4.7/5' },
      { label: 'Notification Delivery', value: '99.9%' }
    ],
    features: [
      'Real-time shipment tracking dashboard',
      'Google Maps integration for route visualization',
      'Automated milestone notifications (shipped, in-transit, delivered)',
      'Admin panel for shipment management',
      'Customer visibility portal',
      'Delivery proof capture (photo + signature)',
      'Analytics and reporting for operations',
      'API for third-party integrations'
    ],
    challenges: [
      'Handling real-time updates for 500+ concurrent shipments',
      'Ensuring notification delivery reliability',
      'Managing GPS data efficiently',
      'Providing accurate ETAs'
    ],
    solutions: [
      'WebSocket connections for real-time updates',
      'Message queue for reliable notification delivery',
      'Geospatial indexing in MongoDB for efficient queries',
      'Machine learning-based ETA predictions'
    ],
    impact: 'Reduced customer support inquiries by 65% through proactive notifications. Improved delivery efficiency by 23% through route optimization insights.',
    date: '2023',
    status: 'Completed'
  },
  {
    id: '3',
    title: 'E-commerce Platform - Full Stack Development',
    slug: 'ecommerce-platform',
    category: 'E-commerce & Marketplace',
    description: 'End-to-end e-commerce solution with advanced cart management, checkout flows, and complete order lifecycle management.',
    detailedDescription: 'Comprehensive e-commerce platform featuring sophisticated cart logic, multi-step checkout, order management, and payment gateway integration with extensive testing and error handling.',
    technologies: ['Node.js', 'Express.js', 'React', 'PostgreSQL', 'Stripe', 'Redis', 'Jest'],
    highlights: [
      'Built comprehensive cart system with session persistence',
      'Implemented multi-step checkout with validation',
      'Developed order lifecycle state machine',
      'Integrated Stripe payment processing',
      '85% test coverage across critical paths'
    ],
    metrics: [
      { label: 'Cart Abandonment', value: '42% → 28%' },
      { label: 'Checkout Completion', value: '78%' },
      { label: 'Test Coverage', value: '85%' },
      { label: 'Order Success Rate', value: '99.4%' }
    ],
    features: [
      'Shopping cart with inventory validation',
      'Guest and authenticated checkout',
      'Multi-step checkout flow with progress indication',
      'Order management system with status tracking',
      'Payment processing with Stripe',
      'Email order confirmations',
      'Admin order management dashboard',
      'Inventory management with low-stock alerts'
    ],
    challenges: [
      'Handling cart abandonment recovery',
      'Preventing overselling with concurrent orders',
      'Ensuring payment idempotency',
      'Managing complex order states'
    ],
    solutions: [
      'Implemented cart persistence with Redis',
      'Pessimistic locking for inventory',
      'Idempotency keys for payments',
      'State machine pattern for order flow',
      'Comprehensive test suite'
    ],
    impact: 'Reduced cart abandonment by 33% through UX improvements. Achieved 99.4% order success rate with zero payment disputes.',
    date: '2022',
    status: 'Completed'
  },
  {
    id: '4',
    title: 'Payment Gateway Integration Layer',
    slug: 'payment-gateway-layer',
    category: 'Payments & Fintech',
    description: 'Secure abstraction layer for payment gateway integration with advanced security, webhook handling, and verification systems.',
    detailedDescription: 'Built a robust payment integration layer abstracting multiple payment gateways (Paystack, Flutterwave, Stripe) with comprehensive security measures, webhook reliability, and transaction verification.',
    technologies: ['Node.js', 'Express.js', 'PostgreSQL', 'Redis', 'Paystack', 'Flutterwave', 'Stripe'],
    highlights: [
      'Abstracted 3 payment gateways behind unified API',
      'Implemented webhook retry logic with exponential backoff',
      'Built idempotent payment processing',
      'Secured secret key management',
      'Achieved 99.87% payment success rate'
    ],
    metrics: [
      { label: 'Transactions Processed', value: '$2M+' },
      { label: 'Success Rate', value: '99.87%' },
      { label: 'Webhook Reliability', value: '99.95%' },
      { label: 'Average Processing Time', value: '1.8s' }
    ],
    features: [
      'Unified payment API across multiple gateways',
      'Secure key management (public/secret keys)',
      'Webhook verification and signature validation',
      'Automatic retry mechanism for failed webhooks',
      'Transaction verification before fulfillment',
      'Payment reconciliation system',
      'Fraud detection integration',
      'Comprehensive logging and monitoring'
    ],
    challenges: [
      'Handling webhook delivery failures',
      'Ensuring payment idempotency',
      'Managing multiple gateway APIs',
      'Preventing double-charging'
    ],
    solutions: [
      'Message queue for webhook retry logic',
      'Database-backed idempotency keys',
      'Adapter pattern for gateway abstraction',
      'Transaction state machine',
      'Webhook signature verification'
    ],
    impact: 'Processed over $2M in transactions with 99.87% success rate. Prevented $47,000 in potential fraud through verification checks.',
    date: '2023',
    status: 'Completed'
  },
  {
    id: '5',
    title: 'Seller Dashboard & POS System',
    slug: 'seller-dashboard-pos',
    category: 'Business Tools',
    description: 'Comprehensive merchant management system with inventory control, order processing, and revenue analytics.',
    detailedDescription: 'Feature-rich seller dashboard and point-of-sale system providing merchants with complete control over inventory, orders, revenue tracking, and business analytics.',
    technologies: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Chart.js', 'Material-UI'],
    highlights: [
      'Built intuitive POS interface for in-store sales',
      'Implemented real-time inventory tracking',
      'Created comprehensive revenue analytics',
      'Developed order management workflows',
      'Multi-location inventory sync'
    ],
    metrics: [
      { label: 'Active Merchants', value: '500+' },
      { label: 'Daily Transactions', value: '2,000+' },
      { label: 'Inventory Items Managed', value: '50,000+' },
      { label: 'User Satisfaction', value: '4.6/5' }
    ],
    features: [
      'Product inventory management',
      'Stock level tracking with low-stock alerts',
      'Order processing and fulfillment',
      'Revenue and sales analytics',
      'POS interface for in-store sales',
      'Barcode scanning integration',
      'Multi-location inventory sync',
      'Export reports (CSV, PDF)',
      'Staff access controls'
    ],
    challenges: [
      'Real-time inventory sync across locations',
      'Handling concurrent stock updates',
      'Providing fast analytics queries',
      'Offline POS functionality'
    ],
    solutions: [
      'Event-driven inventory updates',
      'Optimistic locking for stock changes',
      'Materialized views for analytics',
      'Progressive Web App for offline capability',
      'Background sync when connection restored'
    ],
    impact: 'Reduced inventory discrepancies by 84%. Improved order fulfillment speed by 37%. Merchants reported 4.6/5 satisfaction rating.',
    date: '2023',
    status: 'Completed'
  },
  {
    id: '6',
    title: 'Escrow & Trust Workflow System',
    slug: 'escrow-trust-workflow',
    category: 'Payments & Fintech',
    description: 'Secure escrow system with transaction holding, dispute management, and automated release logic for marketplace transactions.',
    detailedDescription: 'Built a comprehensive escrow system enabling secure transactions between buyers and sellers, with dispute resolution workflows and automated fund release based on configurable rules.',
    technologies: ['Node.js', 'Express.js', 'PostgreSQL', 'Redis', 'State Machine'],
    highlights: [
      'Implemented secure fund holding mechanism',
      'Built dispute resolution workflow',
      'Automated release logic based on milestones',
      'Comprehensive audit trail',
      'Zero fund loss incidents'
    ],
    metrics: [
      { label: 'Transactions Secured', value: '15,000+' },
      { label: 'Value Protected', value: '$800,000+' },
      { label: 'Dispute Rate', value: '2.3%' },
      { label: 'Resolution Time', value: '4.2 days avg' }
    ],
    features: [
      'Escrow account creation and management',
      'Milestone-based fund release',
      'Dispute filing and management',
      'Admin mediation interface',
      'Automated notifications for all parties',
      'Refund processing',
      'Comprehensive audit logs',
      'Configurable hold periods'
    ],
    challenges: [
      'Ensuring fund security and compliance',
      'Handling complex dispute scenarios',
      'Preventing escrow abuse',
      'Managing multiple concurrent escrows'
    ],
    solutions: [
      'Multi-signature approval workflow',
      'State machine for escrow lifecycle',
      'Time-based automatic releases',
      'Evidence collection system for disputes',
      'Transaction immutability'
    ],
    impact: 'Protected $800,000+ in transactions with zero fund loss. Reduced transaction disputes by 47% through clear escrow terms. Average dispute resolution in 4.2 days.',
    date: '2023',
    status: 'Completed'
  },
  {
    id: '7',
    title: 'Multi-Role Account System',
    slug: 'multi-role-account-system',
    category: 'Authentication & Authorization',
    description: 'Flexible user management system enabling seamless switching between buyer, seller, and service provider roles with role-based permissions.',
    detailedDescription: 'Advanced authentication and authorization system supporting multiple user roles with distinct interfaces, permissions, and data access patterns while maintaining a unified user experience.',
    technologies: ['Node.js', 'Express.js', 'PostgreSQL', 'JWT', 'React Context'],
    highlights: [
      'Single account with multiple roles',
      'Role-based access control (RBAC)',
      'Seamless role switching without re-login',
      'Granular permission system',
      'Unified authentication flow'
    ],
    metrics: [
      { label: 'Registered Users', value: '25,000+' },
      { label: 'Multi-Role Users', value: '3,200+' },
      { label: 'Security Incidents', value: '0' },
      { label: 'Auth Success Rate', value: '99.97%' }
    ],
    features: [
      'Unified registration/login system',
      'Role selection and switching',
      'Role-specific dashboards',
      'Granular permission management',
      'JWT-based authentication',
      'Session management',
      'Two-factor authentication (2FA)',
      'Activity logging and audit trail'
    ],
    challenges: [
      'Managing complex permission hierarchies',
      'Maintaining security across role switches',
      'Preventing privilege escalation',
      'Efficient role-based data filtering'
    ],
    solutions: [
      'RBAC with permission inheritance',
      'JWT claims for role encoding',
      'Middleware for role validation',
      'Database row-level security',
      'Comprehensive security testing'
    ],
    impact: 'Enabled 3,200+ users to operate in multiple roles, increasing platform engagement by 42%. Zero security breaches related to authentication/authorization.',
    date: '2023',
    status: 'Completed'
  },
  {
    id: '8',
    title: 'Real-Time Chat System',
    slug: 'real-time-chat-system',
    category: 'Real-Time Systems',
    description: 'Production-ready real-time messaging system with conversation management, typing indicators, and message delivery tracking.',
    detailedDescription: 'Scalable WebSocket-based chat system supporting real-time messaging, presence indicators, conversation history, and message delivery confirmation for marketplace communications.',
    technologies: ['Node.js', 'Socket.io', 'Redis', 'PostgreSQL', 'React'],
    highlights: [
      'Handles 5,000+ concurrent connections',
      'Sub-50ms message latency',
      'Message delivery guarantees',
      'Typing indicators and read receipts',
      'Conversation history persistence'
    ],
    metrics: [
      { label: 'Concurrent Connections', value: '5,000+' },
      { label: 'Message Latency', value: '<50ms' },
      { label: 'Delivery Rate', value: '99.98%' },
      { label: 'Messages per Day', value: '100,000+' }
    ],
    features: [
      'Real-time one-on-one messaging',
      'Typing indicators',
      'Read receipts',
      'Message delivery confirmation',
      'Conversation history',
      'Image and file sharing',
      'Unread message counters',
      'User presence status',
      'Message search'
    ],
    challenges: [
      'Scaling WebSocket connections',
      'Ensuring message delivery',
      'Managing connection failures',
      'Synchronizing state across servers'
    ],
    solutions: [
      'Redis pub/sub for horizontal scaling',
      'Message queue for delivery guarantees',
      'Automatic reconnection logic',
      'Message persistence before delivery',
      'Connection pooling'
    ],
    impact: 'Facilitated 100,000+ daily messages between buyers and sellers. Improved transaction completion rate by 18% through better communication.',
    date: '2023',
    status: 'Completed'
  },
  {
    id: '9',
    title: 'API Security Hardening Project',
    slug: 'api-security-hardening',
    category: 'Security & Risk',
    description: 'Comprehensive security audit and hardening initiative identifying and fixing 23 vulnerabilities, implementing production-grade security practices.',
    detailedDescription: 'Led security-focused initiative to audit, identify, and remediate security vulnerabilities across API infrastructure, implementing defense-in-depth strategies and security best practices.',
    technologies: ['Node.js', 'Express.js', 'Helmet.js', 'Rate Limiting', 'OWASP ZAP'],
    highlights: [
      'Fixed 23 identified vulnerabilities',
      'Implemented rate limiting across all endpoints',
      'Added comprehensive input validation',
      'Secured authentication flows',
      'Achieved A+ security rating'
    ],
    metrics: [
      { label: 'Vulnerabilities Fixed', value: '23' },
      { label: 'Security Score', value: 'A+' },
      { label: 'Attack Prevention', value: '100%' },
      { label: 'Penetration Test', value: 'Passed' }
    ],
    features: [
      'Input validation and sanitization',
      'SQL injection prevention',
      'XSS attack mitigation',
      'CSRF token implementation',
      'Rate limiting per user/IP',
      'Helmet.js security headers',
      'Encrypted data at rest',
      'SSL/TLS enforcement',
      'Security logging and monitoring'
    ],
    challenges: [
      'Identifying hidden vulnerabilities',
      'Implementing security without breaking functionality',
      'Managing authentication complexity',
      'Balancing security and performance'
    ],
    solutions: [
      'Automated security scanning (OWASP ZAP)',
      'Comprehensive test suite for auth flows',
      'Parameterized queries for SQL',
      'Content Security Policy headers',
      'Regular security audits'
    ],
    impact: 'Achieved A+ security rating. Prevented multiple attempted attacks (SQL injection, brute force, DDoS). Zero security incidents post-hardening.',
    date: '2024',
    status: 'Completed'
  },
  {
    id: '10',
    title: 'Automated Code Review Workflow',
    slug: 'automated-code-review',
    category: 'DevOps & Automation',
    description: 'AI-assisted code review system detecting bugs, security risks, and architectural issues before human review.',
    detailedDescription: 'Built automated code analysis pipeline integrating static analysis, security scanning, and AI-assisted review to catch issues early in the development cycle.',
    technologies: ['GitHub Actions', 'ESLint', 'SonarQube', 'Snyk', 'OpenAI API'],
    highlights: [
      'Automated detection of 127 bugs before production',
      'Security vulnerability scanning',
      'Code quality metrics tracking',
      'AI-powered code suggestions',
      'Reduced review time by 40%'
    ],
    metrics: [
      { label: 'Bugs Caught Pre-Production', value: '127' },
      { label: 'Review Time Reduction', value: '40%' },
      { label: 'Code Quality Score', value: '8.7/10' },
      { label: 'Security Issues Found', value: '15' }
    ],
    features: [
      'Static code analysis (ESLint, TypeScript)',
      'Security vulnerability scanning (Snyk)',
      'Code quality metrics (SonarQube)',
      'AI-powered code review suggestions',
      'Automated test coverage reporting',
      'Pull request quality gates',
      'Trend analysis and reporting'
    ],
    challenges: [
      'Reducing false positives',
      'Integrating multiple tools',
      'Providing actionable feedback',
      'Maintaining fast pipeline execution'
    ],
    solutions: [
      'Custom rule configurations',
      'Parallel tool execution',
      'Severity-based filtering',
      'Caching for faster runs',
      'Clear, contextualized feedback'
    ],
    impact: 'Caught 127 bugs before reaching production. Reduced code review time by 40%. Improved overall code quality score from 6.3 to 8.7.',
    date: '2024',
    status: 'Ongoing'
  }
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter(p => p.category === category);
}

export function getFeaturedProjects(count: number = 6): Project[] {
  return projects.slice(0, count);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(projects.map(p => p.category)));
}
