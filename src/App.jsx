import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation, Link, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { PAGE_METADATA, pageUrl } from './data/site';

// 4 distinct pages
const Home = lazy(() => import('./pages/Home/Home'));
const Specialties = lazy(() => import('./pages/Specialties/Specialties'));
const Career = lazy(() => import('./pages/Career/Career'));
const Contact = lazy(() => import('./pages/Contact/Contact'));

function ScrollToTopAndTitle() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
    const path = pathname.replace(/\/+$/, '') || '/';
    const metadata = PAGE_METADATA[path];
    const title = metadata?.title || 'Page not found | Dr. Himani';
    document.title = title;
    const description = metadata?.description || 'The requested page could not be found. Explore care or contact Dr. Himani in Alwar.';
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) { robots = document.createElement('meta'); robots.name = 'robots'; document.head.appendChild(robots); }
    robots.content = metadata ? 'index, follow' : 'noindex, follow';
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!metadata) {
      canonical?.remove();
      document.querySelector('meta[property="og:url"]')?.remove();
    } else {
      if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
      canonical.href = pageUrl(path);
      let ogUrl = document.querySelector('meta[property="og:url"]');
      if (!ogUrl) { ogUrl = document.createElement('meta'); ogUrl.setAttribute('property', 'og:url'); document.head.appendChild(ogUrl); }
      ogUrl.content = pageUrl(path);
    }
  }, [pathname, hash]);

  useEffect(() => {
    if (!hash) return;
    const observer = new MutationObserver(scrollToSection);
    function scrollToSection() {
      const section = document.getElementById(hash.slice(1));
      if (section) { section.scrollIntoView({ block: 'start' }); observer.disconnect(); }
    }
    observer.observe(document.getElementById('main-content'), { childList: true, subtree: true });
    scrollToSection();
    return () => observer.disconnect();
  }, [pathname, hash]);

  return null;
}

function PageLoader() {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--color-primary)'
    }}>
      <div style={{
        width: '36px',
        height: '36px',
        border: '3px solid var(--color-border)',
        borderTopColor: 'var(--color-primary)',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite'
      }} />
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default function App() {
  return (
    <div className="app-container">
      <ScrollToTopAndTitle />
      <Header />
      <main id="main-content">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/specialties" element={<Specialties />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<Navigate to="/career" replace />} />
            {['education', 'experience', 'research', 'publications', 'presentations'].map(path => <Route key={path} path={`/${path}`} element={<Navigate to="/career" replace />} />)}
            <Route path="/expertise" element={<Navigate to="/specialties" replace />} />
            <Route path="/reviews" element={<Navigate to="/" replace />} />
            <Route path="*" element={<section className="container not-found"><span className="eyebrow">PAGE NOT FOUND</span><h1>Let’s find your way back.</h1><p>The page you’re looking for may have moved. Explore care or contact the clinic from the navigation above.</p><Link className="btn-primary" to="/">Back to home</Link></section>} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
