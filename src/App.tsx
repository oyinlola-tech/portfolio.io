import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Toaster } from './components/Toaster';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { CVPage } from './pages/CVPage';
import { ZudomartPage } from './pages/ZudomartPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

function AppLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  useEffect(() => {
    const pages: Record<string, { title: string; description: string }> = {
      '/': {
        title: 'Oluwayemi Oyinlola Michael | Full Stack Developer & Software Engineer',
        description: 'Portfolio of Oluwayemi Oyinlola Michael with production-focused projects and engineering depth.',
      },
      '/projects': {
        title: 'Projects | Oluwayemi Oyinlola Michael',
        description: 'Case studies across scale, testing culture, DevOps ownership, and secure software delivery.',
      },
      '/blog': {
        title: 'Blog | Oluwayemi Oyinlola Michael',
        description: 'Technical writing on architecture, testing, monitoring, incident handling, and documentation.',
      },
      '/zudomart': {
        title: 'Zudomart | Oluwayemi Oyinlola Michael',
        description: 'Official Zudomart press release and current MVP-stage startup updates.',
      },
      '/cv': {
        title: 'CV | Oluwayemi Oyinlola Michael',
        description: 'Professional CV covering full stack engineering, DevOps ownership, and security-focused execution.',
      },
      '/contact': {
        title: 'Contact | Oluwayemi Oyinlola Michael',
        description: 'Contact Oluwayemi Oyinlola Michael for full-time roles, consulting, or project collaboration.',
      },
    };

    const key =
      location.pathname.startsWith('/projects/')
        ? '/projects'
        : location.pathname.startsWith('/blog/')
          ? '/blog'
          : location.pathname;
    const meta = pages[key] || pages['/'];
    document.title = meta.title;

    const descriptionTag = document.querySelector('meta[name=\"description\"]');
    if (descriptionTag) {
      descriptionTag.setAttribute('content', meta.description);
    }
  }, [location.pathname]);

  return (
    <div className="bg-[#282c33] min-h-screen relative overflow-x-hidden">
      <Toaster position="top-right" />
      <ScrollToTop />
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/cv" element={<CVPage />} />
        <Route path="/zudomart" element={<ZudomartPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppLayout />
    </BrowserRouter>
  );
}
