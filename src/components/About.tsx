import imgAboutImage from "../assets/54460c6b07a60652048526012507cff338176e45.webp";
import { Link } from 'react-router-dom';

export function About() {
  return (
    <section id="about" className="relative px-4 md:px-8 lg:px-32 py-16 md:py-24">
      <div className="absolute left-0 top-1/4 w-32 h-32 border border-[#abb2bf] opacity-20 hidden lg:block" />
      <div className="absolute right-0 bottom-1/4 w-24 h-24 border border-[#abb2bf] opacity-20 hidden lg:block" />

      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-['Fira_Code'] font-medium text-3xl whitespace-nowrap">
            <span className="text-[#c778dd]">#</span>
            <span className="text-white">about-me</span>
          </h2>
          <div className="h-px bg-[#c778dd] flex-1 max-w-md" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <div className="font-['Fira_Code'] text-[#abb2bf] leading-relaxed space-y-4">
              <p>Hello, I'm Oluwayemi Oyinlola.</p>
              <p>
                I'm a Full Stack Developer and Software Engineer focused on production systems with strong
                architecture, testing, security, and DevOps ownership.
              </p>
              <p>
                I build products with depth, not just visuals. My projects show measurable impact in scale,
                reliability, monitoring, and cross-team collaboration.
              </p>
              <p>
                I also work as a Virtual Assistant and continue to grow in cybersecurity with practical,
                system-level engineering experience.
              </p>
            </div>

            <Link to="/cv" className="inline-block font-['Fira_Code'] font-medium text-white border border-[#c778dd] px-4 py-2 hover:bg-[#c778dd] hover:bg-opacity-10 transition-all">
              Read more {'->'}
            </Link>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -top-4 -left-4 flex flex-col gap-1.5 opacity-40">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex gap-1.5">
                    {[...Array(5)].map((_, j) => (
                      <div key={j} className="w-1 h-1 rounded-full bg-[#abb2bf]" />
                    ))}
                  </div>
                ))}
              </div>

              <img
                src={imgAboutImage}
                alt="About Oluwayemi Oyinlola"
                loading="lazy"
                decoding="async"
                className="w-full max-w-sm h-auto border border-[#abb2bf]"
              />

              <div className="absolute -bottom-4 -right-4 flex flex-col gap-1.5 opacity-40">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex gap-1.5">
                    {[...Array(5)].map((_, j) => (
                      <div key={j} className="w-1 h-1 rounded-full bg-[#abb2bf]" />
                    ))}
                  </div>
                ))}
              </div>

              <div className="absolute -bottom-2 left-8 right-8 h-px bg-[#c778dd]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
