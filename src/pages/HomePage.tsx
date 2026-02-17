import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';

export function HomePage() {
  return (
    <main>
      <Hero />
      <div style={{ contentVisibility: 'auto', containIntrinsicSize: '1px 900px' }}>
        <About />
      </div>
      <div style={{ contentVisibility: 'auto', containIntrinsicSize: '1px 900px' }}>
        <Skills />
      </div>
      <div style={{ contentVisibility: 'auto', containIntrinsicSize: '1px 1100px' }}>
        <Projects />
      </div>
    </main>
  );
}
