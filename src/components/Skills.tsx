export function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'HTML', 'CSS']
    },
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'State Management', 'Accessibility']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST API', 'Webhook Systems', 'Authentication', 'Service Architecture']
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase']
    },
    {
      title: 'Tools & DevOps',
      skills: ['Git', 'Docker', 'CI/CD', 'Nginx', 'Vercel', 'Linux']
    },
    {
      title: 'Other',
      skills: ['Testing', 'Monitoring', 'Incident Handling', 'Documentation', 'Security Hardening']
    }
  ];

  return (
    <section id="skills" className="relative px-4 md:px-8 lg:px-32 py-16 md:py-24">
      {/* Decorative elements */}
      <div className="absolute right-0 top-1/4 w-32 h-32 border border-[#abb2bf] opacity-20 hidden lg:block" />

      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-['Fira_Code'] font-medium text-3xl whitespace-nowrap">
            <span className="text-[#c778dd]">#</span>
            <span className="text-white">skills</span>
          </h2>
          <div className="h-px bg-[#c778dd] flex-1 max-w-sm" />
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, index) => (
            <div key={index} className="border border-[#abb2bf]">
              <div className="border-b border-[#abb2bf] px-2 py-2">
                <h3 className="font-['Fira_Code'] font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              <div className="p-2">
                <div className="font-['Fira_Code'] text-[#abb2bf] text-sm space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="inline-block mr-2">
                      {skill}
                      {skillIndex < category.skills.length - 1 && ','}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-12 max-w-2xl">
          <p className="font-['Fira_Code'] text-[#abb2bf] leading-relaxed">
            I prioritize maintainable engineering systems: testable code, clear interfaces,
            deployment safety, monitoring, and operational reliability.
          </p>
        </div>
      </div>
    </section>
  );
}
