import { Link } from 'react-router-dom';
import svgPaths from '../imports/svg-drtktw4s6n';
import { site } from '../lib/site';

export function Footer() {
  return (
    <footer className="relative border-t border-[#1e2128] px-4 md:px-8 lg:px-32 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex gap-2 items-center">
              <div className="relative size-4">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <g id="Logo">
                    <path d={svgPaths.p34deb370} fill="white" id="Union" />
                  </g>
                </svg>
              </div>
              <span className="font-['Fira_Code'] font-medium text-white">{site.name}</span>
            </div>
            <a href={`mailto:${site.email}`} className="block font-['Fira_Code'] text-[#abb2bf] hover:text-white transition-colors">
              {site.email}
            </a>
            <p className="font-['Fira_Code'] text-white max-w-xs">{site.roleLine}</p>
          </div>

          <div className="space-y-3">
            <h3 className="font-['Fira_Code'] font-medium text-white text-xl">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2 font-['Fira_Code'] text-[#abb2bf]">
              <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
              <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
              <Link to="/zudomart" className="hover:text-white transition-colors">Zudomart</Link>
              <Link to="/cv" className="hover:text-white transition-colors">CV</Link>
            </div>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-[#1e2128]">
          <p className="font-['Fira_Code'] text-[#abb2bf]">
            Copyright {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
