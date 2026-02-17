import { Link } from 'react-router-dom';
import { getAllProjects } from '../data/projectsData';

export function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <main className="px-4 md:px-8 lg:px-32 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h1 className="font-['Fira_Code'] font-medium text-3xl whitespace-nowrap">
            <span className="text-[#c778dd]">#</span>
            <span className="text-white">projects</span>
          </h1>
          <div className="h-px bg-[#c778dd] flex-1" />
        </div>

        <p className="font-['Fira_Code'] text-[#abb2bf] mb-8 max-w-2xl">
          Portfolio projects covering shipped systems and active startup work, focused on reliability, testing,
          DevOps, security, and clear documentation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <article key={project.id} className="border border-[#abb2bf] p-4 flex flex-col gap-4">
              <div className="flex items-center justify-between gap-2">
                <span className="font-['Fira_Code'] text-xs text-[#c778dd]">{project.category}</span>
                <span className="font-['Fira_Code'] text-xs text-[#abb2bf]">{project.status}</span>
              </div>
              <h2 className="font-['Fira_Code'] text-white text-xl">{project.title}</h2>
              <p className="font-['Fira_Code'] text-[#abb2bf] text-sm flex-1">{project.description}</p>
              <div className="font-['Fira_Code'] text-[#abb2bf] text-xs flex flex-wrap gap-2">
                {project.technologies.slice(0, 5).map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <Link
                to={`/projects/${project.slug}`}
                className="inline-block font-['Fira_Code'] font-medium text-white border border-[#c778dd] px-4 py-2 hover:bg-[#c778dd] hover:bg-opacity-10 transition-all text-sm"
              >
                View case study
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
