import { motion } from 'motion/react';
import { Download, Mail, Phone, MapPin, Globe, Linkedin, Github } from 'lucide-react';
import cvPdf from '../../doc/oyinlola-cv.pdf';

export function CVPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-end mb-8"
        >
          <a
            href={cvPdf}
            download="oyinlola-cv.pdf"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
          >
            <Download className="w-5 h-5" />
            Download CV (PDF)
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-12 border border-gray-200 dark:border-gray-700"
        >
          <header className="mb-12 pb-8 border-b border-gray-200 dark:border-gray-700">
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-teal-600 dark:from-cyan-400 dark:to-teal-400">
              Oluwayemi Oyinlola Michael
            </h1>
            <h2 className="text-2xl text-gray-700 dark:text-gray-300 mb-6 font-semibold">
              Senior Software Engineer & Cybersecurity Specialist
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Mail className="w-4 h-4" />
                <a href="mailto:oluwayemioyinlola2@gmail.com" className="hover:text-cyan-600 dark:hover:text-cyan-400">
                      oluwayemioyinlola2@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+234 913 351 9489</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Okitipupa, Ondo State, Nigeria</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Globe className="w-4 h-4" />
                <a href="https://oyinlola.site" className="hover:text-cyan-600 dark:hover:text-cyan-400">
                  oyinlola.site
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Linkedin className="w-4 h-4" />
                <a href="https://linkedin.com/in/oluwayemioyinlola" className="hover:text-cyan-600 dark:hover:text-cyan-400">
                  linkedin.com/in/oluwayemioyinlola
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Github className="w-4 h-4" />
                <a href="https://github.com/oyinlola-tech" className="hover:text-cyan-600 dark:hover:text-cyan-400">
                  github.com/oyinlola-tech
                </a>
              </div>
            </div>
          </header>

          <section className="mb-10">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Professional Summary</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Senior Software Engineer with 4+ years of experience building scalable, secure, and reliable systems.
              Proven track record of architecting solutions that handle 10,000+ concurrent users with 99.9% uptime.
              Expert in full-stack development, DevOps practices, and security hardening. Founded and scaled ZudoMart,
              processing $2M+ in transactions. Passionate about mentoring engineers and establishing engineering best practices.
            </p>
          </section>

          <section className="mb-10">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Technical Skills</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Languages & Frameworks</h4>
                <p className="text-gray-700 dark:text-gray-300">JavaScript (ES6+), Node.js, Express.js, React, HTML5, CSS3, Python</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Databases</h4>
                <p className="text-gray-700 dark:text-gray-300">PostgreSQL, MongoDB, Redis</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">DevOps & Tools</h4>
                <p className="text-gray-700 dark:text-gray-300">Docker, CI/CD (GitHub Actions), Nginx, Git, Linux</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Practices</h4>
                <p className="text-gray-700 dark:text-gray-300">TDD, Agile, Code Review, API Design, Security Best Practices</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Professional Experience</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Founder & Lead Engineer</h4>
                    <p className="text-cyan-600 dark:text-cyan-400 font-medium">ZudoMart</p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">2023 - Present</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Scaled platform to 25,000+ users, processing $2M+ in transactions with 99.9% uptime</li>
                  <li>Reduced response times by 93% (3s to 200ms) through optimization and caching strategies</li>
                  <li>Built comprehensive CI/CD pipeline reducing deployment time by 83%</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Senior Full Stack Engineer</h4>
                    <p className="text-cyan-600 dark:text-cyan-400 font-medium">TechVenture Solutions</p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">2022 - 2023</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Established testing culture, increasing code coverage from 0% to 85%</li>
                  <li>Mentored 3 junior engineers to mid-level positions</li>
                  <li>Reduced MTTR by 91% through comprehensive monitoring and alerting</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Full Stack Developer</h4>
                    <p className="text-cyan-600 dark:text-cyan-400 font-medium">Digital Innovations Ltd</p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">2021 - 2022</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Developed e-commerce platform handling 2,000+ daily transactions</li>
                  <li>Improved database query performance by 85%</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Education</h3>
            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Computer Science & Engineering</h4>
              <p className="text-gray-700 dark:text-gray-300">Self-taught through online courses, documentation, and hands-on projects</p>
            </div>
          </section>

          <section className="mb-10">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Key Achievements</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Built ZudoMart</li>
              <li>Prevented 23 production outages through proactive monitoring</li>
              <li>Achieved A+ security rating after comprehensive API hardening</li>
              <li>Reduced infrastructure costs by 35% through optimization</li>
              <li>Mentored 7 engineers across various experience levels</li>
            </ul>
          </section>

          <section className="mb-10">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Employer Signals</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Evidence of scale through high-concurrency and high-volume systems</li>
              <li>Testing culture with measurable coverage and quality gates</li>
              <li>Deployment and DevOps ownership from CI/CD to release reliability</li>
              <li>Documentation quality that improves onboarding and execution speed</li>
              <li>Collaboration-ready engineering process with review discipline</li>
              <li>Monitoring and failure handling with clear incident response workflows</li>
              <li>Project depth over width with production-grade case studies</li>
            </ul>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
