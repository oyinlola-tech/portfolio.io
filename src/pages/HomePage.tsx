import { Suspense, lazy } from 'react';
import { Hero } from '../components/Hero';

const About = lazy(() => import('../components/About').then((m) => ({ default: m.About })));
const Skills = lazy(() => import('../components/Skills').then((m) => ({ default: m.Skills })));
const Projects = lazy(() => import('../components/Projects').then((m) => ({ default: m.Projects })));

export function HomePage() {
  return (
    <main>
      <Hero />
      <Suspense fallback={null}>
        <About />
      </Suspense>
      <Suspense fallback={null}>
        <Skills />
      </Suspense>
      <Suspense fallback={null}>
        <Projects />
      </Suspense>
    </main>
  );
}
