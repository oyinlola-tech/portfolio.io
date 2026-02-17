import { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

const Toaster = lazy(() => import('./components/Toaster').then((m) => ({ default: m.Toaster })));
const HomePage = lazy(() => import('./pages/HomePage').then((m) => ({ default: m.HomePage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then((m) => ({ default: m.ProjectsPage })));
const ProjectDetailPage = lazy(() =>
  import('./pages/ProjectDetailPage').then((m) => ({ default: m.ProjectDetailPage }))
);
const BlogPage = lazy(() => import('./pages/BlogPage').then((m) => ({ default: m.BlogPage })));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage').then((m) => ({ default: m.BlogPostPage })));
const CVPage = lazy(() => import('./pages/CVPage').then((m) => ({ default: m.CVPage })));
const ZudomartPage = lazy(() => import('./pages/ZudomartPage').then((m) => ({ default: m.ZudomartPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));

const CANONICAL_ORIGIN = 'https://www.oyinlola.site';

function normalizePathname(pathname: string): string {
  if (!pathname) {
    return '/';
  }

  const normalized = pathname.replace(/\/+$/, '');
  return normalized || '/';
}

function ensureMetaTag(selector: string, attrs: Record<string, string>): HTMLMetaElement {
  const existing = document.querySelector(selector);
  const tag = existing instanceof HTMLMetaElement ? existing : document.createElement('meta');

  for (const [key, value] of Object.entries(attrs)) {
    tag.setAttribute(key, value);
  }

  if (!existing) {
    document.head.appendChild(tag);
  }

  return tag;
}

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

    const normalizedPathname = normalizePathname(location.pathname);
    const key =
      normalizedPathname.startsWith('/projects/')
        ? '/projects'
        : normalizedPathname.startsWith('/blog/')
          ? '/blog'
          : normalizedPathname;
    const meta = pages[key] || pages['/'];
    document.title = meta.title;

    const canonicalUrl = `${CANONICAL_ORIGIN}${normalizedPathname === '/' ? '/' : normalizedPathname}`;

    const descriptionTag = ensureMetaTag('meta[name="description"]', { name: 'description' });
    descriptionTag.setAttribute('content', meta.description);

    const canonicalTag = document.querySelector('link[rel="canonical"]') ?? document.createElement('link');
    canonicalTag.setAttribute('rel', 'canonical');
    canonicalTag.setAttribute('href', canonicalUrl);
    if (!canonicalTag.parentElement) {
      document.head.appendChild(canonicalTag);
    }

    const ogUrlTag = ensureMetaTag('meta[property="og:url"]', { property: 'og:url' });
    ogUrlTag.setAttribute('content', canonicalUrl);

    const twitterUrlTag = ensureMetaTag('meta[name="twitter:url"]', { name: 'twitter:url' });
    twitterUrlTag.setAttribute('content', canonicalUrl);

    const isKnownRoute =
      normalizedPathname === '/' ||
      normalizedPathname === '/projects' ||
      normalizedPathname.startsWith('/projects/') ||
      normalizedPathname === '/blog' ||
      normalizedPathname.startsWith('/blog/') ||
      normalizedPathname === '/zudomart' ||
      normalizedPathname === '/cv' ||
      normalizedPathname === '/contact';

    const robotsTag = ensureMetaTag('meta[name="robots"]', { name: 'robots' });
    robotsTag.setAttribute(
      'content',
      isKnownRoute ? 'index, follow, max-image-preview:large' : 'noindex, nofollow'
    );
  }, [location.pathname]);

  return (
    <div className="bg-[#282c33] min-h-screen relative overflow-x-hidden">
      <Suspense fallback={null}>
        <Toaster position="top-right" />
      </Suspense>
      <ScrollToTop />
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Suspense
        fallback={<main className="px-4 md:px-8 lg:px-32 py-16 text-[#abb2bf] font-['Fira_Code']">Loading...</main>}
      >
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
      </Suspense>
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
