import imgImageRemovebgPreview from "../assets/f4d7792241ade353515843fc44bf4f33ac8d48cd.webp";
import svgPaths from "../imports/svg-ldtp72mrko";
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center px-4 md:px-8 lg:px-32 py-16 md:py-0">
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/4 w-24 h-24 border border-[#abb2bf] opacity-20 hidden lg:block" />
      <div className="absolute right-0 top-1/3 w-32 h-32 border border-[#abb2bf] opacity-20 hidden lg:block" />
      
      {/* Dots decoration */}
      <div className="absolute right-12 bottom-32 hidden lg:flex flex-col gap-2 opacity-30">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex gap-2">
            {[...Array(5)].map((_, j) => (
              <div key={j} className="w-1 h-1 rounded-full bg-[#abb2bf]" />
            ))}
          </div>
        ))}
      </div>

      <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left content */}
        <div className="space-y-6">
          <h1 className="font-['Fira_Code'] text-3xl md:text-4xl lg:text-5xl leading-tight">
            <span className="text-white font-semibold">Oluwayemi Oyinlola is a </span>
            <span className="text-[#c778dd] font-semibold">full-stack developer</span>
            <span className="text-white font-semibold"> and </span>
            <span className="text-[#c778dd] font-semibold">Software Engineer</span>
          </h1>
          
          <p className="font-['Fira_Code'] text-base text-[#abb2bf] leading-relaxed">
            I build scalable products, secure APIs, and reliable delivery systems as a Virtual Assistant and aspiring cybersecurity expert.
          </p>
          
          <Link
            to="/contact"
            className="font-['Fira_Code'] font-medium text-white border border-[#c778dd] px-4 py-2 hover:bg-[#c778dd] hover:bg-opacity-10 transition-all"
          >
            Contact me
          </Link>

          {/* Currently working on */}
          <div className="border border-[#abb2bf] p-2 flex gap-2 items-center bg-[#282c33]">
            <div className="w-4 h-4 bg-[#c778dd] border border-[#c778dd]" />
            <p className="font-['Fira_Code'] text-[#abb2bf] text-sm">
              <span className="font-medium">Currently working on </span>
              <span className="font-semibold text-white">ZudoMart MVP refinement and production-grade portfolio case studies</span>
            </p>
          </div>
        </div>

        {/* Right content - Image */}
        <div className="relative flex justify-center md:justify-end">
          {/* Logo decoration */}
          <div className="absolute left-0 md:-left-8 top-0 w-20 h-20 md:w-24 md:h-24 opacity-20">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 105.435 105.435">
              <g>
                <mask fill="white" id="path-1-inside-1_1_5081">
                  <path d={svgPaths.p3839872} />
                </mask>
                <path d={svgPaths.p3d69fe00} fill="#C778DD" mask="url(#path-1-inside-1_1_5081)" />
                <mask fill="black" height="81" id="path-3-outside-2_1_5081" maskUnits="userSpaceOnUse" width="55" x="51.2178" y="0">
                  <rect fill="white" height="81" width="55" x="51.2178" />
                  <path d={svgPaths.p22535100} />
                </mask>
                <path d={svgPaths.p197fbd80} fill="#C778DD" mask="url(#path-3-outside-2_1_5081)" />
              </g>
            </svg>
          </div>

          <div className="relative w-64 md:w-80 lg:w-96">
            <img
              src={imgImageRemovebgPreview}
              alt="Oluwayemi Oyinlola"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="w-full h-auto relative z-10"
            />
            
            {/* Dots decoration */}
            <div className="absolute -right-4 bottom-8 flex flex-col gap-2 opacity-50">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex gap-2">
                  {[...Array(5)].map((_, j) => (
                    <div key={j} className="w-1 h-1 rounded-full bg-[#abb2bf]" />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
