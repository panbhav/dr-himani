import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from '../Logo/Logo';
import { DOCTOR } from '../../data/doctor';
import styles from './Header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Specialties', path: '/specialties' },
    { name: 'Career & Research', path: '/career' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.headerContainer}`}>
        <Logo />

        {/* 4 Clean Pages Navigation */}
        <nav className={styles.desktopNav} aria-label="Main Navigation">
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
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

        {/* Action Button */}
        <div className={styles.headerAction}>
          <Link to="/contact" className={styles.ctaButton}>
            <span>Book Consultation</span>
            <ArrowRight size={14} />
          </Link>
          
          <button
            className={styles.menuToggle}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`${styles.mobileDrawer} ${isOpen ? styles.drawerOpen : ''}`}>
        <div className={styles.mobileDrawerInner}>
          <ul className={styles.mobileNavList}>
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
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
            <p className={styles.mobileContactHeading}>Direct Enquiries</p>
            <p className={styles.mobilePhoneText}>{DOCTOR.contact.phoneDisplay}</p>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary"
              style={{ width: '100%', marginTop: '0.85rem' }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
