import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { getBlogPostBySlug } from '../../data/blogData';

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Article Not Found
          </h1>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold mb-8 hover:gap-3 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Blog
        </Link>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="text-sm text-cyan-600 dark:text-cyan-400 font-semibold mb-2">
            {post.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            {post.title}
          </h1>
          
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
            <div className="text-gray-500 dark:text-gray-400">
              By {post.author}
            </div>
          </div>

          {/* Excerpt */}
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {post.excerpt}
          </p>

          {/* Metrics */}
          {post.metrics && post.metrics.length > 0 && (
            <div className="flex flex-wrap gap-4 p-6 bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-gray-800 dark:to-gray-800 rounded-xl border border-cyan-200 dark:border-gray-700">
              {post.metrics.map((metric, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">
                    {metric.value}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </motion.header>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-lg dark:prose-invert max-w-none mb-12"
        >
          <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
            {post.content}
          </div>
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
            TAGGED IN:
          </h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="px-4 py-2 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-lg text-sm font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </motion.div>
      </article>
    </div>
  );
}

