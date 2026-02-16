import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';
import { getAllExperiences, getTotalYearsOfExperience, getTotalCompanies } from '../../data/experienceData';

export function ExperiencePage() {
  const experiences = getAllExperiences();
  const totalYears = getTotalYearsOfExperience();
  const totalCompanies = getTotalCompanies();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-teal-600 dark:from-cyan-400 dark:to-teal-400">
            Work Experience
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {totalYears}+ years of professional software engineering experience across {totalCompanies} companies
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[15px] top-12 bottom-0 w-0.5 bg-cyan-200 dark:bg-cyan-900"></div>
              )}

              {/* Timeline Dot */}
              <div className="absolute left-0 top-2 w-8 h-8 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                <Briefcase className="w-4 h-4 text-white" />
              </div>

              {/* Content Card */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      exp.type === 'Founder' 
                        ? 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300'
                        : 'bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300'
                    }`}>
                      {exp.type}
                    </span>
                  </div>
                  <h4 className="text-xl text-cyan-600 dark:text-cyan-400 font-semibold mb-4">
                    {exp.company}
                  </h4>
                  <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {exp.description}
                </p>

                {/* Metrics */}
                {exp.metrics && exp.metrics.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4 bg-white dark:bg-gray-900 rounded-xl">
                    {exp.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
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

                {/* Responsibilities */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Key Responsibilities
                  </h5>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                        <span className="w-1.5 h-1.5 bg-cyan-600 dark:bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                    Key Achievements
                  </h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                        <Award className="w-4 h-4 text-cyan-600 dark:text-cyan-400 mt-1 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    TECHNOLOGIES USED:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { label: 'Years Experience', value: `${totalYears}+` },
            { label: 'Companies', value: totalCompanies.toString() },
            { label: 'Projects Delivered', value: '30+' },
            { label: 'Engineers Mentored', value: '7' }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-gray-800 dark:to-gray-800 rounded-xl border border-cyan-200 dark:border-gray-700"
            >
              <div className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

