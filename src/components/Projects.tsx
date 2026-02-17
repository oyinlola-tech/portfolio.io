import { Link } from 'react-router-dom';
import { getFeaturedProjects } from '../data/projectsData';

export function Projects() {
  const projects = getFeaturedProjects(6);

  return (
    <section id="projects" className="relative px-4 md:px-8 lg:px-32 py-16 md:py-24">
      <div className="absolute left-0 top-1/3 w-24 h-24 border border-[#abb2bf] opacity-20 hidden lg:block" />
      <div className="absolute right-0 bottom-1/3 w-32 h-32 border border-[#abb2bf] opacity-20 hidden lg:block" />

      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-['Fira_Code'] font-medium text-3xl whitespace-nowrap">
            <span className="text-[#c778dd]">#</span>
            <span className="text-white">projects</span>
          </h2>
          <div className="h-px bg-[#c778dd] flex-1 max-w-sm" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <article key={project.id} className="border border-[#abb2bf] flex flex-col">
              <div className="border-b border-[#abb2bf] p-2">
                <div className="font-['Fira_Code'] text-[#d1d7e0] text-sm flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-['Fira_Code'] font-medium text-white text-xl mb-3">{project.title}</h3>
                <p className="font-['Fira_Code'] text-[#d1d7e0] text-sm mb-4 flex-1">{project.description}</p>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-['Fira_Code'] text-xs text-[#d1d7e0]">{project.status}</span>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="font-['Fira_Code'] font-medium text-white border border-[#c778dd] px-4 py-2 hover:bg-[#c778dd] hover:bg-opacity-10 transition-all text-sm"
                  >
                    View case study
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/projects"
            className="inline-block font-['Fira_Code'] font-medium text-white border border-[#c778dd] px-6 py-3 hover:bg-[#c778dd] hover:bg-opacity-10 transition-all"
          >
            View all projects {'->'}
          </Link>
        </div>
      </div>
    </section>
  );
}
