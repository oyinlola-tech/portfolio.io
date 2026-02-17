import cvPdf from '../doc/oyinlola-cv.pdf';
import { site } from '../lib/site';

const coreSkills = [
  'JavaScript (ES6+), TypeScript, Node.js, Express.js, React',
  'PostgreSQL, MongoDB, Redis, SQL optimization, schema design',
  'REST APIs, authentication, authorization, payment integrations',
  'Docker, CI/CD, Nginx, Vercel, release and rollback strategy',
  'Monitoring and incident response, reliability engineering',
  'Testing culture: unit, integration, and end-to-end quality gates',
];

const experiences = [
  {
    role: 'Founder and Lead Engineer',
    company: 'ZudoMart',
    period: '2023 - Present',
    highlights: [
      'Leading ZudoMart as an early-stage startup currently in MVP refinement.',
      'Building and validating trust-first product flows for commerce, services, and micro-gigs.',
      'Designing escrow, verification, and safety workflows for real-world informal trading use cases.',
      'Running iterative product feedback loops to improve usability and launch readiness.',
      'Executing milestone-driven delivery aligned with EquityPilot support and market validation.',
    ],
  },
  {
    role: 'Senior Full Stack Engineer',
    company: 'TechVenture Solutions',
    period: '2022 - 2023',
    highlights: [
      'Introduced test-first engineering patterns and raised coverage from near-zero to production-grade quality thresholds.',
      'Built and maintained scalable backend APIs used by business-critical products.',
      'Improved deployment reliability by implementing automated CI/CD checks and safer release workflows.',
      'Mentored junior engineers through code reviews, pairing, and architecture walkthroughs.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Digital Innovations Ltd',
    period: '2021 - 2022',
    highlights: [
      'Delivered web products end-to-end across frontend, backend, and deployment setup.',
      'Optimized data access paths and improved database query performance in high-usage modules.',
      'Collaborated with product and operations teams to convert business requirements into stable releases.',
    ],
  },
];

const selectedProjects = [
  'ZudoMart startup MVP (trust, escrow, verification, and launch-readiness work).',
  'Payment gateway abstraction layer with webhook verification and idempotency handling.',
  'Logistics tracking system with real-time updates and customer visibility workflows.',
  'API security hardening initiative focused on prevention, validation, and operational controls.',
];

const education = [
  'Self-directed Software Engineering training through project-based learning, documentation, and technical labs.',
  'Continuous development in cybersecurity fundamentals, API security, and risk-aware software design.',
];

const certifications = [
  'Ongoing: cybersecurity-focused practical learning paths and security tooling practice.',
  'Strong emphasis on applied learning through production systems, not certificate collection.',
];

const employerSignals = [
  'Evidence of scale with measurable concurrency, uptime, and throughput outcomes.',
  'Testing culture and release confidence through repeatable quality gates.',
  'Deployment and DevOps ownership from pipeline setup to operational reliability.',
  'Documentation quality that supports onboarding, architecture decisions, and execution.',
  'Collaboration simulation through code review discipline and cross-functional delivery.',
  'Monitoring and failure handling with incident response and continuous improvement loops.',
  'Project depth over width with production-focused case studies.',
];

export function CVPage() {
  return (
    <main className="px-4 md:px-8 lg:px-32 py-16 md:py-24">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <h1 className="font-['Fira_Code'] text-white text-3xl">
            <span className="text-[#c778dd]">#</span>cv
          </h1>
          <a
            href={cvPdf}
            download="oyinlola-cv.pdf"
            className="font-['Fira_Code'] font-medium text-white border border-[#c778dd] px-4 py-2 hover:bg-[#c778dd] hover:bg-opacity-10 transition-all"
          >
            Download CV (PDF)
          </a>
        </div>

        <section className="border border-[#abb2bf] p-6 md:p-8 space-y-6">
          <div className="space-y-2">
            <h2 className="font-['Fira_Code'] text-white text-3xl">{site.name}</h2>
            <p className="font-['Fira_Code'] text-[#abb2bf]">{site.roleLine}</p>
            <p className="font-['Fira_Code'] text-[#abb2bf] text-sm">
              {site.email} | {site.phone} | {site.location}
            </p>
            <p className="font-['Fira_Code'] text-[#abb2bf] text-sm">
              {site.website} | {site.github} | {site.linkedin}
            </p>
          </div>

          <div className="border-t border-[#1e2128] pt-6">
            <h3 className="font-['Fira_Code'] text-white text-xl mb-3">Professional Summary</h3>
            <p className="font-['Fira_Code'] text-[#abb2bf] leading-relaxed text-sm">
              Full Stack Developer and Software Engineer with experience building, scaling, and operating
              production web systems. Proven delivery across architecture, backend services, frontend
              interfaces, testing practices, deployment pipelines, and monitoring. Focused on shipping
              reliable systems with measurable outcomes, clear documentation, and strong collaboration.
            </p>
          </div>

          <div className="border-t border-[#1e2128] pt-6">
            <h3 className="font-['Fira_Code'] text-white text-xl mb-3">Core Skills</h3>
            <ul className="space-y-2">
              {coreSkills.map((item) => (
                <li key={item} className="font-['Fira_Code'] text-[#abb2bf] text-sm">
                  - {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-[#1e2128] pt-6">
            <h3 className="font-['Fira_Code'] text-white text-xl mb-4">Professional Experience</h3>
            <div className="space-y-5">
              {experiences.map((exp) => (
                <article key={`${exp.role}-${exp.company}`} className="border border-[#1e2128] p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <p className="font-['Fira_Code'] text-white text-base">
                      {exp.role} | {exp.company}
                    </p>
                    <p className="font-['Fira_Code'] text-[#abb2bf] text-xs">{exp.period}</p>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((point) => (
                      <li key={point} className="font-['Fira_Code'] text-[#abb2bf] text-sm">
                        - {point}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 border-t border-[#1e2128] pt-6">
            <section className="border border-[#1e2128] p-4">
              <h3 className="font-['Fira_Code'] text-white text-lg mb-3">Selected Projects</h3>
              <ul className="space-y-2">
                {selectedProjects.map((item) => (
                  <li key={item} className="font-['Fira_Code'] text-[#abb2bf] text-sm">
                    - {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="border border-[#1e2128] p-4">
              <h3 className="font-['Fira_Code'] text-white text-lg mb-3">Education and Learning</h3>
              <ul className="space-y-2 mb-4">
                {education.map((item) => (
                  <li key={item} className="font-['Fira_Code'] text-[#abb2bf] text-sm">
                    - {item}
                  </li>
                ))}
              </ul>
              <h4 className="font-['Fira_Code'] text-white text-base mb-2">Certifications and Development</h4>
              <ul className="space-y-2">
                {certifications.map((item) => (
                  <li key={item} className="font-['Fira_Code'] text-[#abb2bf] text-sm">
                    - {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="border-t border-[#1e2128] pt-6">
            <h3 className="font-['Fira_Code'] text-white text-xl mb-3">Employer Signals</h3>
            <ul className="space-y-2">
              {employerSignals.map((item) => (
                <li key={item} className="font-['Fira_Code'] text-[#abb2bf] text-sm">
                  - {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
