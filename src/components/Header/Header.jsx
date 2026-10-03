import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Logo from '../Logo/Logo';
import { DOCTOR } from '../../data/doctor';
import styles from './Header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Education', path: '/education' },
    { name: 'Experience', path: '/experience' },
    { name: 'Expertise', path: '/expertise' },
    { name: 'Research', path: '/research' },
    { name: 'Publications', path: '/publications' },
    { name: 'Presentations', path: '/presentations' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.headerContainer}`}>
        <Logo />

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav} aria-label="Main Navigation">
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Header Right Action CTA */}
        <div className={styles.headerAction}>
          <Link to="/contact" className={styles.ctaButton}>
            Get in Touch
          </Link>
          <button
            className={styles.menuToggle}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div className={`${styles.mobileDrawer} ${isOpen ? styles.drawerOpen : ''}`}>
        <div className={styles.mobileDrawerInner}>
          <ul className={styles.mobileNavList}>
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    isActive ? `${styles.mobileNavLink} ${styles.mobileActiveLink}` : styles.mobileNavLink
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className={styles.mobileContactBox}>
            <p className={styles.mobileContactHeading}>Direct Professional Enquiries</p>
            <a href={`tel:${DOCTOR.contact.phone}`} className={styles.mobileContactLink}>
              <Phone size={16} />
              <span>{DOCTOR.contact.phoneDisplay}</span>
            </a>
            <Link to="/contact" className="btn-primary" style={{ width: '100%', marginTop: '0.75rem' }}>
              Contact Dr. Himani
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
