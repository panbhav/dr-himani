import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Lazy-loaded pages for code-splitting
const Home = lazy(() => import('./pages/Home/Home'));
const Specialties = lazy(() => import('./pages/Specialties/Specialties'));
const Career = lazy(() => import('./pages/Career/Career'));
const Reviews = lazy(() => import('./pages/Reviews/Reviews'));
const Contact = lazy(() => import('./pages/Contact/Contact'));

const PAGE_TITLES = {
  '/': 'Dr. Himani | MBBS, MD, FGES, FRM | Obstetrics & Gynaecology',
  '/specialties': 'Clinical Specialties & Procedures | Dr. Himani',
  '/career': 'Career, Fellowships & Research | Dr. Himani | AIIMS Rishikesh',
  '/reviews': 'Patient Care & Reviews | Dr. Himani | Obstetrics & Gynaecology',
  '/contact': 'Book Consultation & Contact | Dr. Himani'
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
            <Route path="/specialties" element={<Specialties />} />
            <Route path="/career" element={<Career />} />
            <Route path="/reviews" element={<Reviews />} />
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
