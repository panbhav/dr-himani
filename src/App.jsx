import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Lazy-loaded routes for performance & code-splitting
const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const Education = lazy(() => import('./pages/Education/Education'));
const Experience = lazy(() => import('./pages/Experience/Experience'));
const Expertise = lazy(() => import('./pages/Expertise/Expertise'));
const Research = lazy(() => import('./pages/Research/Research'));
const Publications = lazy(() => import('./pages/Publications/Publications'));
const Presentations = lazy(() => import('./pages/Presentations/Presentations'));
const Contact = lazy(() => import('./pages/Contact/Contact'));

// Dynamic Page Titles and Meta Tags based on Route
const PAGE_TITLES = {
  '/': 'Dr. Himani | Obstetrics & Gynaecology | MBBS, MD, FGES, FRM',
  '/about': 'About Dr. Himani | Specialist in Obstetrics & Gynaecology',
  '/education': 'Education & Training | Dr. Himani | AIIMS Rishikesh Alumna',
  '/experience': 'Clinical Experience | Dr. Himani | Senior Residency & Fellowships',
  '/expertise': 'Clinical Expertise & Specializations | Dr. Himani',
  '/research': 'Academic Research & Thesis | Dr. Himani | AIIMS Rishikesh',
  '/publications': 'Peer-Reviewed Publications | Dr. Himani',
  '/presentations': 'Conference Presentations | Dr. Himani',
  '/contact': 'Professional Enquiries & Contact | Dr. Himani'
};

function ScrollToTopAndTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const title = PAGE_TITLES[pathname] || 'Dr. Himani | Obstetrics & Gynaecology';
    document.title = title;
  }, [pathname]);

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
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/research" element={<Research />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/presentations" element={<Presentations />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
