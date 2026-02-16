import { Link } from 'react-router';
import { ArrowRight, Code2, Shield, Zap, Users, Award, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { getRecentBlogPosts } from '../../data/blogData';
import { getFeaturedProjects } from '../../data/projectsData';

export function HomePage() {
  const recentPosts = getRecentBlogPosts(3);
  const featuredProjects = getFeaturedProjects(3);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Abstract Anime Background */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-50 via-teal-50 to-teal-50 dark:from-gray-900 dark:via-cyan-900/20 dark:to-teal-900/20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-300 dark:bg-cyan-500 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-slate-300 dark:bg-slate-500 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-300 dark:bg-teal-500 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          
          {/* Geometric Shapes */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-20 h-20 border-4 border-cyan-400 dark:border-cyan-500 rotate-45"
            animate={{ rotate: [45, 405], scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-teal-400/30 dark:bg-teal-500/30 rounded-full"
            animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-teal-600 to-teal-600 dark:from-cyan-400 dark:via-teal-400 dark:to-teal-400">
              Oluwayemi Oyinlola Michael
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-4 font-semibold">
              Senior Software Engineer & Cybersecurity Specialist
            </p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              Building scalable, secure, and reliable systems that solve real-world problems.
              4+ years of experience in full-stack development, DevOps, and security.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/projects"
                className="group px-8 py-4 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
              >
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-semibold text-lg border-2 border-cyan-600 dark:border-cyan-400 hover:bg-cyan-50 dark:hover:bg-gray-700 transform hover:scale-105 transition-all duration-200"
              >
                Get in Touch
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { label: 'Years Experience', value: '4+', icon: TrendingUp },
                { label: 'Projects Completed', value: '30+', icon: Code2 },
                { label: 'Companies Worked', value: '5', icon: Users },
                { label: 'Code Coverage', value: '85%', icon: Award }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <stat.icon className="w-8 h-8 text-cyan-600 dark:text-cyan-400 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Core Expertise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Senior-level capabilities across the full stack, with deep expertise in scalability,
              security, and operational excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: 'Full-Stack Engineering',
                description: 'Building scalable applications from database to UI. Expert in Node.js, React, PostgreSQL, and modern web technologies.',
                highlights: ['Microservices Architecture', 'API Design', 'Database Optimization', 'Performance Tuning']
              },
              {
                icon: Shield,
                title: 'Security & Risk Management',
                description: 'Implementing defense-in-depth security strategies. API hardening, authentication, and vulnerability remediation.',
                highlights: ['API Security', 'Authentication/OAuth', 'Penetration Testing', 'OWASP Best Practices']
              },
              {
                icon: Zap,
                title: 'DevOps & SRE',
                description: 'Building reliable systems with CI/CD, monitoring, and incident response. Infrastructure as Code expertise.',
                highlights: ['CI/CD Pipelines', 'Monitoring & Alerting', 'Zero-Downtime Deploys', 'Incident Response']
              }
            ].map((expertise, index) => (
              <motion.div
                key={expertise.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:shadow-2xl transition-all duration-300 h-full border border-gray-200 dark:border-gray-700">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                    <expertise.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {expertise.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {expertise.description}
                  </p>
                  <ul className="space-y-2">
                    {expertise.highlights.map(highlight => (
                      <li key={highlight} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                        <span className="w-1.5 h-1.5 bg-cyan-600 dark:bg-cyan-400 rounded-full mr-2"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Employer Signals */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              What Employers Can Verify
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Evidence-first engineering profile with measurable outcomes, ownership, and reliable delivery.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Evidence of Scale',
                detail: 'Systems that handled 10,000+ concurrent users and $2M+ in transaction volume with 99.9% uptime.'
              },
              {
                title: 'Testing Culture',
                detail: 'Introduced quality gates and raised code coverage to 85% on critical paths.'
              },
              {
                title: 'Deployment & DevOps Ownership',
                detail: 'Built CI/CD pipelines, automated rollouts, and reduced deployment time by 83%.'
              },
              {
                title: 'Documentation Quality',
                detail: 'Writes clear technical docs, architecture notes, and implementation rationale to improve team velocity.'
              },
              {
                title: 'Collaboration Simulation',
                detail: 'Work is structured to show review discipline, maintainability, and communication readiness for team environments.'
              },
              {
                title: 'Monitoring & Failure Handling',
                detail: 'Monitoring and alerting practices reduced MTTR by 91% and improved incident response quality.'
              },
              {
                title: 'Depth Over Width',
                detail: 'Focuses on deep, production-grade projects with clear architecture decisions and operational impact.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-cyan-600 dark:text-cyan-400 mb-2">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                Featured Projects
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Real-world impact through technology
              </p>
            </div>
            <Link
              to="/projects"
              className="hidden md:flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold hover:gap-3 transition-all"
            >
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={`/projects/${project.slug}`}
                  className="block group h-full"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-200 dark:border-gray-700">
                    <div className="p-8">
                      <div className="text-sm text-cyan-600 dark:text-cyan-400 font-semibold mb-2">
                        {project.category}
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        {project.description}
                      </p>
                      {project.metrics && project.metrics.length > 0 && (
                        <div className="flex flex-wrap gap-4 mb-6">
                          {project.metrics.slice(0, 2).map(metric => (
                            <div key={metric.label} className="flex-1 min-w-[100px]">
                              <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">
                                {metric.value}
                              </div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      <div className="flex items-center text-cyan-600 dark:text-cyan-400 font-semibold group-hover:gap-2 transition-all">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold"
            >
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                Latest Articles
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Deep dives into engineering, architecture, and best practices
              </p>
            </div>
            <Link
              to="/blog"
              className="hidden md:flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold hover:gap-3 transition-all"
            >
              View All Posts
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="block group h-full"
                >
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 h-full border border-gray-200 dark:border-gray-700">
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-cyan-600 dark:text-cyan-400 font-semibold">
                          {post.category}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      {post.metrics && post.metrics.length > 0 && (
                        <div className="flex flex-wrap gap-3 mb-4">
                          {post.metrics.slice(0, 2).map(metric => (
                            <div key={metric.label} className="text-xs">
                              <span className="font-bold text-cyan-600 dark:text-cyan-400">
                                {metric.value}
                              </span>
                              <span className="text-gray-500 dark:text-gray-400 ml-1">
                                {metric.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold"
            >
              View All Posts
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Let's Build Something Amazing
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Looking for a senior engineer who can scale systems, mentor teams, and deliver production-grade solutions?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cyan-600 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Get In Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


