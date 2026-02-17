import { Link, useParams } from 'react-router-dom';
import { getProjectBySlug } from '../data/projectsData';

export function ProjectDetailPage() {
  const { slug = '' } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <main className="px-4 md:px-8 lg:px-32 py-16">
        <p className="font-['Fira_Code'] text-white mb-4">Project not found.</p>
        <Link to="/projects" className="font-['Fira_Code'] text-[#c778dd]">Back to projects</Link>
      </main>
    );
  }

  return (
    <main className="px-4 md:px-8 lg:px-32 py-16 md:py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="border border-[#abb2bf] p-6 space-y-4">
          <p className="font-['Fira_Code'] text-[#c778dd] text-sm">{project.category}</p>
          <h1 className="font-['Fira_Code'] text-white text-3xl">{project.title}</h1>
          <p className="font-['Fira_Code'] text-[#abb2bf]">{project.detailedDescription}</p>
        </header>

        <section className="border border-[#abb2bf] p-6">
          <h2 className="font-['Fira_Code'] text-white text-xl mb-4">Highlights</h2>
          <ul className="space-y-2">
            {project.highlights.map((item) => (
              <li key={item} className="font-['Fira_Code'] text-[#abb2bf] text-sm">- {item}</li>
            ))}
          </ul>
        </section>

        {project.metrics && (
          <section className="border border-[#abb2bf] p-6">
            <h2 className="font-['Fira_Code'] text-white text-xl mb-4">Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="border border-[#1e2128] p-3">
                  <p className="font-['Fira_Code'] text-[#abb2bf] text-xs">{metric.label}</p>
                  <p className="font-['Fira_Code'] text-white text-lg">{metric.value}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="grid md:grid-cols-2 gap-4">
          <div className="border border-[#abb2bf] p-6">
            <h2 className="font-['Fira_Code'] text-white text-xl mb-4">Challenges</h2>
            <ul className="space-y-2">
              {project.challenges.map((item) => (
                <li key={item} className="font-['Fira_Code'] text-[#abb2bf] text-sm">- {item}</li>
              ))}
            </ul>
          </div>

          <div className="border border-[#abb2bf] p-6">
            <h2 className="font-['Fira_Code'] text-white text-xl mb-4">Solutions</h2>
            <ul className="space-y-2">
              {project.solutions.map((item) => (
                <li key={item} className="font-['Fira_Code'] text-[#abb2bf] text-sm">- {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border border-[#abb2bf] p-6">
          <h2 className="font-['Fira_Code'] text-white text-xl mb-4">Impact</h2>
          <p className="font-['Fira_Code'] text-[#abb2bf]">{project.impact}</p>
        </section>
      </div>
    </main>
  );
}
