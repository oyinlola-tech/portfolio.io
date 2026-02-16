import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, CheckCircle2, AlertCircle, Lightbulb, TrendingUp } from 'lucide-react';
import { getProjectBySlug } from '../../data/projectsData';

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Project Not Found
          </h1>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold mb-8 hover:gap-3 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Projects
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-sm text-cyan-600 dark:text-cyan-400 font-semibold mb-2">
            {project.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {project.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 mb-8 text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {project.date}
            </div>
            <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-sm font-medium">
              {project.status}
            </span>
          </div>
          {project.slug === 'zudomart-marketplace' && (
            <Link
              to="/zudomart"
              className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold"
            >
              View ZudoMart Press Release
            </Link>
          )}
        </motion.div>

        {/* Metrics */}
        {project.metrics && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {project.metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-gray-800 dark:to-gray-800 p-6 rounded-xl border border-cyan-200 dark:border-gray-700"
              >
                <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 mb-1">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {metric.label}
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="prose prose-lg dark:prose-invert max-w-none mb-12"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {project.detailedDescription}
          </p>
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map(tech => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
            Key Features
          </h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Challenges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            Challenges Faced
          </h2>
          <ul className="space-y-3">
            {project.challenges.map((challenge, index) => (
              <li
                key={index}
                className="flex items-start gap-3 p-4 bg-amber-50 dark:bg-amber-900/10 rounded-lg border border-amber-200 dark:border-amber-900/30"
              >
                <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{challenge}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-teal-600 dark:text-teal-400" />
            Solutions Implemented
          </h2>
          <ul className="space-y-3">
            {project.solutions.map((solution, index) => (
              <li
                key={index}
                className="flex items-start gap-3 p-4 bg-teal-50 dark:bg-teal-900/10 rounded-lg border border-teal-200 dark:border-teal-900/30"
              >
                <Lightbulb className="w-5 h-5 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{solution}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-teal-600 dark:text-teal-400" />
            Impact & Results
          </h2>
          <div className="p-6 bg-gradient-to-r from-teal-50 to-teal-50 dark:from-teal-900/10 dark:to-teal-900/10 rounded-lg border border-teal-200 dark:border-teal-900/30">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.impact}
            </p>
          </div>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Key Highlights
          </h2>
          <div className="space-y-4">
            {project.highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-cyan-50 dark:bg-cyan-900/10 rounded-lg border border-cyan-200 dark:border-cyan-900/30"
              >
                <div className="w-6 h-6 bg-cyan-600 dark:bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">{index + 1}</span>
                </div>
                <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}


