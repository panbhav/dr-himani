import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import Logo from '../Logo/Logo';
import { DOCTOR } from '../../data/doctor';
import styles from './Header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['hero', 'about', 'clinical-domains', 'credentials', 'contact'];
      const scrollPos = window.scrollY + 120;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { label: 'Profile', id: 'about' },
    { label: 'Clinical Disciplines', id: 'clinical-domains' },
    { label: 'Academic Career', id: 'credentials' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.headerContainer}`}>
        <div onClick={() => scrollTo('hero')} style={{ cursor: 'pointer' }}>
          <Logo />
        </div>

        {/* 4 Smart Sections Navigation */}
        <nav className={styles.desktopNav} aria-label="Main Navigation">
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className={`${styles.navLink} ${activeSection === item.id ? styles.activeLink : ''}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Button */}
        <div className={styles.headerAction}>
          <button onClick={() => scrollTo('contact')} className={styles.ctaButton}>
            <span>Enquire</span>
            <ArrowRight size={14} />
          </button>
          
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
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className={`${styles.mobileNavLink} ${activeSection === item.id ? styles.mobileActiveLink : ''}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className={styles.mobileContactBox}>
            <p className={styles.mobileContactHeading}>Direct Enquiries</p>
            <a href={`tel:${DOCTOR.contact.phone}`} className={styles.mobileContactLink}>
              <Phone size={16} />
              <span>{DOCTOR.contact.phoneDisplay}</span>
            </a>
            <button
              onClick={() => scrollTo('contact')}
              className="btn-primary"
              style={{ width: '100%', marginTop: '0.85rem' }}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
