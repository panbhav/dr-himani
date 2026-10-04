import React from 'react';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import Logo from '../Logo/Logo';
import { DOCTOR } from '../../data/doctor';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        {/* Col 1: Brand & Identity */}
        <div className={styles.brandCol}>
          <Logo light />
          <p className={styles.qualifications}>{DOCTOR.qualificationsDisplay}</p>
          <p className={styles.brandDescription}>
            Specialist in Obstetrics &amp; Gynaecology, minimally invasive laparoscopic/hysteroscopic surgery, reproductive medicine, and pain &amp; palliative care.
          </p>
        </div>

        {/* Col 2: Direct Contact */}
        <div className={styles.contactCol}>
          <h4 className={styles.colTitle}>Consultation Details</h4>
          <a href={`tel:${DOCTOR.contact.phone}`} className={styles.contactRow}>
            <Phone size={16} className={styles.contactIcon} />
            <span>{DOCTOR.contact.phoneDisplay}</span>
          </a>
          <a href={`mailto:${DOCTOR.contact.email}`} className={styles.contactRow}>
            <Mail size={16} className={styles.contactIcon} />
            <span>{DOCTOR.contact.email}</span>
          </a>
          <a 
            href={DOCTOR.contact.address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.addressRow}
            title="Open in Google Maps"
          >
            <MapPin size={16} className={styles.contactIcon} />
            <span>{DOCTOR.contact.hospital}, {DOCTOR.contact.address.city}, {DOCTOR.contact.address.state}</span>
          </a>
        </div>

        {/* Col 3: Back to Top button */}
        <div className={styles.topBtnCol}>
          <button onClick={scrollToTop} className={styles.backToTopBtn} aria-label="Back to top">
            <ArrowUp size={18} />
            <span>Back to top</span>
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomBarInner}`}>
          <p>© {currentYear} Dr. Himani. All medical credentials &amp; qualifications verified as per CV.</p>
          <p className={styles.confidentialNote}>Strict Patient Privacy &amp; Medical Discretion Assured.</p>
        </div>
      </div>
    </footer>
  );
}
