import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import Logo from '../Logo/Logo';
import { DOCTOR } from '../../data/doctor';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        {/* Col 1: Brand & Profile */}
        <div className={styles.brandCol}>
          <Logo light />
          <p className={styles.qualifications}>{DOCTOR.qualificationsDisplay}</p>
          <p className={styles.brandDescription}>
            Specialist care in Obstetrics &amp; Gynaecology, minimally invasive gynaecological endoscopy, reproductive medicine, and palliative comfort care.
          </p>
          <div className={styles.addressBox}>
            <MapPin size={16} className={styles.contactIcon} />
            <span>{DOCTOR.contact.address.formatted}</span>
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>Navigation</h4>
          <ul className={styles.footerLinks}>
            <li><Link to="/"><ArrowRight size={14} /> Home</Link></li>
            <li><Link to="/about"><ArrowRight size={14} /> About Dr. Himani</Link></li>
            <li><Link to="/education"><ArrowRight size={14} /> Education &amp; Training</Link></li>
            <li><Link to="/experience"><ArrowRight size={14} /> Experience</Link></li>
            <li><Link to="/expertise"><ArrowRight size={14} /> Clinical Expertise</Link></li>
          </ul>
        </div>

        {/* Col 3: Academic & Research Links */}
        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>Academic Profile</h4>
          <ul className={styles.footerLinks}>
            <li><Link to="/research"><ArrowRight size={14} /> Research &amp; Thesis</Link></li>
            <li><Link to="/publications"><ArrowRight size={14} /> Peer-Reviewed Publications</Link></li>
            <li><Link to="/presentations"><ArrowRight size={14} /> Scientific Presentations</Link></li>
            <li><Link to="/contact"><ArrowRight size={14} /> Professional Enquiries</Link></li>
          </ul>
        </div>

        {/* Col 4: Contact & Professional Inquiries */}
        <div className={styles.contactCol}>
          <h4 className={styles.colTitle}>Contact</h4>
          <p className={styles.contactNotice}>For professional queries and consultations:</p>
          
          <a href={`tel:${DOCTOR.contact.phone}`} className={styles.contactRow}>
            <Phone size={16} className={styles.contactIcon} />
            <span>{DOCTOR.contact.phoneDisplay}</span>
          </a>

          <a href={`mailto:${DOCTOR.contact.email}`} className={styles.contactRow}>
            <Mail size={16} className={styles.contactIcon} />
            <span>{DOCTOR.contact.email}</span>
          </a>

          <Link to="/contact" className={styles.contactBtn}>
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomBarInner}`}>
          <p>© {currentYear} Dr. Himani. All rights reserved.</p>
          <p className={styles.disclaimer}>
            Information provided is based strictly on verified medical credentials &amp; qualifications.
          </p>
        </div>
      </div>
    </footer>
  );
}
