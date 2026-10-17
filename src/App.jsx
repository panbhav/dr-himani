import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation, Link, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// 4 distinct pages
const Home = lazy(() => import('./pages/Home/Home'));
const Specialties = lazy(() => import('./pages/Specialties/Specialties'));
const Career = lazy(() => import('./pages/Career/Career'));
const Contact = lazy(() => import('./pages/Contact/Contact'));

const PAGE_TITLES = {
  '/': 'Dr. Himani | MBBS, MD, FGES, FRM | Obstetrics & Gynaecology',
  '/specialties': 'Clinical Specialties & Procedures | Dr. Himani',
  '/career': 'Career, Fellowships & Research | Dr. Himani | AIIMS Rishikesh',
  '/contact': 'Book Consultation & Contact | Dr. Himani'
};

function ScrollToTopAndTitle() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
    const title = PAGE_TITLES[pathname] || 'Dr. Himani | Obstetrics & Gynaecology';
    document.title = title;
    const descriptions = {
      '/': 'Meet Dr. Himani, an obstetrician and gynaecologist in Alwar, with MD training at AIIMS Rishikesh and fellowships in endoscopy and reproductive medicine.',
      '/specialties': 'Explore pregnancy, gynaecology, endoscopy, fertility and supportive care with Dr. Himani in Alwar.',
      '/career': 'Explore Dr. Himani’s education, fellowship training, hospital appointments and research references.',
      '/contact': 'Contact Dr. Himani for consultation availability at Geetanjali Hospital, Alwar. Call, email or get directions.'
    };
    const description = descriptions[pathname] || 'Dr. Himani — Obstetrics & Gynaecology, Alwar.';
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
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
