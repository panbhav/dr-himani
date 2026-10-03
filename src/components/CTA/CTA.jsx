import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { DOCTOR } from '../../data/doctor';
import styles from './CTA.module.css';

export default function CTA({
  title = "Connect With Dr. Himani",
  description = "For professional enquiries and consultation details, please get in touch directly.",
  showContactButtons = true
}) {
  return (
    <section className={styles.ctaSection}>
      <div className={`container ${styles.ctaContainer}`}>
        <div className={styles.innerBox}>
          <span className={styles.eyebrow}>Professional Enquiry</span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          
          <div className={styles.actionsGroup}>
            <Link to="/contact" className="btn-primary">
              Get in Touch <ArrowRight size={16} />
            </Link>
            
            {showContactButtons && (
              <a href={`tel:${DOCTOR.contact.phone}`} className="btn-secondary">
                <Phone size={16} /> Direct Call
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
