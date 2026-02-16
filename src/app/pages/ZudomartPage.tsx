import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const highlights = [
  'Six-tier verification system with AI fraud detection',
  'Escrow payments for secure peer-to-peer transactions',
  'Hyperlocal discovery for campus and neighborhood trade',
  'ZudoReels short-form video product showcasing',
  'Live-stream monetization with virtual gifts',
];

const nextMilestones = [
  'Launch public MVP with escrow and verification',
  'Onboard creator cohorts for ad revenue pilots',
  'Integrate two local payment providers',
  'Measure retention and dispute resolution KPIs',
];

export function ZudomartPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wide mb-3">
            Press Release
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            ZudoMart Joins EquityPilot to Scale African Super-App
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            ZudoMart is building a trust-first marketplace for African entrepreneurs with escrow, verification,
            live commerce, and creator monetization.
          </p>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid gap-6 md:grid-cols-3 mb-10"
        >
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-5">
            <p className="text-sm text-gray-500 dark:text-gray-400">Target Traders</p>
            <p className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">8.1M</p>
          </div>
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-5">
            <p className="text-sm text-gray-500 dark:text-gray-400">Expansion Goal</p>
            <p className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">12M+</p>
          </div>
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-5">
            <p className="text-sm text-gray-500 dark:text-gray-400">Program</p>
            <p className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">EquityPilot</p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-10 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 bg-white dark:bg-gray-800"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What ZudoMart Delivers</h2>
          <ul className="space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <span className="mt-2 h-2 w-2 rounded-full bg-cyan-600 dark:bg-cyan-400" />
                {item}
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-10 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 bg-gray-50 dark:bg-gray-800"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Next 90 Days</h2>
          <ul className="space-y-3">
            {nextMilestones.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <span className="mt-2 h-2 w-2 rounded-full bg-amber-500 dark:bg-amber-400" />
                {item}
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="rounded-2xl border border-cyan-200 dark:border-cyan-900/40 p-8 bg-cyan-50 dark:bg-cyan-900/10"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Media Contact</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-1">Lydia Zeng, Media Relations</p>
          <p className="text-gray-700 dark:text-gray-300 mb-1">Email: lydia.zeng@fastercapital.com</p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">Phone: +1 (512) 400-0256</p>
          <a
            href="https://www.fastercapital.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cyan-700 dark:text-cyan-300 font-semibold"
          >
            Visit FasterCapital
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.section>
      </div>
    </div>
  );
}
