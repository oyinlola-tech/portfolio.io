import { useMemo } from 'react';
import { Link, NavLink } from 'react-router-dom';
import svgPaths from '../imports/svg-drtktw4s6n';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  const navItems = useMemo(
    () => [
      { to: '/', label: 'home' },
      { to: '/projects', label: 'projects' },
      { to: '/blog', label: 'blog' },
      { to: '/zudomart', label: 'zudomart' },
      { to: '/cv', label: 'cv' },
      { to: '/contact', label: 'contact' },
    ],
    []
  );

  return (
    <>
      <header className="hidden md:flex bg-[#282c33] sticky top-0 z-50 items-center justify-between px-8 lg:px-32 py-8 border-b border-[#1e2128]">
        <Link to="/" className="flex gap-2 items-center">
          <div className="relative size-4">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g id="Logo">
                <path d={svgPaths.p34deb370} fill="white" id="Union" />
              </g>
            </svg>
          </div>
          <span className="font-['Fira_Code'] font-bold text-white text-base">Oluwayemi</span>
        </Link>

        <nav className="flex gap-8 items-center">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `font-['Fira_Code'] text-base transition-colors ${
                  isActive ? 'font-medium text-white' : 'font-normal text-[#abb2bf] hover:text-white'
                }`
              }
            >
              <span className="text-[#c778dd]">#</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <header className="md:hidden bg-[#282c33] sticky top-0 z-50 flex items-center justify-between px-4 py-4 border-b border-[#1e2128]">
        <Link to="/" className="flex gap-2 items-center">
          <div className="relative size-4">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g id="Logo">
                <path d={svgPaths.p34deb370} fill="white" id="Union" />
              </g>
            </svg>
          </div>
          <span className="font-['Fira_Code'] font-bold text-white text-base">Oluwayemi</span>
        </Link>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="relative size-6 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <>
              <div className="absolute rotate-45 bg-[#d9d9d9] h-0.5 w-6" />
              <div className="absolute -rotate-45 bg-[#d9d9d9] h-0.5 w-6" />
            </>
          ) : (
            <>
              <div className="absolute top-1 bg-[#d9d9d9] h-0.5 w-6" />
              <div className="absolute top-3 right-0 bg-[#d9d9d9] h-0.5 w-4" />
            </>
          )}
        </button>
      </header>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[57px] bg-[#282c33] z-40 p-4">
          <nav className="flex flex-col gap-8 mt-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `font-['Fira_Code'] text-2xl transition-colors ${
                    isActive ? 'font-medium text-white' : 'font-normal text-[#abb2bf]'
                  }`
                }
              >
                <span className="text-[#c778dd]">#</span>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
