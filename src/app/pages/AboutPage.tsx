import { motion } from 'motion/react';
import { Code2, Shield, Server, Database, GitBranch, Users, Award, Target } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function AboutPage() {
  const skills = [
    {
      category: 'Frontend Development',
      icon: Code2,
      skills: ['React', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Responsive Design', 'UI/UX Implementation']
    },
    {
      category: 'Backend Development',
      icon: Server,
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'WebSocket/Real-time', 'Microservices']
    },
    {
      category: 'Databases',
      icon: Database,
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Database Design', 'Query Optimization']
    },
    {
      category: 'DevOps & Infrastructure',
      icon: GitBranch,
      skills: ['Docker', 'CI/CD Pipelines', 'GitHub Actions', 'Nginx', 'Linux Administration']
    },
    {
      category: 'Security',
      icon: Shield,
      skills: ['API Security', 'Authentication/OAuth', 'Encryption', 'Vulnerability Assessment', 'OWASP Practices']
    },
    {
      category: 'Tools & Practices',
      icon: Users,
      skills: ['Git & GitHub', 'Agile/Scrum', 'Code Review', 'Testing (Jest)', 'Technical Documentation']
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Reliability First',
      description: 'Building systems that work 99.9% of the time. Every line of code written with production stability in mind.'
    },
    {
      icon: Award,
      title: 'Quality Over Speed',
      description: 'Comprehensive testing, code reviews, and documentation. Fast iteration, but never at the expense of quality.'
    },
    {
      icon: Users,
      title: 'Team Growth',
      description: 'Mentoring junior engineers and fostering a collaborative culture. Knowledge sharing is key to team success.'
    },
    {
      icon: Shield,
      title: 'Security by Design',
      description: 'Security isn\'t an afterthought. Every feature built with defense-in-depth principles from day one.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-cyan-50 via-teal-50 to-teal-50 dark:from-gray-900 dark:via-cyan-900/20 dark:to-teal-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-teal-600 dark:from-cyan-400 dark:to-teal-400">
                About Me
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                I'm <span className="font-bold text-cyan-600 dark:text-cyan-400">Oluwayemi Oyinlola Michael</span>, a Senior Software Engineer and aspiring Cybersecurity Specialist from Okitipupa, Ondo State, Nigeria.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                With <span className="font-semibold">4+ years of experience</span>, I've worked with 5 different companies in various roles, and I'm now the founder of <span className="font-semibold text-cyan-600 dark:text-cyan-400">ZudoMart</span>, a multi-vendor marketplace platform.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm passionate about solving real-world problems through technology, building scalable systems, and mentoring the next generation of engineers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-3xl transform rotate-6"></div>
                <div className="relative bg-gray-200 dark:bg-gray-700 rounded-3xl overflow-hidden transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1639472628910-ef02c5404b9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc29mdHdhcmUlMjBlbmdpbmVlciUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc3MTI3NTA1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Oluwayemi Oyinlola Michael - Software Engineer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center">
              My Journey
            </h2>
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
              <p>
                My journey into software engineering began in Okitipupa, a town in Ondo State, Nigeria. Growing up, I was fascinated by how technology could transform lives and solve everyday problems. This curiosity led me to pursue software engineering, teaching myself to code and building my first projects while still in school.
              </p>
              <p>
                Over the past 4+ years, I've evolved from a junior developer writing basic HTML and CSS to a senior engineer architecting systems that handle thousands of concurrent users. I've worked across 5 different companies, each experience teaching me invaluable lessons about scalability, reliability, and team collaboration.
              </p>
              <p>
                In 2023, I took the leap to found <span className="font-semibold text-cyan-600 dark:text-cyan-400">ZudoMart</span>, a multi-vendor e-commerce marketplace. Building ZudoMart from the ground up taught me everything about scaling systems, DevOps, security hardening, and the operational challenges of running production systems at scale.
              </p>
              <p>
                Today, I focus on three pillars: <span className="font-semibold">building reliable systems</span> that can scale, <span className="font-semibold">maintaining operational excellence</span> through monitoring and testing, and <span className="font-semibold">mentoring engineers</span> to grow their skills and confidence.
              </p>
              <p>
                As I pursue my goal of becoming a cybersecurity specialist, I'm combining my full-stack engineering experience with deep knowledge of security practices, vulnerability assessment, and risk management.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              The principles that guide every line of code I write and every system I architect
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A comprehensive toolkit built through years of hands-on experience and continuous learning
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-lg flex items-center justify-center mr-3">
                    <skillGroup.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {skillGroup.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {skillGroup.skills.map(skill => (
                    <li key={skill} className="flex items-center text-gray-700 dark:text-gray-300">
                      <span className="w-1.5 h-1.5 bg-cyan-600 dark:bg-cyan-400 rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Years of Experience', value: '4+' },
              { label: 'Companies Worked', value: '5' },
              { label: 'Projects Completed', value: '30+' },
              { label: 'Engineers Mentored', value: '7' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-cyan-100 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
              Engineering Philosophy
            </h2>
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 text-left">
              <p>
                <span className="font-bold text-cyan-600 dark:text-cyan-400">"Code is read 10x more than it's written."</span> I prioritize clarity, documentation, and maintainability. Every function, every API, every architecture decision is made with the next engineer in mind.
              </p>
              <p>
                <span className="font-bold text-cyan-600 dark:text-cyan-400">"Production systems demand respect."</span> I don't just build features—I build systems that can scale, recover from failures, and provide visibility when things go wrong. Testing, monitoring, and incident response are first-class concerns.
              </p>
              <p>
                <span className="font-bold text-cyan-600 dark:text-cyan-400">"Security is everyone's responsibility."</span> I approach every feature with a security-first mindset, implementing defense-in-depth strategies and staying current with vulnerability disclosures and security best practices.
              </p>
              <p>
                <span className="font-bold text-cyan-600 dark:text-cyan-400">"Great engineers build great teams."</span> Technical skills matter, but mentorship, collaboration, and knowledge sharing are what create lasting impact. I invest in people as much as in code.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


