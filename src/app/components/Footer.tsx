import { Link } from 'react-router';
import { Github, Linkedin, Mail, Twitter, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.svg" alt="Oluwayemi Oyinlola logo" className="w-10 h-10 rounded-lg" />
              <span className="font-bold text-xl text-gray-900 dark:text-white">
                Oluwayemi Michael
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              Senior Software Engineer & Aspiring Cybersecurity Specialist from Okitipupa, Ondo State, Nigeria.
              Building scalable, secure systems that solve real-world problems.
            </p>
            <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
              <MapPin className="w-4 h-4 mr-2" />
              Okitipupa, Ondo State, Nigeria
            </div>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://github.com/oyinlola-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-cyan-100 dark:hover:bg-cyan-900/30 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="https://linkedin.com/in/oluwayemioyinlola"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-cyan-100 dark:hover:bg-cyan-900/30 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="https://twitter.com/oyinlola141"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-cyan-100 dark:hover:bg-cyan-900/30 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="mailto:oluwayemioyinlola2@gmail.com"
                className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-cyan-100 dark:hover:bg-cyan-900/30 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Projects', 'Blog', 'Experience', 'CV', 'Contact'].map(link => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Tech Stack</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
              <li>Node.js & Express.js</li>
              <li>React & JavaScript</li>
              <li>PostgreSQL & MongoDB</li>
              <li>Docker & CI/CD</li>
              <li>Git & GitHub</li>
              <li>Python Scripting</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Oluwayemi Oyinlola Michael. All rights reserved.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
